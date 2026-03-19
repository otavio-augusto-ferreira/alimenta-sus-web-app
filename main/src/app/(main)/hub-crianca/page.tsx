"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, BookOpen, Volume2, ArrowRight, X, Download } from "lucide-react";

export default function HubCriancaPage() {
  // Estado para controlar se o PDF está aberto ou fechado
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <main className="fundo-com-logo flex min-h-screen flex-col items-center justify-center p-6 bg-[#fdfaf5]">
      
      {/* --- CONTEÚDO PRINCIPAL DA PÁGINA --- */}
      <div className="w-full max-w-md flex flex-col items-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <h1 className="text-3xl font-bold text-[#004D33] mb-10 text-center">
          Recursos Saudáveis
        </h1>

        <div className="flex flex-col gap-5 w-full">
          
          {/* Botão do Instagram */}
          <a 
            href="https://instagram.com/nutrividaufms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-gray-100 hover:scale-[1.02] hover:shadow-md transition-all duration-300 group"
          >
            <div className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-3 rounded-2xl text-white shadow-sm group-hover:rotate-12 transition-transform">
              <Instagram size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[#008080] font-bold text-lg leading-tight">NutriVida UFMS</h2>
              <p className="text-gray-400 text-sm font-medium">Siga para mais dicas!</p>
            </div>
          </a>

          {/* Botão Guia de Alimentação - AGORA ABRE O MODAL! */}
          <button 
            onClick={() => setIsPdfOpen(true)}
            className="w-full bg-[#facc15] text-[#004D33] font-bold py-5 rounded-3xl shadow-sm border border-yellow-400 hover:bg-[#eab308] transition-all duration-300 hover:scale-[1.02] hover:shadow-md flex items-center justify-center gap-3 text-lg"
          >
            <BookOpen size={24} strokeWidth={2.5} />
            Guia de Alimentação
          </button>

          {/* Botão Histórias Infantis */}
          <button className="w-full bg-[#004D33] text-white font-bold py-5 rounded-3xl shadow-sm hover:bg-[#003d29] transition-all duration-300 hover:scale-[1.02] hover:shadow-md flex items-center justify-center gap-3 text-lg">
            <Volume2 size={24} strokeWidth={2.5} />
            Histórias Infantis
          </button>

        </div>

        <Link 
          href="/conclusao" 
          className="mt-12 text-[#004D33] font-bold hover:opacity-70 transition-opacity flex items-center gap-2 text-sm uppercase tracking-wide underline decoration-2 underline-offset-4"
        >
          Finalizar Triagem <ArrowRight size={18} />
        </Link>

      </div>

      {/* --- MODAL DO PDF --- */}
      {isPdfOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          
          {/* Caixa do Modal */}
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
            
            {/* Cabeçalho do Modal (Verde) */}
            <div className="flex items-center justify-between p-4 bg-[#004D33] text-white">
              <h2 className="font-bold flex items-center gap-2">
                <BookOpen size={20} /> Guia de Alimentação
              </h2>
              
              <div className="flex items-center gap-3">
                {/* Botão de Download Direto */}
                <a 
                  href="/guia-alimentar.pdf" 
                  download="Guia_Alimentar_Infantil.pdf"
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-colors flex items-center gap-2 text-sm font-bold px-4"
                >
                  <Download size={18} /> Baixar
                </a>
                
                {/* Botão Fechar */}
                <button 
                  onClick={() => setIsPdfOpen(false)}
                  className="bg-red-500 hover:bg-red-600 p-2 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Visualizador do PDF embutido */}
            <iframe 
              src="/guia-alimentar.pdf" 
              className="w-full flex-1 bg-gray-100"
              title="Visualizador do Guia de Alimentação"
            />
            
          </div>
        </div>
      )}

    </main>
  );
}