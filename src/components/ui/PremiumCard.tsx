import React from "react";
import { cn } from "@/lib/utils";
import { BorderGlow } from "../animations/BorderGlow";

export interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  borderRadius?: number;
  glowColor?: string;
  colors?: string[];
  edgeSensitivity?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
}

export const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  (
    {
      children,
      className,
      hover = true,
      glow = true,
      borderRadius = 24,
      glowColor = "185 95 65",
      colors = ["#00D9FF", "#70FF4A", "#38BDF8"],
      edgeSensitivity = 30,
      glowRadius = 36,
      glowIntensity = 0.85,
      coneSpread = 25,
      style,
      ...props
    },
    ref,
  ) => {
    const cardContent = (
      <div
        ref={ref}
        className={cn(
          "premium-card relative overflow-hidden rounded-(--card-radius,24px) bg-white/3 border transition-all duration-600 ease-out",
          hover && "hover:-translate-y-1.5 hover:bg-white/5 hover:shadow-(--shadow-hover)",
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

    if (!glow) return cardContent;

    return (
      <BorderGlow
        borderRadius={borderRadius}
        glowColor={glowColor}
        colors={colors}
        edgeSensitivity={edgeSensitivity}
        glowRadius={glowRadius}
        glowIntensity={glowIntensity}
        coneSpread={coneSpread}
        className="h-full w-full"
      >
        {cardContent}
      </BorderGlow>
    );
  },
);

PremiumCard.displayName = "PremiumCard";
