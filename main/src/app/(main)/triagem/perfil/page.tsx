"use client";

import { useRouter } from "next/navigation";
import { useTriagem } from "@/contexts/TriagemContext";
import { AgeSelectionScreen } from "@/features/triagem/components/AgeSelectionScreen";
import { TriageScaffold } from "@/features/triagem/components/TriageScaffold";
import { getFirstQuestionId } from "@/features/triagem/engine/flow";
import { AgeGroup } from "@/features/triagem/types";

export default function SelecaoPerfilPage() {
  const router = useRouter();
  const { setAgeGroup } = useTriagem();

  const handleContinue = (ageGroup: AgeGroup) => {
    setAgeGroup(ageGroup);
    const firstQuestionId = getFirstQuestionId(ageGroup, {});

    if (!firstQuestionId) {
      return;
    }

    router.push(`/triagem/${ageGroup}/${firstQuestionId}`);
  };

  return (
    <TriageScaffold>
      <AgeSelectionScreen onContinue={handleContinue} />
    </TriageScaffold>
  );
}
