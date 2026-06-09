import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[55] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl transition-transform duration-200"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, rgba(124,58,237,0.35), rgba(37,99,235,0.2) 40%, transparent 70%)",
      }}
    />
  );
}
