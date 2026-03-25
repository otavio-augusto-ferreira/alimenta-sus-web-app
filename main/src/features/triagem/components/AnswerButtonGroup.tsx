"use client";

import { Check } from "lucide-react";
import { TriageQuestion } from "../types";

type AnswerButtonGroupProps = {
  question: TriageQuestion;
  selectedValues: string[];
  onChange: (nextValues: string[]) => void;
};

function buildNextValues(
  question: TriageQuestion,
  selectedValues: string[],
  optionValue: string,
) {
  if (!question.options) {
    return selectedValues;
  }

  const clickedOption = question.options.find((option) => option.value === optionValue);
  if (!clickedOption) {
    return selectedValues;
  }

  if (question.type !== "multi-choice") {
    return [optionValue];
  }

  if (clickedOption.exclusive) {
    return [optionValue];
  }

  const exclusiveValues = question.options
    .filter((option) => option.exclusive)
    .map((option) => option.value);
  const hasValue = selectedValues.includes(optionValue);
  const withoutExclusive = selectedValues.filter((value) => !exclusiveValues.includes(value));

  if (hasValue) {
    return withoutExclusive.filter((value) => value !== optionValue);
  }

  return [...withoutExclusive, optionValue];
}

export function AnswerButtonGroup({
  question,
  selectedValues,
  onChange,
}: AnswerButtonGroupProps) {
  return (
    <div className="flex w-full flex-col gap-2.5 md:gap-3.5">
      {question.options?.map((optionItem) => {
        const isSelected = selectedValues.includes(optionItem.value);

        return (
          <button
            key={optionItem.value}
            type="button"
            onClick={() =>
              onChange(buildNextValues(question, selectedValues, optionItem.value))
            }
            className={`mx-auto flex w-full max-w-[42rem] items-start justify-between gap-4 rounded-[24px] border px-5 py-4 text-left transition-all md:px-6 md:py-5 lg:px-7 ${
              isSelected
                ? "border-[#0d6a4e] bg-[#edf8f3] text-[#0f3f30] shadow-[0_10px_24px_rgba(13,106,78,0.15)]"
                : "border-[#dfd8ca] bg-white text-[#004D33] shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:border-[#0d6a4e]/45 hover:bg-[#f7fcf9]"
            }`}
          >
            <div className="min-w-0 flex-1">
              <div className="text-lg font-bold leading-snug md:text-[1.22rem] md:leading-[1.35]">
                {optionItem.label}
              </div>
              {optionItem.helperText && isSelected ? (
                <div
                  className="mt-2 rounded-xl border border-[#cfe4da] bg-white/70 px-3 py-2 text-sm leading-relaxed text-[#2e5d4a] md:text-[0.95rem]"
                >
                  {optionItem.helperText}
                </div>
              ) : null}
            </div>
            <span
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                isSelected
                  ? "border-[#0d6a4e] bg-[#0d6a4e] text-white"
                  : "border-[#d7c9b1] bg-[#f8f2e8] text-transparent"
              }`}
            >
              <Check className="h-4 w-4" />
            </span>
          </button>
        );
      })}
    </div>
  );
}
