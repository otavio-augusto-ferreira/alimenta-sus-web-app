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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f5fcf7] via-[#f1faf4] to-[#ebf7ef] px-4 pb-16 pt-6 sm:pt-8 md:px-8 md:pb-20 lg:px-10 lg:pb-24 lg:pt-10 xl:px-14">
      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col gap-4 md:gap-5 lg:gap-6">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Alimenta SUS"
            width={124}
            height={124}
            className="h-auto w-24 md:w-28 lg:w-[7.6rem]"
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

        <div className="mx-auto w-full max-w-[920px]">{children}</div>
      </div>
    </main>
  );
}
