import { Variants } from "framer-motion";
import { EASING } from "./page";

export const FOOTER_DELAYS = {
  brand: 0,
  company: 0,
  services: 0.06,
  industries: 0.12,
  contact: 0.18,
};

export const getFooterFadeUp = (shouldReduceMotion: boolean, delay = 0): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay,
      ease: EASING,
    },
  },
});

export const getSocialIconHover = (shouldReduceMotion: boolean) => {
  if (shouldReduceMotion) return {};
  return {
    scale: 1.05,
    y: -2,
  };
};

