import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRightLeft } from "lucide-react";

interface ComparisonCardProps {
  title?: string;
  beforeLabel?: string;
  beforeVal: string;
  afterLabel?: string;
  afterVal: string;
  className?: string;
}

export function ComparisonCard({
  title = "Before / After State",
  beforeLabel = "Legacy",
  beforeVal,
  afterLabel = "Modernized",
  afterVal,
  className,
}: ComparisonCardProps) {
  return (
    <div
      className={cn(
        "bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 relative select-none shadow-xs",
        className,
      )}
    >
      {title && (
        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
          {title}
        </span>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
        <div className="flex-1 text-left">
          <span className="text-[9px] text-zinc-500 font-semibold block uppercase tracking-wide">
            {beforeLabel}
          </span>
          <div className="font-semibold text-slate-500 dark:text-zinc-400 mt-1 text-xs sm:text-sm wrap-break-word">
            {beforeVal}
          </div>
        </div>
        <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-brand shadow-xs rotate-90 sm:rotate-0 self-center">
          <ArrowRightLeft className="h-4 w-4" />
        </div>
        <div className="flex-1 text-left sm:text-right">
          <span className="text-[9px] text-zinc-500 font-semibold block uppercase tracking-wide">
            {afterLabel}
          </span>
          <div className="font-bold text-slate-900 dark:text-white mt-1 text-xs sm:text-sm wrap-break-word">
            {afterVal}
          </div>
        </div>
      </div>
    </div>
  );
}
