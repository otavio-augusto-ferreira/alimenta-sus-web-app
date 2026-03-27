import { ActionBar } from "./ActionBar";

type BackNextControlsProps = {
  backLabel?: string;
  nextLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
};

export function BackNextControls({
  backLabel = "Voltar",
  nextLabel = "Continuar",
  onBack,
  onNext,
  nextDisabled,
}: BackNextControlsProps) {
  return (
    <ActionBar
      secondaryLabel={backLabel}
      primaryLabel={nextLabel}
      onSecondary={onBack}
      onPrimary={onNext}
      primaryDisabled={nextDisabled}
    />
  );
}
