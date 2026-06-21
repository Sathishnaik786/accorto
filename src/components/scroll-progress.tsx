import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-60 h-[2px] origin-left bg-linear-to-r from-indigo-500 to-cyan-400 shadow-[0_1px_6px_rgba(6,182,212,0.4)]"
    />
  );
}
