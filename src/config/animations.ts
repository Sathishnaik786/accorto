import { Variants } from "framer-motion";
import { EASING } from "@/lib/motion/page";

export { EASING };

/**
 * Standard animation durations (in seconds)
 * Tier 1: Micro (0.15 - 0.25s)
 * Tier 2: Component (0.30 - 0.50s)
 * Tier 3: Cinematic (0.60 - 0.90s)
 */
export const ANIMATION_DURATIONS = {
  instant: 0.15,
  fast: 0.22,
  normal: 0.38,
  slow: 0.55,
  cinematic: 0.75,
} as const;

export type AnimationDuration = keyof typeof ANIMATION_DURATIONS;

/**
 * Standard easing curves
 */
export const ANIMATION_EASINGS = {
  smooth: EASING,
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  spring: { type: "spring", stiffness: 400, damping: 30 } as const,
  gentleSpring: { type: "spring", stiffness: 200, damping: 22 } as const,
} as const;

/**
 * Standard stagger delays (in seconds)
 */
export const ANIMATION_STAGGER = {
  tight: 0.04,
  normal: 0.06,
  relaxed: 0.08,
} as const;

/**
 * Standard spatial translation distances (in px)
 */
export const ANIMATION_DISTANCES = {
  page: 12,
  container: 16,
  card: 12,
  cardHover: 0,
  badge: 6,
  dropdown: 4,
  iconTranslate: 3,
} as const;

/**
 * Centralized Scroll Motion Tokens
 * Calibrated for subtle, cinematic enterprise motion (Apple/Linear/Stripe style)
 */
export const SCROLL_MOTION_TOKENS = {
  parallax: {
    badge: [0, -15] as [number, number],
    subtle: [0, -25] as [number, number],
    moderate: [0, -45] as [number, number],
    heroHeading: [0, -60] as [number, number],
    deep: [0, -85] as [number, number],
    image: [-30, 30] as [number, number],
    backgroundCanvas: [0, -35] as [number, number],
  },
  scale: {
    hero: [1, 0.94] as [number, number],
    subtle: [1, 0.97] as [number, number],
    expand: [0.94, 1] as [number, number],
    imageParallax: [1.08, 1] as [number, number],
  },
  opacity: {
    heroExit: [1, 0.35] as [number, number],
    fadeOnScroll: [1, 0.2] as [number, number],
    revealOnScroll: [0.25, 1] as [number, number],
    fullReveal: [0, 1] as [number, number],
  },
  blur: {
    subtle: ["0px", "6px"] as [string, string],
    reveal: ["8px", "0px"] as [string, string],
  },
  velocity: {
    slow: 1.5,
    normal: 3,
    fast: 5,
  },
} as const;

/**
 * Standard Hero Sequence Delays (in seconds)
 */
export const HERO_SEQUENCE_DELAYS = {
  background: 0,
  badge: 0,
  heading: 0.08,
  subtitle: 0.18,
  cta: 0.28,
  decorative: 0.40,
} as const;

/**
 * Default viewport trigger configuration for scroll-reveal animations
 */
export const DEFAULT_VIEWPORT_CONFIG = {
  once: true,
  amount: 0.12,
  margin: "-20px",
} as const;

/**
 * Specular Button Preset Configuration
 */
export interface SpecularPresetConfig {
  tint: string;
  tintOpacity: number;
  textColor: string;
  lineColor: string;
  baseColor: string;
  intensity: number;
  radius: number;
  blur: number;
  autoAnimate?: boolean;
  speed?: number;
  thickness?: number;
  shineSize?: number;
  shineFade?: number;
}

export const SPECULAR_PRESETS: Record<"brand" | "white" | "dark", SpecularPresetConfig> = {
  brand: {
    tint: "#031224",
    tintOpacity: 0.65,
    textColor: "#ffffff",
    lineColor: "#70FF4A",
    baseColor: "#00D9FF",
    intensity: 1.6,
    radius: 16,
    blur: 8,
    autoAnimate: true,
    speed: 0.5,
    thickness: 1.5,
    shineSize: 14,
    shineFade: 35,
  },
  white: {
    tint: "#ffffff",
    tintOpacity: 0.95,
    textColor: "#031224",
    lineColor: "#ffffff",
    baseColor: "#94a3b8",
    intensity: 1.3,
    radius: 16,
    blur: 4,
    autoAnimate: true,
    speed: 0.4,
    thickness: 1.2,
    shineSize: 12,
    shineFade: 40,
  },
  dark: {
    tint: "#0C223D",
    tintOpacity: 0.8,
    textColor: "#ffffff",
    lineColor: "#00D9FF",
    baseColor: "#173A5F",
    intensity: 1.4,
    radius: 16,
    blur: 8,
    autoAnimate: true,
    speed: 0.45,
    thickness: 1.4,
    shineSize: 12,
    shineFade: 40,
  },
};

/**
 * BorderGlow Preset Configuration
 */
export interface BorderGlowPresetConfig {
  edgeSensitivity: number;
  glowColor: string;
  backgroundColor: string;
  borderRadius: number;
  glowRadius: number;
  glowIntensity: number;
  coneSpread: number;
  animated: boolean;
  colors: string[];
  fillOpacity: number;
}

