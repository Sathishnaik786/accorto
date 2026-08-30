import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CinematicSectionProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
  enableExitMotion?: boolean;
}

export function CinematicSection({
  children,
  className,
  intensity = "low",
  enableExitMotion = true,
}: CinematicSectionProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleValues =
    intensity === "high"
      ? [0.95, 1, 1, 0.96]
      : intensity === "medium"
        ? [0.97, 1, 1, 0.98]
        : [0.99, 1, 1, 0.99];

  const opacityValues =
    intensity === "high"
      ? [0.4, 1, 1, 0.5]
      : intensity === "medium"
        ? [0.6, 1, 1, 0.7]
        : [0.8, 1, 1, 0.85];

  const yValues =
    intensity === "high"
      ? [40, 0, 0, -30]
      : intensity === "medium"
        ? [25, 0, 0, -15]
        : [12, 0, 0, -8];

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], scaleValues);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], opacityValues);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], yValues);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: enableExitMotion ? scale : 1,
        opacity: enableExitMotion ? opacity : 1,
        y: enableExitMotion ? y : 0,
      }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
    </motion.section>
  );
}
