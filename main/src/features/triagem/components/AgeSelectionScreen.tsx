import { Baby, Check, ChevronRight, HeartPulse, PersonStanding, School2, UserRound } from "lucide-react";
import { useState } from "react";
import { AgeGroup } from "../types";

type AgeSelectionScreenProps = {
  onSelect: (ageGroup: AgeGroup) => boolean | Promise<boolean>;
};

const ageOptions: Array<{
  id: AgeGroup;
  label: string;
  description: string;
  Icon: typeof Baby;
  accentClass: string;
  iconClass: string;
  iconSurfaceClass: string;
}> = [
  {
    id: "crianca",
    label: "Criança",
    description: "Rotina alimentar, escola e apoio familiar.",
    Icon: Baby,
    accentClass: "border-l-[#e49e00]",
    iconClass: "text-[#9a6300]",
    iconSurfaceClass: "bg-[#fff2cf] text-[#7a4a00]",
  },
  {
    id: "adolescente",
    label: "Adolescente",
    description: "Autonomia, telas, sono e escolhas do dia a dia.",
    Icon: School2,
    accentClass: "border-l-[#056246]",
    iconClass: "text-[#056246]",
    iconSurfaceClass: "bg-[#e6f3ee]",
  },
  {
    id: "adulto",
    label: "Adulto",
    description: "Rotina de trabalho, refeições e sinais de atenção.",
    Icon: UserRound,
    accentClass: "border-l-[#2d7c33]",
    iconClass: "text-[#2d7c33]",
    iconSurfaceClass: "bg-[#eaf6ea]",
  },
  {
    id: "gestante",
    label: "Gestante",
    description: "Pré-natal, hidratação, ferro e orientações seguras.",
    Icon: HeartPulse,
    accentClass: "border-l-[#cc6200]",
    iconClass: "text-[#cc6200]",
    iconSurfaceClass: "bg-[#fff0e0]",
  },
  {
    id: "idoso",
    label: "Idoso",
    description: "Apetite, mastigação, autonomia e suporte no cuidado.",
    Icon: PersonStanding,
    accentClass: "border-l-[#a84313]",
    iconClass: "text-[#a84313]",
    iconSurfaceClass: "bg-[#ffede5]",
  },
];

export function AgeSelectionScreen({ onSelect }: AgeSelectionScreenProps) {
  const [selectedOption, setSelectedOption] = useState<AgeGroup | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectOption = async (ageGroup: AgeGroup) => {
    if (isSubmitting) {
      return;
    }

    setSelectedOption(ageGroup);
    setIsSubmitting(true);

    const didNavigate = await Promise.resolve(onSelect(ageGroup));

    if (!didNavigate) {
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="mx-auto w-full max-w-[900px] rounded-[32px] border border-[#e7dfd1] bg-gradient-to-b from-[#fffdf8] via-[#fcf7ed] to-[#f8f2e7] px-5 py-6 shadow-[0_20px_54px_rgba(0,77,51,0.08)] sm:px-7 md:px-10 md:py-8">
      <div className="mb-8 text-center md:mb-10">
        <div className="inline-flex rounded-full border border-[#f4d28f] bg-[#fff6e4] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#9a6316]">
          Público da triagem
        </div>
        <h1 className="mx-auto mt-4 max-w-[18ch] text-3xl font-extrabold leading-tight text-[#004D33] md:text-4xl md:leading-[1.15]">
          Qual é o perfil que vamos acompanhar?
        </h1>
        <p className="mx-auto mt-3 max-w-[60ch] text-sm leading-relaxed text-[#2a5a45] md:text-base md:leading-7">
          Selecione a faixa etária para carregar perguntas e orientações adequadas ao contexto.
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label="Seleção de perfil da triagem"
        className="mx-auto flex w-full max-w-[680px] flex-col gap-3 md:gap-4"
      >
        {ageOptions.map(({ id, label, description, Icon, accentClass, iconClass, iconSurfaceClass }) => {
          const isSelected = selectedOption === id;
          const disabled = isSubmitting && !isSelected;

          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={`${label}: ${description}`}
              disabled={disabled}
              onClick={() => void handleSelectOption(id)}
              className={`group relative flex min-h-[84px] w-full items-center gap-4 rounded-2xl border border-l-[8px] px-4 py-4 text-left transition-all md:min-h-[92px] md:px-5 ${
                isSelected
                  ? "border-[#0d6a4e] bg-[#edf8f3] shadow-[0_10px_26px_rgba(13,106,78,0.2)]"
                  : "border-[#d8e2db] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.07)] hover:border-[#0d6a4e]/55 hover:bg-[#f8fcf9]"
              } ${accentClass} disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0A6B4E]/35`}
            >
              <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconSurfaceClass}`}>
                <Icon className={`h-5 w-5 ${iconClass}`} />
              </span>

              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-lg font-bold leading-tight text-[#0f3f30] md:text-xl">{label}</span>
                <span className="mt-1 text-sm leading-relaxed text-[#355849] md:text-[0.95rem]">{description}</span>
              </span>

              <span className="ml-2 inline-flex shrink-0 items-center justify-center">
                {isSelected ? (
                  isSubmitting ? (
                    <span className="inline-flex h-6 w-6 animate-spin rounded-full border-2 border-[#0d6a4e] border-t-transparent" />
                  ) : (
                    <Check className="h-6 w-6 text-[#0d6a4e]" />
                  )
                ) : (
                  <ChevronRight className="h-6 w-6 text-[#6a8f80] transition-colors group-hover:text-[#0d6a4e]" />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}