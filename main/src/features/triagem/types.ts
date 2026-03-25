export const AGE_GROUPS = [
  "crianca",
  "adolescente",
  "adulto",
  "gestante",
  "idoso",
] as const;

export const TRIAGE_SECTION_IDS = [
  "identificacao",
  "rotina-alimentar",
  "grupos-alimentares",
  "hidratacao",
  "sinais-alerta",
  "contexto-familiar",
  "habitos-diarios",
  "condicoes-clinicas",
] as const;

export const QUESTION_TYPES = [
  "yes-no",
  "single-choice",
  "multi-choice",
  "frequency",
  "text",
] as const;

export const RECOMMENDATION_TOPICS = [
  "cafe_da_manha",
  "regularidade_refeicoes",
  "feijao_e_leguminosas",
  "frutas_e_verduras",
  "hidratacao",
  "bebidas_acucaradas",
  "ultraprocessados",
  "rotina_sem_telas",
  "atividade_fisica",
  "sono",
  "apoio_familiar",
  "aceitacao_alimentar",
  "saude_digestiva",
  "acompanhamento_clinico",
  "pre_natal",
  "imagem_corporal",
  "planejamento_alimentar",
  "alimentacao_gestacao",
  "mastigacao_e_degluticao",
  "vulnerabilidade_social",
  "suplementacao",
  "autonomia_alimentar",
  "alimentacao_escolar_rotina",
] as const;

export const RISK_FLAGS = [
  "cafe_da_manha_irregular",
  "baixa_frequencia_refeicoes",
  "baixo_consumo_leguminosas",
  "baixo_consumo_frutas_verduras",
  "baixa_hidratacao",
  "alto_consumo_bebidas_acucaradas",
  "alto_consumo_ultraprocessados",
  "refeicoes_com_tela",
  "baixa_atividade_fisica",
  "sono_irregular",
  "seletividade_alimentar",
  "constipacao",
  "perda_apetite",
  "preocupacao_peso",
  "imagem_corporal_em_risco",
  "dieta_restritiva",
  "sem_pre_natal",
  "dificuldade_mastigar",
  "dificuldade_engolir",
  "perda_peso_involuntaria",
  "vulnerabilidade_social",
  "condicao_clinica_relevante",
  "longos_periodos_sem_comer",
  "baixo_apoio_familiar",
  "baixa_autonomia_protetora",
] as const;

export type AgeGroup = (typeof AGE_GROUPS)[number];
export type TriageSectionId = (typeof TRIAGE_SECTION_IDS)[number];
export type QuestionType = (typeof QUESTION_TYPES)[number];
export type RecommendationTopic = (typeof RECOMMENDATION_TOPICS)[number];
export type RiskFlag = (typeof RISK_FLAGS)[number];
export type RiskLevel = "positive" | "warning" | "high";
export type FeedbackTone = "positive" | "attention" | "alert";
export type TriageClassification =
  | "habitos-protetores"
  | "atencao"
  | "acompanhamento-prioritario";

export type AnswerValue = string | string[];

export interface TriageCondition {
  questionId: string;
  operator:
    | "equals"
    | "not-equals"
    | "includes-any"
    | "includes-all"
    | "is-answered"
    | "is-not-answered";
  value?: string | string[];
}

export interface TriageOption {
  value: string;
  label: string;
  helperText?: string;
  score?: number;
  flags?: RiskFlag[];
  topics?: RecommendationTopic[];
  tags?: string[];
  nextQuestionId?: string;
  exclusive?: boolean;
}

export interface TriageNoteConfig {
  label: string;
  placeholder: string;
  maxLength?: number;
}

export interface TriageQuestion {
  id: string;
  ageGroup: AgeGroup;
  sectionId: TriageSectionId;
  title: string;
  description?: string;
  helperText?: string;
  type: QuestionType;
  options?: TriageOption[];
  allowNotes?: TriageNoteConfig;
  placeholder?: string;
  visibleWhen?: TriageCondition[];
  nextQuestionId?: string;
}

export interface TriageSectionDefinition {
  id: TriageSectionId;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
}

export interface GuidanceItem {
  title: string;
  description: string;
  resourceLabel?: string;
}

export interface RecommendationDefinition {
  topic: RecommendationTopic;
  title: string;
  shortLabel: string;
  summary: string;
  benefit: string;
  guidanceTitle: string;
  guidance: GuidanceItem[];
  resources?: string[];
}

export interface RiskFlagDefinition {
  flag: RiskFlag;
  level: RiskLevel;
  title: string;
  description: string;
  relatedTopics: RecommendationTopic[];
}

export interface ResourceDefinition {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  audiences?: AgeGroup[];
  topics?: RecommendationTopic[];
}

export interface TriageAnswer {
  questionId: string;
  value: AnswerValue;
  note?: string;
  updatedAt: string;
}

export interface SummaryRecommendation {
  topic: RecommendationTopic;
  title: string;
  summary: string;
  benefit: string;
  guidanceTitle: string;
  guidance: GuidanceItem[];
  resources: ResourceDefinition[];
  priority: number;
}

export interface TriageSectionSnapshot {
  sectionId: TriageSectionId;
  title: string;
  answeredCount: number;
  visibleCount: number;
  score: number;
  classification: TriageClassification;
  flags: RiskFlag[];
  recommendations: SummaryRecommendation[];
}

export interface TriageSummarySnapshot {
  classification: TriageClassification;
  score: number;
  answeredCount: number;
  visibleCount: number;
  warningFlags: RiskFlag[];
  highPriorityFlags: RiskFlag[];
  positiveTopics: RecommendationTopic[];
  recommendations: SummaryRecommendation[];
  resources: ResourceDefinition[];
  sectionSummaries: TriageSectionSnapshot[];
}

export interface QuestionFeedbackSnapshot {
  tone: FeedbackTone;
  title: string;
  summary: string;
  recommendations: SummaryRecommendation[];
}

export interface TriageState {
  selectedAgeGroup: AgeGroup | null;
  currentStepId: string | null;
  currentSectionId: TriageSectionId | null;
  answers: Record<string, TriageAnswer>;
  completedSectionIds: TriageSectionId[];
  progressPercentage: number;
  riskFlags: RiskFlag[];
  warningFlags: RiskFlag[];
  highPriorityFlags: RiskFlag[];
  recommendationOutputs: SummaryRecommendation[];
  overallClassification: TriageClassification | null;
  summary: TriageSummarySnapshot | null;
  startedAt: string | null;
  updatedAt: string | null;
}

export interface TriageStepResolutionBase {
  stepId: string;
}

export interface QuestionStepResolution extends TriageStepResolutionBase {
  kind: "question";
  question: TriageQuestion;
}

export interface SectionSummaryStepResolution extends TriageStepResolutionBase {
  kind: "section-summary";
  section: TriageSectionDefinition;
}

export interface FinalSummaryStepResolution extends TriageStepResolutionBase {
  kind: "final-summary";
}

export type TriageStepResolution =
  | QuestionStepResolution
  | SectionSummaryStepResolution
  | FinalSummaryStepResolution;
