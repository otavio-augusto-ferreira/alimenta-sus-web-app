"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { GuidanceItem } from "../types";

type ExpandableGuidanceCardProps = {
  item: GuidanceItem;
};

export function ExpandableGuidanceCard({ item }: ExpandableGuidanceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#efe6d8] bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-start justify-between gap-4 p-4 text-left md:p-5"
      >
        <span className="text-base font-bold leading-snug text-[#004D33] md:text-[1.05rem] md:leading-7">
          {item.title}
        </span>
        {isOpen ? (
          <ChevronUp className="mt-0.5 h-5 w-5 shrink-0 text-[#e2954a]" />
        ) : (
          <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-[#e2954a]" />
        )}
      </button>
      {isOpen ? (
        <div className="space-y-3 border-t border-[#f3eee5] px-4 pb-4 pt-3 text-sm leading-relaxed text-[#24533f] md:px-5 md:pb-5 md:pt-4 md:text-[0.95rem] md:leading-7">
          <p>{item.description}</p>
          {item.resourceLabel ? (
            <span className="inline-flex rounded-full bg-[#fff5df] px-3 py-1 text-xs font-semibold text-[#9a6316] md:text-[0.78rem]">
              {item.resourceLabel}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
