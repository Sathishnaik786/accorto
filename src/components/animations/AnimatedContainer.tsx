import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  EASING,
  ANIMATION_DURATIONS,
  ANIMATION_DISTANCES,
  DEFAULT_VIEWPORT_CONFIG,
} from "@/config/animations";

export interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  scale?: number;
}

export function AnimatedContainer({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = ANIMATION_DISTANCES.container,
  duration = ANIMATION_DURATIONS.normal,
  once = DEFAULT_VIEWPORT_CONFIG.once,
  threshold = DEFAULT_VIEWPORT_CONFIG.amount,
  scale,
}: AnimatedContainerProps) {
  const shouldReduceMotion = !!useReducedMotion();

  let initialX = 0;
  let initialY = 0;

  if (!shouldReduceMotion) {
    if (direction === "up") initialY = distance;
    else if (direction === "down") initialY = -distance;
    else if (direction === "left") initialX = distance;
    else if (direction === "right") initialX = -distance;
  }

  const initialScale = shouldReduceMotion ? 1 : (scale ?? 1);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: initialScale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;
