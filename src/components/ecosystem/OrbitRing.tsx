import React from "react";
import { useReducedMotion } from "framer-motion";

interface OrbitRingProps {
  isMobile?: boolean;
  radius: number;
}

export const OrbitRing = React.memo(({ isMobile = false, radius }: OrbitRingProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (isMobile) return null;

  // Scale the exact requested diameters (280px, 430px, 580px) proportionally based on the current radius
  const scale = radius / 240;
  const d1 = 280 * scale;
  const d2 = 430 * scale;
  const d3 = 580 * scale;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
      {/* Inner Ring - Clockwise 60s */}
      <div
        className={`absolute rounded-full border border-dashed border-eco-ring ${
          shouldReduceMotion ? "" : "animate-[spin_60s_linear_infinite]"
        }`}
        style={{ width: d1, height: d1, opacity: 0.1 }}
      />
      {/* Middle Ring - Counter-Clockwise 90s */}
      <div
        className={`absolute rounded-full border border-dashed border-eco-ring ${
          shouldReduceMotion ? "" : "animate-[spin_90s_linear_infinite_reverse]"
        }`}
        style={{ width: d2, height: d2, opacity: 0.1 }}
      />
      {/* Outer Ring - Clockwise 120s */}
      <div
        className={`absolute rounded-full border border-dashed border-eco-ring ${
          shouldReduceMotion ? "" : "animate-[spin_120s_linear_infinite]"
        }`}
        style={{ width: d3, height: d3, opacity: 0.1 }}
      />
    </div>
  );
});

OrbitRing.displayName = "OrbitRing";
