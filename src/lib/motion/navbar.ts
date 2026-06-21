import { Variants } from "framer-motion";
import { EASING } from "./page";

export const getNavbarEntrance = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : -16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASING,
    },
  },
});

export const getNavbarDropdown = (shouldReduceMotion: boolean): Variants => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: EASING,
    },
  },
  exit: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 8,
    transition: {
      duration: 0.2,
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
      duration: 0.3,
      ease: EASING,
    },
  },
  exit: {
    x: shouldReduceMotion ? 0 : "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: EASING,
    },
  },
});
