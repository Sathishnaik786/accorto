import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand blur-2xl opacity-60" />
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand text-white font-display text-2xl font-bold">
                A
              </div>
            </motion.div>
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-brand"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Accorto Technologies</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
