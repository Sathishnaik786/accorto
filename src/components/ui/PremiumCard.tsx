import React from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ children, className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "premium-card relative overflow-hidden rounded-[32px] bg-white/3 border transition-all duration-600 ease-out",
          hover && "hover:-translate-y-1.5 hover:bg-white/5 hover:shadow-[0_25px_70px_rgba(0,0,0,0.22)]",
          className
        )}
        style={{
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
        }}
        {...props}
      >
        {/* Subtle noise layer */}
        <div className="absolute inset-0 opacity-[0.008] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />

        {/* Content */}
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </div>
    );
  }
);

PremiumCard.displayName = "PremiumCard";
