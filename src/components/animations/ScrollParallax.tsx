import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { SCROLL_MOTION_TOKENS } from "@/config/animations";
import { cn } from "@/lib/utils";

export interface ScrollParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: "badge" | "subtle" | "moderate" | "heroHeading" | "deep" | number;
  direction?: "up" | "down" | "left" | "right";
  scaleEffect?: boolean;
  fadeEffect?: boolean;
  blurEffect?: boolean;
  offset?: ["start end" | "start start" | "start center", "end start" | "end end" | "end center"];
  disabled?: boolean;
}

export function ScrollParallax({
  children,
  className,
  speed = "moderate",
  direction = "up",
  scaleEffect = false,
  fadeEffect = false,
  blurEffect = false,
  offset = ["start end", "end start"],
  disabled = false,
}: ScrollParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });

  let distanceRange: [number, number];
  if (typeof speed === "number") {
    distanceRange = [0, -speed];
  } else {
    distanceRange = SCROLL_MOTION_TOKENS.parallax[speed] || [0, -40];
  }

  if (direction === "down") {
    distanceRange = [-distanceRange[1], -distanceRange[0]];
  }

  const yTransform = useTransform(scrollYProgress, [0, 1], distanceRange);
  const xTransform = useTransform(scrollYProgress, [0, 1], distanceRange);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.3]);
  const blurTransform = useTransform(scrollYProgress, [0, 1], ["0px", "6px"]);

  const motionStyle: {
    y?: MotionValue<number>;
    x?: MotionValue<number>;
    scale?: MotionValue<number>;
    opacity?: MotionValue<number>;
    filter?: MotionValue<string>;
  } = {};

  if (!disabled) {
    if (direction === "up" || direction === "down") {
      motionStyle.y = yTransform;
    } else {
      motionStyle.x = xTransform;
    }

    if (scaleEffect) motionStyle.scale = scaleTransform;
    if (fadeEffect) motionStyle.opacity = opacityTransform;
    if (blurEffect) motionStyle.filter = blurTransform;
  }

  return (
    <div ref={containerRef} className={cn("relative will-change-transform", className)}>
      <motion.div style={motionStyle} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
