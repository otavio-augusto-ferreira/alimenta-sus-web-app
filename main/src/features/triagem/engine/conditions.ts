import { TriageAnswer, TriageCondition, TriageQuestion } from "../types";

function toArray(value: string | string[] | undefined): string[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

export function getAnswerValues(answer?: TriageAnswer): string[] {
  if (!answer) {
    return [];
  }

  return toArray(answer.value);
}

export function evaluateCondition(
  answers: Record<string, TriageAnswer>,
  condition: TriageCondition,
): boolean {
  const answer = answers[condition.questionId];
  const answerValues = getAnswerValues(answer);
  const conditionValues = toArray(condition.value);

  switch (condition.operator) {
    case "equals":
      return answerValues.length > 0 && answerValues.some((value) => conditionValues.includes(value));
    case "not-equals":
      return answerValues.length > 0 && answerValues.every((value) => !conditionValues.includes(value));
    case "includes-any":
      return answerValues.some((value) => conditionValues.includes(value));
    case "includes-all":
      return conditionValues.every((value) => answerValues.includes(value));
    case "is-answered":
      return answerValues.length > 0;
    case "is-not-answered":
      return answerValues.length === 0;
    default:
      return true;
  }
}

export function isQuestionVisible(
  question: TriageQuestion,
  answers: Record<string, TriageAnswer>,
): boolean {
  if (!question.visibleWhen?.length) {
    return true;
  }

  return question.visibleWhen.every((condition) => evaluateCondition(answers, condition));
}
