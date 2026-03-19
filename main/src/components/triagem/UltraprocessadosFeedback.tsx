import React from "react";
import Link from "next/link";
import { 
  Clock, XCircle, Utensils, BookOpen, 
  LayoutDashboard, ChevronDown, Heart, Search, 
  PlusCircle, Sparkles, HelpCircle, LayoutGrid, ArrowRight 
} from "lucide-react";

interface Props {
  consumiu: string;
}

export default function UltraprocessadosFeedback({ consumiu }: Props) {
  const isSim = consumiu === "Sim";
  const isNaoSei = consumiu === "Não sei";

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. MENSAGEM INICIAL */}
      <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#004D33]/10 mb-8 w-full">
        <p className="text-[#004D33] text-lg font-medium text-center leading-relaxed">
          {isSim && "“Alguns alimentos são muito práticos, mas não ajudam no crescimento saudável da criança. Que tal pensarmos em outras estratégias?”"}
          {!isSim && !isNaoSei && "“Muito bom! Evitar ultraprocessados ajuda a formar hábitos saudáveis. Confiram algumas estratégias para cultivar esses hábitos.”"}
          {isNaoSei && "“O primeiro passo para uma rotina saudável é identificar o que estamos comendo. Vamos entender melhor?”"}
        </p>
      </div>

      {/* 2. CONTEÚDO DINÂMICO (ACCORDIONS E CARDS) */}
      <div className="w-full space-y-4 mb-8">
        
        {/* SITUAÇÃO: NÃO SEI */}
        {isNaoSei && (
          <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#D97706]/20 flex flex-col items-center">
            <div className="bg-[#FFC107] p-4 rounded-full mb-4 shadow-inner">
              <Search size={40} className="text-[#004D33]" />
            </div>
            <p className="text-[#4B2C20] text-center mb-6 leading-relaxed">
              Ultraprocessados são produtos industriais com muitos aditivos, como <strong>corantes, conservantes e excesso de açúcar</strong>.
            </p>
            <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-6 shadow-md">
              <img 
                src="/ultraprocessados-info.jpg" 
                alt="Exemplos de ultraprocessados" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-[#FDF8E6] p-3 rounded-xl border border-[#FFC107]/30 text-center font-bold text-[#004D33]">🥤 Refris</div>
              <div className="bg-[#FDF8E6] p-3 rounded-xl border border-[#FFC107]/30 text-center font-bold text-[#004D33]">🍪 Bolachas</div>
            </div>
          </div>
        )}

        {/* SITUAÇÃO: SIM */}
        {isSim && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">O que podemos ajustar?</h3>
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Clock className="text-[#004D33]" size={22} /> A – Falta de tempo</div>
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Comida caseira também pode ser rápida, prática e é muito mais saudável.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold"><LayoutDashboard size={20} /> Card: “Comida de verdade”</div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><XCircle className="text-[#dc2743]" size={22} /> B – Recompensa</div>
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Ultraprocessados não devem ser prêmio ou castigo.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  Imagem: Pacote de salgadinhos com proibido
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Utensils className="text-[#4F8A35]" size={22} /> C – Estimulação</div>
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Estimule o consumo de frutas na sobremesa e lanches da tarde.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#4F8A35]/20 flex items-center gap-3 text-sm font-bold text-[#4F8A35]"><Sparkles size={20} /> Receita fácil de sobremesa</div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><PlusCircle className="text-[#D97706]" size={22} /> D – Compra constante</div>
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Evite a compra constante desses produtos, escolha opções naturais.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic">Imagem: Snacks saudáveis</div>
              </div>
            </details>
          </>
        )}

        {/* SITUAÇÃO: NÃO */}
        {!isSim && !isNaoSei && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">Como manter esse hábito?</h3>
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Heart className="text-[#dc2743]" size={22} /> A – Incentivo</div>
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Manter comida caseira e frutas disponíveis facilita escolhas saudáveis.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic">Imagem: Snacks saudáveis</div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><BookOpen className="text-[#004D33]" size={22} /> B – Rótulos</div>
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Ingredientes com nomes estranhos podem indicar que o produto é ultraprocessado.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold"><HelpCircle size={20} /> Infográfico: Leitura de rótulos</div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Utensils className="text-[#4F8A35]" size={22} /> C – Novas Receitas</div>
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Explore novas receitas para evitar que a criança enjoe da comida caseira.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#4F8A35]/20 flex items-center gap-3 text-sm font-bold text-[#4F8A35]"><PlusCircle size={20} /> Link: Receitas Saudáveis</div>
              </div>
            </details>
          </>
        )}
      </div>

      {/* 3. BLOCO DE AÇÃO (BOTÃO AMARELO PARA O HUB - PASSO 5) */}
      <div className="p-8 bg-[#004D33] rounded-[35px] text-white shadow-2xl w-full">
        <p className="font-bold text-center text-lg mb-6 leading-tight italic">
          {isSim && "“Que tal planejar refeições com comida caseira?”"}
          {!isSim && !isNaoSei && "✨ “Continue assim!”"}
          {isNaoSei && "“Que tal aprender a identificar esses produtos no mercado?”"}
        </p>
        <Link href="/triagem/5">
          <button className="w-full bg-[#FFC107] text-[#004D33] py-5 rounded-[20px] font-extrabold text-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-3">
            {isSim ? "👉 Planejar refeições" : "👉 Dicas de rotina saudável"}
          </button>
        </Link>
      </div>

      {/* BOTÃO VERDE (NAVEGAÇÃO PARA A PRÓXIMA PERGUNTA - PASSO 10) */}
      <Link href="/triagem/10" className="w-full mt-10 mb-10">
        <div className="w-full bg-[#004D33] text-white rounded-[15px] py-4 flex items-center justify-center gap-3 shadow-lg opacity-80 cursor-pointer transition-transform active:scale-95">
          <span className="font-bold uppercase tracking-wider text-sm">Próxima Etapa</span>
          <ArrowRight size={20} />
        </div>
      </Link>
    </div>
  );
}