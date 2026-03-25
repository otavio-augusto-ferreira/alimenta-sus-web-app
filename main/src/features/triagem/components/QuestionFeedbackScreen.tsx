import { useState } from "react";
import { QuestionFeedbackSnapshot, TriageQuestion } from "../types";
import { BackNextControls } from "./BackNextControls";
import { ExpandableGuidanceCard } from "./ExpandableGuidanceCard";
import { RecommendationCard } from "./RecommendationCard";

type QuestionFeedbackScreenProps = {
  question: TriageQuestion;
  feedback: QuestionFeedbackSnapshot;
  onBack: () => void;
  onEdit: () => void;
  onNext: () => void;
};

export function QuestionFeedbackScreen({
  question,
  feedback,
  onBack,
  onEdit,
  onNext,
}: QuestionFeedbackScreenProps) {
  const [showDecision, setShowDecision] = useState(false);
  const guidanceItems = feedback.recommendations.flatMap(
    (recommendation) => recommendation.guidance,
  );

  const handleBack = () => {
    setShowDecision(false);
    onBack();
  };

  const handleRequestNext = () => {
    setShowDecision(true);
  };

  const handleConfirmEdit = () => {
    setShowDecision(false);
    onEdit();
  };

  const handleConfirmNext = () => {
    setShowDecision(false);
    onNext();
  };

  return (
    <div className="w-full space-y-6 md:space-y-7 lg:space-y-8">
      <RecommendationCard
        tone={feedback.tone}
        title={feedback.title}
        summary={feedback.summary}
        benefit={question.title}
      />

      {feedback.recommendations.length > 0 ? (
        <div className="rounded-[32px] bg-white p-5 shadow-md sm:p-6 md:p-7 lg:p-8">
          <div className="mb-5 md:mb-6">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-[#e2954a]">
              Como apoiar essa etapa
            </div>
            <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#004D33] md:text-2xl">
              Sugestões para o dia a dia
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {guidanceItems.map((item, index) => (
              <ExpandableGuidanceCard key={`${item.title}-${index}`} item={item} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="rounded-[28px] bg-[#004D33] p-5 text-white shadow-md md:p-6 lg:p-7">
        <div className="text-sm font-bold uppercase tracking-[0.12em] text-[#facc15]">
          Próximo passo
        </div>
        <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-white/90 md:text-[1.03rem] md:leading-8">
          Ao tocar em continuar, vamos abrir uma confirmação rápida para você decidir se quer
          avançar ou alterar essa resposta.
        </p>
      </div>

      <div className="border-t border-[#eee2d1] pt-6 md:pt-7">
        <BackNextControls onBack={handleBack} onNext={handleRequestNext} nextLabel="Continuar" />

        {showDecision ? (
          <div className="mt-4 rounded-[24px] border border-[#e5d7c3] bg-[#fffaf2] p-4 shadow-sm md:p-5">
            <h3 className="text-base font-bold text-[#004D33] md:text-lg">
              Deseja avançar para a próxima pergunta?
            </h3>
            <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-[#2a5a45] md:text-[0.95rem] md:leading-7">
              Você pode seguir agora ou revisar esta resposta antes de continuar a triagem.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleConfirmEdit}
                className="w-full rounded-[18px] border border-[#d8cfbe] bg-white px-4 py-3 text-sm font-semibold text-[#004D33] transition-colors hover:bg-[#f7f3eb] sm:w-auto sm:min-w-[11.5rem]"
              >
                Alterar resposta
              </button>
              <button
                type="button"
                onClick={handleConfirmNext}
                className="w-full rounded-[18px] bg-[#004D33] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#003724] sm:w-auto sm:min-w-[11.5rem]"
              >
                Continuar
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
