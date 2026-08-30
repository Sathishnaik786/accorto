import React, { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import "./ScrollReveal.css";

export interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  style?: React.CSSProperties;
}

interface AnimatedWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  baseOpacity: number;
  enableBlur: boolean;
  blurStrength: number;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  word,
  progress,
  range,
  baseOpacity,
  enableBlur,
  blurStrength,
}) => {
  const opacity = useTransform(progress, range, [baseOpacity, 1]);
  const filter = useTransform(
    progress,
    range,
    [enableBlur ? `blur(${blurStrength}px)` : "blur(0px)", "blur(0px)"],
  );

  return (
    <motion.span
      className="word"
      style={{
        opacity,
        filter,
        willChange: "opacity, filter",
      }}
    >
      {word}
    </motion.span>
  );
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  style,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = !!useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainerRef,
    offset: ["start end", "end center"],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.7],
    [shouldReduceMotion ? 0 : baseRotation, 0],
  );

  const words = useMemo(() => {
    if (typeof children !== "string") return null;
    return children.split(/(\s+)/);
  }, [children]);

  const nonWhitespaceWordsCount = useMemo(() => {
    if (!words) return 0;
    return words.filter((w) => !w.match(/^\s+$/)).length;
  }, [words]);

  let wordIndex = 0;

  return (
    <motion.h2
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`.trim()}
      style={{
        transformOrigin: "0% 50%",
        rotate: shouldReduceMotion ? 0 : rotate,
        ...style,
      }}
    >
      <p className={`scroll-reveal-text ${textClassName}`.trim()}>
        {shouldReduceMotion || !words ? (
          children
        ) : (
          words.map((chunk, index) => {
            if (chunk.match(/^\s+$/)) {
              return <React.Fragment key={index}>{chunk}</React.Fragment>;
            }

            const currentIndex = wordIndex++;
            const start = (currentIndex / Math.max(nonWhitespaceWordsCount, 1)) * 0.8;
            const end = Math.min(
              start + (1 / Math.max(nonWhitespaceWordsCount, 1)) * 0.9,
              1,
            );

            return (
              <AnimatedWord
                key={index}
                word={chunk}
                progress={scrollYProgress}
                range={[start, end]}
                baseOpacity={baseOpacity}
                enableBlur={enableBlur}
                blurStrength={blurStrength}
              />
            );
          })
        )}
      </p>
    </motion.h2>
  );
};

export default ScrollReveal;
