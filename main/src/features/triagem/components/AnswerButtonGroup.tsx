"use client";

import { TriageQuestion } from "../types";
import { OptionItem } from "./OptionItem";

type AnswerButtonGroupProps = {
  question: TriageQuestion;
  selectedValues: string[];
  onChange: (nextValues: string[]) => void;
};

function toggleMultiChoice(
  question: TriageQuestion,
  selectedValues: string[],
  optionValue: string,
) {
  const clickedOption = question.options?.find((option) => option.value === optionValue);
  if (!clickedOption) {
    return selectedValues;
  }

  const isSelected = selectedValues.includes(optionValue);
  if (clickedOption.exclusive) {
    return isSelected ? [] : [optionValue];
  }

  const exclusiveValues =
    question.options
      ?.filter((option) => option.exclusive)
      .map((option) => option.value) ?? [];

  if (isSelected) {
    return selectedValues.filter((value) => value !== optionValue);
  }

  return [
    ...selectedValues.filter((value) => !exclusiveValues.includes(value)),
    optionValue,
  ];
}

export function AnswerButtonGroup({
  question,
  selectedValues,
  onChange,
}: AnswerButtonGroupProps) {
  const isMultiChoice = question.type === "multi-choice";
  const inputType = isMultiChoice ? "checkbox" : "radio";
  const normalizedSelectedValues = isMultiChoice
    ? selectedValues
    : selectedValues.length > 0
      ? [selectedValues[selectedValues.length - 1]]
      : [];

  return (
    <div
      role={isMultiChoice ? "group" : "radiogroup"}
      aria-label={question.title}
      className="space-y-3"
    >
      {question.options?.map((optionItem) => (
        <OptionItem
          key={optionItem.value}
          name={question.id}
          inputType={inputType}
          value={optionItem.value}
          label={optionItem.label}
          helperText={optionItem.helperText}
          checked={normalizedSelectedValues.includes(optionItem.value)}
          onToggle={(nextValue) => {
            if (isMultiChoice) {
              onChange(toggleMultiChoice(question, normalizedSelectedValues, nextValue));
              return;
            }

            onChange([nextValue]);
          }}
        />
      ))}
    </div>
  );
}
