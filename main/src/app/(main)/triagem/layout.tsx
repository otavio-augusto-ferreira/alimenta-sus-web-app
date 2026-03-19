"use client"

import React from "react";
// Verifique se o caminho do import abaixo está correto para o seu projeto
import { TriagemProvider } from "main/src/contexts/TriagemContext"; 

export default function TriagemLayout({ children }: { children: React.ReactNode }) {
  return (
    <TriagemProvider>
      {children}
    </TriagemProvider>
  );
}