export const ACCORTO_BORDER_GLOW_PRESET: BorderGlowPresetConfig = {
  edgeSensitivity: 30,
  glowColor: "185 95 65",
  backgroundColor: "transparent",
  borderRadius: 24,
  glowRadius: 36,
  glowIntensity: 0.85,
  coneSpread: 25,
  animated: false,
  colors: ["#00D9FF", "#70FF4A", "#38BDF8"],
  fillOpacity: 0.35,
};

/**
 * GhostFibers Preset Configuration
 */
export interface GhostFibersPresetConfig {
  lineColor: string;
  glowColor: string;
  speed: number;
  scale: number;
  rotation: number;
  rotationSpeed: number;
  layers: number;
  waveAmplitude: number;
  waveFrequency: number;
  waveSpeed: number;
  layerSpeed: number;
  twist: number;
  twistFrequency: number;
  twistSpeed: number;
  lineFrequency: number;
  lineSpacing: number;
  lineSharpness: number;
  glowFalloff: number;
  glowIntensity: number;
  brightness: number;
  blueBoost: number;
  vignette: number;
  grain: number;
  dpr: number;
  fps: number;
}

export const ACCORTO_GHOST_FIBERS_PRESET: GhostFibersPresetConfig = {
  lineColor: "#0B1736",
  glowColor: "#2563EB",
  speed: 0.12,
  scale: 2.2,
  rotation: 0,
  rotationSpeed: 0.08,
  layers: 4,
  waveAmplitude: 0.012,
  waveFrequency: 3,
  waveSpeed: 0.1,
  layerSpeed: 0.05,
  twist: 0.08,
  twistFrequency: 5,
  twistSpeed: 0.8,
  lineFrequency: 5,
  lineSpacing: 2,
  lineSharpness: 16,
  glowFalloff: 10,
  glowIntensity: 1.15,
  brightness: 1.4,
  blueBoost: 1.15,
  vignette: 0.9,
  grain: 0.025,
  dpr: 1,
  fps: 30,
};

/**
 * DotGrid Preset Configuration
 */
export interface DotGridPresetConfig {
  dotSize: number;
  gap: number;
  baseColor: string;
  activeColor: string;
  proximity: number;
  speedTrigger: number;
  shockRadius: number;
  shockStrength: number;
  maxSpeed: number;
  resistance: number;
  returnDuration: number;
}

export const ACCORTO_DOT_GRID_PRESET: DotGridPresetConfig = {
  dotSize: 4,
  gap: 24,
  baseColor: "#1A3155",
  activeColor: "#38BDF8",
  proximity: 110,
  speedTrigger: 140,
  shockRadius: 180,
  shockStrength: 3,
  maxSpeed: 5000,
  resistance: 850,
  returnDuration: 1.2,
};

/**
 * Global animation configuration object
 */
export const animationConfig = {
  duration: ANIMATION_DURATIONS,
  easing: ANIMATION_EASINGS,
  stagger: ANIMATION_STAGGER,
  distance: ANIMATION_DISTANCES,
  viewport: DEFAULT_VIEWPORT_CONFIG,
  specular: SPECULAR_PRESETS,
  borderGlow: ACCORTO_BORDER_GLOW_PRESET,
  ghostFibers: ACCORTO_GHOST_FIBERS_PRESET,
  dotGrid: ACCORTO_DOT_GRID_PRESET,
};

/**
 * Reusable helper to generate standard fade & translate variants with reduced-motion support
 */
export function createFadeVariants(
  shouldReduceMotion: boolean,
  options: {
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
    delay?: number;
    scale?: number;
  } = {},
): Variants {
  const {
    direction = "up",
    distance = ANIMATION_DISTANCES.container,
    duration = ANIMATION_DURATIONS.normal,
    delay = 0,
    scale,
  } = options;

  let x = 0;
  let y = 0;

  if (!shouldReduceMotion) {
    if (direction === "up") y = distance;
    else if (direction === "down") y = -distance;
    else if (direction === "left") x = distance;
    else if (direction === "right") x = -distance;
  }

  const initialScale = shouldReduceMotion ? 1 : (scale ?? 1);

  return {
    initial: {
      opacity: 0,
      x,
      y,
      scale: initialScale,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: EASING,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: shouldReduceMotion ? 0 : -y / 2,
      scale: initialScale,
      transition: {
        duration: ANIMATION_DURATIONS.fast,
        ease: EASING,
      },
    },
  };
}

/**
 * Standard page transition variants
 */
export function getStandardPageVariants(shouldReduceMotion: boolean): Variants {
  return {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : ANIMATION_DISTANCES.page,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATIONS.normal,
        ease: EASING,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -ANIMATION_DISTANCES.page / 2,
      transition: {
        duration: ANIMATION_DURATIONS.fast,
        ease: EASING,
      },
    },
  };
}

/**
 * Standard modal & dialog transition variants
 */
export function getStandardModalVariants(shouldReduceMotion: boolean): Variants {
  return {
    initial: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.96,
      y: shouldReduceMotion ? 0 : 8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATIONS.fast,
        ease: EASING,
      },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.97,
      y: shouldReduceMotion ? 0 : 4,
      transition: {
        duration: ANIMATION_DURATIONS.instant,
        ease: EASING,
      },
    },
  };
}

/**
 * Standard modal backdrop variants
 */
export const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: ANIMATION_DURATIONS.fast } },
  exit: { opacity: 0, transition: { duration: ANIMATION_DURATIONS.instant } },
};
