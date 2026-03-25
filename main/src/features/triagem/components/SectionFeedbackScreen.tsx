import { getClassificationCopy } from "../engine/feedback";
import { TriageSectionSnapshot } from "../types";
import { BackNextControls } from "./BackNextControls";
import { ExpandableGuidanceCard } from "./ExpandableGuidanceCard";
import { RecommendationCard } from "./RecommendationCard";

type SectionFeedbackScreenProps = {
  sectionSnapshot: TriageSectionSnapshot;
  onBack: () => void;
  onNext: () => void;
};

export function SectionFeedbackScreen({
  sectionSnapshot,
  onBack,
  onNext,
}: SectionFeedbackScreenProps) {
  const copy = getClassificationCopy(sectionSnapshot.classification);

  return (
    <div className="w-full space-y-6 md:space-y-7 lg:space-y-8">
      <RecommendationCard
        tone={copy.tone}
        title={sectionSnapshot.title}
        summary={copy.description}
        benefit={`Pontuação desta etapa: ${sectionSnapshot.score}`}
      />

      <div className="rounded-[32px] bg-white p-5 shadow-md sm:p-6 md:p-7 lg:p-8">
        <div className="mb-5 md:mb-6">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-[#e2954a]">
            Fechamento da seção
          </div>
          <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#004D33] md:text-2xl">
            {copy.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {sectionSnapshot.recommendations.map((recommendation) =>
            recommendation.guidance.map((item, index) => (
              <ExpandableGuidanceCard
                key={`${recommendation.topic}-${item.title}-${index}`}
                item={item}
              />
            )),
          )}
        </div>
      </div>

      <div className="border-t border-[#eee2d1] pt-6 md:pt-7">
        <BackNextControls
          onBack={onBack}
          onNext={onNext}
          nextLabel="Ir para a próxima etapa"
        />
      </div>
    </div>
  );
}
