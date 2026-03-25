import { RISK_FLAG_CATALOG } from "../config/flags";
import { RECOMMENDATION_CATALOG } from "../config/recommendations";
import { RESOURCE_CATALOG } from "../config/resources";
import { TRIAGE_SECTIONS_MAP } from "../config/sections";
import { getAnswerValues } from "./conditions";
import { getCompletedSectionIds, getVisibleQuestions, getVisibleQuestionsForSection } from "./flow";
import {
  AgeGroup,
  RecommendationTopic,
  RiskFlag,
  SummaryRecommendation,
  TriageAnswer,
  TriageClassification,
  TriageQuestion,
  TriageSectionId,
  TriageSectionSnapshot,
  TriageSummarySnapshot,
} from "../types";

interface AggregationResult {
  score: number;
  flags: RiskFlag[];
  topicCounts: Map<RecommendationTopic, number>;
}

function aggregateQuestions(
  questions: TriageQuestion[],
  answers: Record<string, TriageAnswer>,
): AggregationResult {
  const flags = new Set<RiskFlag>();
  const topicCounts = new Map<RecommendationTopic, number>();
  let score = 0;

  questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer || !question.options?.length) {
      return;
    }

    const selectedValues = getAnswerValues(answer);
    question.options
      .filter((option) => selectedValues.includes(option.value))
      .forEach((option) => {
        score += option.score ?? 0;
        option.flags?.forEach((flag) => flags.add(flag));
        option.topics?.forEach((topic) => {
          topicCounts.set(topic, (topicCounts.get(topic) ?? 0) + 1);
        });
      });
  });

  return {
    score,
    flags: Array.from(flags),
    topicCounts,
  };
}

function classifyTriage(score: number, flags: RiskFlag[]): TriageClassification {
  const highPriorityFlags = flags.filter((flag) => RISK_FLAG_CATALOG[flag]?.level === "high");

  if (highPriorityFlags.length > 0) {
    return "acompanhamento-prioritario";
  }

  if (flags.length >= 4 || score <= 1) {
    return "atencao";
  }

  return "habitos-protetores";
}

function buildRecommendations(
  topicCounts: Map<RecommendationTopic, number>,
  flags: RiskFlag[],
  limit: number,
): SummaryRecommendation[] {
  const flagTopicBoost = new Map<RecommendationTopic, number>();

  flags.forEach((flag) => {
    RISK_FLAG_CATALOG[flag]?.relatedTopics.forEach((topic) => {
      flagTopicBoost.set(topic, (flagTopicBoost.get(topic) ?? 0) + 2);
    });
  });

  const topics = Array.from(topicCounts.entries())
    .map(([topic, count]) => ({
      topic,
      priority: count + (flagTopicBoost.get(topic) ?? 0),
    }))
    .sort((left, right) => right.priority - left.priority)
    .slice(0, limit);

  return topics
    .map(({ topic, priority }) => {
      const definition = RECOMMENDATION_CATALOG[topic];
      if (!definition) {
        return null;
      }

      return {
        topic,
        title: definition.title,
        summary: definition.summary,
        benefit: definition.benefit,
        guidanceTitle: definition.guidanceTitle,
        guidance: definition.guidance,
        resources: (definition.resources ?? [])
          .map((resourceId) => RESOURCE_CATALOG[resourceId])
          .filter(Boolean),
        priority,
      } satisfies SummaryRecommendation;
    })
    .filter((item): item is SummaryRecommendation => Boolean(item));
}

export function buildSectionSnapshot(
  ageGroup: AgeGroup,
  sectionId: TriageSectionId,
  answers: Record<string, TriageAnswer>,
): TriageSectionSnapshot {
  const sectionQuestions = getVisibleQuestionsForSection(ageGroup, sectionId, answers);
  const aggregation = aggregateQuestions(sectionQuestions, answers);

  return {
    sectionId,
    title: TRIAGE_SECTIONS_MAP[sectionId].title,
    answeredCount: sectionQuestions.filter((question) => Boolean(answers[question.id])).length,
    visibleCount: sectionQuestions.length,
    score: aggregation.score,
    classification: classifyTriage(aggregation.score, aggregation.flags),
    flags: aggregation.flags,
    recommendations: buildRecommendations(aggregation.topicCounts, aggregation.flags, 2),
  };
}

export function buildTriageSummary(
  ageGroup: AgeGroup | null,
  answers: Record<string, TriageAnswer>,
): TriageSummarySnapshot | null {
  if (!ageGroup) {
    return null;
  }

  const visibleQuestions = getVisibleQuestions(ageGroup, answers);
  const aggregation = aggregateQuestions(visibleQuestions, answers);
  const completedSectionIds = getCompletedSectionIds(ageGroup, answers);
  const sectionSummaries = completedSectionIds.map((sectionId) =>
    buildSectionSnapshot(ageGroup, sectionId, answers),
  );
  const classification = classifyTriage(aggregation.score, aggregation.flags);
  const recommendations = buildRecommendations(aggregation.topicCounts, aggregation.flags, 5);
  const warningFlags = aggregation.flags.filter((flag) => RISK_FLAG_CATALOG[flag]?.level === "warning");
  const highPriorityFlags = aggregation.flags.filter((flag) => RISK_FLAG_CATALOG[flag]?.level === "high");
  const positiveTopics = Array.from(aggregation.topicCounts.entries())
    .filter(([, count]) => count > 0)
    .map(([topic]) => topic);
  const resourceIds = new Set<string>();

  recommendations.forEach((recommendation) => {
    recommendation.resources.forEach((resource) => resourceIds.add(resource.id));
  });

  return {
    classification,
    score: aggregation.score,
    answeredCount: visibleQuestions.filter((question) => Boolean(answers[question.id])).length,
    visibleCount: visibleQuestions.length,
    warningFlags,
    highPriorityFlags,
    positiveTopics,
    recommendations,
    resources: Array.from(resourceIds)
      .map((resourceId) => RESOURCE_CATALOG[resourceId])
      .filter(Boolean),
    sectionSummaries,
  };
}
