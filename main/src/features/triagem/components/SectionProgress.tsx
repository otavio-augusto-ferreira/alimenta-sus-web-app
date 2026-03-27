type SectionProgressProps = {
  label: string;
  progress: number;
};

export function SectionProgress({ label, progress }: SectionProgressProps) {
  return (
    <div className="rounded-2xl border border-[#dfe7e2] bg-white px-5 py-4 shadow-[0_6px_18px_rgba(17,24,39,0.04)] md:px-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-[#17352a]">{label}</span>
        <span className="text-sm font-semibold text-[#1f6b4f]">{progress}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#edf2ee]">
        <div
          className="h-2 rounded-full bg-[#1f6b4f] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
