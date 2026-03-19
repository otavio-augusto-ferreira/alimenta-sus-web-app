import React from "react";
import Link from "next/link";
import { 
  Carrot, XCircle, Clock, Users, 
  Snowflake, ChefHat, Palette, 
  ArrowRight, Search, BookOpen, Leaf 
} from "lucide-react";

interface Props {
  consumiu: string;
}

export default function LegumesFeedback({ consumiu }: Props) {
  const isSim = consumiu === "Sim";
  const isNaoSei = consumiu === "Não sei";

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. MENSAGEM INICIAL */}
      <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#004D33]/10 mb-8 w-full">
        <p className="text-[#004D33] text-lg font-medium text-center leading-relaxed">
          {isSim && "“Ótimo! Legumes e verduras ajudam a proteger a saúde. Que tal manter essa prática usando mais estratégias?”"}
          {!isSim && !isNaoSei && "“Legumes e verduras ajudam no crescimento e deixam o prato mais colorido e divertido. Que tal colocá-los na dieta?”"}
          {isNaoSei && "“Legumes e verduras são as principais fontes de vitaminas e minerais. Vamos ver como identificá-los?”"}
        </p>
      </div>

      {/* 2. CONTEÚDO DINÂMICO */}
      <div className="w-full space-y-4 mb-8">
        
        {/* SITUAÇÃO: NÃO SEI (PADRÃO VISUAL) */}
        {isNaoSei && (
          <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#D97706]/20 flex flex-col items-center">
            <div className="bg-[#FFC107] p-4 rounded-full mb-4 shadow-inner">
              <Search size={40} className="text-[#004D33]" />
            </div>
            <p className="text-[#4B2C20] text-center mb-6 leading-relaxed">
              São partes de plantas (folhas, flores, frutos, caules) que comemos, como <strong>alface, cenoura, tomate e brócolis</strong>.
            </p>
            <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-6 shadow-md bg-gray-100 flex items-center justify-center">
               <span className="text-gray-400 font-bold text-xs uppercase">FOTO: Cesta de Legumes Variados</span>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-[#FDF8E6] p-3 rounded-xl border border-[#FFC107]/30 text-center font-bold text-[#004D33]">🥗 Vitaminas</div>
              <div className="bg-[#FDF8E6] p-3 rounded-xl border border-[#FFC107]/30 text-center font-bold text-[#004D33]">🛡️ Imunidade</div>
            </div>
          </div>
        )}

        {/* SITUAÇÃO: NÃO (OBSTÁCULOS) */}
        {!isSim && !isNaoSei && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">Vencendo os desafios:</h3>
            
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><XCircle className="text-[#dc2743]" size={22} /> A – Recusa</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“A recusa será muito comum no início. Continue oferecendo sem obrigar até ela se acostumar.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <BookOpen size={20} /> Card: Como ofertar sem brigar
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Clock className="text-[#004D33]" size={22} /> B – Falta de tempo</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Que tal preparar e congelar os legumes? Assim é só descongelar e colocar no prato. Super prático.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <Snowflake size={20} className="text-[#004D33]" /> Vídeo: Como congelar legumes
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Users className="text-[#D97706]" size={22} /> C – Falta de costume</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“As crianças repetem o que veem. Se a família come legumes, a criança também irá comer.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  FOTO: Família comendo salada
                </div>
              </div>
            </details>
          </>
        )}

        {/* SITUAÇÃO: SIM (ESTRATÉGIAS) */}
        {isSim && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">Dicas para variar:</h3>
            
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Palette className="text-[#d946ef]" size={22} /> A – Incentivar hábitos</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Variar cores e preparações mantém o interesse da criança.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  FOTO: Prato colorido infantil
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><ChefHat className="text-[#004D33]" size={22} /> B – Receitas novas</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Fazer receitas novas evita que a criança enjoe e introduz variedades.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <BookOpen size={20} /> Link: Receitas Saudáveis
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Snowflake className="text-[#3b82f6]" size={22} /> C – Praticidade</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Congelar legumes cozidos é uma ótima opção para dias corridos.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <Snowflake size={20} /> Link: Guia de Congelamento
                </div>
              </div>
            </details>
          </>
        )}
      </div>

      {/* 3. BLOCO DE AÇÃO (BOTÃO AMARELO -> HUB) */}
      <div className="p-8 bg-[#004D33] rounded-[35px] text-white shadow-2xl w-full">
        <p className="font-bold text-center text-lg mb-6 leading-tight italic">
          {isSim && "✨ “Continue a manter essa alimentação!”"}
          {!isSim && !isNaoSei && "“Vamos experimentar uma cor nova no prato hoje?”"}
          {isNaoSei && "“Que tal começarmos conhecendo os legumes na feira?”"}
        </p>
        <Link href="/triagem/5">
          <button className="w-full bg-[#FFC107] text-[#004D33] py-5 rounded-[20px] font-extrabold text-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-3">
            {isSim ? "👉 Dicas para manter a rotina" : "👉 Ideias de preparos com legumes"}
          </button>
        </Link>
      </div>

      {/* 4. BOTÃO DE NAVEGAÇÃO (VERDE -> PRÓXIMA PERGUNTA) */}
      <Link href="/triagem/12" className="w-full mt-10 mb-10">
        <div className="w-full bg-[#004D33] text-white rounded-[15px] py-4 flex items-center justify-center gap-3 shadow-lg opacity-80 cursor-pointer transition-transform active:scale-95">
          <span className="font-bold uppercase tracking-wider text-sm">Próxima Etapa</span>
          <ArrowRight size={20} />
        </div>
      </Link>
    </div>
  );
}