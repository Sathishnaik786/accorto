import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Partner } from "./types";
import { TechNode } from "./TechNode";

interface MobileCarouselProps {
  partners: Partner[];
  activeIndex: number;
  onChange: (index: number) => void;
  nodeWidth: number;
  nodeHeight: number;
}

export const MobileCarousel = React.memo(
  ({ partners, activeIndex, onChange, nodeWidth, nodeHeight }: MobileCarouselProps) => {
    const shouldReduceMotion = useReducedMotion();
    const [direction, setDirection] = useState(0);

    const slideVariants = {
      enter: (dir: number) => ({
        x: dir > 0 ? 80 : -80,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (dir: number) => ({
        x: dir < 0 ? 80 : -80,
        opacity: 0,
      }),
    };

    const handleNext = () => {
      setDirection(1);
      onChange((activeIndex + 1) % partners.length);
    };

    const handlePrev = () => {
      setDirection(-1);
      onChange((activeIndex - 1 + partners.length) % partners.length);
    };

    const activePartner = partners[activeIndex];

    return (
      <div className="flex flex-col items-center w-full max-w-[320px] pointer-events-auto">
        {/* Animated Slide container */}
        <div className="relative w-full h-[90px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activePartner.id}
              custom={direction}
              variants={shouldReduceMotion ? {} : slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative" style={{ width: nodeWidth, height: nodeHeight }}>
                <TechNode
                  partner={activePartner}
                  x={nodeWidth / 2}
                  y={nodeHeight / 2}
                  width={nodeWidth}
                  height={nodeHeight}
                  isHovered={true}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                  isActive={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-6 mt-4 z-40">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-border bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
            aria-label="Previous integration"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-1.5" role="tablist" aria-label="Integration partners switcher">
            {partners.map((partner, idx) => (
              <button
                key={partner.id}
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Show ${partner.name}`}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  onChange(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-primary`}
                style={{
                  width: idx === activeIndex ? "20px" : "8px",
                  backgroundColor:
                    idx === activeIndex ? activePartner.glowColor : "rgba(148,163,184,0.4)",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-border bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
            aria-label="Next integration"
          >
            <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
        </div>
      </div>
    );
  },
);

MobileCarousel.displayName = "MobileCarousel";
