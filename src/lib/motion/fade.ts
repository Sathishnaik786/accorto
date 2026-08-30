import { Variants } from "framer-motion";
import { EASING } from "./page";

export const getFadeUp = (
  shouldReduceMotion: boolean,
  duration = 0.7,
  delay = 0,
  yOffset = 30,
): Variants => ({
  initial: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASING },
  },
});

export const getFadeDown = (
  shouldReduceMotion: boolean,
  duration = 0.5,
  delay = 0,
  yOffset = -24,
): Variants => ({
  initial: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASING },
  },
});

export const getFadeLeft = (
  shouldReduceMotion: boolean,
  duration = 0.5,
  delay = 0,
  xOffset = 24,
): Variants => ({
  initial: { opacity: 0, x: shouldReduceMotion ? 0 : xOffset },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: EASING },
  },
});

export const getFadeRight = (
  shouldReduceMotion: boolean,
  duration = 0.5,
  delay = 0,
  xOffset = -24,
): Variants => ({
  initial: { opacity: 0, x: shouldReduceMotion ? 0 : xOffset },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: EASING },
  },
});

export const getFadeScale = (
  shouldReduceMotion: boolean,
  duration = 0.5,
  delay = 0,
  scaleOffset = 0.96,
): Variants => ({
  initial: { opacity: 0, scale: shouldReduceMotion ? 1 : scaleOffset },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: EASING },
  },
});
