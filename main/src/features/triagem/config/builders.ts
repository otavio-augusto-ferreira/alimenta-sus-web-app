import {
  AgeGroup,
  RecommendationTopic,
  RiskFlag,
  TriageCondition,
  TriageNoteConfig,
  TriageOption,
  TriageQuestion,
  TriageSectionId,
} from "../types";

interface BaseQuestionInput {
  id: string;
  ageGroup: AgeGroup;
  sectionId: TriageSectionId;
  title: string;
  description?: string;
  helperText?: string;
  allowNotes?: TriageNoteConfig;
  visibleWhen?: TriageCondition[];
  nextQuestionId?: string;
}

interface BinaryOptionInput {
  label?: string;
  helperText?: string;
  score?: number;
  flags?: RiskFlag[];
  topics?: RecommendationTopic[];
  tags?: string[];
  nextQuestionId?: string;
}

export function option(input: TriageOption): TriageOption {
  return input;
}

export function yesNoQuestion(
  input: BaseQuestionInput & {
    yes?: BinaryOptionInput;
    no?: BinaryOptionInput;
  },
): TriageQuestion {
  return {
    id: input.id,
    ageGroup: input.ageGroup,
    sectionId: input.sectionId,
    title: input.title,
    description: input.description,
    helperText: input.helperText,
    type: "yes-no",
    allowNotes: input.allowNotes,
    visibleWhen: input.visibleWhen,
    nextQuestionId: input.nextQuestionId,
    options: [
      {
        value: "sim",
        label: input.yes?.label ?? "Sim",
        helperText: input.yes?.helperText,
        score: input.yes?.score,
        flags: input.yes?.flags,
        topics: input.yes?.topics,
        tags: input.yes?.tags,
        nextQuestionId: input.yes?.nextQuestionId,
      },
      {
        value: "nao",
        label: input.no?.label ?? "Não",
        helperText: input.no?.helperText,
        score: input.no?.score,
        flags: input.no?.flags,
        topics: input.no?.topics,
        tags: input.no?.tags,
        nextQuestionId: input.no?.nextQuestionId,
      },
    ],
  };
}

export function singleChoiceQuestion(
  input: BaseQuestionInput & {
    type?: "single-choice" | "frequency";
    options: TriageOption[];
  },
): TriageQuestion {
  return {
    id: input.id,
    ageGroup: input.ageGroup,
    sectionId: input.sectionId,
    title: input.title,
    description: input.description,
    helperText: input.helperText,
    type: input.type ?? "single-choice",
    options: input.options,
    allowNotes: input.allowNotes,
    visibleWhen: input.visibleWhen,
    nextQuestionId: input.nextQuestionId,
  };
}

export function multiChoiceQuestion(
  input: BaseQuestionInput & {
    options: TriageOption[];
  },
): TriageQuestion {
  return {
    id: input.id,
    ageGroup: input.ageGroup,
    sectionId: input.sectionId,
    title: input.title,
    description: input.description,
    helperText: input.helperText,
    type: "multi-choice",
    options: input.options,
    allowNotes: input.allowNotes,
    visibleWhen: input.visibleWhen,
    nextQuestionId: input.nextQuestionId,
  };
}
