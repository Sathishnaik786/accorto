import { EASING } from "./page";

export const getButtonHover = (shouldReduceMotion: boolean) => {
  if (shouldReduceMotion) return {};
  return {
    scale: 1.02,
  };
};

export const getButtonTap = (shouldReduceMotion: boolean) => {
  if (shouldReduceMotion) return {};
  return {
    scale: 0.98,
  };
};

export const getButtonTransition = () => ({
  duration: 0.2,
  ease: EASING,
});
