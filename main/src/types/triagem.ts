export interface CardConteudo {
  titulo: string;
  texto: string;
  recurso?: string;
}

export interface FeedbackBase {
  intro: string;
  btnAmareloTexto: string;
  ctaTexto?: string;
}

export interface FeedbackComCards extends FeedbackBase {
  tipo: "estrategia" | "obstaculo";
  cards: CardConteudo[];
  checklist?: string[];
}

export interface FeedbackNaoSei extends FeedbackBase {
  tituloCard: string;
  textoCard: string;
  tags: string[];
}

export interface PerguntaTriagem {
  id: number;
  pergunta: string;
  subtexto?: string;
  opcoes: string[];
  sim: FeedbackComCards;
  nao: FeedbackComCards;
  naoSei: FeedbackNaoSei;
}

// Tipo que vai agrupar todos os roteiros
export type RoteirosPorPublico = {
  [key: string]: PerguntaTriagem[];
};