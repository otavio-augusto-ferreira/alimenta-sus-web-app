import { TRIAGE_SECTIONS_MAP } from "../config/sections";
import { TriageSectionId } from "../types";
import { TriageIcon } from "./TriageIcon";

type TriageStepperProps = {
  sectionIds: TriageSectionId[];
  currentSectionId: TriageSectionId | null;
  completedSectionIds: TriageSectionId[];
};

export function TriageStepper({
  sectionIds,
  currentSectionId,
  completedSectionIds,
}: TriageStepperProps) {
  return (
    <div className="mx-auto w-full max-w-[920px] overflow-x-auto pb-2">
      <div className="flex min-w-max gap-2.5 md:gap-3">
        {sectionIds.map((sectionId) => {
          const section = TRIAGE_SECTIONS_MAP[sectionId];
          const isCurrent = currentSectionId === sectionId;
          const isCompleted = completedSectionIds.includes(sectionId);

          return (
            <div
              key={sectionId}
              className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.82rem] font-semibold transition-colors md:px-4.5 md:text-sm ${
                isCurrent
                  ? "border-[#004D33] bg-[#004D33] text-white"
                  : isCompleted
                    ? "border-[#facc15] bg-[#fff6d6] text-[#6b4d10]"
                    : "border-[#ede0cf] bg-white text-[#6f6a61]"
              }`}
            >
              <TriageIcon name={section.icon} className="h-4 w-4 shrink-0" />
              <span>{section.shortTitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
