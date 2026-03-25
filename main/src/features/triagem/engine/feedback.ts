import { RISK_FLAG_CATALOG } from "../config/flags";
import { RECOMMENDATION_CATALOG } from "../config/recommendations";
import { RESOURCE_CATALOG } from "../config/resources";
import { getAnswerValues } from "./conditions";
import {
  AgeGroup,
  QuestionFeedbackSnapshot,
  RecommendationTopic,
  RiskFlag,
  SummaryRecommendation,
  TriageAnswer,
  TriageClassification,
  TriageQuestion,
} from "../types";

function classificationToTone(classification: TriageClassification) {
  if (classification === "acompanhamento-prioritario") {
    return "alert" as const;
  }

  if (classification === "atencao") {
    return "attention" as const;
  }

  return "positive" as const;
}

export function getAgeGroupLabel(ageGroup: AgeGroup): string {
  return {
    crianca: "Criança",
    adolescente: "Adolescente",
    adulto: "Adulto",
    gestante: "Gestante",
    idoso: "Idoso",
  }[ageGroup];
}

export function getClassificationCopy(classification: TriageClassification) {
  if (classification === "acompanhamento-prioritario") {
    return {
      tone: "alert" as const,
      title: "Acompanhamento prioritário",
      description:
        "Esse conjunto de respostas merece acompanhamento mais próximo por um profissional de saúde.",
    };
  }

  if (classification === "atencao") {
    return {
      tone: "attention" as const,
      title: "Vale atenção",
      description: "Pequenos ajustes já podem melhorar a alimentação e a rotina de cuidado.",
    };
  }

  return {
    tone: "positive" as const,
    title: "Hábitos protetores",
    description: "Muito bem! As respostas mostram uma base de cuidado importante para seguir fortalecendo.",
  };
}

function buildRecommendationsFromTopics(
  topics: RecommendationTopic[],
  flags: RiskFlag[],
  limit: number,
): SummaryRecommendation[] {
  const uniqueTopics = new Map<RecommendationTopic, number>();

  topics.forEach((topic) => {
    uniqueTopics.set(topic, (uniqueTopics.get(topic) ?? 0) + 1);
  });

  flags.forEach((flag) => {
    RISK_FLAG_CATALOG[flag]?.relatedTopics.forEach((topic) => {
      uniqueTopics.set(topic, (uniqueTopics.get(topic) ?? 0) + 2);
    });
  });

  return Array.from(uniqueTopics.entries())
    .sort((left, right) => right[1] - left[1])
    .slice(0, limit)
    .map(([topic, priority]) => {
      const definition = RECOMMENDATION_CATALOG[topic];
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
      };
    });
}

export function buildQuestionFeedback(
  question: TriageQuestion,
  answer: TriageAnswer,
): QuestionFeedbackSnapshot {
  const selectedValues = getAnswerValues(answer);
  const selectedOptions = question.options?.filter((option) => selectedValues.includes(option.value)) ?? [];
  const totalScore = selectedOptions.reduce((accumulator, option) => accumulator + (option.score ?? 0), 0);
  const flags = Array.from(
    new Set(selectedOptions.flatMap((option) => option.flags ?? [])),
  );
  const topics = selectedOptions.flatMap((option) => option.topics ?? []);
  const highPriorityFlags = flags.filter((flag) => RISK_FLAG_CATALOG[flag]?.level === "high");
  const classification: TriageClassification =
    highPriorityFlags.length > 0 ? "acompanhamento-prioritario" : flags.length > 0 || totalScore < 0 ? "atencao" : "habitos-protetores";
  const copy = getClassificationCopy(classification);
  const helperTexts = selectedOptions.map((option) => option.helperText).filter(Boolean);

  return {
    tone: classificationToTone(classification),
    title: copy.title,
    summary:
      helperTexts[0] ??
      question.description ??
      question.helperText ??
      copy.description,
    recommendations: buildRecommendationsFromTopics(topics, flags, 3),
  };
}
