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
    <div className="w-full space-y-6 md:space-y-7 lg:space-y-8">
      <RecommendationCard
        tone={classificationCopy.tone}
        title={`Resumo final - ${getAgeGroupLabel(ageGroup)}`}
        summary={classificationCopy.description}
        benefit={`${summary.answeredCount} respostas consideradas na triagem`}
      />

      {summary.highPriorityFlags.length > 0 ? (
        <div className="rounded-[32px] border border-[#efc0b8] bg-[#fff3ef] p-5 shadow-sm sm:p-6 md:p-7">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-[#b4432f]">
            Sinais que pedem atenção prioritária
          </div>
          <div className="mt-4 space-y-3 md:space-y-4">
            {summary.highPriorityFlags.map((flag) => (
              <div key={flag} className="rounded-[22px] bg-white/80 p-4 md:p-5">
                <div className="font-bold text-[#8c2f1f] md:text-[1.04rem]">
                  {RISK_FLAG_CATALOG[flag]?.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#8c2f1f] md:text-[0.95rem] md:leading-7">
                  {RISK_FLAG_CATALOG[flag]?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="rounded-[32px] bg-white p-5 shadow-md sm:p-6 md:p-7 lg:p-8">
        <div className="mb-5 md:mb-6">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-[#e2954a]">
            Recomendações personalizadas
          </div>
          <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#004D33] md:text-2xl">
            Sugestões para seguir cuidando
          </h2>
        </div>
        <div className="space-y-4 md:space-y-5">
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

      <div className="rounded-[32px] bg-white p-5 shadow-md sm:p-6 md:p-7 lg:p-8">
        <div className="mb-5 md:mb-6">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-[#e2954a]">
            Panorama por seção
          </div>
          <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#004D33] md:text-2xl">
            Como a triagem se distribuiu
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-2">
          {summary.sectionSummaries.map((sectionSummary) => (
            <div
              key={sectionSummary.sectionId}
              className="rounded-[24px] border border-[#efe6d8] bg-[#fcfaf5] p-4 md:p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-bold text-[#004D33] md:text-[1.02rem]">
                    {sectionSummary.title}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-[#557665]">
                    {sectionSummary.answeredCount} de {sectionSummary.visibleCount} perguntas
                    respondidas
                  </div>
                </div>
                <div className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-bold text-[#e2954a]">
                  {sectionSummary.score} pts
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {summary.resources.length > 0 ? (
        <div className="rounded-[32px] bg-white p-5 shadow-md sm:p-6 md:p-7 lg:p-8">
          <div className="mb-5 md:mb-6">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-[#e2954a]">
              Recursos úteis
            </div>
            <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#004D33] md:text-2xl">
              Materiais e apoios para o próximo passo
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-2">
            {summary.resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="border-t border-[#eee2d1] pt-6 md:pt-7">
        <BackNextControls
          onBack={onBack}
          onNext={onRestart}
          nextLabel="Refazer triagem"
        />
      </div>
    </div>
  );
}
