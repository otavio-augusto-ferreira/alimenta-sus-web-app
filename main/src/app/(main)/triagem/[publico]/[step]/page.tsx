"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronDown, ChevronUp, HelpCircle, 
  Utensils, BookOpen, Clock, Users, Sparkles,
  Droplets, CupSoda, Apple, Carrot, Tv, Smartphone, 
  Gamepad2, Snowflake, ChefHat, Tag, Ban, HandHeart, 
  AlertCircle, Sprout
} from "lucide-react";
import { todosRoteiros } from "@/data/roteiros"; 
import { FeedbackComCards, FeedbackNaoSei } from "@/types/triagem";

// Componente visual da sanfona com ÍCONES INTELIGENTES
function AccordionCard({ titulo, texto, recurso }: { titulo: string, texto: string, recurso?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Função autônoma e criativa: Escolhe o ícone baseado no texto do título!
  const renderIcon = (textoTitulo: string) => {
    const t = textoTitulo.toLowerCase();
    const iconClasses = "transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 group-hover:text-[#e2954a]";
    
    // Mapeamento inteligente de palavras-chave para ícones
    if (t.includes("água") || t.includes("bebida")) return <Droplets size={22} className={iconClasses} />;
    if (t.includes("refrigerante") || t.includes("suco")) return <CupSoda size={22} className={iconClasses} />;
    if (t.includes("fruta") || t.includes("doce") || t.includes("sobremesa")) return <Apple size={22} className={iconClasses} />;
    if (t.includes("legume") || t.includes("verdura") || t.includes("vegetal") || t.includes("cor")) return <Carrot size={22} className={iconClasses} />;
    if (t.includes("feijão") || t.includes("leguminosa")) return <Sprout size={22} className={iconClasses} />;
    if (t.includes("tela") || t.includes("tv")) return <Tv size={22} className={iconClasses} />;
    if (t.includes("celular") || t.includes("tablet")) return <Smartphone size={22} className={iconClasses} />;
    if (t.includes("brincadeira") || t.includes("distra")) return <Gamepad2 size={22} className={iconClasses} />;
    if (t.includes("tempo") || t.includes("praticidade") || t.includes("rotina") || t.includes("horário")) return <Clock size={22} className={iconClasses} />;
    if (t.includes("congelar")) return <Snowflake size={22} className={iconClasses} />;
    if (t.includes("família") || t.includes("companhia") || t.includes("exemplo")) return <Users size={22} className={iconClasses} />;
    if (t.includes("recompensa") || t.includes("castigo") || t.includes("ultraprocessado")) return <Ban size={22} className={iconClasses} />;
    if (t.includes("preparo") || t.includes("receita") || t.includes("caseira") || t.includes("cozinhar")) return <ChefHat size={22} className={iconClasses} />;
    if (t.includes("rótulo") || t.includes("publicidade")) return <Tag size={22} className={iconClasses} />;
    if (t.includes("autonomia")) return <HandHeart size={22} className={iconClasses} />;
    if (t.includes("recusa")) return <AlertCircle size={22} className={iconClasses} />;
    
    // Ícone padrão caso não encontre nenhuma palavra-chave
    return <Utensils size={22} className={iconClasses} />;
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm mb-3 overflow-hidden border border-gray-100 group transition-all duration-300 hover:shadow-md hover:border-green-100">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-4 flex justify-between items-center text-left font-bold text-[#004D33]">
        <div className="flex items-center gap-3">
          <div className="bg-[#fdfaf5] p-2 rounded-full text-[#004D33]">
            {renderIcon(titulo)}
          </div>
          <span className="group-hover:text-[#e2954a] transition-colors">{titulo}</span>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-[#e2954a] transition-transform duration-300" />
        ) : (
          <ChevronDown size={20} className="text-gray-300 group-hover:text-[#e2954a] group-hover:translate-y-1 transition-all duration-300" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-4 pt-0 text-[#004D33] opacity-90 border-t border-gray-50 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="mb-3 leading-relaxed">{texto}</p>
          {recurso && (
            <span className="text-xs font-bold text-[#e2954a] bg-orange-50 px-3 py-1.5 rounded-lg inline-flex items-center gap-1 w-fit shadow-sm border border-orange-100">
              <BookOpen size={14} />
              Recurso: {recurso}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default function TriagemTemplatePage({ params }: { params: { publico: string, step: string } }) {
  const router = useRouter();
  const currentStep = parseInt(params.step, 10);
  const publicoAlvo = params.publico; 
  
  const [respostaAtual, setRespostaAtual] = useState<"Sim" | "Não" | "Não sei" | null>(null);

  const roteiroDoPublico = todosRoteiros[publicoAlvo];
  
  if (!roteiroDoPublico) {
    return <div className="p-10 text-center font-bold text-[#004D33]">Público não encontrado.</div>;
  }

  const itemRoteiro = roteiroDoPublico.find(r => r.id === currentStep);

  if (!itemRoteiro) {
    return <div className="p-10 text-center font-bold text-[#004D33]">Fim da triagem ou rota inválida!</div>;
  }

  // --- RENDERIZAÇÃO DA PERGUNTA ---
  if (!respostaAtual) {
    
    // MÁGICA AQUI: Identifica se a pergunta é sobre telas para mudar o texto do botão amarelo!
    const perguntaMinuscula = itemRoteiro.pergunta.toLowerCase();
    const isPerguntaTelas = perguntaMinuscula.includes("tv") || perguntaMinuscula.includes("celular") || perguntaMinuscula.includes("tablet");
    const textoTerceiroBotao = isPerguntaTelas ? "Às vezes" : "Não sei";

    return (
      <main className="fundo-com-logo flex min-h-screen flex-col items-center p-6 bg-[#fdfaf5]">
        <div className="w-full max-w-md flex flex-col items-center mt-10">
          
          <h1 className="text-3xl font-bold text-[#004D33] mb-2 text-center leading-tight relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {itemRoteiro.pergunta}
          </h1>
          
          {itemRoteiro.subtexto && (
            <p className="text-[#004D33] text-center mb-8 opacity-70 text-sm px-4 animate-in fade-in duration-700">
              {itemRoteiro.subtexto}
            </p>
          )}

          <div className="flex flex-col gap-4 w-full mt-6 relative z-10">
             <button onClick={() => setRespostaAtual("Sim")} className="w-full text-white text-xl font-bold py-5 rounded-3xl transition-all shadow-md bg-[#004D33] hover:bg-[#003d29] hover:scale-[1.02] active:scale-95">Sim</button>
             <button onClick={() => setRespostaAtual("Não")} className="w-full text-white text-xl font-bold py-5 rounded-3xl transition-all shadow-md bg-[#e2954a] hover:bg-[#c9803b] hover:scale-[1.02] active:scale-95">Não</button>
             
             {/* O botão usa a variável inteligente textoTerceiroBotao, mas continua salvando como "Não sei" */}
             <button onClick={() => setRespostaAtual("Não sei")} className="w-full text-[#004D33] text-xl font-bold py-5 rounded-3xl transition-all shadow-md bg-[#facc15] hover:bg-[#eab308] hover:scale-[1.02] active:scale-95">
                {textoTerceiroBotao}
             </button>
          </div>
          
          {currentStep > 1 && (
            <button 
              onClick={() => router.push(`/triagem/${publicoAlvo}/${currentStep - 1}`)}
              className="mt-8 text-sm text-[#004D33] font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              Voltar para a pergunta anterior
            </button>
          )}
        </div>
      </main>
    );
  }

  // --- RENDERIZAÇÃO DO FEEDBACK ---
  const respostaChave = respostaAtual === "Sim" ? "sim" : respostaAtual === "Não" ? "nao" : "naoSei";
  const feedback = itemRoteiro[respostaChave];
  
  const isComCards = (f: any): f is FeedbackComCards => "cards" in f;
  const isNaoSei = (f: any): f is FeedbackNaoSei => "tituloCard" in f;

  const layout = isNaoSei(feedback) ? "img4" : (feedback.tipo === "estrategia" ? "img2" : "img3");

  return (
    <main className="fundo-com-logo flex min-h-screen flex-col items-center p-6 bg-[#fdfaf5] animate-in fade-in duration-500">
      <div className="w-full max-w-md flex flex-col items-center mt-6 relative z-10">
        
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#e2954a]"></div>
          <p className="text-[#004D33] font-medium text-lg italic">"{feedback.intro}"</p>
        </div>

        {isComCards(feedback) && (
          <>
            <h3 className="w-full text-left font-bold text-[#004D33] mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <Sparkles size={16} className="text-[#e2954a]" />
              {layout === "img2" ? "Como aprimorar essa prática?" : "O que está dificultando?"}
            </h3>
            <div className="w-full mb-6">
              {feedback.cards.map((card, idx) => (
                <AccordionCard key={idx} titulo={card.titulo} texto={card.texto} recurso={card.recurso} />
              ))}
            </div>
          </>
        )}

        {isNaoSei(feedback) && (
          <div className="w-full bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
             <div className="bg-[#facc15] text-white p-3 rounded-full mb-4 shadow-sm animate-bounce"><HelpCircle size={32} /></div>
             <h3 className="text-xl font-bold text-[#004D33] mb-2">{feedback.tituloCard}</h3>
             <p className="text-[#004D33] opacity-80 mb-6 text-sm leading-relaxed">{feedback.textoCard}</p>
             <div className="w-full h-32 bg-gray-100 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-gray-200">
               <span className="text-gray-400 font-medium text-sm">Imagem Ilustrativa</span>
             </div>
             <div className="flex flex-wrap justify-center gap-2">
               {feedback.tags.map((tag, idx) => (
                 <span key={idx} className="bg-green-50 text-[#004D33] px-3 py-1 rounded-full text-xs font-bold border border-green-100">{tag}</span>
               ))}
             </div>
          </div>
        )}

        <div className="w-full bg-[#004D33] rounded-3xl p-6 flex flex-col items-center text-center shadow-xl mb-4 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl pointer-events-none"></div>

          {feedback.ctaTexto && (
            <div className="flex items-start gap-3 mb-5 mt-2">
              <Sparkles size={28} className="text-[#facc15] animate-pulse shrink-0 drop-shadow-md" />
              <p className="text-white font-medium text-lg italic text-left leading-snug">"{feedback.ctaTexto}"</p>
            </div>
          )}
          
          {isComCards(feedback) && feedback.checklist && (
            <div className="w-full flex flex-col items-start gap-3 mb-6 bg-white/10 p-5 rounded-2xl border border-white/20">
              {feedback.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center text-white gap-3 group">
                  <div className="bg-white text-[#004D33] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 transition-transform group-hover:scale-110">✓</div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          )}

          <Link href={`/hub-${publicoAlvo}`} className="w-full">
            <button className="w-full bg-[#facc15] text-[#004D33] font-bold py-4 rounded-2xl shadow hover:bg-[#eab308] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group">
              <span className="group-hover:translate-x-1 transition-transform">👉</span> {feedback.btnAmareloTexto}
            </button>
          </Link>
        </div>

        {currentStep < roteiroDoPublico.length ? (
          <Link href={`/triagem/${publicoAlvo}/${currentStep + 1}`} className="w-full" onClick={() => setRespostaAtual(null)}>
             <button className="w-full bg-transparent text-[#004D33] font-bold py-4 rounded-xl transition-colors flex flex-col items-center justify-center gap-2 text-sm uppercase tracking-wide hover:bg-black/5">
                Avançar para próxima etapa →
             </button>
          </Link>
        ) : (
          <Link href="/conclusao" className="w-full">
             <button className="w-full bg-transparent text-[#004D33] font-bold py-4 rounded-xl transition-colors flex flex-col items-center justify-center gap-2 text-sm uppercase tracking-wide hover:bg-black/5">
                Finalizar Triagem →
             </button>
          </Link>
        )}

      </div>
    </main>
  );
}