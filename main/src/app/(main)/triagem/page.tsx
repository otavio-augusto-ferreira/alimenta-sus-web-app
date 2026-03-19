"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Layout } from "main/src/components/ui/Layout";

export default function TriagemIntroPage() {
  const router = useRouter();

  return (
    <Layout>
      <main className="relative w-full min-h-screen bg-[#fbf8f2] flex flex-col items-center justify-center pt-[5vh] pb-[5vh] px-4 md:px-6 overflow-hidden">
        
        {/* Marca d'água responsiva */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 md:opacity-[0.08] z-0">
          <Image 
            src="/logo.png" 
            alt="Marca d'água Alimenta SUS" 
            width={600} 
            height={600} 
            className="w-[90%] md:w-[70%] max-w-lg object-contain"
            priority 
          />
        </div>

        {/* Conteúdo Principal */}
        <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center gap-y-4 md:gap-y-6">
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#004D33] leading-tight">
            No<br className="md:hidden" /> Alimenta SUS
          </h1>
          
          <p className="text-[#004D33] text-base md:text-xl font-medium leading-relaxed max-w-xs md:max-w-none">
            faremos perguntas breves a você,
            e com isso passar-lhe dicas e orientações
            para apoiar na sua alimentação.
          </p>

          <button
            onClick={() => router.push("/triagem/perfil")}
            className="w-full max-w-sm md:max-w-none bg-[#ff0033] text-white text-xl md:text-2xl font-bold py-4 md:py-5 rounded-2xl shadow-lg hover:brightness-110 active:scale-95 transition-all mt-4"
          >
            Continuar
          </button>
        </div>

        {/* Botões de Acessibilidade Fixos */}
        <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-50">
          <button className="bg-[#005bb5] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
          <button className="bg-[#005bb5] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
            </svg>
          </button>
        </div>
      </main>
    </Layout>
  );
}