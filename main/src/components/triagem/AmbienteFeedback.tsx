import React from "react";
import Link from "next/link";
import { 
  Monitor, Clock, MapPin, Gamepad2, 
  Users, Coffee, Smile, ArrowRight, 
  CheckCircle, ListChecks, Volume2 
} from "lucide-react";

interface Props {
  consumiu: string;
}

export default function AmbienteFeedback({ consumiu }: Props) {
  // ATENÇÃO: Aqui a lógica inverte. "Sim" significa que usa telas (hábito a corrigir).
  const usaTelas = consumiu === "Sim" || consumiu === "Às vezes";
  const naoUsaTelas = consumiu === "Não";

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. MENSAGEM INICIAL */}
      <div className="bg-white rounded-[30px] p-6 shadow-xl border border-[#004D33]/10 mb-8 w-full">
        <p className="text-[#004D33] text-lg font-medium text-center leading-relaxed">
          {usaTelas && "“O ambiente onde a criança se alimenta influencia quanto e como ela come. Vamos conversar sobre isso?”"}
          {naoUsaTelas && "“Muito bem! Comer com atenção ajuda a criança a perceber a saciedade e aproveitar melhor os alimentos.”"}
          {!usaTelas && !naoUsaTelas && "“O ambiente das refeições é fundamental para criar bons hábitos. Vamos entender melhor?”"}
        </p>
      </div>

      {/* 2. CONTEÚDO DINÂMICO */}
      <div className="w-full space-y-4 mb-8">
        
        {/* SITUAÇÃO: SIM (USA TELAS - OBSTÁCULOS) */}
        {usaTelas && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">Por que evitar telas?</h3>
            
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Monitor className="text-[#dc2743]" size={22} /> A – Uso de telas</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Evitar TV, celular ou tablet ajuda a criança a prestar atenção na comida e perceber a saciedade.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <CheckCircle size={20} /> Card: ‘Hora de comer sem telas’
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Clock className="text-[#D97706]" size={22} /> B – Falta de rotina</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Criar uma rotina antes de comer (lavar mãos, guardar brinquedos) ajuda na preparação.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <ListChecks size={20} /> Checklist ilustrado de rotina
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><MapPin className="text-[#004D33]" size={22} /> C – Local indefinido</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Organizar um local fixo para as refeições, de preferência à mesa, ajuda a criar o hábito.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  FOTO: Criança sentada à mesa
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Gamepad2 className="text-[#3b82f6]" size={22} /> D – Distrações</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Brincadeiras para distrair enquanto come podem prejudicar a relação da criança com a alimentação.”</p>
                <div className="bg-white p-3 rounded-xl border border-[#004D33]/20 flex items-center gap-3 text-sm font-bold">
                  <Volume2 size={20} /> Áudio educativo para pais
                </div>
              </div>
            </details>
          </>
        )}

        {/* SITUAÇÃO: NÃO (NÃO USA TELAS - ESTRATÉGIAS) */}
        {naoUsaTelas && (
          <>
            <h3 className="text-[#004D33] font-bold text-xl ml-2 mb-2">Mantendo o bom hábito:</h3>
            
            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Users className="text-[#d946ef]" size={22} /> A – Companhia</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Comer junto com a família fortalece vínculos e hábitos saudáveis.”</p>
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-center p-4 text-[10px] text-gray-400 font-bold uppercase italic border-2 border-dashed border-gray-200">
                  FOTO: Família reunida sem celular
                </div>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Clock className="text-[#004D33]" size={22} /> B – Horários</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Evitar beliscos entre as refeições ajuda a manter o apetite para a hora certa.”</p>
              </div>
            </details>

            <details className="group bg-white rounded-[20px] border border-[#004D33]/10 shadow-md overflow-hidden transition-all">
              <summary className="list-none p-5 flex justify-between items-center cursor-pointer font-bold text-[#004D33] text-lg">
                <div className="flex items-center gap-3"><Smile className="text-[#D97706]" size={22} /> C – Mastigação</div>
                <div className="transition-transform group-open:rotate-180"><ArrowRight size={20} className="rotate-90"/></div>
              </summary>
              <div className="p-5 bg-[#FDF8E6]/50 border-t border-[#004D33]/5 text-[#004D33]">
                <p className="mb-4">“Comer devagar ajuda a criança a perceber sabores, texturas e a hora de parar.”</p>
              </div>
            </details>
          </>
        )}
      </div>

      {/* 3. BLOCO DE AÇÃO (BOTÃO AMARELO -> HUB) */}
      <div className="p-8 bg-[#004D33] rounded-[35px] text-white shadow-2xl w-full">
        <p className="font-bold text-center text-lg mb-6 leading-tight italic">
          {usaTelas && "“Que tal combinar refeições sem telas e com mais atenção?”"}
          {naoUsaTelas && "✨ “Continue mantendo esse ambiente tranquilo nas refeições.”"}
          {!usaTelas && !naoUsaTelas && "“Pequenas mudanças no ambiente geram grandes resultados.”"}
        </p>
        
        <Link href="/triagem/5">
          <button className="w-full bg-[#FFC107] text-[#004D33] py-5 rounded-[20px] font-extrabold text-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-3">
            {usaTelas ? "👉 Organizar rotina das refeições" : "👉 Manter bons hábitos à mesa"}
          </button>
        </Link>
      </div>

      {/* 4. BOTÃO DE NAVEGAÇÃO (VERDE -> PRÓXIMA PERGUNTA) */}
      <Link href="/triagem/16" className="w-full mt-10 mb-10">
        <div className="w-full bg-[#004D33] text-white rounded-[15px] py-4 flex items-center justify-center gap-3 shadow-lg opacity-80 cursor-pointer transition-transform active:scale-95">
          <span className="font-bold uppercase tracking-wider text-sm">Próxima Etapa</span>
          <ArrowRight size={20} />
        </div>
      </Link>
    </div>
  );
}