import { EASING } from "./page";

export const getCardHover = (shouldReduceMotion: boolean) => {
  if (shouldReduceMotion) return {};
  return {
    y: -6,
  };
};

export const getCardHoverTransition = () => ({
  duration: 0.25,
  ease: EASING,
});
