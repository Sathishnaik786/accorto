import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollVelocityProps {
  text?: string;
  items?: string[];
  separator?: string;
  defaultVelocity?: number;
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
  separatorClassName?: string;
  pauseOnHover?: boolean;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function ScrollVelocity({
  text,
  items,
  separator = "•",
  defaultVelocity = 2,
  direction = "left",
  className,
  itemClassName,
  separatorClassName,
  pauseOnHover = true,
}: ScrollVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  const dirMultiplier = direction === "left" ? -1 : 1;

  useAnimationFrame((_, delta) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (pauseOnHover && isHovered.current) {
      return;
    }

    let moveBy = dirMultiplier * defaultVelocity * (delta / 1000) * 30;

    const currentVelocity = velocityFactor.get();
    if (currentVelocity) {
      moveBy += dirMultiplier * currentVelocity * (delta / 1000) * 30;
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Transform baseX percentage wrapping between -25% and 0% for 4 repetitions
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const list = items || (text ? [text] : []);
  const repetitions = [0, 1, 2, 3];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
      className={cn(
        "relative w-full overflow-hidden whitespace-nowrap select-none py-4 sm:py-6",
        className,
      )}
      aria-hidden="true"
    >
      <motion.div
        style={{ x }}
        className="inline-flex items-center gap-6 sm:gap-10 will-change-transform"
      >
        {repetitions.map((repIdx) => (
          <div key={repIdx} className="inline-flex items-center gap-6 sm:gap-10 shrink-0">
            {list.map((item, idx) => (
              <React.Fragment key={`${repIdx}-${idx}`}>
                <span
                  className={cn(
                    "font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase transition-colors text-slate-300/40 dark:text-white/10 hover:text-brand dark:hover:text-brand duration-300",
                    itemClassName,
                  )}
                >
                  {item}
                </span>
                <span
                  className={cn(
                    "text-brand/40 dark:text-brand/30 text-xl sm:text-3xl font-mono",
                    separatorClassName,
                  )}
                >
                  {separator}
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
