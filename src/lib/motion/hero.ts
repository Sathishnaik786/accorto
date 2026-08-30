import { Variants } from "framer-motion";
import { EASING } from "./page";

export const HERO_DELAYS = {
  badge: 0,
  headline: 0.08,
  gradientText: 0.14,
  description: 0.20,
  buttons: 0.30,
  trust: 0.40,
  stats: 0.50,
  rightVisual: 0.60,
  video: 0.40,
};

export const getHeroReveal = (
  shouldReduceMotion: boolean,
  delay = 0,
  duration = 0.55,
): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: EASING,
    },
  },
});

export const getHeroVideo = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.98,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: EASING,
    },
  },
});

