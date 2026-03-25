type SectionProgressProps = {
  label: string;
  progress: number;
};

export function SectionProgress({ label, progress }: SectionProgressProps) {
  return (
    <div className="mx-auto w-full max-w-[920px] rounded-[28px] border border-[#efe5d6] bg-white/90 p-4 shadow-sm md:p-5">
      <div className="mb-2.5 flex items-center justify-between gap-3 md:mb-3">
        <span className="text-sm font-semibold text-[#004D33] md:text-[0.95rem]">{label}</span>
        <span className="text-sm font-bold text-[#e2954a] md:text-[0.95rem]">{progress}%</span>
      </div>
      <div className="h-3 rounded-full bg-[#f5eee2] md:h-[0.82rem]">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-[#facc15] via-[#f5a524] to-[#e2954a] transition-all duration-300 md:h-[0.82rem]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
