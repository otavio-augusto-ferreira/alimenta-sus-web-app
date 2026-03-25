import { FeedbackTone } from "../types";

type RecommendationCardProps = {
  tone: FeedbackTone;
  title: string;
  summary: string;
  benefit?: string;
};

const toneStyles: Record<FeedbackTone, string> = {
  positive: "border-[#d9ecd9] bg-[#f5fbf5] text-[#004D33]",
  attention: "border-[#f5d4a9] bg-[#fff7ea] text-[#7b4a00]",
  alert: "border-[#efc0b8] bg-[#fff3ef] text-[#8c2f1f]",
};

export function RecommendationCard({
  tone,
  title,
  summary,
  benefit,
}: RecommendationCardProps) {
  return (
    <div className={`rounded-[28px] border p-5 shadow-sm md:p-6 lg:p-7 ${toneStyles[tone]}`}>
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] opacity-80 md:text-sm">
        {title}
      </div>
      <p className="max-w-[60ch] text-base font-semibold leading-relaxed md:text-[1.08rem] md:leading-8">
        {summary}
      </p>
      {benefit ? (
        <p className="mt-4 max-w-[62ch] text-sm leading-relaxed opacity-90 md:text-base md:leading-7">
          {benefit}
        </p>
      ) : null}
    </div>
  );
}
