import { getClassificationCopy } from "../engine/feedback";
import { TriageSectionSnapshot } from "../types";
import { BackNextControls } from "./BackNextControls";
import { ExpandableGuidanceCard } from "./ExpandableGuidanceCard";
import { RecommendationCard } from "./RecommendationCard";
import { SuggestionPanel } from "./SuggestionPanel";

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
    <div className="space-y-6">
      <RecommendationCard
        tone={copy.tone}
        title={sectionSnapshot.title}
        summary={copy.description}
        benefit={`Pontuacao desta etapa: ${sectionSnapshot.score}`}
      />

      <SuggestionPanel>
        {sectionSnapshot.recommendations.flatMap((recommendation) =>
          recommendation.guidance.map((item, index) => (
            <ExpandableGuidanceCard
              key={`${recommendation.topic}-${item.title}-${index}`}
              item={item}
            />
          )),
        )}
      </SuggestionPanel>

      <div className="rounded-2xl border border-[#dfe7e2] bg-white px-6 pb-6 pt-5 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:px-8 md:pb-7">
        <BackNextControls
          onBack={onBack}
          onNext={onNext}
          nextLabel="Ir para a proxima etapa"
        />
      </div>
    </div>
  );
}
