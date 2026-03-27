type ActionBarProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  primaryDisabled?: boolean;
  sticky?: boolean;
};

export function ActionBar({
  primaryLabel = "Continuar",
  secondaryLabel = "Voltar",
  onPrimary,
  onSecondary,
  primaryDisabled,
  sticky = false,
}: ActionBarProps) {
  return (
    <div
      className={`flex w-full flex-col gap-3 ${
        sticky
          ? "sticky bottom-3 z-20 rounded-2xl border border-[#dfe7e2] bg-white/95 p-4 shadow-[0_12px_28px_rgba(21,47,35,0.12)] backdrop-blur sm:flex-row sm:items-center sm:justify-end"
          : "border-t border-[#dfe7e2] pt-5 sm:flex-row sm:items-center sm:justify-end"
      }`}
    >
      {onSecondary ? (
        <button
          type="button"
          onClick={onSecondary}
          className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center rounded-xl border border-[#c9d6ce] bg-white px-5 py-3 text-sm font-semibold text-[#1f3d31] transition-all hover:border-[#94b6a4] hover:bg-[#f7faf8] active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#26724f]/20 sm:w-auto sm:min-w-[160px]"
        >
          {secondaryLabel}
        </button>
      ) : null}

      <button
        type="button"
        onClick={onPrimary}
        disabled={primaryDisabled}
        className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center rounded-xl border border-transparent bg-[#1f6b4f] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(31,107,79,0.2)] transition-all hover:bg-[#17543e] active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#26724f]/25 disabled:cursor-not-allowed disabled:bg-[#9bb7aa] disabled:text-white/90 disabled:shadow-none sm:w-auto sm:min-w-[220px]"
      >
        {primaryLabel}
      </button>
    </div>
  );
}
