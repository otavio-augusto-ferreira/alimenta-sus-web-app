import { CheckCircle2, LucideIcon } from "lucide-react";

type ProfileCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function ProfileCard({
  title,
  description,
  Icon,
  selected,
  disabled,
  onClick,
}: ProfileCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`relative min-h-[156px] rounded-xl border bg-white p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#26724f]/20 ${
        selected
          ? "border-2 border-[#1f6b4f] bg-[#f2fbf6] shadow-[0_10px_24px_rgba(31,107,79,0.12)]"
          : "border-[#e5e7eb] hover:border-[#1f6b4f] hover:shadow-[0_10px_20px_rgba(17,24,39,0.06)]"
      } disabled:cursor-not-allowed disabled:opacity-60`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff6f1] text-[#1f6b4f]">
          <Icon className="h-5 w-5" />
        </span>
        {selected ? <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1f6b4f]" /> : null}
      </div>

      <div className="mt-6">
        <div className="text-lg font-semibold text-[#17352a]">{title}</div>
        <p className="mt-2 text-sm leading-6 text-[#5b6d63]">{description}</p>
      </div>
    </button>
  );
}
