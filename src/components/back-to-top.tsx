import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { EASING } from "@/config/animations";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const shouldReduceMotion = !!useReducedMotion();

  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: EASING }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.06, y: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full text-foreground shadow-lg border border-slate-200/80 dark:border-white/10 cursor-pointer select-none group"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4.5 w-4.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

