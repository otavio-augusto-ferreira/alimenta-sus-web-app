import { ActionBar } from "./ActionBar";
import { ExpandableGuidanceCard } from "./ExpandableGuidanceCard";
import { RecommendationCard } from "./RecommendationCard";
import { SuggestionPanel } from "./SuggestionPanel";
import { QuestionFeedbackSnapshot, TriageQuestion } from "../types";

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
  onEdit,
  onNext,
}: QuestionFeedbackScreenProps) {
  const guidanceItems = feedback.recommendations.flatMap(
    (recommendation) => recommendation.guidance,
  );

  return (
    <div className="space-y-6">
      <RecommendationCard
        tone={feedback.tone}
        title={feedback.title}
        summary={feedback.summary}
        benefit={question.title}
      />

      {guidanceItems.length > 0 ? (
        <SuggestionPanel>
          {guidanceItems.map((item, index) => (
            <ExpandableGuidanceCard key={`${item.title}-${index}`} item={item} />
          ))}
        </SuggestionPanel>
      ) : null}

      <div className="rounded-2xl border border-[#dfe7e2] bg-white px-6 pb-6 pt-5 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:px-8 md:pb-7">
        <ActionBar
          secondaryLabel="Alterar resposta"
          primaryLabel="Continuar"
          onSecondary={onEdit}
          onPrimary={onNext}
        />
      </div>
    </div>
  );
}
