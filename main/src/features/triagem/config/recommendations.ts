import { RecommendationDefinition } from "../types";

export const RECOMMENDATION_CATALOG: Record<string, RecommendationDefinition> = {
  cafe_da_manha: {
    topic: "cafe_da_manha",
    title: "Organizar o café da manhã",
    shortLabel: "Café da manhã",
    summary: "Começar o dia com uma refeição ajuda energia, atenção e menor belisco ao longo do dia.",
    benefit: "Essa prática favorece regularidade alimentar e melhor disposição.",
    guidanceTitle: "Como apoiar essa rotina?",
    guidance: [
      {
        title: "Comece simples",
        description: "Vale combinar uma bebida, uma fruta e um alimento de base como pão, cuscuz ou tapioca.",
      },
      {
        title: "Deixe combinado na noite anterior",
        description: "Separar utensílios ou alimentos reduz a correria e facilita manter a rotina.",
      },
    ],
    resources: ["planejamento_refeicoes"],
  },
  regularidade_refeicoes: {
    topic: "regularidade_refeicoes",
    title: "Manter refeições regulares",
    shortLabel: "Regularidade",
    summary: "Longos períodos sem comer podem aumentar desconfortos, fome intensa e escolhas menos protetoras.",
    benefit: "Refeições regulares ajudam no apetite, energia e organização do dia.",
    guidanceTitle: "Sugestões para o dia a dia",
    guidance: [
      {
        title: "Planeje pontos de parada",
        description: "Mesmo em dias corridos, vale reservar horários mínimos para refeições ou lanches simples.",
      },
      {
        title: "Leve opções possíveis",
        description: "Fruta, castanhas, sanduíche simples ou iogurte natural podem ajudar quando a rotina aperta.",
      },
    ],
    resources: ["planejamento_refeicoes"],
  },
  feijao_e_leguminosas: {
    topic: "feijao_e_leguminosas",
    title: "Valorizar feijão e leguminosas",
    shortLabel: "Feijão",
    summary: "Feijão, lentilha, grão-de-bico e ervilha ajudam na saciedade, ferro e qualidade da alimentação.",
    benefit: "Esses alimentos protegem a saúde e combinam bem com a rotina brasileira.",
    guidanceTitle: "Como variar sem complicar?",
    guidance: [
      {
        title: "Faça em quantidade maior",
        description: "Congelar porções já prontas ajuda bastante nos dias de menos tempo.",
      },
      {
        title: "Varie o preparo",
        description: "Vale usar em sopas, saladas mornas, pastinhas ou misturado ao arroz.",
      },
    ],
    resources: ["guia_alimentar", "planejamento_refeicoes"],
  },
  frutas_e_verduras: {
    topic: "frutas_e_verduras",
    title: "Incluir frutas, verduras e legumes",
    shortLabel: "Frutas e verduras",
    summary: "Esses alimentos ajudam no funcionamento do corpo, no intestino e na variedade da alimentação.",
    benefit: "Pequenas inclusões diárias já fortalecem hábitos protetores.",
    guidanceTitle: "Como facilitar essa prática?",
    guidance: [
      {
        title: "Use o que cabe na rotina",
        description: "Frutas lavadas, legumes cozidos e verduras já higienizadas ajudam a manter o consumo.",
      },
      {
        title: "Prefira alimentos da estação",
        description: "Costumam ter melhor preço e sabor, o que facilita repetir a compra.",
      },
    ],
    resources: ["guia_alimentar", "rotina_escolar"],
  },
  hidratacao: {
    topic: "hidratacao",
    title: "Beber água ao longo do dia",
    shortLabel: "Água",
    summary: "Manter água por perto ajuda concentração, funcionamento intestinal e bem-estar geral.",
    benefit: "A hidratação adequada é um cuidado simples e muito protetor.",
    guidanceTitle: "Pequenos lembretes úteis",
    guidance: [
      {
        title: "Deixe uma garrafa por perto",
        description: "Ter água visível em casa, escola, trabalho ou bolsa aumenta a chance de lembrar.",
      },
      {
        title: "Associe a momentos fixos",
        description: "Vale beber água ao acordar, nas refeições e nos deslocamentos.",
      },
    ],
    resources: ["rotina_escolar"],
  },
  bebidas_acucaradas: {
    topic: "bebidas_acucaradas",
    title: "Reduzir bebidas açucaradas",
    shortLabel: "Bebidas açucaradas",
    summary: "Refrigerantes, sucos artificiais e energéticos podem aumentar riscos quando aparecem com frequência.",
    benefit: "Trocar por água e preparações simples ajuda a proteger a saúde.",
    guidanceTitle: "Trocas possíveis",
    guidance: [
      {
        title: "Comece pelas ocasiões mais fáceis",
        description: "Escolha primeiro um momento do dia para substituir a bebida açucarada por água.",
      },
      {
        title: "Evite estoque em casa",
        description: "Quando essas bebidas ficam menos disponíveis, a troca costuma acontecer com mais facilidade.",
      },
    ],
    resources: ["guia_alimentar"],
  },
  ultraprocessados: {
    topic: "ultraprocessados",
    title: "Diminuir ultraprocessados",
    shortLabel: "Ultraprocessados",
    summary: "Biscoitos recheados, salgadinhos, doces e fast food frequentes pedem atenção no dia a dia.",
    benefit: "Trocas graduais já ajudam a melhorar a qualidade da alimentação.",
    guidanceTitle: "Por onde começar?",
    guidance: [
      {
        title: "Observe os momentos de maior correria",
        description: "Mapear quando esses alimentos aparecem ajuda a pensar em alternativas possíveis.",
      },
      {
        title: "Troque aos poucos",
        description: "Lanches com frutas, sanduíches simples e preparações caseiras podem entrar gradualmente.",
      },
    ],
    resources: ["guia_alimentar", "planejamento_refeicoes"],
  },
  rotina_sem_telas: {
    topic: "rotina_sem_telas",
    title: "Comer com mais atenção",
    shortLabel: "Refeições sem telas",
    summary: "Evitar telas nas refeições ajuda a perceber fome, saciedade e favorece o momento de comer.",
    benefit: "Essa prática melhora a relação com a alimentação e o convívio.",
    guidanceTitle: "Ajustes que podem ajudar",
    guidance: [
      {
        title: "Combine um momento de pausa",
        description: "Mesmo refeições curtas podem acontecer sem celular ou TV por perto.",
      },
      {
        title: "Use a refeição para conversa",
        description: "Quando possível, aproveite esse tempo para trocar experiências e organizar o dia.",
      },
    ],
    resources: ["atividade_e_bem_estar"],
  },
  atividade_fisica: {
    topic: "atividade_fisica",
    title: "Valorizar o movimento corporal",
    shortLabel: "Atividade física",
    summary: "Movimento regular apoia apetite, sono, humor e saúde geral em todas as fases da vida.",
    benefit: "Pequenos movimentos consistentes já fazem diferença.",
    guidanceTitle: "Opções possíveis",
    guidance: [
      {
        title: "Comece pelo que combina com a rotina",
        description: "Caminhadas, brincadeiras ativas, subir escadas ou alongar já contam como cuidado.",
      },
      {
        title: "Prefira metas realistas",
        description: "É melhor manter poucos dias da semana do que planejar algo difícil de sustentar.",
      },
    ],
    resources: ["atividade_e_bem_estar"],
  },
  sono: {
    topic: "sono",
    title: "Cuidar do sono",
    shortLabel: "Sono",
    summary: "Dormir bem ajuda na disposição, no apetite e em escolhas alimentares mais equilibradas.",
    benefit: "Sono mais regular protege a saúde e a rotina.",
    guidanceTitle: "Como organizar melhor?",
    guidance: [
      {
        title: "Tente horários parecidos",
        description: "Criar uma faixa mais estável para dormir e acordar favorece o descanso.",
      },
      {
        title: "Desacelere antes de dormir",
        description: "Reduzir telas e refeições muito pesadas perto do sono costuma ajudar.",
      },
    ],
    resources: ["atividade_e_bem_estar"],
  },
  apoio_familiar: {
    topic: "apoio_familiar",
    title: "Fortalecer o apoio nas refeições",
    shortLabel: "Apoio familiar",
    summary: "Rede de apoio e refeições compartilhadas facilitam bons hábitos e maior continuidade do cuidado.",
    benefit: "Quando a alimentação é dividida com apoio, fica mais fácil manter a rotina.",
    guidanceTitle: "Caminhos possíveis",
    guidance: [
      {
        title: "Defina pequenas combinadas",
        description: "Organizar um ou dois momentos fixos da semana já pode mudar o ambiente das refeições.",
      },
      {
        title: "Peça ajuda objetiva",
        description: "Vale pedir apoio em compras, preparo simples ou lembretes de água e horários.",
      },
    ],
    resources: ["apoio_ubs"],
  },
  aceitacao_alimentar: {
    topic: "aceitacao_alimentar",
    title: "Apoiar aceitação de novos alimentos",
    shortLabel: "Aceitação alimentar",
    summary: "Recusa e seletividade podem melhorar com oferta frequente, sem pressão e com exemplos positivos.",
    benefit: "A exposição repetida ajuda a ampliar o repertório alimentar aos poucos.",
    guidanceTitle: "Vale tentar assim",
    guidance: [
      {
        title: "Ofereça sem forçar",
        description: "Apresentar o alimento mais de uma vez, em pequenas quantidades, ajuda na adaptação.",
      },
      {
        title: "Mude a apresentação",
        description: "Texturas, formatos e combinações podem fazer diferença para a aceitação.",
      },
    ],
    resources: ["guia_alimentar", "apoio_ubs"],
  },
  saude_digestiva: {
    topic: "saude_digestiva",
    title: "Atenção ao intestino e ao apetite",
    shortLabel: "Saúde digestiva",
    summary: "Constipação, perda de apetite e desconfortos digestivos pedem observação da rotina alimentar e de água.",
    benefit: "Pequenos ajustes e avaliação oportuna podem melhorar o bem-estar.",
    guidanceTitle: "Pontos para observar",
    guidance: [
      {
        title: "Reforce água e fibras",
        description: "Frutas, legumes, feijão e água ao longo do dia ajudam bastante nessa rotina.",
      },
      {
        title: "Observe persistência dos sintomas",
        description: "Quando o desconforto é frequente, vale buscar orientação da equipe de saúde.",
      },
    ],
    resources: ["apoio_ubs"],
  },
  acompanhamento_clinico: {
    topic: "acompanhamento_clinico",
    title: "Manter acompanhamento de saúde",
    shortLabel: "Acompanhamento",
    summary: "Condições clínicas e sinais de alerta merecem avaliação contínua junto à equipe de saúde.",
    benefit: "O cuidado compartilhado ajuda a orientar escolhas alimentares com mais segurança.",
    guidanceTitle: "Quando vale reforçar esse cuidado?",
    guidance: [
      {
        title: "Leve sinais observados",
        description: "Anotar dúvidas, sintomas e mudanças de peso ou apetite ajuda na conversa com profissionais.",
      },
      {
        title: "Integre alimentação e tratamento",
        description: "Orientações de saúde funcionam melhor quando cabem na rotina real da pessoa e da família.",
      },
    ],
    resources: ["apoio_ubs", "cuidado_idoso", "saude_materna"],
  },
  pre_natal: {
    topic: "pre_natal",
    title: "Fortalecer o cuidado no pré-natal",
    shortLabel: "Pré-natal",
    summary: "O pré-natal ajuda a acompanhar saúde, ganho de peso, suplementação e sinais que pedem atenção.",
    benefit: "Esse cuidado protege a gestante e o bebê ao longo de toda a gestação.",
    guidanceTitle: "Passos importantes",
    guidance: [
      {
        title: "Mantenha o vínculo com a equipe",
        description: "Levar dúvidas sobre alimentação, enjoos e suplementos faz parte do cuidado.",
      },
      {
        title: "Observe sinais persistentes",
        description: "Náuseas intensas, dificuldade para comer ou sinais de desidratação merecem orientação.",
      },
    ],
    resources: ["saude_materna", "apoio_ubs"],
  },
  imagem_corporal: {
    topic: "imagem_corporal",
    title: "Olhar cuidadoso para peso e imagem corporal",
    shortLabel: "Imagem corporal",
    summary: "Preocupação intensa com peso, dietas restritivas e compulsão merecem escuta acolhedora e orientação.",
    benefit: "Cuidar da saúde emocional junto da alimentação é parte do acompanhamento.",
    guidanceTitle: "Como acolher esse ponto",
    guidance: [
      {
        title: "Evite regras rígidas",
        description: "Restrições sem orientação tendem a piorar a relação com a comida e a culpa.",
      },
      {
        title: "Busque apoio quando frequente",
        description: "Sofrimento com aparência ou alimentação merece conversa com profissionais de saúde.",
      },
    ],
    resources: ["apoio_ubs"],
  },
  planejamento_alimentar: {
    topic: "planejamento_alimentar",
    title: "Planejar o que cabe na rotina",
    shortLabel: "Planejamento",
    summary: "Rotina, trabalho, escola e cuidado com a casa influenciam muito a alimentação do dia a dia.",
    benefit: "Planejamento simples ajuda a transformar intenção em prática possível.",
    guidanceTitle: "Comece por aqui",
    guidance: [
      {
        title: "Escolha um ponto da semana",
        description: "Separar um momento para compras ou preparo básico já facilita refeições futuras.",
      },
      {
        title: "Tenha opções-reserva",
        description: "Frutas, ovos, feijão pronto e legumes fáceis ajudam bastante nos dias difíceis.",
      },
    ],
    resources: ["planejamento_refeicoes"],
  },
  alimentacao_gestacao: {
    topic: "alimentacao_gestacao",
    title: "Apoiar a alimentação na gestação",
    shortLabel: "Gestação",
    summary: "Na gestação, refeições mais frequentes, água e alimentos variados ajudam no conforto e na saúde.",
    benefit: "Ajustes compatíveis com enjoos e rotina tornam o cuidado mais sustentável.",
    guidanceTitle: "Sugestões práticas",
    guidance: [
      {
        title: "Prefira pequenas refeições",
        description: "Ficar pouco tempo sem comer pode ajudar a reduzir mal-estar em alguns momentos do dia.",
      },
      {
        title: "Valorize fontes de ferro",
        description: "Feijão, carnes, ovos e outras fontes orientadas ajudam no cuidado nutricional.",
      },
    ],
    resources: ["saude_materna", "guia_alimentar"],
  },
  mastigacao_e_degluticao: {
    topic: "mastigacao_e_degluticao",
    title: "Observar mastigação e deglutição",
    shortLabel: "Mastigação e deglutição",
    summary: "Dificuldade para mastigar ou engolir não deve ser ignorada, especialmente no cuidado com pessoas idosas.",
    benefit: "Avaliação precoce ajuda a prevenir perda de peso, engasgos e desconfortos.",
    guidanceTitle: "Atenção especial",
    guidance: [
      {
        title: "Registre quando acontece",
        description: "Perceber se ocorre com líquidos, sólidos ou com frequência ajuda muito no atendimento.",
      },
      {
        title: "Procure orientação profissional",
        description: "Esse é um ponto que merece acompanhamento mais próximo na rede de saúde.",
      },
    ],
    resources: ["cuidado_idoso", "apoio_ubs"],
  },
  vulnerabilidade_social: {
    topic: "vulnerabilidade_social",
    title: "Atenção ao contexto social",
    shortLabel: "Contexto social",
    summary: "Custo, falta de apoio e dificuldade para comprar ou preparar refeições impactam diretamente a alimentação.",
    benefit: "Reconhecer essas barreiras ajuda a buscar soluções mais realistas e acolhedoras.",
    guidanceTitle: "O que pode ajudar?",
    guidance: [
      {
        title: "Ajuste as metas à realidade",
        description: "Pequenos avanços são mais sustentáveis do que mudanças muito difíceis de manter.",
      },
      {
        title: "Acione a rede de cuidado",
        description: "UBS, escola, família e cuidador podem compor apoio importante para o dia a dia.",
      },
    ],
    resources: ["apoio_ubs", "planejamento_refeicoes"],
  },
  suplementacao: {
    topic: "suplementacao",
    title: "Acompanhar suplementação prescrita",
    shortLabel: "Suplementação",
    summary: "Quando há suplemento indicado, vale seguir a orientação recebida e alinhar dúvidas com a equipe de saúde.",
    benefit: "Esse cuidado complementa a alimentação e acompanha necessidades específicas.",
    guidanceTitle: "Cuidados importantes",
    guidance: [
      {
        title: "Use conforme orientação",
        description: "Evite ajustar dose ou interromper por conta própria sem conversar com a equipe.",
      },
      {
        title: "Leve dificuldades para a consulta",
        description: "Enjoo, esquecimento ou desconforto com o suplemento podem ser discutidos e ajustados.",
      },
    ],
    resources: ["saude_materna", "apoio_ubs"],
  },
  autonomia_alimentar: {
    topic: "autonomia_alimentar",
    title: "Trabalhar autonomia com apoio",
    shortLabel: "Autonomia",
    summary: "Quando a pessoa escolhe mais sozinha o que come, vale fortalecer repertório e decisões mais protetoras.",
    benefit: "Autonomia apoiada ajuda a sustentar escolhas melhores no cotidiano.",
    guidanceTitle: "Formas de apoiar",
    guidance: [
      {
        title: "Combine escolhas possíveis",
        description: "Pensar opções simples para escola, trabalho e lanches reduz decisões no improviso.",
      },
      {
        title: "Evite linguagem punitiva",
        description: "Orientação acolhedora costuma funcionar melhor do que cobrança rígida.",
      },
    ],
    resources: ["planejamento_refeicoes", "apoio_ubs"],
  },
  alimentacao_escolar_rotina: {
    topic: "alimentacao_escolar_rotina",
    title: "Ajustar a alimentação à rotina externa",
    shortLabel: "Rotina fora de casa",
    summary: "Escola, trabalho e deslocamentos influenciam horários, água e acesso a refeições.",
    benefit: "Organizar a rotina externa ajuda a manter regularidade alimentar e hidratação.",
    guidanceTitle: "O que vale combinar?",
    guidance: [
      {
        title: "Monte estratégias simples",
        description: "Garrafa de água, fruta ou lanche básico podem ajudar bastante fora de casa.",
      },
      {
        title: "Revise o que realmente funciona",
        description: "Ajustes pequenos e repetíveis tendem a durar mais do que soluções muito complexas.",
      },
    ],
    resources: ["rotina_escolar", "planejamento_refeicoes"],
  },
};
