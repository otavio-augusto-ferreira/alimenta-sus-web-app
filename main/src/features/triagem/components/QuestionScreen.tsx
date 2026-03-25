"use client";

import { useEffect, useMemo, useState } from "react";
import { TriageAnswer, TriageQuestion } from "../types";
import { AnswerButtonGroup } from "./AnswerButtonGroup";
import { BackNextControls } from "./BackNextControls";

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

    setSelectedValues(Array.isArray(answer.value) ? answer.value : [answer.value]);
    setNote(answer.note ?? "");
  }, [answer, question.id]);

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

    if (question.type === "multi-choice") {
      onSubmit(selectedValues, note.trim() || undefined);
      return;
    }

    if (question.type === "text") {
      onSubmit(note.trim(), note.trim());
      return;
    }

    onSubmit(selectedValues[0], note.trim() || undefined);
  };

  const selectedCount = selectedValues.length;
  const isMultiChoice = question.type === "multi-choice";

  return (
    <div className="w-full rounded-[32px] bg-white p-5 shadow-md sm:p-6 md:p-8 lg:p-10">
      <div className="mb-6 md:mb-8">
        <div className="mb-3 inline-flex rounded-full bg-[#fff5df] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#9a6316]">
          Pergunta da triagem
        </div>
        <h1 className="max-w-[24ch] text-2xl font-extrabold leading-[1.18] text-[#004D33] sm:text-[2rem] md:text-[2.15rem]">
          {question.title}
        </h1>
        {question.description ? (
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-[#2a5a45] md:text-base md:leading-7">
            {question.description}
          </p>
        ) : null}
        {question.helperText ? (
          <details className="mt-3 rounded-2xl border border-[#e7ddcc] bg-[#fff9f0] px-4 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#0d5e45]">
              Ver dica desta pergunta
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-[#537765] md:text-[0.96rem] md:leading-7">
              {question.helperText}
            </p>
          </details>
        ) : null}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#dce8e1] bg-[#f4faf7] px-3 py-1 text-xs font-semibold text-[#2b6a55]">
            {isMultiChoice ? "Seleção múltipla" : "Seleção única"}
          </span>
          {question.type !== "text" ? (
            <span className="rounded-full border border-[#dce8e1] bg-[#f4faf7] px-3 py-1 text-xs font-semibold text-[#2b6a55]">
              {selectedCount > 0
                ? `${selectedCount} ${selectedCount === 1 ? "opção marcada" : "opções marcadas"}`
                : "Toque para selecionar"}
            </span>
          ) : null}
        </div>
      </div>

      {question.type === "text" ? (
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder={question.placeholder ?? "Escreva aqui"}
          className="min-h-[150px] w-full rounded-[24px] border border-[#eadfce] bg-[#fffaf2] px-4 py-4 text-base leading-relaxed text-[#004D33] outline-none transition-colors focus:border-[#004D33] md:min-h-[170px] md:px-5 md:py-5"
        />
      ) : (
        <AnswerButtonGroup
          question={question}
          selectedValues={selectedValues}
          onChange={setSelectedValues}
        />
      )}

      {question.allowNotes ? (
        <div className="mx-auto mt-6 w-full max-w-[42rem] md:mt-7">
          <label className="mb-2 block text-sm font-semibold text-[#004D33] md:text-[0.96rem]">
            {question.allowNotes.label}
          </label>
          <textarea
            value={note}
            onChange={(event) =>
              setNote(event.target.value.slice(0, question.allowNotes?.maxLength))
            }
            placeholder={question.allowNotes.placeholder}
            className="min-h-[120px] w-full rounded-[24px] border border-[#eadfce] bg-[#fffaf2] px-4 py-4 text-sm leading-relaxed text-[#004D33] outline-none transition-colors focus:border-[#004D33] md:min-h-[136px] md:px-5 md:py-5 md:text-[0.95rem]"
          />
        </div>
      ) : null}

      <div className="mt-8 border-t border-[#f0e8db] pt-6 md:mt-10 md:pt-7">
        <BackNextControls
          onBack={onBack}
          onNext={handleSubmit}
          nextDisabled={!canSubmit}
          nextLabel="Ver orientação"
        />
      </div>
    </div>
  );
}
