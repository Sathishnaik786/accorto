import { Variants } from "framer-motion";

export const getStaggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const getCardDelay = (index: number, stagger = 0.08): number => {
  return index * stagger;
};
