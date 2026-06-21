import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Partner } from "./types";

interface ConnectionLinesProps {
  partners: Partner[];
  centerX: number;
  centerY: number;
  radius: number;
  width: number;
  height: number;
  hoveredId: string | null;
  centerNodeSize: number;
}

export const ConnectionLines = React.memo(
  ({
    partners,
    centerX,
    centerY,
    radius,
    width,
    height,
    hoveredId,
    centerNodeSize,
  }: ConnectionLinesProps) => {
    const shouldReduceMotion = useReducedMotion();
    const totalItems = partners.length;
    const centerNodeRadius = centerNodeSize / 2;

    // Pre-compute all positions so they can be shared between <defs> and rendering
    const computed = partners.map((partner, index) => {
      const angle = (Math.PI * 2 * index) / totalItems - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const startX = centerX + Math.cos(angle) * centerNodeRadius;
      const startY = centerY + Math.sin(angle) * centerNodeRadius;
      return { partner, x, y, startX, startY };
    });

    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox={`0 0 ${width} ${height}`}
        style={{ width, height }}
      >
        <defs>
          {/* Per-line gradients using userSpaceOnUse so vertical/horizontal lines render correctly.
              objectBoundingBox (the SVG default) fails for lines with zero-width bounding boxes
              (e.g. the perfectly vertical OpenAI line). userSpaceOnUse uses SVG coordinates. */}
          {computed.map(({ partner, startX, startY, x, y }) => (
            <linearGradient
              key={`grad-${partner.id}`}
              id={`line-grad-${partner.id}`}
              x1={startX}
              y1={startY}
              x2={x}
              y2={y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="var(--brand-2)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          ))}

          {/* Active glow filter for hovered path */}
          <filter id="glow-filter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {computed.map(({ partner, x, y, startX, startY }) => {
          const isHovered = hoveredId === partner.id;
          const strokeWidth = isHovered ? 4 : 2;
          const opacity = isHovered ? 1.0 : 0.35;
          const filter = isHovered ? "url(#glow-filter)" : undefined;
          const dotDuration = isHovered ? 1.2 : 3.0;

          return (
            <React.Fragment key={partner.id}>
              {/* Connection line — each uses its own per-partner gradient */}
              <motion.line
                x1={startX}
                y1={startY}
                x2={x}
                y2={y}
                stroke={`url(#line-grad-${partner.id})`}
                animate={{ strokeWidth, opacity }}
                style={{ filter }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />

              {/* Traveling pulse dot */}
              {!shouldReduceMotion && (
                <motion.circle
                  r="4"
                  fill={partner.glowColor}
                  animate={{
                    cx: [startX, x],
                    cy: [startY, y],
                    opacity: [0, 0.7, 0.7, 0],
                  }}
                  transition={{
                    duration: dotDuration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    filter: `drop-shadow(0 0 6px ${partner.glowColor})`,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </svg>
    );
  }
);

ConnectionLines.displayName = "ConnectionLines";
