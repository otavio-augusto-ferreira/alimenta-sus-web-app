import { CheckCircle2 } from "lucide-react";

type OptionItemProps = {
  name: string;
  inputType: "radio" | "checkbox";
  value: string;
  label: string;
  helperText?: string;
  checked: boolean;
  onToggle: (value: string) => void;
};

export function OptionItem({
  name,
  inputType,
  value,
  label,
  helperText,
  checked,
  onToggle,
}: OptionItemProps) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-4 rounded-[10px] border p-4 text-left transition-all ${
        checked
          ? "border-[#1f6b4f] bg-[#f2fbf6]"
          : "border-[#e5e7eb] bg-white hover:border-[#7eb79a]"
      }`}
    >
      <input
        type={inputType}
        name={name}
        checked={checked}
        onChange={() => onToggle(value)}
        className="mt-0.5 h-5 w-5 shrink-0 accent-[#1f6b4f]"
      />

      <span className="min-w-0 flex-1">
        <span className="block text-base font-medium leading-6 text-[#17352a]">{label}</span>
        {helperText ? (
          <span className="mt-1 block text-sm leading-6 text-[#5b6d63]">{helperText}</span>
        ) : null}
      </span>

      {checked ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f6b4f]" /> : null}
    </label>
  );
}
