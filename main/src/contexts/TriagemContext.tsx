"use client";

import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { buildTriageSummary } from "@/features/triagem/engine/summary";
import {
  getCompletedSectionIds,
  getCurrentSectionIdForStep,
  getProgressPercentage,
} from "@/features/triagem/engine/flow";
import { AgeGroup, AnswerValue, TriageState } from "@/features/triagem/types";

const STORAGE_KEY = "alimenta-sus:triagem:v2";

type PersistedState = Pick<
  TriageState,
  "selectedAgeGroup" | "currentStepId" | "answers" | "startedAt" | "updatedAt"
>;

type TriagemAction =
  | { type: "sync-route"; ageGroup: AgeGroup; stepId: string }
  | { type: "set-age-group"; ageGroup: AgeGroup }
  | { type: "save-answer"; questionId: string; value: AnswerValue; note?: string }
  | { type: "clear-answer"; questionId: string }
  | { type: "set-current-step"; stepId: string | null }
  | { type: "reset" };

type TriagemContextType = {
  state: TriageState;
  setAgeGroup: (ageGroup: AgeGroup) => void;
  syncRoute: (ageGroup: AgeGroup, stepId: string) => void;
  saveAnswer: (questionId: string, value: AnswerValue, note?: string) => void;
  clearAnswer: (questionId: string) => void;
  setCurrentStep: (stepId: string | null) => void;
  resetFlow: () => void;
};

const createEmptyState = (): TriageState => ({
  selectedAgeGroup: null,
  currentStepId: null,
  currentSectionId: null,
  answers: {},
  completedSectionIds: [],
  progressPercentage: 0,
  riskFlags: [],
  warningFlags: [],
  highPriorityFlags: [],
  recommendationOutputs: [],
  overallClassification: null,
  summary: null,
  startedAt: null,
  updatedAt: null,
});

function buildDerivedState(baseState: TriageState): TriageState {
  const summary = buildTriageSummary(baseState.selectedAgeGroup, baseState.answers);
  const progressPercentage = getProgressPercentage(baseState.selectedAgeGroup, baseState.answers);
  const completedSectionIds = getCompletedSectionIds(baseState.selectedAgeGroup, baseState.answers);
  const currentSectionId = baseState.selectedAgeGroup
    ? getCurrentSectionIdForStep(baseState.selectedAgeGroup, baseState.currentStepId, baseState.answers)
    : null;

  return {
    ...baseState,
    currentSectionId,
    completedSectionIds,
    progressPercentage,
    riskFlags: summary
      ? Array.from(new Set([...summary.warningFlags, ...summary.highPriorityFlags]))
      : [],
    warningFlags: summary?.warningFlags ?? [],
    highPriorityFlags: summary?.highPriorityFlags ?? [],
    recommendationOutputs: summary?.recommendations ?? [],
    overallClassification: summary?.classification ?? null,
    summary,
  };
}

function parsePersistedState(): TriageState {
  if (typeof window === "undefined") {
    return createEmptyState();
  }

  try {
    const rawValue = window.sessionStorage.getItem(STORAGE_KEY);
    if (!rawValue) {
      return createEmptyState();
    }

    const persistedState = JSON.parse(rawValue) as PersistedState;

    return buildDerivedState({
      ...createEmptyState(),
      ...persistedState,
    });
  } catch {
    return createEmptyState();
  }
}

function triagemReducer(state: TriageState, action: TriagemAction): TriageState {
  const timestamp = new Date().toISOString();

  switch (action.type) {
    case "sync-route": {
      const shouldReset = state.selectedAgeGroup && state.selectedAgeGroup !== action.ageGroup;
      const baseState = shouldReset
        ? {
            ...createEmptyState(),
            selectedAgeGroup: action.ageGroup,
            currentStepId: action.stepId,
            startedAt: timestamp,
            updatedAt: timestamp,
          }
        : {
            ...state,
            selectedAgeGroup: action.ageGroup,
            currentStepId: action.stepId,
            startedAt: state.startedAt ?? timestamp,
            updatedAt: timestamp,
          };

      return buildDerivedState(baseState);
    }
    case "set-age-group":
      return buildDerivedState({
        ...createEmptyState(),
        selectedAgeGroup: action.ageGroup,
        startedAt: timestamp,
        updatedAt: timestamp,
      });
    case "save-answer":
      return buildDerivedState({
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: {
            questionId: action.questionId,
            value: action.value,
            note: action.note,
            updatedAt: timestamp,
          },
        },
        updatedAt: timestamp,
      });
    case "clear-answer": {
      const nextAnswers = { ...state.answers };
      delete nextAnswers[action.questionId];

      return buildDerivedState({
        ...state,
        answers: nextAnswers,
        updatedAt: timestamp,
      });
    }
    case "set-current-step":
      return buildDerivedState({
        ...state,
        currentStepId: action.stepId,
        updatedAt: timestamp,
      });
    case "reset":
      return createEmptyState();
    default:
      return state;
  }
}

const TriagemContext = createContext<TriagemContextType | undefined>(undefined);

export function TriagemProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(triagemReducer, undefined, parsePersistedState);

  useEffect(() => {
    const persistedState: PersistedState = {
      selectedAgeGroup: state.selectedAgeGroup,
      currentStepId: state.currentStepId,
      answers: state.answers,
      startedAt: state.startedAt,
      updatedAt: state.updatedAt,
    };

    // TODO: substituir a persistência local por sincronização com backend/analytics quando disponível.
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState));
  }, [state.answers, state.currentStepId, state.selectedAgeGroup, state.startedAt, state.updatedAt]);

  const actions = useMemo(
    () => ({
      setAgeGroup: (ageGroup: AgeGroup) => dispatch({ type: "set-age-group", ageGroup }),
      syncRoute: (ageGroup: AgeGroup, stepId: string) =>
        dispatch({ type: "sync-route", ageGroup, stepId }),
      saveAnswer: (questionId: string, value: AnswerValue, note?: string) =>
        dispatch({ type: "save-answer", questionId, value, note }),
      clearAnswer: (questionId: string) => dispatch({ type: "clear-answer", questionId }),
      setCurrentStep: (stepId: string | null) => dispatch({ type: "set-current-step", stepId }),
      resetFlow: () => dispatch({ type: "reset" }),
    }),
    [],
  );

  const value = useMemo<TriagemContextType>(
    () => ({
      state,
      ...actions,
    }),
    [actions, state],
  );

  return <TriagemContext.Provider value={value}>{children}</TriagemContext.Provider>;
}

export function useTriagem() {
  const context = useContext(TriagemContext);

  if (!context) {
    throw new Error("useTriagem deve ser usado dentro de um TriagemProvider");
  }

  return context;
}
