import { Variants } from "framer-motion";

export const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const getPageTransition = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: EASING,
    },
  },
  exit: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : -6,
    transition: {
      duration: 0.2,
      ease: EASING,
    },
  },
});

