"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTriagem } from "@/contexts/TriagemContext";
import { QuestionFeedbackScreen } from "@/features/triagem/components/QuestionFeedbackScreen";
import { QuestionScreen } from "@/features/triagem/components/QuestionScreen";
import { SectionFeedbackScreen } from "@/features/triagem/components/SectionFeedbackScreen";
import { SummaryScreen } from "@/features/triagem/components/SummaryScreen";
import { TriageScaffold } from "@/features/triagem/components/TriageScaffold";
import { AGE_GROUPS, AgeGroup } from "@/features/triagem/types";
import { buildQuestionFeedback } from "@/features/triagem/engine/feedback";
import {
  FINAL_SUMMARY_STEP_ID,
  getFirstQuestionId,
  getNextStepId,
  getPreviousStepId,
  getVisibleSectionIds,
  resolveStep,
} from "@/features/triagem/engine/flow";
import { buildSectionSnapshot } from "@/features/triagem/engine/summary";

type TriagemPageProps = {
  params: {
    publico: string;
    step: string;
  };
};

function isAgeGroup(value: string): value is AgeGroup {
  return AGE_GROUPS.includes(value as AgeGroup);
}

export default function TriagemFlowPage({ params }: TriagemPageProps) {
  const router = useRouter();
  const { state, resetFlow, saveAnswer, syncRoute } = useTriagem();
  const [isEditing, setIsEditing] = useState(false);

  const ageGroup = params.publico;
  const stepId = params.step;

  useEffect(() => {
    if (!isAgeGroup(ageGroup)) {
      router.replace("/triagem/perfil");
      return;
    }

    syncRoute(ageGroup, stepId);
  }, [ageGroup, router, stepId, syncRoute]);

  useEffect(() => {
    setIsEditing(false);
  }, [stepId]);

  const resolution = useMemo(() => {
    if (!isAgeGroup(ageGroup)) {
      return null;
    }

    return resolveStep(ageGroup, stepId, state.answers);
  }, [ageGroup, state.answers, stepId]);

  useEffect(() => {
    if (!isAgeGroup(ageGroup) || resolution) {
      return;
    }

    const fallbackStepId = getFirstQuestionId(ageGroup, state.answers) ?? FINAL_SUMMARY_STEP_ID;
    router.replace(`/triagem/${ageGroup}/${fallbackStepId}`);
  }, [ageGroup, resolution, router, state.answers]);

  if (!isAgeGroup(ageGroup) || !resolution) {
    return null;
  }

  const sectionIds = getVisibleSectionIds(ageGroup, state.answers);

  const goBack = () => {
    const previousStepId = getPreviousStepId(ageGroup, stepId, state.answers);

    if (!previousStepId) {
      router.push("/triagem/perfil");
      return;
    }

    router.push(`/triagem/${ageGroup}/${previousStepId}`);
  };

  const goNext = () => {
    const nextStepId = getNextStepId(ageGroup, stepId, state.answers);

    if (!nextStepId) {
      return;
    }

    router.push(`/triagem/${ageGroup}/${nextStepId}`);
  };

  const restartFlow = () => {
    resetFlow();
    router.push("/triagem/perfil");
  };

  if (resolution.kind === "final-summary") {
    if (!state.summary) {
      return null;
    }

    return (
      <TriageScaffold
        progress={state.progressPercentage}
        progressLabel="Triagem concluída"
        sectionIds={sectionIds}
        currentSectionId={state.currentSectionId}
        completedSectionIds={state.completedSectionIds}
      >
        <SummaryScreen
          ageGroup={ageGroup}
          summary={state.summary}
          onBack={goBack}
          onRestart={restartFlow}
        />
      </TriageScaffold>
    );
  }

  if (resolution.kind === "section-summary") {
    const sectionSnapshot = buildSectionSnapshot(ageGroup, resolution.section.id, state.answers);

    return (
      <TriageScaffold
        progress={state.progressPercentage}
        progressLabel="Andamento da triagem"
        sectionIds={sectionIds}
        currentSectionId={resolution.section.id}
        completedSectionIds={state.completedSectionIds}
      >
        <SectionFeedbackScreen
          sectionSnapshot={sectionSnapshot}
          onBack={goBack}
          onNext={goNext}
        />
      </TriageScaffold>
    );
  }

  const currentAnswer = state.answers[resolution.question.id];
  const feedback = currentAnswer ? buildQuestionFeedback(resolution.question, currentAnswer) : null;

  return (
    <TriageScaffold
      progress={state.progressPercentage}
      progressLabel="Andamento da triagem"
      sectionIds={sectionIds}
      currentSectionId={resolution.question.sectionId}
      completedSectionIds={state.completedSectionIds}
    >
      {!currentAnswer || isEditing || !feedback ? (
        <QuestionScreen
          question={resolution.question}
          answer={currentAnswer}
          onBack={goBack}
          onSubmit={(value, note) => {
            saveAnswer(resolution.question.id, value, note);
            setIsEditing(false);
          }}
        />
      ) : (
        <QuestionFeedbackScreen
          question={resolution.question}
          feedback={feedback}
          onBack={goBack}
          onEdit={() => setIsEditing(true)}
          onNext={goNext}
        />
      )}
    </TriageScaffold>
  );
}
