import React, { useState, useEffect, useMemo } from "react";
import { useReducedMotion, motion } from "framer-motion";
import { SectionHeading } from "../section";
import { PARTNERS } from "./partner-config";
import { useResponsiveRadius } from "./useResponsiveRadius";
import { CenterNode } from "./CenterNode";
import { TechNode } from "./TechNode";
import { OrbitRing } from "./OrbitRing";
import { ConnectionLines } from "./ConnectionLines";
import { MobileCarousel } from "./MobileCarousel";

export function EcosystemSection() {
  const dimensions = useResponsiveRadius();
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const memoizedPartners = useMemo(() => PARTNERS, []);

  // Compute precise coordinates for radial layout using Cartesian coordinates
  const positionedNodes = useMemo(() => {
    const { centerX, centerY, radius, isMobile } = dimensions;
    if (isMobile) return [];

    const totalItems = memoizedPartners.length;
    return memoizedPartners.map((partner, index) => {
      const angle = (Math.PI * 2 * index) / totalItems - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      return { partner, x, y };
    });
  }, [dimensions, memoizedPartners]);

  if (!mounted) {
    // Avoid layout shifts or hydration failures by showing clean placeholder
    return (
      <section className="relative py-28 overflow-hidden bg-eco-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            tag="Technology Ecosystem"
            title={
              <>
                One partner. <span className="text-gradient">Every platform.</span>
              </>
            }
            subtitle="We orchestrate the world's most powerful enterprise platforms into a single, intelligent operating fabric for your business."
            center
          />
          <div className="h-[450px] w-full flex items-center justify-center">
            <div className="animate-pulse w-32 h-32 bg-slate-200 dark:bg-slate-800 rounded-full" />
          </div>
        </div>
      </section>
    );
  }

  const activePartner = memoizedPartners[activeMobileIndex];

  return (
    <section className="relative py-28 overflow-hidden bg-eco-bg border-y border-border/10 transition-colors duration-300">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-subtle pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <SectionHeading
          tag="Technology Ecosystem"
          title={
            <>
              One partner. <span className="text-gradient">Every platform.</span>
            </>
          }
          subtitle="We orchestrate the world's most powerful enterprise platforms into a single, intelligent operating fabric for your business."
          center
        />

        {dimensions.isMobile ? (
          /* Mobile Stack View with Carousel */
          <div className="flex flex-col items-center justify-center w-full mt-16">
            {/* Center Node */}
            <CenterNode size={dimensions.centerNodeSize} />

            {/* Vertical connector line */}
            <div className="relative w-full h-[60px] pointer-events-none">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 60"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="mobile-gradient"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="var(--brand-2)" />
                    <stop offset="100%" stopColor="var(--primary)" />
                  </linearGradient>
                </defs>
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="60"
                  stroke="url(#mobile-gradient)"
                  strokeWidth="3"
                  opacity={activePartner.id === "openai" ? 0 : 1.0}
                />
                {!shouldReduceMotion && activePartner.id !== "openai" && (
                  <motion.circle
                    r="4"
                    fill={activePartner.glowColor}
                    animate={{ cy: [0, 60] }}
                    transition={{
                      duration: 2.0,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      cx: 50,
                      filter: `drop-shadow(0 0 6px ${activePartner.glowColor})`,
                    }}
                  />
                )}
              </svg>
            </div>

            {/* Carousel Slider */}
            <MobileCarousel
              partners={memoizedPartners}
              activeIndex={activeMobileIndex}
              onChange={setActiveMobileIndex}
              nodeWidth={dimensions.nodeWidth}
              nodeHeight={dimensions.nodeHeight}
            />
          </div>
        ) : (
          /* Desktop/Tablet Radial View */
          <div
            className="relative flex items-center justify-center mt-16 pointer-events-none"
            style={{ width: dimensions.width, height: dimensions.height }}
          >
            {/* Dashed outer orbit rings */}
            <OrbitRing radius={dimensions.radius} />

            {/* Connection Lines from Center to Cards */}
            <ConnectionLines
              partners={memoizedPartners}
              centerX={dimensions.centerX}
              centerY={dimensions.centerY}
              radius={dimensions.radius}
              width={dimensions.width}
              height={dimensions.height}
              hoveredId={hoveredId}
              centerNodeSize={dimensions.centerNodeSize}
            />

            {/* Center Node */}
            <div
              className="absolute pointer-events-auto"
              style={{
                left: dimensions.centerX,
                top: dimensions.centerY,
                transform: "translate(-50%, -50%)",
              }}
            >
              <CenterNode
                size={dimensions.centerNodeSize}
                isAnyNodeHovered={hoveredId !== null}
              />
            </div>

            {/* Outer Technology Nodes */}
            {positionedNodes.map(({ partner, x, y }) => (
              <TechNode
                key={partner.id}
                partner={partner}
                x={x}
                y={y}
                width={dimensions.nodeWidth}
                height={dimensions.nodeHeight}
                isHovered={hoveredId === partner.id}
                onHoverStart={() => setHoveredId(partner.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
