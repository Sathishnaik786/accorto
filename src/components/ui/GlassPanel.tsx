import React from "react";
import { cn } from "@/lib/utils";

export type GlassPanelProps = React.HTMLAttributes<HTMLDivElement>;

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-strong rounded-(--card-radius,24px) bg-white/75 dark:bg-black/15 border transition-all duration-500 hover:bg-white/80 dark:hover:bg-white/5 relative overflow-hidden",
          className,
        )}
        style={{
          boxShadow: "var(--shadow-soft)",
        }}
        {...props}
      >
        {/* Subtle noise layer */}
        <div className="absolute inset-0 opacity-[0.008] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />

        <div className="relative z-10 w-full h-full">{children}</div>
      </div>
    );
  },
);

GlassPanel.displayName = "GlassPanel";
