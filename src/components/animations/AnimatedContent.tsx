import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { EASING } from "@/config/animations";


export interface AnimatedContentProps {
  children: React.ReactNode;
  container?: string | HTMLElement | null;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: Transition["ease"] | string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: Transition["ease"] | string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = EASING,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "easeInOut",
  onComplete,
  onDisappearanceComplete,
  className = "",
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = !!useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [hasDisappeared, setHasDisappeared] = useState(false);

  const initialOffset = shouldReduceMotion ? 0 : reverse ? -distance : distance;
  const exitOffset = shouldReduceMotion ? 0 : reverse ? distance : -distance;


  useEffect(() => {
    if (!isInView) return;

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, (delay + duration) * 1000);

    let disappearTimer: NodeJS.Timeout | undefined;
    let disappearCompleteTimer: NodeJS.Timeout | undefined;

    if (disappearAfter > 0) {
      disappearTimer = setTimeout(() => {
        setHasDisappeared(true);
      }, (delay + duration + disappearAfter) * 1000);

      disappearCompleteTimer = setTimeout(() => {
        onDisappearanceComplete?.();
      }, (delay + duration + disappearAfter + disappearDuration) * 1000);
    }

    return () => {
      clearTimeout(completeTimer);
      if (disappearTimer) clearTimeout(disappearTimer);
      if (disappearCompleteTimer) clearTimeout(disappearCompleteTimer);
    };
  }, [
    isInView,
    delay,
    duration,
    disappearAfter,
    disappearDuration,
    onComplete,
    onDisappearanceComplete,
  ]);

  const initialProps = {
    opacity: animateOpacity ? initialOpacity : 1,
    scale: shouldReduceMotion ? 1 : scale,
    x: direction === "horizontal" ? initialOffset : 0,
    y: direction === "vertical" ? initialOffset : 0,
  };

  const animateProps = hasDisappeared
    ? {
        opacity: animateOpacity ? initialOpacity : 0,
        scale: shouldReduceMotion ? 1 : 0.8,
        x: direction === "horizontal" ? exitOffset : 0,
        y: direction === "vertical" ? exitOffset : 0,
        transition: {
          duration: disappearDuration,
          ease: disappearEase as Transition["ease"],
        },
      }
    : isInView
      ? {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: ease as Transition["ease"],
          },
        }
      : initialProps;


  return (
    <motion.div
      ref={ref}
      initial={initialProps}
      animate={animateProps}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
