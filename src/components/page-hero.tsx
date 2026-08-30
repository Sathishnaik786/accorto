import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { OrbBackground } from "@/components/orb-background";
import { DotGrid } from "@/components/animations/DotGrid";
import { Reveal } from "@/components/section";
import { FadeContent } from "@/components/animations/FadeContent";
import { ShinyText } from "@/components/animations/ShinyText";

export interface PageHeroProps {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  background?: ReactNode;
  backgroundEffect?: "dot-grid" | "orb" | "none";
  className?: string;
}

export function PageHero({
  tag,
  title,
  subtitle,
  children,
  background,
  backgroundEffect = "dot-grid",
  className = "",
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const headingScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.95]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const childrenY = useTransform(scrollYProgress, [0, 1], [0, -22]);

  let bgElement: ReactNode = background;

  if (!bgElement) {
    if (backgroundEffect === "dot-grid") {
      bgElement = (
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none h-full w-full"
          aria-hidden="true"
        >
          {/* Ambient soft brand color glows */}
          <div className="absolute -top-32 -left-32 h-120 w-120 rounded-full bg-brand opacity-[0.06] dark:opacity-[0.05] blur-3xl animate-blob pointer-events-none" />
          <div className="absolute top-1/3 -right-32 h-130 w-130 rounded-full bg-brand-2 opacity-[0.05] dark:opacity-[0.04] blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 h-105 w-105 rounded-full bg-brand-3 opacity-[0.05] dark:opacity-[0.04] blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

          {/* Full-coverage DotGrid canvas */}
          <DotGrid
            dotSize={4}
            gap={24}
            baseColor="#1A3155"
            activeColor="#38BDF8"
            proximity={110}
            speedTrigger={140}
            shockRadius={180}
            shockStrength={3}
            resistance={850}
            returnDuration={1.2}
          />
        </div>
      );
    } else if (backgroundEffect === "orb") {
      bgElement = <OrbBackground />;
    } else {
      bgElement = null;
    }
  }

  return (
    <section
      ref={heroRef}
      className={`relative overflow-hidden w-full min-h-svh flex flex-col justify-center ${className}`}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        {bgElement}
      </motion.div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center">
        <motion.div style={{ y: badgeY }}>
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.04em]">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              <ShinyText text={tag} speed={2.5} shineColor="#38BDF8" color="currentColor" />
            </div>
          </Reveal>
        </motion.div>

        <motion.div style={{ y: headingY, scale: headingScale, opacity: headingOpacity }}>
          <FadeContent delay={0.08} blur={true} distance={14}>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.10] max-w-4xl">
              {title}
            </h1>
          </FadeContent>
        </motion.div>

        {subtitle && (
          <motion.div style={{ y: subtitleY, opacity: subtitleOpacity }}>
            <FadeContent delay={0.18} blur={false} distance={12}>
              <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
                {subtitle}
              </p>
            </FadeContent>
          </motion.div>
        )}

        {children && (
          <motion.div style={{ y: childrenY }}>
            <FadeContent delay={0.28} blur={false} distance={10}>
              <div className="mt-10">{children}</div>
            </FadeContent>
          </motion.div>
        )}
      </div>
    </section>
  );
}

