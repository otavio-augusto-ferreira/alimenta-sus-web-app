import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResourceDefinition } from "../types";

type ResourceCardProps = {
  resource: ResourceDefinition;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const cardContent = (
    <div className="h-full rounded-[28px] border border-[#efe6d8] bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 md:p-6">
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#e2954a] md:text-sm">
        Recurso
      </div>
      <h3 className="text-lg font-bold leading-snug text-[#004D33] md:text-xl">
        {resource.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#2a5a45] md:text-[0.95rem] md:leading-7">
        {resource.description}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#004D33] md:text-base">
        <span>{resource.ctaLabel}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );

  if (!resource.href) {
    return cardContent;
  }

  return (
    <Link href={resource.href} target="_blank" className="block h-full">
      {cardContent}
    </Link>
  );
}
