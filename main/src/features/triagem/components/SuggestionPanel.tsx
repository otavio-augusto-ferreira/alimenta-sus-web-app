import { ReactNode } from "react";

type SuggestionPanelProps = {
  children: ReactNode;
};

export function SuggestionPanel({ children }: SuggestionPanelProps) {
  return (
    <section className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-[0_8px_24px_rgba(21,47,35,0.05)] md:p-8">
      <div className="mb-5">
        <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#5d4d33]">
          Como apoiar esta etapa
        </div>
        <h2 className="mt-2 text-[1.6rem] font-bold text-[#17352a]">
          Sugestoes para o dia a dia
        </h2>
      </div>

      <div className="space-y-3">{children}</div>
    </section>
  );
}
