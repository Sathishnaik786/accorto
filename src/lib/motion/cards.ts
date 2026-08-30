import { EASING } from "./page";

export const getCardHover = (shouldReduceMotion: boolean) => {
  if (shouldReduceMotion) return {};
  return {
    y: -3,
  };
};

export const getCardHoverTransition = () => ({
  duration: 0.22,
  ease: EASING,
});
