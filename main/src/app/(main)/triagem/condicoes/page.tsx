"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTriagem } from "@/contexts/TriagemContext";
import { TriageScaffold } from "@/features/triagem/components/TriageScaffold";
import { getFirstQuestionId } from "@/features/triagem/engine/flow";

export default function CondicoesPage() {
  const router = useRouter();
  const { state } = useTriagem();

  useEffect(() => {
    if (!state.selectedAgeGroup) {
      router.replace("/triagem/perfil");
      return;
    }

    const firstQuestionId = getFirstQuestionId(state.selectedAgeGroup, state.answers);

    if (firstQuestionId) {
      router.replace(`/triagem/${state.selectedAgeGroup}/${firstQuestionId}`);
    }
  }, [router, state.answers, state.selectedAgeGroup]);

  return (
    <TriageScaffold>
      <div className="rounded-[32px] bg-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-extrabold text-[#004D33]">Preparando a triagem</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#2a5a45]">
          Estamos carregando as perguntas adequadas ao perfil selecionado.
        </p>
      </div>
    </TriageScaffold>
  );
}
