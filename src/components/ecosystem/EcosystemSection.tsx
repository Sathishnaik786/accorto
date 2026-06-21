import React, { useState, useEffect, useMemo } from "react";
import { SectionHeading } from "../section";
import { PARTNERS } from "./partner-config";
import { useResponsiveRadius } from "./useResponsiveRadius";
import { CenterNode } from "./CenterNode";
import { TechNode } from "./TechNode";
import { OrbitRing } from "./OrbitRing";
import { ConnectionLines } from "./ConnectionLines";

export function EcosystemSection() {
  const dimensions = useResponsiveRadius();
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const memoizedPartners = useMemo(() => PARTNERS, []);

  // Compute radial positions for all screen sizes
  const positionedNodes = useMemo(() => {
    const { centerX, centerY, radius } = dimensions;
    const totalItems = memoizedPartners.length;
    return memoizedPartners.map((partner, index) => {
      const angle = (Math.PI * 2 * index) / totalItems - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      return { partner, x, y };
    });
  }, [dimensions, memoizedPartners]);

  if (!mounted) {
    return (
      <section className="relative py-16 md:py-28 overflow-hidden bg-eco-bg">
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
          <div className="h-[380px] w-full flex items-center justify-center">
            <div className="animate-pulse w-32 h-32 bg-slate-200 dark:bg-slate-800 rounded-full" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-eco-bg border-y border-border/10 transition-colors duration-300">
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

        {/* Radial diagram — always shown on all screen sizes, scales to fit viewport */}
        <div
          className="relative mt-10 md:mt-16 flex items-center justify-center overflow-visible"
          style={{
            // Constrain max width to viewport on mobile so diagram is clipped/centred
            width: "100%",
            maxWidth: dimensions.width,
          }}
        >
          {/* Inner fixed-size diagram container */}
          <div
            className="relative flex-shrink-0 pointer-events-none"
            style={{ width: dimensions.width, height: dimensions.height }}
          >
            {/* Dashed outer orbit ring */}
            <OrbitRing radius={dimensions.radius} />

            {/* Connection Lines */}
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
        </div>
      </div>
    </section>
  );
}
