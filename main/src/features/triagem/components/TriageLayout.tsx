import { ReactNode } from "react";

type TriageLayoutProps = {
  eyebrow: string;
  title: string;
  helperText?: string;
  children: ReactNode;
  footer?: ReactNode;
  align?: "left" | "center";
};

export function TriageLayout({
  eyebrow,
  title,
  helperText,
  children,
  footer,
  align = "left",
}: TriageLayoutProps) {
  const isCentered = align === "center";

  return (
    <section className="rounded-2xl border border-[#dfe7e2] bg-white shadow-[0_8px_24px_rgba(21,47,35,0.06)]">
      <div className={`border-b border-[#eef2ef] px-6 py-6 md:px-8 md:py-7 ${isCentered ? "text-center" : "text-left"}`}>
        <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#5d4d33]">
          {eyebrow}
        </div>
        <h1
          className={`mt-3 text-[1.9rem] font-bold leading-tight text-[#17352a] md:text-[2.2rem] ${
            isCentered ? "mx-auto max-w-[18ch]" : "max-w-[24ch]"
          }`}
        >
          {title}
        </h1>
        {helperText ? (
          <p
            className={`mt-3 text-sm leading-7 text-[#5b6d63] md:text-base ${
              isCentered ? "mx-auto max-w-[62ch]" : "max-w-[64ch]"
            }`}
          >
            {helperText}
          </p>
        ) : null}
      </div>

      <div className="px-6 py-6 md:px-8 md:py-7">{children}</div>

      {footer ? <div className="px-6 pb-6 md:px-8 md:pb-7">{footer}</div> : null}
    </section>
  );
}
