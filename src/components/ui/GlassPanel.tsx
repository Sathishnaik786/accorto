import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-strong rounded-[32px] bg-white/2.5 dark:bg-black/15 border transition-all duration-500 hover:bg-white/4 relative overflow-hidden",
          className
        )}
        style={{
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
        }}
        {...props}
      >
        {/* Subtle noise layer */}
        <div className="absolute inset-0 opacity-[0.008] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />

        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";
