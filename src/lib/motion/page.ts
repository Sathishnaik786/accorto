import { Variants } from "framer-motion";

export const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const getPageTransition = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASING,
    },
  },
  exit: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : -12,
    transition: {
      duration: 0.3,
      ease: EASING,
    },
  },
});
