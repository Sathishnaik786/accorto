import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASING } from "@/config/animations";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <motion.button
      whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
      transition={{ duration: 0.2, ease: EASING }}
      onClick={toggle}
      aria-label="Toggle theme"
      className="glass grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors cursor-pointer select-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45, scale: 0.8 }}
            transition={{ duration: 0.22, ease: EASING }}
          >
            <Sun className="h-4 w-4 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -45, scale: 0.8 }}
            transition={{ duration: 0.22, ease: EASING }}
          >
            <Moon className="h-4 w-4 text-slate-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

