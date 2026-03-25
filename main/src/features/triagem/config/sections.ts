import { TriageSectionDefinition } from "../types";

export const TRIAGE_SECTIONS: TriageSectionDefinition[] = [
  {
    id: "identificacao",
    title: "Identificação do perfil",
    shortTitle: "Perfil",
    description: "Entende quem acompanha a rotina e como a alimentação acontece no dia a dia.",
    icon: "badge",
  },
  {
    id: "rotina-alimentar",
    title: "Rotina alimentar",
    shortTitle: "Rotina",
    description: "Observa café da manhã, quantidade de refeições e regularidade.",
    icon: "utensils",
  },
  {
    id: "grupos-alimentares",
    title: "Consumo de grupos alimentares",
    shortTitle: "Alimentos",
    description: "Avalia feijão, frutas, verduras e alimentos ultraprocessados.",
    icon: "apple",
  },
  {
    id: "hidratacao",
    title: "Hábitos de hidratação",
    shortTitle: "Hidratação",
    description: "Verifica o consumo de água e barreiras para se hidratar melhor.",
    icon: "droplets",
  },
  {
    id: "sinais-alerta",
    title: "Sinais de alerta nutricional",
    shortTitle: "Alertas",
    description: "Identifica sinais que merecem atenção ou acompanhamento mais próximo.",
    icon: "shield-alert",
  },
  {
    id: "contexto-familiar",
    title: "Contexto familiar e social",
    shortTitle: "Contexto",
    description: "Considera apoio, rotina da casa e desafios para manter a alimentação.",
    icon: "users",
  },
  {
    id: "habitos-diarios",
    title: "Hábitos de tela, atividade e sono",
    shortTitle: "Hábitos",
    description: "Analisa telas nas refeições, movimento corporal e descanso.",
    icon: "moon-star",
  },
  {
    id: "condicoes-clinicas",
    title: "Condições clínicas relevantes",
    shortTitle: "Clínico",
    description: "Mapeia condições já conhecidas e necessidades de cuidado adicional.",
    icon: "heart-pulse",
  },
];

export const TRIAGE_SECTIONS_MAP = Object.fromEntries(
  TRIAGE_SECTIONS.map((section) => [section.id, section]),
) as Record<TriageSectionDefinition["id"], TriageSectionDefinition>;
