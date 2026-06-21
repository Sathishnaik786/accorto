import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CenterNodeProps {
  size: number;
  isAnyNodeHovered?: boolean;
}

export const CenterNode = React.memo(({ size, isAnyNodeHovered = false }: CenterNodeProps) => {
  const shouldReduceMotion = useReducedMotion();

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
          ? "0 0 160px rgba(var(--brand-2-rgb), 0.75), 0 0 80px rgba(var(--brand-rgb), 0.6)"
          : "0 0 120px rgba(var(--brand-2-rgb), 0.5), 0 0 60px rgba(var(--brand-rgb), 0.4)",
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
        style={{ fontSize: size === 200 ? "42px" : "32px" }}
      >
        ACCORTO
      </span>
      <span className="text-[10px] sm:text-xs font-medium tracking-widest text-slate-100 opacity-80 uppercase mt-1.5 select-none">
        Intelligence Layer
      </span>
    </motion.div>
  );
});

CenterNode.displayName = "CenterNode";
