"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Layout } from "main/src/components/ui/Layout";

// Ícones Profissionais (Padrão e proporções de design system moderno)
const IconCrianca = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12h.01"/><path d="M15 12h.01"/>
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
  </svg>
);

const IconAdolescente = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="15" x2="12" y2="22"/>
    <line x1="9" y1="19" x2="15" y2="19"/>
    <circle cx="12" cy="9" r="6"/>
  </svg>
);

const IconAdulto = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="6" r="2.5"/>
    <path d="M12 8.5v7.5"/>
    <path d="m6 10 6-2 6 2"/>
    <path d="m8 22 4-6 4 6"/>
  </svg>
);

const IconGestante = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconIdoso = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="16" r="5"/>
    <path d="M19 19 16 8l-3.5 2"/>
    <path d="M12 17h4v-2"/>
    <circle cx="15" cy="5" r="1.5"/>
  </svg>
);

export default function SelecaoPerfilPage() {
  const router = useRouter();

  const opcoes = [
    { id: "crianca", label: "Criança", bg: "bg-[#FFB700]", icon: <IconCrianca /> },
    { id: "adolescente", label: "Adolescente", bg: "bg-[#004D33]", icon: <IconAdolescente /> },
    { id: "adulto", label: "Adulto", bg: "bg-[#388E3C]", icon: <IconAdulto /> },
    { id: "gestante", label: "Gestante", bg: "bg-[#F57C00]", icon: <IconGestante /> },
    { id: "idoso", label: "Idoso", bg: "bg-[#C84B00]", icon: <IconIdoso /> }
  ];

  return (
    <Layout>
      <main className="relative min-h-screen bg-[#fbf8f2] flex flex-col items-center pt-20 px-6 pb-12 overflow-hidden">
        
        {/* Marca d'água circular no fundo */}
        <div className="absolute top-10 flex justify-center pointer-events-none opacity-[0.08]">
          <Image src="/logo.png" alt="logo" width={300} height={300} className="w-64" priority />
        </div>

        <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#004D33] mb-10 text-center leading-tight">
            Qual é a<br />sua idade?
          </h1>

          <div className="w-full flex flex-col gap-4">
            {opcoes.map((opcao) => (
              <button
                key={opcao.id}
                onClick={() => router.push("/triagem/condicoes")}
                className={`relative w-full ${opcao.bg} text-white rounded-2xl py-5 shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:brightness-105 active:scale-95 active:shadow-none active:translate-y-1 transition-all flex items-center justify-center`}
              >
                {/* Ícone à esquerda */}
                <div className="absolute left-6">
                  {opcao.icon}
                </div>
                {/* Texto centralizado */}
                <span className="text-xl font-bold">{opcao.label}</span>
              </button>
            ))}
          </div>

        </div>
      </main>
    </Layout>
  );
}