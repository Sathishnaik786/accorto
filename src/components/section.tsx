import { motion, type TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";
import { useMotionSystem } from "../lib/motion-presets";

export function Reveal({
  children,
  delay = 0,
  staggerChildren,
  delayChildren,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}) {
  const { viewportReveal, viewportConfig } = useMotionSystem();

  // Dynamic variants to support stagger / delay configurations
  const rawVariants = viewportReveal(delay);
  const animateObj =
    typeof rawVariants.animate === "object"
      ? (rawVariants.animate as TargetAndTransition)
      : ({} as TargetAndTransition);
  const animateTransition = animateObj.transition;

  const variants = {
    initial: rawVariants.initial,
    animate: {
      ...animateObj,
      transition: {
        ...(typeof animateTransition === "object" ? animateTransition : {}),
        ...(staggerChildren !== undefined && { staggerChildren }),
        ...(delayChildren !== undefined && { delayChildren }),
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-semibold tracking-[0.04em] text-foreground/90">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </div>
  );
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
}: {
  tag?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {tag && (
        <Reveal>
          <SectionTag>{tag}</SectionTag>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
