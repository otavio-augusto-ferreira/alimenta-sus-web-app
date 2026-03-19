"use client"

import React from "react";
import { 
  HelpCircle, XCircle, Users, Droplets, 
  ChevronDown, BookOpen, Volume2, Gauge, Utensils, Heart, Sparkles 
} from "lucide-react";
import Link from "next/link";

interface Props {
  isInfantil: boolean;
  resposta: string;
}

export default function BebidasFeedback({ isInfantil, resposta }: Props) {
  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. MENSAGEM INICIAL */}
      <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#004D33]/10 mb-8 w-full">
        <p className="text-[#004D33] text-lg font-medium text-center leading-relaxed italic">
          {resposta === "Sim" && "“Vamos conversar sobre as bebidas do dia a dia? Algumas parecem práticas, mas não ajudam na saúde da criança.”"}
          {resposta === "Não" && "“Parabéns! Evitar bebidas adoçadas protege a saúde e ajuda a criança a gostar de alimentos naturais.”"}
          {resposta === "Não sei" && "“As bebidas que oferecemos podem conter muito açúcar 'escondido'. Vamos entender melhor?”"}
        </p>
      </div>

      {/* 2. CONTEÚDO DINÂMICO BASEADO NO ROTEIRO */}
      {resposta === "Não sei" ? (
        <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#D97706]/20 flex flex-col items-center mb-8 w-full">
          <div className="bg-[#FFC107] p-4 rounded-full mb-4 shadow-inner">
            <HelpCircle size={40} className="text-[#004D33]" />
          </div>
          <p className="text-[#4B2C20] text-center mb-6 leading-relaxed">
            Muitas bebidas prontas têm **açúcar e aditivos** que não são indicados para crianças.
          </p>
          <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-6 shadow-md bg-gray-100 flex items-center justify-center">
             <img src="/bebidas-info.jpg" alt="Bebidas" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://placehold.co/400x200?text=Bebidas+Adoçadas'} />
          </div>
        </div>
      ) : (
        <div className="w-full space-y-4 mb-8">
          {resposta === "Sim" ? (
            <>
              {/* OBSTÁCULO A */}
              <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden">
                <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33]">
                  <div className="flex items-center gap-3"><XCircle className="text-[#dc2743]" size={22} /> A - Costume e aditivos</div>
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                  <p className="mb-4 text-sm">“Essas bebidas têm açúcar e aditivos e não são indicadas para crianças.”</p>
                  <div className="bg-white p-3 rounded-xl border border-[#dc2743]/20 flex items-center gap-3 text-xs font-bold uppercase"><BookOpen size={18} /> Card: Bebidas não saudáveis</div>
                </div>
              </details>

              {/* OBSTÁCULO B */}
              <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden">
                <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33]">
                  <div className="flex items-center gap-3"><Users className="text-[#D97706]" size={22} /> B - Pedido da criança</div>
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                  <p className="mb-4 text-sm">“Evitar ter essas bebidas em casa ajuda muito. Pais e responsáveis são referência.”</p>
                  <div className="bg-white p-3 rounded-xl border border-[#D97706]/20 flex items-center gap-3 text-xs font-bold uppercase"><Volume2 size={18} /> Áudio para responsáveis</div>
                </div>
              </details>

              {/* OBSTÁCULO C */}
              <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden">
                <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33]">
                  <div className="flex items-center gap-3"><Droplets className="text-[#3498db]" size={22} /> C - Substituições</div>
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                  <p className="mb-4 text-sm">“O ideal é oferecer água ao longo do dia. Que tal levar uma garrafa sempre que sair?”</p>
                  <div className="w-full h-32 bg-gray-50 rounded-lg flex items-center justify-center text-[10px] text-gray-400 italic text-center p-4">[Imagem: Criança segurando uma garrafa de água]</div>
                </div>
              </details>
            </>
          ) : (
            <>
              {/* ESTRATÉGIA A (RESPOSTA NÃO) */}
              <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden">
                <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33]">
                  <div className="flex items-center gap-3"><Droplets className="text-[#3498db]" size={22} /> A - Água como principal</div>
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                  <p className="mb-4 text-sm">“Continue oferecendo água ao longo do dia, especialmente após brincadeiras.”</p>
                  <div className="w-full h-24 bg-gray-50 rounded-lg flex items-center justify-center text-[10px] text-gray-400">Imagem: Garrafinha de água</div>
                </div>
              </details>

              {/* ESTRATÉGIA B */}
              <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden">
                <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33]">
                  <div className="flex items-center gap-3"><Gauge className="text-[#FFC107]" size={22} /> B - Atenção à publicidade</div>
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                  <p className="mb-4 text-sm">“Algumas bebidas parecem saudáveis, mas também são adoçadas. Vale sempre observar.”</p>
                  <div className="bg-[#FFC107]/20 p-3 rounded-xl border border-[#FFC107] text-xs font-bold text-center uppercase">Card Educativo: Rótulos</div>
                </div>
              </details>

              {/* ESTRATÉGIA C */}
              <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden">
                <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33]">
                  <div className="flex items-center gap-3"><Utensils className="text-[#4F8A35]" size={22} /> C - Alternativas Naturais</div>
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                  <p className="mb-4 text-sm">“Sucos naturais e água de coco são boas alternativas, mas não substituem a água.”</p>
                  <div className="w-full h-24 bg-gray-50 rounded-lg flex items-center justify-center text-[10px] text-gray-400">Imagem: Suco de laranja e coco</div>
                </div>
              </details>
            </>
          )}
        </div>
      )}

      {/* 3. ENCERRAMENTO E CTA */}
<div className="p-8 bg-[#004D33] rounded-[35px] text-white shadow-2xl w-full">
  <p className="font-bold text-center text-lg mb-6 leading-tight italic">
    {resposta === "Sim" ? "“Que tal trocar as bebidas adoçadas por água?”" : "✨ “Continue com esse cuidado!”"}
  </p>
  
  {/* Este botão amarelo é o que direciona para o HUB INFANTIL */}
  <Link href="/triagem/5" className="block">
    <button className="w-full bg-[#FFC107] text-[#004D33] py-5 rounded-[20px] font-extrabold text-xl shadow-lg active:scale-95 transition-transform">
       {resposta === "Não" ? "👉 Mais dicas saudáveis" : "👉 Dicas para consumir água"}
    </button>
  </Link>
</div>
    </div>
  );
}