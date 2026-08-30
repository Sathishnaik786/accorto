import React, { useState, useEffect, useRef, useMemo, useId } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CenterFlowNode {
  id: string;
  name: string;
  glowColor: string;
  icon?: string;
  description?: string;
}

export interface CenterFlowProps {
  centerTitle?: string;
  centerSubtitle?: string;
  nodes?: CenterFlowNode[];
  className?: string;
  pulseColor?: string;
  lineWidth?: number;
  pulseWidth?: number;
  pulseDuration?: number;
  interactive?: boolean;
  enableMouseParallax?: boolean;
  enableScrollParallax?: boolean;
}

const DEFAULT_NODES: CenterFlowNode[] = [
  { id: "openai", name: "OpenAI & LLMs", glowColor: "#10A37F", icon: "/logos/Open-AI.png" },
  { id: "salesforce", name: "Salesforce & PeopleSoft", glowColor: "#00A1E0" },
  { id: "aws", name: "AWS", glowColor: "#FF9900", icon: "/logos/amazon.png" },
  { id: "snowflake-databricks", name: "Snowflake & Databricks", glowColor: "#29B5E8" },
  { id: "sap", name: "SAP", glowColor: "#0FAAFF", icon: "/logos/sap.png" },
  { id: "gcp", name: "GCP", glowColor: "#4285F4", icon: "/logos/google_cloud.png" },
  { id: "azure", name: "Azure", glowColor: "#0078D4", icon: "/logos/Azure.png" },
  { id: "iot-sensors", name: "IoT & Sensors", glowColor: "#70FF4A" },
];

