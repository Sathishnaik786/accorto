import { Variants } from "framer-motion";
import { EASING } from "./page";

export const getViewportReveal = (shouldReduceMotion: boolean, delay = 0, yOffset = 40): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : yOffset,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: EASING,
    },
  },
});

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.15,
};
