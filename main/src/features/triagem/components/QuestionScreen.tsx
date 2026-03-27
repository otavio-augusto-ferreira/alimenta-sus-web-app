"use client";

import { useEffect, useMemo, useState } from "react";
import { TriageAnswer, TriageQuestion } from "../types";
import { ActionBar } from "./ActionBar";
import { AnswerButtonGroup } from "./AnswerButtonGroup";
import { QuestionCard } from "./QuestionCard";
import { TriageLayout } from "./TriageLayout";

type QuestionScreenProps = {
  question: TriageQuestion;
  answer?: TriageAnswer;
  onBack: () => void;
  onSubmit: (value: string | string[], note?: string) => void;
};

export function QuestionScreen({
  question,
  answer,
  onBack,
  onSubmit,
}: QuestionScreenProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!answer) {
      setSelectedValues([]);
      setNote("");
      return;
    }

    const nextSelectedValues = Array.isArray(answer.value) ? answer.value : [answer.value];
    setSelectedValues(
      question.type === "multi-choice"
        ? nextSelectedValues
        : nextSelectedValues.length > 0
          ? [nextSelectedValues[nextSelectedValues.length - 1]]
          : [],
    );
    setNote(answer.note ?? "");
  }, [answer, question.id, question.type]);

  const canSubmit = useMemo(() => {
    if (question.type === "text") {
      return note.trim().length > 0;
    }

    return selectedValues.length > 0;
  }, [note, question.type, selectedValues]);

  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }

    if (question.type === "text") {
      onSubmit(note.trim(), note.trim());
      return;
    }

    if (question.type === "multi-choice") {
      onSubmit(selectedValues, note.trim() || undefined);
      return;
    }

    onSubmit(selectedValues[0], note.trim() || undefined);
  };

  const selectionLabel =
    question.type === "multi-choice" ? "Selecao multipla" : "Selecao unica";

  const selectionStatus =
    question.type === "text"
      ? null
      : selectedValues.length > 0
        ? question.type === "multi-choice"
          ? `${selectedValues.length} opcoes marcadas`
          : "1 opcao marcada"
        : "Selecione uma resposta";

  return (
    <TriageLayout
      eyebrow="PERGUNTA DA TRIAGEM"
      title={question.title}
      helperText={question.description}
      footer={
        <ActionBar
          secondaryLabel="Voltar"
          primaryLabel="Prosseguir"
          onSecondary={onBack}
          onPrimary={handleSubmit}
          primaryDisabled={!canSubmit}
        />
      }
    >
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#dfe7e2] bg-[#f7faf8] px-3 py-1 text-xs font-semibold text-[#345446]">
          {selectionLabel}
        </span>
        {selectionStatus ? (
          <span className="rounded-full border border-[#dfe7e2] bg-[#f7faf8] px-3 py-1 text-xs font-semibold text-[#345446]">
            {selectionStatus}
          </span>
        ) : null}
      </div>

      {question.helperText ? (
        <div className="mb-5 rounded-xl border border-[#e6ece8] bg-[#f8fbf9] px-4 py-3 text-sm leading-6 text-[#5b6d63]">
          {question.helperText}
        </div>
      ) : null}

      <QuestionCard>
        {question.type === "text" ? (
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder={question.placeholder ?? "Escreva aqui"}
            className="min-h-[170px] w-full rounded-xl border border-[#dfe7e2] bg-white px-4 py-4 text-base leading-7 text-[#17352a] outline-none transition-colors focus:border-[#1f6b4f] focus-visible:ring-4 focus-visible:ring-[#26724f]/20"
          />
        ) : (
          <AnswerButtonGroup
            question={question}
            selectedValues={selectedValues}
            onChange={setSelectedValues}
          />
        )}
      </QuestionCard>

      {question.allowNotes ? (
        <div className="mt-6">
          <label className="mb-2 block text-sm font-semibold text-[#17352a]">
            {question.allowNotes.label}
          </label>
          <textarea
            value={note}
            onChange={(event) =>
              setNote(event.target.value.slice(0, question.allowNotes?.maxLength))
            }
            placeholder={question.allowNotes.placeholder}
            className="min-h-[132px] w-full rounded-xl border border-[#dfe7e2] bg-white px-4 py-4 text-sm leading-7 text-[#17352a] outline-none transition-colors focus:border-[#1f6b4f] focus-visible:ring-4 focus-visible:ring-[#26724f]/20"
          />
        </div>
      ) : null}
    </TriageLayout>
  );
}
