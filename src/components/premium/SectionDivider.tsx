import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center my-16 select-none",
        className,
      )}
    >
      {/* Horizontal glowing line */}
      <div className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-brand/35 to-transparent dark:via-brand-3/20" />
      <div className="absolute inset-x-0 h-[3px] bg-linear-to-r from-transparent via-brand/10 to-transparent blur-xs pointer-events-none" />

      {label && (
        <div className="relative z-10 glass-strong border border-white/10 rounded-full px-4 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 bg-background/80 backdrop-blur-md shadow-sm">
          {label}
        </div>
      )}
    </div>
  );
}
