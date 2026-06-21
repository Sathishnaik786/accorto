import { Variants } from "framer-motion";
import { EASING } from "./page";

export const HERO_DELAYS = {
  badge: 0,
  headline: 0.1,
  gradientText: 0.2,
  description: 0.4,
  buttons: 0.6,
  trust: 0.8,
  stats: 1.0,
  rightVisual: 1.2,
  video: 1.4,
};

export const getHeroReveal = (shouldReduceMotion: boolean, delay = 0, duration = 0.6): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 24,
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
    scale: shouldReduceMotion ? 1 : 0.96,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: EASING,
    },
  },
});
