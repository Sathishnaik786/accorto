import { EASING } from "./page";

export const getGenericHover = (shouldReduceMotion: boolean, scale = 1.05, y = 0) => {
  if (shouldReduceMotion) return {};
  return {
    scale,
    y,
  };
};

export const getHoverTransition = (duration = 0.2) => ({
  duration,
  ease: EASING,
});
