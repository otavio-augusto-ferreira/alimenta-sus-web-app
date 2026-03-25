import { ResourceDefinition } from "../types";

export const RESOURCE_CATALOG: Record<string, ResourceDefinition> = {
  guia_alimentar: {
    id: "guia_alimentar",
    title: "Guia Alimentar",
    description: "Material de apoio com orientações práticas para escolhas alimentares do dia a dia.",
    ctaLabel: "Abrir guia",
    href: "/guia-alimentar.pdf",
  },
  apoio_ubs: {
    id: "apoio_ubs",
    title: "Equipe da UBS",
    description: "A unidade de saúde pode orientar sinais de alerta e combinar acompanhamento quando necessário.",
    ctaLabel: "Buscar acompanhamento",
  },
  planejamento_refeicoes: {
    id: "planejamento_refeicoes",
    title: "Planejamento simples",
    description: "Pequenas combinações da semana ajudam a manter refeições mais regulares e com menos correria.",
    ctaLabel: "Ver sugestões práticas",
  },
  rotina_escolar: {
    id: "rotina_escolar",
    title: "Rotina de escola e lanche",
    description: "Organizar água, frutas e lanches simples facilita boas escolhas fora de casa.",
    ctaLabel: "Anotar lembretes",
  },
  saude_materna: {
    id: "saude_materna",
    title: "Cuidado na gestação",
    description: "Pré-natal e alimentação orientada ajudam a proteger a saúde da gestante e do bebê.",
    ctaLabel: "Conversar no pré-natal",
  },
  atividade_e_bem_estar: {
    id: "atividade_e_bem_estar",
    title: "Movimento e bem-estar",
    description: "Atividades leves e compatíveis com a rotina ajudam disposição, sono e saúde geral.",
    ctaLabel: "Explorar ideias",
  },
  cuidado_idoso: {
    id: "cuidado_idoso",
    title: "Atenção ao idoso",
    description: "Sinais como dificuldade para mastigar, engolir ou perda de peso merecem avaliação oportuna.",
    ctaLabel: "Levar para avaliação",
  },
};
