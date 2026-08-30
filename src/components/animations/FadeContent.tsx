import React, { useRef } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { EASING, ANIMATION_DURATIONS } from "@/config/animations";

export interface FadeContentProps {
  children: React.ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: Transition["ease"];
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
  distance?: number;
}

export function FadeContent({
  children,
  blur = true,
  duration = ANIMATION_DURATIONS.slow,
  easing = EASING,
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
  distance = 16,
}: FadeContentProps) {
  const shouldReduceMotion = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const initialFilter = shouldReduceMotion || !blur ? "none" : "blur(8px)";
  const animateFilter = shouldReduceMotion || !blur ? "none" : "blur(0px)";

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: initialOpacity,
        filter: initialFilter,
        y: shouldReduceMotion ? 0 : distance,
      }}
      whileInView={{
        opacity: 1,
        filter: animateFilter,
        y: 0,
      }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: easing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeContent;
