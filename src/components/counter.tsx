import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = !!useReducedMotion();
  // Initialize with target value for SSR & initial HTML paint so crawlers/users see the real metric value
  const [val, setVal] = useState(to);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVal(to);
      return;
    }
    if (!inView || hasStarted) return;
    setHasStarted(true);

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, shouldReduceMotion, hasStarted]);

  return (
    <span ref={ref}>
      {Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

