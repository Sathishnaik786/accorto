import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../theme-provider";

interface CenterNodeProps {
  size: number;
  isAnyNodeHovered?: boolean;
}

export const CenterNode = React.memo(({ size, isAnyNodeHovered = false }: CenterNodeProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();

  const isLight = theme === "light";
  const glowOpacity2 = isLight ? 0.2 : 0.5;
  const glowOpacityMain = isLight ? 0.16 : 0.4;
  const hoverGlowOpacity2 = isLight ? 0.3 : 0.75;
  const hoverGlowOpacityMain = isLight ? 0.24 : 0.6;

  const animation = shouldReduceMotion
    ? { scale: 1 }
    : { scale: [1, 1.02, 1] };

  const transition = shouldReduceMotion
    ? {}
    : {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center rounded-full text-center text-white select-none z-20 pointer-events-auto"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, var(--brand-2), var(--brand), var(--brand-3))",
        backdropFilter: "blur(24px)",
        boxShadow: isAnyNodeHovered
          ? `0 0 160px rgba(var(--brand-2-rgb), ${hoverGlowOpacity2}), 0 0 80px rgba(var(--brand-rgb), ${hoverGlowOpacityMain})`
          : `0 0 120px rgba(var(--brand-2-rgb), ${glowOpacity2}), 0 0 60px rgba(var(--brand-rgb), ${glowOpacityMain})`,
      }}
      animate={animation}
      transition={transition}
      role="region"
      aria-label="Accorto Intelligence Layer Core"
    >
      {/* Gloss and border overlays */}
      <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none" />
      <div className="absolute inset-[2px] rounded-full border border-white/10 pointer-events-none" />

      {/* Texts */}
      <span
        className="font-display font-bold tracking-wide select-none drop-shadow-md leading-none"
        style={{ fontSize: Math.max(12, Math.round(size * 0.21)) }}
      >
        ACCORTO
      </span>
      <span
        className="font-medium tracking-widest text-slate-100 opacity-80 uppercase mt-1 select-none text-center leading-tight"
        style={{ fontSize: Math.max(7, Math.round(size * 0.058)), letterSpacing: "0.12em" }}
      >
        Intelligence Layer
      </span>
    </motion.div>
  );
});

CenterNode.displayName = "CenterNode";
