import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import {
  EASING,
  ANIMATION_DURATIONS,
  ANIMATION_STAGGER,
  ANIMATION_DISTANCES,
  DEFAULT_VIEWPORT_CONFIG,
} from "@/config/animations";

export interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export interface AnimatedListItemProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

const listContainerVariants = (
  shouldReduceMotion: boolean,
  stagger: number,
  delay: number,
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : stagger,
      delayChildren: delay,
    },
  },
});

const listItemVariants = (shouldReduceMotion: boolean, distance: number): Variants => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING,
    },
  },
});

export function AnimatedList({
  children,
  className = "",
  stagger = ANIMATION_STAGGER.normal,
  delay = 0,
  threshold = DEFAULT_VIEWPORT_CONFIG.amount,
  once = DEFAULT_VIEWPORT_CONFIG.once,
}: AnimatedListProps) {
  const shouldReduceMotion = !!useReducedMotion();
  const cappedStagger = Math.min(stagger, 0.08);

  return (
    <motion.div
      variants={listContainerVariants(shouldReduceMotion, cappedStagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedListItem({
  children,
  className = "",
  distance = ANIMATION_DISTANCES.card,
}: AnimatedListItemProps) {
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <motion.div variants={listItemVariants(shouldReduceMotion, distance)} className={className}>
      {children}
    </motion.div>
  );
}

export default AnimatedList;
