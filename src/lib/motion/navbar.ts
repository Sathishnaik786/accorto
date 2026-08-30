import { Variants } from "framer-motion";
import { EASING } from "./page";

export const getNavbarEntrance = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASING,
    },
  },
});

export const getNavbarDropdown = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : -4,
    scale: shouldReduceMotion ? 1 : 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: EASING,
    },
  },
  exit: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : -4,
    scale: shouldReduceMotion ? 1 : 0.98,
    transition: {
      duration: 0.15,
      ease: EASING,
    },
  },
});

export const getMobileMenu = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    x: shouldReduceMotion ? 0 : "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: EASING,
    },
  },
  exit: {
    x: shouldReduceMotion ? 0 : "100%",
    opacity: 0,
    transition: {
      duration: 0.22,
      ease: EASING,
    },
  },
});

