import React, { useEffect, useState } from "react";
import { useMotionSystem } from "@/lib/motion-presets";

export function FloatingSpotlight() {
  const { shouldReduceMotion } = useMotionSystem();
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (shouldReduceMotion) return;

    setEnabled(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100 blur-3xl transition-transform duration-300 select-none"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, rgba(0, 162, 255, 0.06) 0%, rgba(143, 255, 61, 0.03) 40%, transparent 70%)",
      }}
    />
  );
}
