import { useState, useEffect } from "react";
import { useReducedMotion, Variants } from "framer-motion";
import { getPageTransition, EASING } from "./page";
import { getFadeUp, getFadeDown, getFadeLeft, getFadeRight, getFadeScale } from "./fade";
import { getStaggerContainer, getCardDelay } from "./stagger";
import { HERO_DELAYS, getHeroReveal, getHeroVideo } from "./hero";
import { getCardHover, getCardHoverTransition } from "./cards";
import { getButtonHover, getButtonTap, getButtonTransition } from "./buttons";
import { getNavbarEntrance, getNavbarDropdown, getMobileMenu } from "./navbar";
import { FOOTER_DELAYS, getFooterFadeUp, getSocialIconHover } from "./footer";
import { getViewportReveal, VIEWPORT_CONFIG } from "./viewport";
import { getGenericHover, getHoverTransition } from "./hover";

export { EASING };

// Reusable scaleIn animation
export const getScaleIn = (shouldReduceMotion: boolean): Variants => ({
  initial: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASING } },
});

// Reusable glass material fade & blur reveal
export const getGlassReveal = (shouldReduceMotion: boolean): Variants => ({
  initial: { opacity: 0, backdropFilter: "blur(0px)" },
  animate: {
    opacity: 1,
    backdropFilter: shouldReduceMotion ? "blur(24px)" : "blur(24px)",
    transition: { duration: 0.8, ease: EASING },
  },
});

// Reusable Apple-style float oscillation
export const getSlowFloat = (shouldReduceMotion: boolean): Variants => {
  if (shouldReduceMotion) return {};
  return {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
};

// Reusable React hook for cursor parallax movements (Desktop-only, 5px max offset)
export function useMouseParallax(maxOffset = 5) {
  const shouldReduceMotion = !!useReducedMotion();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || isMobile) return;
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * maxOffset;
    const y = ((clientY - top) / height - 0.5) * maxOffset;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return {
    parallaxProps:
      shouldReduceMotion || isMobile
        ? {}
        : {
            animate: coords,
            transition: { type: "spring" as const, stiffness: 100, damping: 25 },
          },
    handleMouseMove,
    handleMouseLeave,
  };
}

export function useMotionSystem() {
  const shouldReduceMotion = !!useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // When reducedMotion is active, we disable transforms completely.
  // When on mobile, we reduce coordinate limits to prevent layout lag.
  const motionScale = shouldReduceMotion || isMobile ? 1 : 0.96;
  const motionY = (defaultY: number) => {
    if (shouldReduceMotion) return 0;
    if (isMobile) return 12; // Mobile cap for smooth scrolling
    return defaultY;
  };
  const motionX = (defaultX: number) => {
    if (shouldReduceMotion) return 0;
    if (isMobile) return 8; // Mobile cap
    return defaultX;
  };

  return {
    shouldReduceMotion,
    isMobile,

    // Core curves
    easing: EASING,

    // Page Transitions
    pageTransition: getPageTransition(shouldReduceMotion),

    // Directional Fades
    fadeUp: getFadeUp(shouldReduceMotion, 0.5, 0, motionY(20)),
    fadeDown: getFadeDown(shouldReduceMotion, 0.4, 0, motionY(-16)),
    fadeLeft: getFadeLeft(shouldReduceMotion, 0.4, 0, motionX(16)),
    fadeRight: getFadeRight(shouldReduceMotion, 0.4, 0, motionX(-16)),
    fadeScale: getFadeScale(shouldReduceMotion, 0.4, 0, motionScale),

    // Custom Presets
    scaleIn: getScaleIn(shouldReduceMotion),
    glassReveal: getGlassReveal(shouldReduceMotion),
    slowFloat: getSlowFloat(shouldReduceMotion),

    // Staggers
    staggerContainer: getStaggerContainer,
    getCardDelay,

    // Hero Delays and reveal sequences
    heroDelays: HERO_DELAYS,
    heroReveal: (delay = 0) => getHeroReveal(shouldReduceMotion, delay, 0.55),
    heroVideo: getHeroVideo(shouldReduceMotion),

    // Card Hovers
    cardHover: getCardHover(shouldReduceMotion),
    cardHoverTransition: getCardHoverTransition(),

    // Button Interactions
    buttonHover: getButtonHover(shouldReduceMotion),
    buttonTap: getButtonTap(shouldReduceMotion),
    buttonTransition: getButtonTransition(),

    // Navbar Transitions
    navbarEntrance: getNavbarEntrance(shouldReduceMotion),
    navbarDropdown: getNavbarDropdown(shouldReduceMotion),
    mobileMenu: getMobileMenu(shouldReduceMotion),

    // Footer Transitions
    footerDelays: FOOTER_DELAYS,
    footerFadeUp: (delay = 0) => getFooterFadeUp(shouldReduceMotion, delay),
    socialIconHover: getSocialIconHover(shouldReduceMotion),

    // Scroll reveals
    viewportReveal: (delay = 0) => getViewportReveal(shouldReduceMotion, delay, motionY(20)),
    viewportConfig: VIEWPORT_CONFIG,

    // Generic hovers
    genericHover: (scale = 1.02, y = 0) => getGenericHover(shouldReduceMotion, scale, y),
    hoverTransition: getHoverTransition,
  };
}

