import { RISK_FLAG_CATALOG } from "../config/flags";
import { getAgeGroupLabel, getClassificationCopy } from "../engine/feedback";
import { AgeGroup, TriageSummarySnapshot } from "../types";
import { BackNextControls } from "./BackNextControls";
import { RecommendationCard } from "./RecommendationCard";
import { ResourceCard } from "./ResourceCard";

type SummaryScreenProps = {
  ageGroup: AgeGroup;
  summary: TriageSummarySnapshot;
  onBack: () => void;
  onRestart: () => void;
};

export function SummaryScreen({
  ageGroup,
  summary,
  onBack,
  onRestart,
}: SummaryScreenProps) {
  const classificationCopy = getClassificationCopy(summary.classification);

  return (
    <div className="space-y-6">
      <RecommendationCard
        tone={classificationCopy.tone}
        title={`Resumo final - ${getAgeGroupLabel(ageGroup)}`}
        summary={classificationCopy.description}
        benefit={`${summary.answeredCount} respostas consideradas na triagem`}
      />

      {summary.highPriorityFlags.length > 0 ? (
        <div className="rounded-2xl border border-[#ebd2cb] bg-[#fff7f4] p-6 shadow-[0_8px_24px_rgba(21,47,35,0.05)]">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#7b3728]">
            Sinais que pedem atencao prioritaria
          </div>
          <div className="mt-4 space-y-3">
            {summary.highPriorityFlags.map((flag) => (
              <div key={flag} className="rounded-xl border border-[#f1dfd9] bg-white p-4">
                <div className="font-semibold text-[#7b3728]">
                  {RISK_FLAG_CATALOG[flag]?.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-[#7b3728]">
                  {RISK_FLAG_CATALOG[flag]?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:p-8">
        <div className="mb-5">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#5d4d33]">
            Recomendacoes personalizadas
          </div>
          <h2 className="mt-2 text-[1.6rem] font-bold text-[#17352a]">
            Sugestoes para seguir cuidando
          </h2>
        </div>
        <div className="space-y-4">
          {summary.recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.topic}
              tone={classificationCopy.tone}
              title={recommendation.title}
              summary={recommendation.summary}
              benefit={recommendation.benefit}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:p-8">
        <div className="mb-5">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#5d4d33]">
            Panorama por secao
          </div>
          <h2 className="mt-2 text-[1.6rem] font-bold text-[#17352a]">
            Como a triagem se distribuiu
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {summary.sectionSummaries.map((sectionSummary) => (
            <div
              key={sectionSummary.sectionId}
              className="rounded-xl border border-[#e5e7eb] bg-[#fbfcfb] p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-semibold text-[#17352a]">
                    {sectionSummary.title}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-[#5b6d63]">
                    {sectionSummary.answeredCount} de {sectionSummary.visibleCount} perguntas
                    respondidas
                  </div>
                </div>
                <div className="shrink-0 rounded-full bg-[#eef7f2] px-3 py-1 text-sm font-semibold text-[#1f6b4f]">
                  {sectionSummary.score} pts
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {summary.resources.length > 0 ? (
        <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:p-8">
          <div className="mb-5">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#5d4d33]">
              Recursos uteis
            </div>
            <h2 className="mt-2 text-[1.6rem] font-bold text-[#17352a]">
              Materiais e apoios para o proximo passo
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {summary.resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="rounded-2xl border border-[#dfe7e2] bg-white px-6 pb-6 pt-5 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:px-8 md:pb-7">
        <BackNextControls
          onBack={onBack}
          onNext={onRestart}
          nextLabel="Refazer triagem"
        />
      </div>
    </div>
  );
}
