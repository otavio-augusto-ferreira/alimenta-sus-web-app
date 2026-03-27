import { FeedbackTone } from "../types";

type RecommendationCardProps = {
  tone: FeedbackTone;
  title: string;
  summary: string;
  benefit?: string;
};

const toneStyles: Record<FeedbackTone, string> = {
  positive: "border-[#d7e7de] bg-[#f5fbf7] text-[#17352a]",
  attention: "border-[#eadfbe] bg-[#fffaf0] text-[#5e4a22]",
  alert: "border-[#ebd2cb] bg-[#fff7f4] text-[#7b3728]",
};

export function RecommendationCard({
  tone,
  title,
  summary,
  benefit,
}: RecommendationCardProps) {
  return (
    <div className={`rounded-2xl border p-6 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:p-7 ${toneStyles[tone]}`}>
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] opacity-80">
        {title}
      </div>
      <p className="max-w-[60ch] text-base font-semibold leading-7 md:text-lg">
        {summary}
      </p>
      {benefit ? (
        <p className="mt-4 max-w-[62ch] text-sm leading-7 opacity-90 md:text-base">
          {benefit}
        </p>
      ) : null}
    </div>
  );
}
