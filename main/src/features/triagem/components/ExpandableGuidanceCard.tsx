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
    <div className="overflow-hidden rounded-xl border border-[#dfe7e2] bg-white">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-[#f8fbf9] md:px-5"
      >
        <span className="text-base font-semibold leading-6 text-[#17352a]">
          {item.title}
        </span>
        {isOpen ? (
          <ChevronUp className="mt-0.5 h-5 w-5 shrink-0 text-[#1f6b4f]" />
        ) : (
          <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-[#1f6b4f]" />
        )}
      </button>
      {isOpen ? (
        <div className="space-y-3 border-t border-[#eef2ef] px-4 pb-4 pt-4 text-sm leading-7 text-[#5b6d63] md:px-5 md:pb-5">
          <p>{item.description}</p>
          {item.resourceLabel ? (
            <span className="inline-flex rounded-full bg-[#eef7f2] px-3 py-1 text-xs font-semibold text-[#1f6b4f]">
              {item.resourceLabel}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
