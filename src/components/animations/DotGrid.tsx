import React, { useRef, useEffect, useCallback, useMemo } from "react";
import "./DotGrid.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const throttle = <T extends (...args: any[]) => void>(func: T, limit: number) => {
  let lastCall = 0;
  return function (this: unknown, ...args: Parameters<T>) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 26, g: 49, b: 85 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

interface GridDot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 4,
  gap = 24,
  baseColor = "#1A3155",
  activeColor = "#38BDF8",
  proximity = 110,
  speedTrigger = 140,
  shockRadius = 180,
  shockStrength = 3,
  maxSpeed = 5000,
  resistance = 850,
  returnDuration = 1.2,
  className = "",
  style,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<GridDot[]>([]);
  const pointerRef = useRef({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;
    const p = new window.Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas || typeof window === "undefined") return;

    const { width, height } = wrap.getBoundingClientRect();
    if (width === 0 || height === 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cell = dotSize + gap;
    const cols = Math.ceil(width / cell) + 1;
    const rows = Math.ceil(height / cell) + 1;

    const offsetX = (width % cell) / 2;
    const offsetY = (height % cell) / 2;

    const dots: GridDot[] = [];
    for (let y = -2; y <= rows + 2; y++) {
      for (let x = -2; x <= cols + 2; x++) {
        const cx = offsetX + x * cell;
        const cy = offsetY + y * cell;
        dots.push({
          cx,
          cy,
          xOffset: 0,
          yOffset: 0,
          vx: 0,
          vy: 0,
          targetX: 0,
          targetY: 0,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath || typeof window === "undefined") return;

    let rafId = 0;
    const proxSq = proximity * proximity;
    let lastTime = performance.now();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const drawStatic = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = baseColor;
      for (const dot of dotsRef.current) {
        ctx.save();
        ctx.translate(dot.cx, dot.cy);
        ctx.fill(circlePath);
        ctx.restore();
      }
    };

    const draw = (now: number) => {
      if (reducedMotion.matches) {
        drawStatic();
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: px, y: py } = pointerRef.current;

      const stiffness = 80 / Math.max(returnDuration, 0.5);
      const damping = Math.max(1 - (resistance / 1000) * 0.5, 0.75);

      for (const dot of dotsRef.current) {
        // Physical spring simulation towards origin
        if (Math.abs(dot.xOffset) > 0.001 || Math.abs(dot.yOffset) > 0.001 || Math.abs(dot.vx) > 0.001 || Math.abs(dot.vy) > 0.001) {
          const ax = -stiffness * dot.xOffset;
          const ay = -stiffness * dot.yOffset;
          dot.vx = (dot.vx + ax * dt) * damping;
          dot.vy = (dot.vy + ay * dt) * damping;
          dot.xOffset += dot.vx * dt;
          dot.yOffset += dot.vy * dt;

          if (Math.abs(dot.xOffset) < 0.01 && Math.abs(dot.vx) < 0.01) {
            dot.xOffset = 0;
            dot.vx = 0;
          }
          if (Math.abs(dot.yOffset) < 0.01 && Math.abs(dot.vy) < 0.01) {
            dot.yOffset = 0;
            dot.vy = 0;
          }
        }

        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = baseColor;
        if (dsq <= proxSq && px > -9000) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    if (reducedMotion.matches) {
      drawStatic();
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath, returnDuration, resistance]);

  useEffect(() => {
    buildGrid();
    if (typeof window === "undefined") return;

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(buildGrid);
      if (wrapperRef.current) {
        ro.observe(wrapperRef.current);
      }
      return () => ro.disconnect();
    } else {
      window.addEventListener("resize", buildGrid);
      return () => window.removeEventListener("resize", buildGrid);
    }
  }, [buildGrid]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? Math.max(now - pr.lastTime, 1) : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      // Only affect dots when inside or close to hero canvas
      if (pr.x < -100 || pr.x > rect.width + 100 || pr.y < -100 || pr.y > rect.height + 100) {
        return;
      }

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity) {
          const pushX = (dot.cx - pr.x) * 0.15 + vx * 0.003;
          const pushY = (dot.cy - pr.y) * 0.15 + vy * 0.003;
          dot.vx += pushX * 8;
          dot.vy += pushY * 8;
        }
      }
    };

    const onLeave = () => {
      pointerRef.current.x = -9999;
      pointerRef.current.y = -9999;
    };

    const onClick = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      if (cx < 0 || cx > rect.width || cy < 0 || cy > rect.height) return;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius) {
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          dot.vx += pushX * 12;
          dot.vy += pushY * 12;
        }
      }
    };

    const throttledMove = throttle(onMove, 30);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [maxSpeed, speedTrigger, proximity, shockRadius, shockStrength]);

  return (
    <section className={`dot-grid ${className}`} style={style} aria-hidden="true">
      <div ref={wrapperRef} className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </section>
  );
};

export default DotGrid;
