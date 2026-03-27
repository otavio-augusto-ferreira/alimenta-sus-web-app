import Image from "next/image";
import { ReactNode } from "react";
import { TriageSectionId } from "../types";
import { SectionProgress } from "./SectionProgress";
import { TriageStepper } from "./TriageStepper";

type TriageScaffoldProps = {
  children: ReactNode;
  progress?: number;
  progressLabel?: string;
  sectionIds?: TriageSectionId[];
  currentSectionId?: TriageSectionId | null;
  completedSectionIds?: TriageSectionId[];
};

export function TriageScaffold({
  children,
  progress,
  progressLabel = "Progresso da triagem",
  sectionIds = [],
  currentSectionId = null,
  completedSectionIds = [],
}: TriageScaffoldProps) {
  return (
    <main className="min-h-screen bg-[#f8faf8] px-4 pb-16 pt-6 md:px-6 md:pb-20 md:pt-8">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-6">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Alimenta SUS"
            width={124}
            height={124}
            className="h-auto w-24 md:w-28"
            priority
          />
        </div>

        {typeof progress === "number" ? (
          <SectionProgress label={progressLabel} progress={progress} />
        ) : null}

        {sectionIds.length > 0 ? (
          <TriageStepper
            sectionIds={sectionIds}
            currentSectionId={currentSectionId}
            completedSectionIds={completedSectionIds}
          />
        ) : null}

        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
