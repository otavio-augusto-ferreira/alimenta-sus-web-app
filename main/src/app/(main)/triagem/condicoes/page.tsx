
"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Layout } from "main/src/components/ui/Layout";

// Ícones vetorizados com base no design
const IconObesidade = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L6 10h3v4H6l6 8 6-8h-3v-4h3z" />
  </svg>
);

const IconHipertensao = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 18 0" />
    <path d="M12 12v-4" />
    <path d="M12 12l-2-2" />
  </svg>
);

const IconDiabetes = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    <path d="M9 17a3 3 0 0 0 4.5-1.5" />
  </svg>
);

const IconNenhuma = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);

export default function CondicoesPage() {
  const router = useRouter();

  const opcoes = [
    { id: "obesidade", label: "Obesidade", bg: "bg-[#F57C00]", icon: <IconObesidade /> },
    { id: "hipertensao", label: "Hipertensão arterial", bg: "bg-[#FFB700]", icon: <IconHipertensao /> },
    { id: "diabetes", label: "Diabetes mellitus", bg: "bg-[#004D33]", icon: <IconDiabetes /> },
    { id: "nenhuma", label: "Nenhuma das acima", bg: "bg-[#B2BEC3]", icon: <IconNenhuma /> }
  ];

  // FUNÇÃO QUE FAZ O ROTEAMENTO CONDICIONAL (O SEU "IF")
  // FUNÇÃO QUE FAZ O ROTEAMENTO CONDICIONAL
  // FUNÇÃO QUE FAZ O ROTEAMENTO CONDICIONAL
  const handleSelecao = (idDaOpcao: string) => {
    if (idDaOpcao === "nenhuma") {
      // Direciona para a primeira pergunta do roteiro instrucional da criança
      // Usando a rota dinâmica [publico]/[step] que vimos na sua estrutura
      router.push("/triagem/crianca/1"); 
    } else {
      // Aqui você pode criar roteiros específicos para cada doença futuramente
      // Ex: router.push(`/triagem/crianca/condicao-${idDaOpcao}`);
      console.log(`Usuário selecionou a condição: ${idDaOpcao}`);
    }
  };

  return (
    <Layout>
      <main className="w-full min-h-screen bg-[#fbf8f2] flex flex-col items-center pt-8 px-6 pb-20 relative">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center pointer-events-none opacity-[0.08] z-0">
          <Image src="/logo.png" alt="logo" width={300} height={300} className="w-64" priority />
        </div>

        <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">
          
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#004D33] mt-2 mb-8 text-center leading-tight">
            A criança já foi<br />
            diagnosticada com<br />
            alguma dessas condições?
          </h1>

          <div className="w-full flex flex-col gap-4">
            {opcoes.map((opcao) => (
              <button
                key={opcao.id}
                onClick={() => handleSelecao(opcao.id)} // CHAMANDO A NOSSA NOVA FUNÇÃO AQUI
                className={`relative w-full ${opcao.bg} text-white rounded-2xl py-5 shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:brightness-105 active:scale-95 active:shadow-none active:translate-y-1 transition-all flex items-center justify-center`}
              >
                <div className="absolute left-6">
                  {opcao.icon}
                </div>
                <span className="text-xl font-bold">{opcao.label}</span>
              </button>
            ))}
          </div>

        </div>
      </main>
    </Layout>
  );
}