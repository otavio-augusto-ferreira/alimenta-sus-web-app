import {
  Baby,
  HeartPulse,
  PersonStanding,
  School2,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { AgeGroup } from "../types";
import { ActionBar } from "./ActionBar";
import { ProfileCard } from "./ProfileCard";
import { ProfileGrid } from "./ProfileGrid";
import { TriageLayout } from "./TriageLayout";

type AgeSelectionScreenProps = {
  onContinue: (ageGroup: AgeGroup) => void | Promise<void>;
};

const ageOptions: Array<{
  id: AgeGroup;
  label: string;
  description: string;
  Icon: typeof Baby;
}> = [
  {
    id: "crianca",
    label: "Crianca",
    description: "Rotina alimentar, escola e apoio familiar.",
    Icon: Baby,
  },
  {
    id: "adolescente",
    label: "Adolescente",
    description: "Autonomia, telas, sono e escolhas do dia a dia.",
    Icon: School2,
  },
  {
    id: "adulto",
    label: "Adulto",
    description: "Rotina de trabalho, refeicoes e sinais de atencao.",
    Icon: UserRound,
  },
  {
    id: "gestante",
    label: "Gestante",
    description: "Pre-natal, hidratacao, ferro e orientacoes seguras.",
    Icon: HeartPulse,
  },
  {
    id: "idoso",
    label: "Idoso",
    description: "Apetite, mastigacao, autonomia e suporte no cuidado.",
    Icon: PersonStanding,
  },
];

export function AgeSelectionScreen({ onContinue }: AgeSelectionScreenProps) {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const proceedToAgeGroup = async (ageGroup: AgeGroup) => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSelectedAgeGroup(ageGroup);
    await Promise.resolve(onContinue(ageGroup));
  };

  const handleContinue = async () => {
    if (!selectedAgeGroup) {
      return;
    }

    await proceedToAgeGroup(selectedAgeGroup);
  };

  return (
    <TriageLayout
      eyebrow="PUBLICO DA TRIAGEM"
      title="Qual e o perfil que vamos acompanhar?"
      helperText="Selecione a faixa etaria para carregar perguntas e orientacoes adequadas ao contexto."
      align="center"
      footer={
        <ActionBar
          primaryLabel={isSubmitting ? "Carregando..." : "Continuar"}
          onPrimary={() => void handleContinue()}
          primaryDisabled={!selectedAgeGroup || isSubmitting}
        />
      }
    >
      <ProfileGrid>
        {ageOptions.map(({ id, label, description, Icon }) => (
          <ProfileCard
            key={id}
            title={label}
            description={description}
            Icon={Icon}
            selected={selectedAgeGroup === id}
            disabled={isSubmitting}
            onClick={() => void proceedToAgeGroup(id)}
          />
        ))}
      </ProfileGrid>
    </TriageLayout>
  );
}
