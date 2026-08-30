import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollWordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function ScrollWordReveal({
  text,
  className,
  wordClassName,
  highlightWords = [],
  highlightClassName = "text-gradient font-bold",
}: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  return (
    <p
      ref={containerRef}
      className={cn(
        "font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] flex flex-wrap gap-x-3 gap-y-2",
        className,
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlighted = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase()),
        );

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlighted={isHighlighted}
            wordClassName={wordClassName}
            highlightClassName={highlightClassName}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlighted?: boolean;
  wordClassName?: string;
  highlightClassName?: string;
}

function Word({
  children,
  progress,
  range,
  isHighlighted,
  wordClassName,
  highlightClassName,
}: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [12, 0]);
  const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className={cn(
        "inline-block transition-colors will-change-[transform,opacity,filter]",
        isHighlighted ? highlightClassName : "text-slate-900 dark:text-white",
        wordClassName,
      )}
    >
      {children}
    </motion.span>
  );
}
