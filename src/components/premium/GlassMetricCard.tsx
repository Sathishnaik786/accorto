import React from "react";
import { cn } from "@/lib/utils";
import { Counter } from "../counter";
import { TrendingUp } from "lucide-react";

interface GlassMetricCardProps {
  label: string;
  value: string | number;
  suffix?: string;
  trend?: string;
  className?: string;
}

export function GlassMetricCard({
  label,
  value,
  suffix = "",
  trend,
  className,
}: GlassMetricCardProps) {
  const numValue = typeof value === "number" ? value : parseInt(value);
  const displayVal = isNaN(numValue) ? value : <Counter to={numValue} suffix={suffix} />;

  return (
    <div
      className={cn(
        "inner-card p-4 flex flex-col justify-between select-none min-w-[140px]",
        className,
      )}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <div>
        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">
          {label}
        </span>
        <div className="font-display text-2xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-brand leading-none">
          {displayVal}
        </div>
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 mt-2">
          <TrendingUp className="h-3 w-3" /> {trend}
        </div>
      )}
    </div>
  );
}
