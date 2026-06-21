import React from "react";
import { PremiumCard } from "../ui/PremiumCard";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: React.ComponentType<{ className?: string }>;
  name: string;
  desc: string;
  points?: string[];
  className?: string;
  wide?: boolean;
}

export function FeatureCard({
  icon: Icon,
  name,
  desc,
  points,
  className,
  wide = false,
}: FeatureCardProps) {
  return (
    <PremiumCard
      hover={false}
      className={cn(
        "group relative p-8 h-full flex flex-col justify-between gap-6 transition-all duration-800 ease-out z-10 rounded-[40px]",
        "md:hover:translate-y-[-12px] md:hover:shadow-[0_60px_130px_rgba(0,0,0,0.5)]",
        wide ? "md:flex-row md:items-center md:gap-10" : "",
        className
      )}
    >
      <div className="absolute inset-0 bg-white/1 opacity-0 md:group-hover:opacity-100 transition-opacity duration-800 pointer-events-none z-0" />
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-brand/35 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-800 z-20 pointer-events-none" />
      
      <div className={cn("flex flex-col gap-4 relative z-10", wide ? "md:flex-1" : "")}>
        {Icon && (
          <div
            className="inline-grid h-12 w-12 place-items-center rounded-[18px] bg-slate-50 dark:bg-white/5 border border-slate-200/85 dark:border-white/10 text-brand dark:text-brand-3 shadow-[0_0_20px_rgba(16,185,129,0.15)] md:group-hover:scale-105 md:group-hover:border-slate-300 dark:md:group-hover:border-white/20 transition-all duration-800 ease-out"
          >
            <Icon className="h-6 w-6" />
          </div>
        )}
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white leading-[1.02] tracking-tight">{name}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400 leading-8">{desc}</p>
        </div>
      </div>

      {points && points.length > 0 && (
        <div
          className={cn(
            "grid grid-cols-2 gap-3 text-xs text-slate-600 dark:text-zinc-400 leading-8 relative z-10",
            wide ? "md:mt-0 md:flex-1" : ""
          )}
        >
          {points.map((p: string) => (
            <div key={p} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> {p}
            </div>
          ))}
        </div>
      )}
    </PremiumCard>
  );
}
