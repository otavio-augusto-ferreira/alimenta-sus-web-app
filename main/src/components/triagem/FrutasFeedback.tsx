import React from "react";
import Link from "next/link";
import { 
  Apple, Frown, Palette, Candy, Users, 
  CheckCircle, Search, ArrowRight, LayoutGrid, 
  Smile, Utensils 
} from "lucide-react";

interface Props {
  consumiu: string;
}

export default function FrutasFeedback({ consumiu }: Props) {
  const isSim = consumiu === "Sim";
  const isNaoSei = consumiu === "Não sei";

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. MENSAGEM INICIAL */}
      <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#004D33]/10 mb-8 w-full">
        <p className="text-[#004D33] text-lg font-medium text-center leading-relaxed">
          {isSim && "🍎 “Parabéns! Comer frutas ajuda no crescimento e no intestino.”"}
          {!isSim && !isNaoSei && "“As frutas dão energia e fazem parte de uma alimentação saudável. Vamos pensar juntos em como oferecer frutas todos os dias?”"}
          {isNaoSei && "“As frutas são a sobremesa perfeita da natureza. Vamos aprender a identificá-las?”"}
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
              Frutas são alimentos doces naturais, ricos em fibras e água, como <strong>banana, maçã, laranja e mamão</strong>.
            </p>
            <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-6 shadow-md bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200">
               <span className="text-gray-400 font-bold text-xs uppercase">FOTO: Fruteira Variada</span>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-[#FDF8E6] p-3 rounded-xl border border-[#FFC107]/30 text-center font-bold text-[#004D33]">⚡ Energia</div>
              <div className="bg-[#FDF8E6] p-3 rounded-xl border border-[#FFC107]/30 text-center font-bold text-[#004D33]">🚽 Intestino</div>
            </div>
          </div>
        )}

        {/* SITUAÇÃO: NÃO (OBSTÁCULOS) */}
        {!isSim && !isNaoSei && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">Desafios comuns:</h3>
            
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Frown className="text-[#dc2743]" size={22} /> A – Recusa</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“A recusa é comum. Continue oferecendo frutas diariamente, respeitando a aceitação.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <CheckCircle size={20} /> Card: ‘Oferecer sempre, respeitando a criança’
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Palette className="text-[#D97706]" size={22} /> B – Pouca variedade</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Variar as frutas amplia os sabores e os nutrientes. Valorize frutas da região.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <Apple size={20} className="text-[#004D33]" /> Infográfico: ‘Frutas do Brasil’
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Candy className="text-[#dc2743]" size={22} /> C – Preferência por doces</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Oferecer frutas como sobremesa ajuda a substituir doces e guloseimas.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  FOTO: Card Educativo (Fruta vs Doce)
                </div>
              </div>
            </details>
          </>
        )}

        {/* SITUAÇÃO: SIM (ESTRATÉGIAS) */}
        {isSim && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">Para continuar melhorando:</h3>
            
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Palette className="text-[#d946ef]" size={22} /> A – Diversidade</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Quanto maior a variedade de frutas, maior a diversidade de nutrientes.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  FOTO: Salada de frutas colorida
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Smile className="text-[#004D33]" size={22} /> B – Autonomia</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Manter frutas ao alcance da criança ajuda na escolha e no consumo espontâneo.”</p>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Users className="text-[#D97706]" size={22} /> C – Família</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Quando a família consome frutas junto, a criança aprende pelo exemplo.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  FOTO: Família comendo frutas
                </div>
              </div>
            </details>
          </>
        )}
      </div>

      {/* 3. BLOCO DE AÇÃO (BOTÃO AMARELO -> HUB) */}
      <div className="p-8 bg-[#004D33] rounded-[35px] text-white shadow-2xl w-full">
        {/* Lista especial para o caso "NÃO" conforme roteiro */}
        {!isSim && !isNaoSei && (
          <div className="mb-6 bg-[#ffffff]/10 p-4 rounded-xl">
             <p className="font-bold mb-3 text-center">Que tal garantir fruta hoje?</p>
             <ul className="space-y-2 text-sm">
               <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFC107]"/> In natura</li>
               <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFC107]"/> Em salada de frutas</li>
               <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFC107]"/> Misturada com iogurte natural</li>
             </ul>
          </div>
        )}

        <p className="font-bold text-center text-lg mb-6 leading-tight italic">
          {isSim && "✨ “Continue com esse cuidado diário!”"}
          {!isSim && !isNaoSei && "“Formas práticas de oferecer frutas:”"}
          {isNaoSei && "“Vamos descobrir novos sabores?”"}
        </p>
        
        <Link href="/triagem/5">
          <button className="w-full bg-[#FFC107] text-[#004D33] py-5 rounded-[20px] font-extrabold text-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-3">
            {isSim ? "👉 Variar frutas da semana" : "👉 Formas práticas de oferecer"}
          </button>
        </Link>
      </div>

      {/* 4. BOTÃO DE NAVEGAÇÃO (VERDE -> PRÓXIMA PERGUNTA) */}
      <Link href="/triagem/14" className="w-full mt-10 mb-10">
        <div className="w-full bg-[#004D33] text-white rounded-[15px] py-4 flex items-center justify-center gap-3 shadow-lg opacity-80 cursor-pointer transition-transform active:scale-95">
          <span className="font-bold uppercase tracking-wider text-sm">Próxima Etapa</span>
          <ArrowRight size={20} />
        </div>
      </Link>
    </div>
  );
}