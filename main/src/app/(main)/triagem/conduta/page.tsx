"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Layout } from "main/src/components/ui/Layout";

export default function HomeTriagemPage() {
  const router = useRouter();

  return (
    <Layout>
      {/* Removido o min-h-screen e colocado um pt-4 (padding top menor) para o conteúdo subir */}
      <main className="w-full flex flex-col items-center pt-4 px-6 pb-20">
        
        <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">
          
          {/* Logo */}
          <div className="flex flex-col items-center mb-0">
            <Image 
              src="/logo.png" 
              alt="Alimenta SUS" 
              width={140} 
              height={140} 
              className="object-contain" 
              priority 
            />
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#004D33] text-center leading-tight mt-0 mb-6">
            Como podemos<br />te ajudar hoje?
          </h1>

          {/* Bloco de Botões principais */}
          <div className="w-full flex flex-col gap-4">
            
            <button
              onClick={() => router.push("/triagem/perfil")}
              className="w-full bg-[#004D33] text-white rounded-2xl py-5 font-bold text-xl shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:brightness-105 active:scale-95 active:shadow-none active:translate-y-1 transition-all"
            >
              Iniciar triagem
            </button>

            <button
              onClick={() => console.log("Ir para plano")}
              className="w-full bg-[#D8B48B] text-[#1A1A1A] rounded-2xl py-5 font-bold text-xl shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:brightness-105 active:scale-95 active:shadow-none active:translate-y-1 transition-all"
            >
              Ver plano/roteiro
            </button>

            <button
              onClick={() => console.log("Ir para recomendações")}
              className="w-full bg-[#FFC107] text-[#1A1A1A] rounded-2xl py-5 font-bold text-xl shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:brightness-105 active:scale-95 active:shadow-none active:translate-y-1 transition-all"
            >
              Explorar recomendações
            </button>
            
          </div>
        </div>

      </main>
    </Layout>
  );
}