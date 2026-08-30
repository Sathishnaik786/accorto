import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export function LoadingAnimation({ size = "md", className = "", label }: LoadingAnimationProps) {
  const shouldReduceMotion = !!useReducedMotion();

  const sizeMap = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
  };

  return (
    <div className={cn("inline-flex flex-col items-center justify-center gap-3", className)}>
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className={cn(
          "rounded-full border-t-transparent border-brand dark:border-brand-2",
          sizeMap[size],
        )}
        role="status"
        aria-label={label || "Loading"}
      />
      {label && <span className="text-xs text-muted-foreground font-medium">{label}</span>}
    </div>
  );
}

export interface SkeletonShimmerProps {
  className?: string;
  rounded?: "sm" | "md" | "lg" | "full" | "none";
}

export function SkeletonShimmer({ className = "", rounded = "md" }: SkeletonShimmerProps) {
  const roundedClass = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-200/60 dark:bg-white/5 animate-pulse",
        roundedClass,
        className,
      )}
    >
      <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
    </div>
  );
}

export function PulseDot({
  className = "",
  color = "emerald",
}: {
  className?: string;
  color?: "emerald" | "brand" | "amber";
}) {
  const colorMap = {
    emerald: "bg-emerald-500",
    brand: "bg-brand",
    amber: "bg-amber-500",
  };

  return (
    <span className={cn("relative flex h-2 w-2", className)}>
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          colorMap[color],
        )}
      />
      <span className={cn("relative inline-flex rounded-full h-2 w-2", colorMap[color])} />
    </span>
  );
}

export default LoadingAnimation;
