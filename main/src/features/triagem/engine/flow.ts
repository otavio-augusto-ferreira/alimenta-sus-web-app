import { TRIAGE_FLOW_BY_AGE } from "../config/flows";
import { TRIAGE_SECTIONS, TRIAGE_SECTIONS_MAP } from "../config/sections";
import { getAnswerValues, isQuestionVisible } from "./conditions";
import {
  AgeGroup,
  TriageAnswer,
  TriageQuestion,
  TriageSectionId,
  TriageStepResolution,
} from "../types";

const SECTION_SUMMARY_PREFIX = "secao-";
export const FINAL_SUMMARY_STEP_ID = "resumo-final";

export function getSectionSummaryStepId(sectionId: TriageSectionId): string {
  return `${SECTION_SUMMARY_PREFIX}${sectionId}`;
}

export function isSectionSummaryStep(stepId: string): boolean {
  return stepId.startsWith(SECTION_SUMMARY_PREFIX);
}

export function getSectionIdFromSummaryStep(stepId: string): TriageSectionId | null {
  if (!isSectionSummaryStep(stepId)) {
    return null;
  }

  return stepId.replace(SECTION_SUMMARY_PREFIX, "") as TriageSectionId;
}

export function getQuestionsForAge(ageGroup: AgeGroup): TriageQuestion[] {
  return TRIAGE_FLOW_BY_AGE[ageGroup] ?? [];
}

export function getQuestionMap(ageGroup: AgeGroup): Record<string, TriageQuestion> {
  return Object.fromEntries(getQuestionsForAge(ageGroup).map((question) => [question.id, question]));
}

export function getVisibleQuestions(
  ageGroup: AgeGroup,
  answers: Record<string, TriageAnswer>,
): TriageQuestion[] {
  return getQuestionsForAge(ageGroup).filter((question) => isQuestionVisible(question, answers));
}

export function getQuestionById(ageGroup: AgeGroup, questionId: string): TriageQuestion | null {
  return getQuestionMap(ageGroup)[questionId] ?? null;
}

export function getVisibleSectionIds(
  ageGroup: AgeGroup,
  answers: Record<string, TriageAnswer>,
): TriageSectionId[] {
  const visibleQuestions = getVisibleQuestions(ageGroup, answers);
  const visibleSections = new Set(visibleQuestions.map((question) => question.sectionId));

  return TRIAGE_SECTIONS.map((section) => section.id).filter((sectionId) => visibleSections.has(sectionId));
}

export function getVisibleQuestionsForSection(
  ageGroup: AgeGroup,
  sectionId: TriageSectionId,
  answers: Record<string, TriageAnswer>,
): TriageQuestion[] {
  return getVisibleQuestions(ageGroup, answers).filter((question) => question.sectionId === sectionId);
}

function getNextOverrideFromAnswer(
  question: TriageQuestion,
  answers: Record<string, TriageAnswer>,
): string | null {
  const answer = answers[question.id];

  if (!answer || !question.options?.length) {
    return question.nextQuestionId ?? null;
  }

  const selectedValues = getAnswerValues(answer);
  const selectedOptionOverride = question.options.find(
    (option) => selectedValues.includes(option.value) && option.nextQuestionId,
  )?.nextQuestionId;

  return selectedOptionOverride ?? question.nextQuestionId ?? null;
}

export function getFirstQuestionId(
  ageGroup: AgeGroup,
  answers: Record<string, TriageAnswer>,
): string | null {
  return getVisibleQuestions(ageGroup, answers)[0]?.id ?? null;
}

export function resolveStep(
  ageGroup: AgeGroup,
  stepId: string,
  answers: Record<string, TriageAnswer>,
): TriageStepResolution | null {
  if (stepId === FINAL_SUMMARY_STEP_ID) {
    return { kind: "final-summary", stepId };
  }

  const question = getQuestionById(ageGroup, stepId);
  if (question && isQuestionVisible(question, answers)) {
    return { kind: "question", stepId, question };
  }

  const sectionId = getSectionIdFromSummaryStep(stepId);
  if (sectionId && getVisibleQuestionsForSection(ageGroup, sectionId, answers).length > 0) {
    return {
      kind: "section-summary",
      stepId,
      section: TRIAGE_SECTIONS_MAP[sectionId],
    };
  }

  return null;
}

