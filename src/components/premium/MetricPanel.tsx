import React from "react";
import { GlassPanel } from "../ui/GlassPanel";
import { cn } from "@/lib/utils";

interface MetricItem {
  label: string;
  value: React.ReactNode;
}

interface MetricPanelProps {
  metrics: MetricItem[];
  className?: string;
}

export function MetricPanel({ metrics, className }: MetricPanelProps) {
  return (
    <GlassPanel className={cn("grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8", className)}>
      {metrics.map((m, i) => (
        <div
          key={i}
          className="flex flex-col justify-center gap-2 border-r last:border-0 border-white/5 pr-4 last:pr-0"
        >
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            {m.label}
          </span>
          <div className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {m.value}
          </div>
        </div>
      ))}
    </GlassPanel>
  );
}
