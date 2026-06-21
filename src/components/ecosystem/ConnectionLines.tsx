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

    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox={`0 0 ${width} ${height}`}
        style={{ width, height }}
      >
        <defs>
          {/* Standard brand line gradient */}
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-2)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>

          {/* Active glow filter for the hovered path */}
          <filter id="glow-filter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* All partners get a connection line — including OpenAI */}
        {partners.map((partner, index) => {
          const isHovered = hoveredId === partner.id;
          const angle = (Math.PI * 2 * index) / totalItems - Math.PI / 2;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          // Compute start position exactly at the edge/circumference of the center circle
          const centerNodeRadius = centerNodeSize / 2;
          const startX = centerX + Math.cos(angle) * centerNodeRadius;
          const startY = centerY + Math.sin(angle) * centerNodeRadius;

          const strokeWidth = isHovered ? 4 : 2;
          const opacity = isHovered ? 1.0 : 0.35;
          const filter = isHovered ? "url(#glow-filter)" : undefined;

          // Pulse dot speeds up from 3s to 1.2s when the partner card is hovered
          const dotDuration = isHovered ? 1.2 : 3.0;

          return (
            <React.Fragment key={partner.id}>
              {/* Connection Line starting from center circle edge */}
              <motion.line
                x1={startX}
                y1={startY}
                x2={x}
                y2={y}
                stroke="url(#line-gradient)"
                animate={{ strokeWidth, opacity }}
                style={{ filter }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />

              {/* Traveling Pulse Dot starting from center circle edge */}
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