export function getNextStepId(
  ageGroup: AgeGroup,
  currentStepId: string,
  answers: Record<string, TriageAnswer>,
): string | null {
  const resolution = resolveStep(ageGroup, currentStepId, answers);
  const visibleQuestions = getVisibleQuestions(ageGroup, answers);

  if (!resolution) {
    return getFirstQuestionId(ageGroup, answers);
  }

  if (resolution.kind === "final-summary") {
    return null;
  }

  if (resolution.kind === "section-summary") {
    const visibleSectionIds = getVisibleSectionIds(ageGroup, answers);
    const currentSectionIndex = visibleSectionIds.indexOf(resolution.section.id);
    const nextSectionId = visibleSectionIds[currentSectionIndex + 1];

    if (!nextSectionId) {
      return FINAL_SUMMARY_STEP_ID;
    }

    return getVisibleQuestionsForSection(ageGroup, nextSectionId, answers)[0]?.id ?? FINAL_SUMMARY_STEP_ID;
  }

  const currentQuestion = resolution.question;
  const overrideStep = getNextOverrideFromAnswer(currentQuestion, answers);
  if (overrideStep) {
    const overrideResolution = resolveStep(ageGroup, overrideStep, answers);
    if (overrideResolution) {
      return overrideStep;
    }
  }

  const questionIndex = visibleQuestions.findIndex((question) => question.id === currentQuestion.id);
  const currentSectionQuestions = getVisibleQuestionsForSection(ageGroup, currentQuestion.sectionId, answers);
  const sectionQuestionIndex = currentSectionQuestions.findIndex(
    (question) => question.id === currentQuestion.id,
  );
  const isLastQuestionOfSection = sectionQuestionIndex === currentSectionQuestions.length - 1;

  if (isLastQuestionOfSection) {
    return getSectionSummaryStepId(currentQuestion.sectionId);
  }

  return visibleQuestions[questionIndex + 1]?.id ?? FINAL_SUMMARY_STEP_ID;
}

export function getPreviousStepId(
  ageGroup: AgeGroup,
  currentStepId: string,
  answers: Record<string, TriageAnswer>,
): string | null {
  const resolution = resolveStep(ageGroup, currentStepId, answers);
  const visibleSectionIds = getVisibleSectionIds(ageGroup, answers);

  if (!resolution) {
    return null;
  }

  if (resolution.kind === "final-summary") {
    const lastSectionId = visibleSectionIds[visibleSectionIds.length - 1];
    return lastSectionId ? getSectionSummaryStepId(lastSectionId) : null;
  }

  if (resolution.kind === "section-summary") {
    const sectionQuestions = getVisibleQuestionsForSection(ageGroup, resolution.section.id, answers);
    return sectionQuestions[sectionQuestions.length - 1]?.id ?? null;
  }

  const currentQuestion = resolution.question;
  const currentSectionQuestions = getVisibleQuestionsForSection(ageGroup, currentQuestion.sectionId, answers);
  const sectionQuestionIndex = currentSectionQuestions.findIndex(
    (question) => question.id === currentQuestion.id,
  );

  if (sectionQuestionIndex > 0) {
    return currentSectionQuestions[sectionQuestionIndex - 1]?.id ?? null;
  }

  const currentSectionIndex = visibleSectionIds.indexOf(currentQuestion.sectionId);
  if (currentSectionIndex <= 0) {
    return null;
  }

  return getSectionSummaryStepId(visibleSectionIds[currentSectionIndex - 1]);
}

export function getCurrentSectionIdForStep(
  ageGroup: AgeGroup,
  stepId: string | null,
  answers: Record<string, TriageAnswer>,
): TriageSectionId | null {
  if (!stepId) {
    return null;
  }

  const resolution = resolveStep(ageGroup, stepId, answers);

  if (!resolution) {
    return null;
  }

  if (resolution.kind === "question") {
    return resolution.question.sectionId;
  }

  if (resolution.kind === "section-summary") {
    return resolution.section.id;
  }

  const visibleSectionIds = getVisibleSectionIds(ageGroup, answers);
  return visibleSectionIds[visibleSectionIds.length - 1] ?? null;
}

export function getProgressPercentage(
  ageGroup: AgeGroup | null,
  answers: Record<string, TriageAnswer>,
): number {
  if (!ageGroup) {
    return 0;
  }

  const visibleQuestions = getVisibleQuestions(ageGroup, answers);
  if (visibleQuestions.length === 0) {
    return 0;
  }

  const answeredVisibleQuestions = visibleQuestions.filter((question) => Boolean(answers[question.id])).length;

  return Math.min(100, Math.round((answeredVisibleQuestions / visibleQuestions.length) * 100));
}

export function getCompletedSectionIds(
  ageGroup: AgeGroup | null,
  answers: Record<string, TriageAnswer>,
): TriageSectionId[] {
  if (!ageGroup) {
    return [];
  }

  return getVisibleSectionIds(ageGroup, answers).filter((sectionId) => {
    const questions = getVisibleQuestionsForSection(ageGroup, sectionId, answers);
    return questions.length > 0 && questions.every((question) => Boolean(answers[question.id]));
  });
}
