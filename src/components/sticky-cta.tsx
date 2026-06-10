import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-6 z-50 hidden md:block"
        >
          <div className="glass-strong rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-sm border border-brand/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-semibold">Accelerate Your Business</div>
              <div className="text-[10px] text-muted-foreground">Talk to our enterprise architects.</div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-1.5 text-xs font-medium text-white shadow-lg hover:scale-105 transition-transform"
            >
              Book Consultation <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </motion.div>
      )}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/80 backdrop-blur-md border-t border-border md:hidden flex justify-center"
        >
          <Link
            to="/contact"
            className="w-full text-center inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand py-3 text-sm font-medium text-white shadow-lg"
          >
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
