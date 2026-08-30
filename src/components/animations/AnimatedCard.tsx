import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  EASING,
  ANIMATION_DURATIONS,
  ANIMATION_DISTANCES,
  DEFAULT_VIEWPORT_CONFIG,
} from "@/config/animations";

export interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverElevation?: number;
  hoverScale?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  duration?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverElevation = 0,
  hoverScale = 1,
  onClick,
  duration = ANIMATION_DURATIONS.normal,
}: AnimatedCardProps) {
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : ANIMATION_DISTANCES.card,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={DEFAULT_VIEWPORT_CONFIG}
      whileTap={
        shouldReduceMotion
          ? undefined
          : {
              scale: 0.99,
              transition: { duration: 0.1 },
            }
      }
      transition={{
        duration,
        delay,
        ease: EASING,
      }}
      onClick={onClick}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
