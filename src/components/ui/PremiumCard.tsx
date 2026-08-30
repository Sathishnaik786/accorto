import React from "react";
import { cn } from "@/lib/utils";

export interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  borderRadius?: number;
}

export const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  (
    {
      children,
      className,
      style,
      hover,
      glow,
      borderRadius,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "premium-card relative overflow-hidden rounded-(--card-radius,24px) bg-white/3 border",
          className,
        )}
        style={{
          boxShadow: "var(--shadow-soft)",
          ...style,
        }}
        {...props}
      >
        {/* Subtle noise layer */}
        <div className="absolute inset-0 opacity-[0.008] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />

        {/* Content */}
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    );
  },
);

PremiumCard.displayName = "PremiumCard";