export function CenterFlow({
  centerTitle = "ACCORTO",
  centerSubtitle = "INTELLIGENCE LAYER",
  nodes = DEFAULT_NODES,
  className,
  pulseColor = "#00D9FF",
  lineWidth = 1.85,
  pulseWidth = 5.5,
  pulseDuration = 4.0,
  interactive = true,
  enableMouseParallax = true,
  enableScrollParallax = true,
}: CenterFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filterId = useId();
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Single Source of Truth Responsive Dimensions & Unified Orbital Radius
  const [dims, setDims] = useState({
    width: 860,
    height: 780,
    radius: 280,
    centerSize: 196,
    nodeHeight: 48,
    fontSize: 13.5,
    iconSize: 32,
    paddingX: 16,
    gap: 9,
    minNodeWidth: 90,
    maxNodeWidth: 250,
    isMobile: false,
  });

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 400) {
        // Small mobile (375px)
        setDims({
          width: 350,
          height: 390,
          radius: 126,
          centerSize: 108,
          nodeHeight: 32,
          fontSize: 10,
          iconSize: 18,
          paddingX: 7,
          gap: 5,
          minNodeWidth: 65,
          maxNodeWidth: 145,
          isMobile: true,
        });
      } else if (w < 640) {
        // Standard mobile (390px - 639px)
        setDims({
          width: Math.min(w - 24, 420),
          height: 420,
          radius: 142,
          centerSize: 118,
          nodeHeight: 36,
          fontSize: 11,
          iconSize: 22,
          paddingX: 9,
          gap: 6,
          minNodeWidth: 75,
          maxNodeWidth: 165,
          isMobile: true,
        });
      } else if (w < 1024) {
        // Tablet (640px - 1023px)
        setDims({
          width: Math.min(w - 48, 640),
          height: 600,
          radius: 205,
          centerSize: 154,
          nodeHeight: 42,
          fontSize: 12,
          iconSize: 26,
          paddingX: 12,
          gap: 7,
          minNodeWidth: 85,
          maxNodeWidth: 210,
          isMobile: false,
        });
      } else if (w < 1440) {
        // Desktop (1024px - 1439px)
        setDims({
          width: Math.min(w - 64, 780),
          height: 720,
          radius: 255,
          centerSize: 180,
          nodeHeight: 46,
          fontSize: 13,
          iconSize: 30,
          paddingX: 14,
          gap: 8,
          minNodeWidth: 90,
          maxNodeWidth: 240,
          isMobile: false,
        });
      } else {
        // Large desktop (1440px - 1920px+)
        setDims({
          width: 860,
          height: 780,
          radius: 280,
          centerSize: 196,
          nodeHeight: 48,
          fontSize: 13.5,
          iconSize: 32,
          paddingX: 16,
          gap: 9,
          minNodeWidth: 90,
          maxNodeWidth: 250,
          isMobile: false,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Single Diagram Origin Coordinate (Absolute Center)
  const centerX = dims.width / 2;
  const centerY = dims.height / 2;
  const centerRadius = dims.centerSize / 2;

  // Layered Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const ringsParallaxY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const archParallaxY = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  // Subtle Pointer Parallax (Clamped to 2-3px)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableMouseParallax || shouldReduceMotion || !containerRef.current || dims.isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredId(null);
  };

  // Compute Exact Programmatic Radial Coordinates for All 8 Nodes from Unified Diagram Center
  const nodePositions = useMemo(() => {
    const totalNodes = nodes.length;
    const angleStep = (2 * Math.PI) / totalNodes;
    const startAngleRad = -Math.PI / 2; // -90 deg (12 o'clock / top)

    return nodes.map((node, index) => {
      const angleRad = startAngleRad + index * angleStep;
      const angleDeg = (angleRad * 180) / Math.PI;

      // Exact single shared orbital radius R for every node
      const x = centerX + Math.cos(angleRad) * dims.radius;
      const y = centerY + Math.sin(angleRad) * dims.radius;

      // Pulse start point: EXACT circumference of center circle
      const startX = centerX + Math.cos(angleRad) * centerRadius;
      const startY = centerY + Math.sin(angleRad) * centerRadius;

      // Pulse end point: boundary of tech card
      const endOffset = dims.isMobile ? (dims.iconSize + dims.paddingX) : 44;
      const endX = x - Math.cos(angleRad) * endOffset;
      const endY = y - Math.sin(angleRad) * endOffset;

      const entranceDelay = 0.18 + index * 0.06;
      const pulseDelay = index * 0.35;

      return {
        node,
        angleDeg,
        angleRad,
        x,
        y,
        startX,
        startY,
        endX,
        endY,
        entranceDelay,
        pulseDelay,
      };
    });
  }, [nodes, centerX, centerY, dims.radius, centerRadius, dims.isMobile, dims.iconSize, dims.paddingX]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.94, y: 35 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex flex-col items-center justify-center w-full select-none overflow-visible py-6 sm:py-10",
        className,
      )}
    >
      {!mounted ? (
        <div className="relative flex items-center justify-center min-h-125 w-full">
          <div className="w-36 h-36 rounded-full bg-cyan-500/15 border border-cyan-400/30 animate-pulse" />
        </div>
      ) : (
        /* Outer Constrained Sizing Frame — Mathematically Centered */
        <div
          className="relative flex items-center justify-center overflow-visible"
          style={{
            width: "100%",
            maxWidth: dims.width,
            height: dims.height,
          }}
        >
        {/* =========================================================================
            LAYER 1: AMBIENT BACKGROUND ATMOSPHERE
            Concentric at (centerX, centerY)
            ========================================================================= */}
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : bgParallaxY }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          {/* Cyan/Blue Atmospheric Radial Glow Halo */}
          <div
            className="absolute rounded-full pointer-events-none opacity-80 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: dims.radius * 2.4,
              height: dims.radius * 2.4,
              left: centerX,
              top: centerY,
              background:
                "radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, rgba(22, 140, 255, 0.08) 40%, rgba(3, 18, 36, 0) 70%)",
              filter: "blur(48px)",
            }}
          />
        </motion.div>

        {/* =========================================================================
            LAYER 2: CONCENTRIC RADAR ORBIT RINGS
            All strictly centered at (centerX, centerY) via -translate-x-1/2 -translate-y-1/2
            ========================================================================= */}
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : ringsParallaxY }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          {/* Ring 1 (Inner Orbit) */}
          <div
            className="absolute rounded-full border border-dashed border-cyan-400/25 dark:border-cyan-400/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: dims.radius * 1.30,
              height: dims.radius * 1.30,
              left: centerX,
              top: centerY,
            }}
          />

          {/* Ring 2 (Outer Main Orbit passing through every node center) */}
          <div
            className="absolute rounded-full border border-dashed border-blue-500/25 dark:border-blue-400/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: dims.radius * 2.0,
              height: dims.radius * 2.0,
              left: centerX,
              top: centerY,
            }}
          />

          {/* Ring 3 (Atmosphere Outer) */}
          <div
            className="absolute rounded-full border border-dashed border-cyan-400/10 dark:border-cyan-400/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: dims.radius * 2.5,
              height: dims.radius * 2.5,
              left: centerX,
              top: centerY,
            }}
          />
        </motion.div>

        {/* =========================================================================
            LAYER 3: COMPLETE ARCHITECTURE NETWORK
            SVG Lines, Traveling Pulses, Center Node, & Tech Nodes LOCKED TOGETHER
            ========================================================================= */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : mousePos.x,
            y: shouldReduceMotion ? 0 : mousePos.y + (enableScrollParallax ? Number(archParallaxY.get()) : 0),
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* SVG Connection Lines & Radial Laser Pulse Packets */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            viewBox={`0 0 ${dims.width} ${dims.height}`}
            style={{ width: dims.width, height: dims.height }}
          >
            <defs>
              {/* Multi-tier Cyan-to-Partner Linear Gradients */}
              {nodePositions.map(({ node, startX, startY, x, y }) => (
                <linearGradient
                  key={`flow-grad-${node.id}`}
                  id={`flow-grad-${node.id}-${filterId}`}
                  x1={startX}
                  y1={startY}
                  x2={x}
                  y2={y}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#168CFF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor={node.glowColor} stopOpacity="0.95" />
                </linearGradient>
              ))}

              {/* Glowing Laser Beam Filter */}
              <filter id={`beam-glow-${filterId}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection Lines from True Center to Tech Node Center (Rendered Underneath Nodes) */}
            {nodePositions.map(({ node, x, y, startX, startY, endX, endY, pulseDelay }) => {
              const isHovered = hoveredId === node.id;
              const isOtherHovered = hoveredId !== null && !isHovered;

              const baseOpacity = isHovered ? 1.0 : isOtherHovered ? 0.28 : 0.52;
              const strokeW = isHovered ? lineWidth * 1.7 : lineWidth;

              return (
                <g key={`spoke-${node.id}`}>
                  {/* Background Connection Line: Starts at exact centerX, centerY under center node */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: baseOpacity }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke={`url(#flow-grad-${node.id}-${filterId})`}
                    strokeWidth={strokeW}
                    strokeLinecap="round"
                    animate={{ opacity: baseOpacity }}
                    style={{
                      filter: isHovered
                        ? `drop-shadow(0 0 6px ${node.glowColor})`
                        : "drop-shadow(0 0 2px rgba(0, 217, 255, 0.4))",
                    }}
                  />

                  {/* Traveling Data Pulse Bead (Travels from Center Circle Edge to Tech Card Edge) */}
                  {!shouldReduceMotion && (
                    <>
                      {/* Outer Luminous Glowing Pulse Bead */}
                      <motion.circle
                        r={isHovered ? pulseWidth * 1.35 : pulseWidth}
                        fill={isHovered ? node.glowColor : pulseColor}
                        filter={`url(#beam-glow-${filterId})`}
                        animate={{
                          cx: [startX, endX],
                          cy: [startY, endY],
                          opacity: [0, 0.95, 0.95, 0],
                          scale: [0.85, 1.15, 1.05, 0.85],
                        }}
                        transition={{
                          duration: pulseDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: pulseDelay,
                        }}
                      />

                      {/* Inner White Data Spark Core */}
                      <motion.circle
                        r={pulseWidth * 0.45}
                        fill="#FFFFFF"
                        animate={{
                          cx: [startX, endX],
                          cy: [startY, endY],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: pulseDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: pulseDelay,
                        }}
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* =======================================================================
              CENTER INTELLIGENCE CORE NODE
              Strictly Positioned with center at (centerX, centerY) via -translate-x-1/2 -translate-y-1/2
              ======================================================================= */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            style={{
              left: centerX,
              top: centerY,
              width: dims.centerSize,
              height: dims.centerSize,
              zIndex: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex flex-col items-center justify-center rounded-full text-center select-none"
            >
              {/* Layer A: Core Cyan Glow Halo */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0, 217, 255, 0.55) 0%, rgba(22, 140, 255, 0.3) 45%, transparent 70%)",
                  filter: "blur(24px)",
                  transform: hoveredId ? "scale(1.32)" : "scale(1.18)",
                  transition: "transform 0.5s ease-out",
                }}
              />

              {/* Layer B: Ambient Blue Atmosphere */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none -z-20 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, rgba(22, 140, 255, 0.35) 0%, rgba(0, 217, 255, 0.15) 55%, transparent 75%)",
                  filter: "blur(48px)",
                  transform: "scale(1.4)",
                }}
              />

              {/* Central Glass Spherical Body */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? { scale: 1 }
                    : {
                        scale: [1, 1.012, 1],
                      }
                }
                transition={{
                  duration: 5.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center w-full h-full rounded-full overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(12, 38, 68, 0.96) 0%, rgba(7, 28, 52, 0.94) 55%, rgba(10, 34, 60, 0.96) 100%)",
                  border: "1.5px solid rgba(0, 217, 255, 0.55)",
                  boxShadow:
                    "inset 0 1px 2px 0 rgba(255, 255, 255, 0.4), inset 0 -3px 12px 0 rgba(0, 217, 255, 0.3), 0 16px 40px rgba(0, 0, 0, 0.65), 0 0 20px rgba(0, 217, 255, 0.2)",
                  backdropFilter: "blur(24px)",
                }}
              >
                {/* Spherical Specular Light Reflection */}
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-cyan-400/15 to-white/30 pointer-events-none" />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-cyan-400/20 blur-md rounded-full pointer-events-none" />

                {/* Inner Cyan Border Ring */}
                <div className="absolute inset-0.75 rounded-full border border-cyan-400/30 pointer-events-none" />

                {/* ACCORTO Title */}
                <span
                  className="font-display font-black tracking-wider text-white leading-none select-none drop-shadow-[0_2px_12px_rgba(0,217,255,0.6)]"
                  style={{ fontSize: Math.max(13, Math.round(dims.centerSize * 0.185)) }}
                >
                  {centerTitle}
                </span>

                {/* INTELLIGENCE LAYER Subtitle */}
                <span
                  className="font-mono font-bold tracking-[0.16em] text-cyan-300 dark:text-cyan-200 uppercase mt-2 opacity-95 select-none text-center leading-tight drop-shadow-[0_1px_6px_rgba(0,217,255,0.4)]"
                  style={{ fontSize: Math.max(8, Math.round(dims.centerSize * 0.058)) }}
                >
                  {centerSubtitle}
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* =======================================================================
              OUTER TECHNOLOGY NODES
              Positioned with center at (node.x, node.y) via -translate-x-1/2 -translate-y-1/2
              ======================================================================= */}
          <div className="absolute inset-0 pointer-events-none">
            {nodePositions.map(({ node, x, y, entranceDelay }) => {
              const isHovered = hoveredId === node.id;

              return (
                <div
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto select-none outline-hidden cursor-pointer group"
                  style={{
                    left: x,
                    top: y,
                    width: "max-content",
                    maxWidth: dims.maxNodeWidth,
                    height: dims.nodeHeight,
                    zIndex: 30,
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${node.name} integrated platform`}
                  aria-pressed={isHovered}
                  onMouseEnter={() => interactive && setHoveredId(node.id)}
                  onMouseLeave={() => interactive && setHoveredId(null)}
                  onFocus={() => interactive && setHoveredId(node.id)}
                  onBlur={() => interactive && setHoveredId(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={
                      isHovered && !shouldReduceMotion
                        ? { scale: 1.04, y: -3 }
                        : { scale: 1, y: 0 }
                    }
                    transition={{
                      opacity: { duration: 0.55, delay: entranceDelay, ease: [0.16, 1, 0.3, 1] },
                      scale: { type: "spring", stiffness: 320, damping: 22 },
                      y: { type: "spring", stiffness: 320, damping: 22 },
                    }}
                    className="relative flex items-center rounded-full h-full"
                  >
                    {/* Ambient Brand Glow Halo */}
                    <div
                      className="absolute inset-0 rounded-full transition-opacity duration-300 -z-10 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${node.glowColor}55 0%, ${node.glowColor}15 45%, transparent 70%)`,
                        opacity: isHovered ? 0.95 : 0.45,
                        transform: isHovered ? "scale(1.45)" : "scale(1.25)",
                        filter: "blur(10px)",
                      }}
                    />

                    {/* Glass Pill Surface — Natural Content Expansion with Overflow Visible */}
                    <div
                      className="relative flex items-center h-full rounded-full transition-all duration-300 overflow-visible shrink-0"
                      style={{
                        paddingInline: dims.paddingX,
                        gap: dims.gap,
                        backgroundColor: isHovered
                          ? "rgba(14, 40, 72, 0.96)"
                          : "rgba(10, 31, 55, 0.94)",
                        border: isHovered
                          ? `1.5px solid ${node.glowColor}`
                          : "1px solid rgba(90, 160, 200, 0.35)",
                        boxShadow: isHovered
                          ? `0 0 28px ${node.glowColor}66, 0 12px 32px rgba(0, 0, 0, 0.5)`
                          : `0 8px 24px rgba(0, 0, 0, 0.38), 0 0 12px ${node.glowColor}22`,
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {/* Brand Icon */}
                      {node.icon && (
                        <div
                          className="shrink-0 flex items-center justify-center rounded-full overflow-hidden"
                          style={{ width: dims.iconSize, height: dims.iconSize }}
                        >
                          <img
                            src={node.icon}
                            alt={`${node.name} logo`}
                            loading="lazy"
                            className="w-full h-full object-contain filter contrast-[1.08] brightness-[1.02]"
                            style={{
                              width: dims.iconSize,
                              height: dims.iconSize,
                            }}
                          />
                        </div>
                      )}

                      {/* Brand Title (Full, Crisp, Never Truncated) */}
                      <span
                        className="font-display font-semibold select-none whitespace-nowrap text-white dark:text-[#F5F7FA] leading-none"
                        style={{ fontSize: dims.fontSize }}
                      >
                        {node.name}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      )}
    </motion.div>
  );
}

export default CenterFlow;
