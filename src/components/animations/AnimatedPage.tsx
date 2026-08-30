import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASING, ANIMATION_DURATIONS, ANIMATION_DISTANCES } from "@/config/animations";

export interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function AnimatedPage({
  children,
  className = "",
  delay = 0,
  duration = ANIMATION_DURATIONS.normal,
  distance = ANIMATION_DISTANCES.page,
}: AnimatedPageProps) {
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : distance,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : -distance / 2,
      }}
      transition={{
        duration,
        delay,
        ease: EASING,
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
