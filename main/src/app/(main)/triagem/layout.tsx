"use client";

import React from "react";
import { TriagemProvider } from "@/contexts/TriagemContext";

export default function TriagemLayout({ children }: { children: React.ReactNode }) {
  return <TriagemProvider>{children}</TriagemProvider>;
}
