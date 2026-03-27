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
    <div className="overflow-x-auto pb-1">
      <div className="flex min-w-max flex-wrap gap-2">
        {sectionIds.map((sectionId) => {
          const section = TRIAGE_SECTIONS_MAP[sectionId];
          const isCurrent = currentSectionId === sectionId;
          const isCompleted = completedSectionIds.includes(sectionId);

          return (
            <div
              key={sectionId}
              className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                isCurrent
                  ? "border-[#1f6b4f] bg-[#1f6b4f] text-white"
                  : isCompleted
                    ? "border-[#cfe2d7] bg-[#eef7f2] text-[#1f6b4f]"
                    : "border-[#dfe7e2] bg-white text-[#50635a]"
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
