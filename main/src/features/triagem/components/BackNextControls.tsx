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
    <div className="flex w-full flex-col gap-3 sm:ml-auto sm:w-auto sm:flex-row sm:items-center sm:gap-4">
      <button
        type="button"
        onClick={onBack}
        className="w-full rounded-[22px] border border-[#d8cfbe] bg-white px-5 py-4 text-base font-semibold text-[#004D33] transition-colors hover:bg-[#f7f3eb] disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-[10.5rem] sm:w-auto"
        disabled={!onBack}
      >
        {backLabel}
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="w-full rounded-[22px] bg-[#004D33] px-5 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-[#003724] disabled:cursor-not-allowed disabled:bg-[#95a89c] sm:min-w-[13rem] sm:w-auto"
      >
        {nextLabel}
      </button>
    </div>
  );
}
