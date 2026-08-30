import React from "react";
import { Reveal } from "../section";
import { GlassPanel } from "../ui/GlassPanel";
import { cn } from "@/lib/utils";
import { Counter } from "../counter";

interface TimelineEvent {
  year: string | number;
  title: string;
  desc: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn("relative py-10", className)}>
      {/* Central soft line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-brand/40 to-transparent pointer-events-none -translate-x-1/2" />

      <div className="space-y-12">
        {events.map((e, i) => {
          const numYear = typeof e.year === "number" ? e.year : parseInt(e.year);
          const yearDisplay = isNaN(numYear) ? e.year : <Counter to={numYear} />;

          return (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0",
                  i % 2 === 1 ? "md:flex-row-reverse" : "",
                )}
              >
                {/* Visual milestone content block */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                  <GlassPanel className="p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg border border-slate-200/60 dark:border-white/10 hover:border-brand-2/40">
                    <div className="text-xs font-mono text-brand font-bold uppercase tracking-wider">
                      {yearDisplay}
                    </div>
                    <h3 className="font-display text-lg font-semibold mt-2 text-slate-900 dark:text-white leading-[1.02]">
                      {e.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed font-medium">
                      {e.desc}
                    </p>
                  </GlassPanel>
                </div>

                {/* Central circular glow indicator */}
                <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-gradient-brand ring-4 ring-white/10 dark:ring-black/35 shadow-md animate-pulse" />
                  <div className="absolute h-8 w-8 rounded-full bg-brand/10 blur-sm pointer-events-none" />
                </div>

                {/* Spacing empty block for balanced grids on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
