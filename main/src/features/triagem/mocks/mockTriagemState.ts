import { TriageState } from "../types";

export const mockTriagemCrianca: TriageState = {
  selectedAgeGroup: "crianca",
  currentStepId: "resumo-final",
  currentSectionId: "condicoes-clinicas",
  answers: {
    "crianca-cafe-da-manha": {
      questionId: "crianca-cafe-da-manha",
      value: "sim",
      updatedAt: "2026-03-24T10:00:00.000Z",
    },
    "crianca-frutas-diarias": {
      questionId: "crianca-frutas-diarias",
      value: "nao",
      note: "Na escola é difícil manter a rotina.",
      updatedAt: "2026-03-24T10:02:00.000Z",
    },
    "crianca-barreiras-frutas": {
      questionId: "crianca-barreiras-frutas",
      value: ["rotina", "custo"],
      updatedAt: "2026-03-24T10:03:00.000Z",
    },
  },
  completedSectionIds: ["identificacao", "rotina-alimentar", "grupos-alimentares"],
  progressPercentage: 42,
  riskFlags: ["baixo_consumo_frutas_verduras", "vulnerabilidade_social"],
  warningFlags: ["baixo_consumo_frutas_verduras", "vulnerabilidade_social"],
  highPriorityFlags: [],
  recommendationOutputs: [],
  overallClassification: "atencao",
  summary: null,
  startedAt: "2026-03-24T09:58:00.000Z",
  updatedAt: "2026-03-24T10:03:00.000Z",
};

export const mockTriagemGestante: TriageState = {
  selectedAgeGroup: "gestante",
  currentStepId: "resumo-final",
  currentSectionId: "condicoes-clinicas",
  answers: {
    "gestante-pre-natal": {
      questionId: "gestante-pre-natal",
      value: "nao",
      updatedAt: "2026-03-24T11:00:00.000Z",
    },
    "gestante-enjoo": {
      questionId: "gestante-enjoo",
      value: "sim",
      updatedAt: "2026-03-24T11:01:00.000Z",
    },
    "gestante-agua": {
      questionId: "gestante-agua",
      value: "nao",
      updatedAt: "2026-03-24T11:02:00.000Z",
    },
  },
  completedSectionIds: ["identificacao", "rotina-alimentar"],
  progressPercentage: 28,
  riskFlags: ["sem_pre_natal", "baixa_hidratacao"],
  warningFlags: ["baixa_hidratacao"],
  highPriorityFlags: ["sem_pre_natal"],
  recommendationOutputs: [],
  overallClassification: "acompanhamento-prioritario",
  summary: null,
  startedAt: "2026-03-24T10:55:00.000Z",
  updatedAt: "2026-03-24T11:02:00.000Z",
};
