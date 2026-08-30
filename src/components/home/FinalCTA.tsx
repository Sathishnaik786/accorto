import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../section";
import { useMotionSystem, useMouseParallax } from "../../lib/motion-presets";
import { SpecularButton } from "../animations/SpecularButton";

const MotionLink = motion.create(Link);

export function FinalCTA() {
  const { buttonTap, buttonTransition } = useMotionSystem();
  const { parallaxProps, handleMouseMove, handleMouseLeave } = useMouseParallax(8);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div
            ref={cardRef}
            onMouseMove={(e) => {
              handleCardMouseMove(e);
              handleMouseMove(e);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseLeave();
            }}
            className="relative overflow-hidden rounded-4xl bg-[#0C223D] border border-white/6 px-5 py-10 sm:p-12 md:p-16 text-center group shadow-2xl select-none"
          >
            {/* Backdrop image overlay */}
            <img
              src="/card_1.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-[1.05] z-0 pointer-events-none transition-transform duration-2000 group-hover:scale-105"
            />
            {/* Dark gradient layer */}
            <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />

            {/* Interactive Spotlight layer */}
            {isHovered && (
              <div
                className="absolute inset-0 z-15 pointer-events-none transition-opacity duration-500 opacity-100"
                style={{
                  background: `radial-gradient(circle 400px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
                }}
              />
            )}

            {/* Subtle noise layer */}
            <div className="absolute inset-0 opacity-[0.008] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')] z-10" />

            <motion.div
              className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6"
              {...parallaxProps}
            >
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl">
                Ready to ship the next era of your enterprise?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-8 max-w-xl">
                Talk to an enterprise architect. 30 minutes, zero obligation, immediate value.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <SpecularButton
                  to="/contact"
                  size="lg"
                  variant="white"
                  className="w-full sm:w-auto font-bold shadow-md"
                >
                  Book Free Consultation
                </SpecularButton>
                <MotionLink
                  to="/case-studies"
                  whileHover={{ scale: 1.03 }}
                  whileTap={buttonTap}
                  transition={buttonTransition}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                >
                  See client results
                </MotionLink>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
