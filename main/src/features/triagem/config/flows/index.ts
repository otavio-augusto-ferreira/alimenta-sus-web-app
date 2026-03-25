import { fluxoAdolescente } from "./adolescente";
import { fluxoAdulto } from "./adulto";
import { fluxoCrianca } from "./crianca";
import { fluxoGestante } from "./gestante";
import { fluxoIdoso } from "./idoso";
import { AgeGroup, TriageQuestion } from "../../types";

export const TRIAGE_FLOW_BY_AGE: Record<AgeGroup, TriageQuestion[]> = {
  crianca: fluxoCrianca,
  adolescente: fluxoAdolescente,
  adulto: fluxoAdulto,
  gestante: fluxoGestante,
  idoso: fluxoIdoso,
};
