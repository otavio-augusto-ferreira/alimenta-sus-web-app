"use client";

import React, { createContext, useContext, useState } from "react";

// Tipos das respostas para Criança
type RespostasCrianca = {
  [key: string]: string; // ex: { feijao: "sim", frutas: "nao" }
};

// Tipos das respostas para Adolescente
type RespostasAdolescente = {
  [key: string]: string; // ex: { feijao_adol: "sim", telas_adol: "nao" }
};

type TriagemContextType = {
  // Criança
  respostas: RespostasCrianca;
  setResposta: (perguntaId: string, resposta: string) => void;
  // Adolescente
  respostasAdolescente: RespostasAdolescente;
  setRespostaAdolescente: (perguntaId: string, resposta: string) => void;
  // Comum
  limparTriagem: () => void;
};

const TriagemContext = createContext<TriagemContextType | undefined>(undefined);

export function TriagemProvider({ children }: { children: React.ReactNode }) {
  const [respostas, setRespostas] = useState<RespostasCrianca>({});
  const [respostasAdolescente, setRespostasAdol] = useState<RespostasAdolescente>({});

  const setResposta = (perguntaId: string, resposta: string) => {
    setRespostas((prev) => ({ ...prev, [perguntaId]: resposta }));
  };

  const setRespostaAdolescente = (perguntaId: string, resposta: string) => {
    setRespostasAdol((prev) => ({ ...prev, [perguntaId]: resposta }));
  };

  const limparTriagem = () => {
    setRespostas({});
    setRespostasAdol({});
  };

  return (
    <TriagemContext.Provider value={{ 
      respostas, setResposta, 
      respostasAdolescente, setRespostaAdolescente, 
      limparTriagem 
    }}>
      {children}
    </TriagemContext.Provider>
  );
}

export function useTriagem() {
  const context = useContext(TriagemContext);
  if (context === undefined) {
    throw new Error("useTriagem deve ser usado dentro de um TriagemProvider");
  }
  return context;
}