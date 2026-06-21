import { Variants } from "framer-motion";
import { EASING } from "./page";

export const FOOTER_DELAYS = {
  brand: 0,
  company: 0,
  services: 0.1,
  industries: 0.2,
  contact: 0.3,
};

export const getFooterFadeUp = (shouldReduceMotion: boolean, delay = 0): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: EASING,
    },
  },
});

export const getSocialIconHover = (shouldReduceMotion: boolean) => {
  if (shouldReduceMotion) return {};
  return {
    scale: 1.05,
    y: -3,
  };
};
