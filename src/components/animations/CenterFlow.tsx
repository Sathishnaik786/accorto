import React, { useState, useEffect, useRef, useMemo, useId } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TechGroupItem {
  name: string;
  icon?: string;
}

export interface TechGroupNode {
  id: string;
  title: string;
  angle?: number;
  glowColor: string;
  accentColor?: string;
  ariaLabel?: string;
  items: TechGroupItem[];
}

// Backwards compatibility alias
export type CenterFlowNode = TechGroupNode;

export interface CenterFlowProps {
  centerTitle?: string;
  centerSubtitle?: string;
  groups?: TechGroupNode[];
  nodes?: TechGroupNode[]; // Backwards compatibility prop
  className?: string;
  pulseColor?: string;
  lineWidth?: number;
  pulseWidth?: number;
  pulseDuration?: number;
  interactive?: boolean;
  enableMouseParallax?: boolean;
  enableScrollParallax?: boolean;
}

export const DEFAULT_GROUPS: TechGroupNode[] = [
  {
    id: "ai-iot",
    title: "AI & IoT",
    angle: -Math.PI / 2, // -90 deg (12 o'clock / Top)
    glowColor: "#10A37F",
    accentColor: "#00E5A3",
    ariaLabel: "AI & IoT: AI, OpenAI & LLMs, IoT & Sensors",
    items: [
      { name: "AI" },
      { name: "OpenAI & LLMs", icon: "/logos/Open-AI.png" },
      { name: "IoT & Sensors" },
    ],
  },
  {
    id: "data-platforms",
    title: "Data Platforms",
    angle: -Math.PI / 2 + (2 * Math.PI) / 5, // -18 deg (Upper-Right)
    glowColor: "#00D9FF",
    accentColor: "#29B5E8",
    ariaLabel: "Data Platforms: Snowflake, Databricks",
    items: [
      { name: "Snowflake" },
      { name: "Databricks" },
    ],
  },
  {
    id: "career-development",
    title: "Career & Development",
    angle: -Math.PI / 2 + 2 * ((2 * Math.PI) / 5), // +54 deg (Lower-Right)
    glowColor: "#38BDF8",
    accentColor: "#60A5FA",
    ariaLabel: "Career & Development: Career, Development, Academy",
    items: [
      { name: "Career" },
      { name: "Development" },
      { name: "Academy" },
    ],
  },
  {
    id: "enterprise-platforms",
    title: "Enterprise Platforms",
    angle: -Math.PI / 2 + 3 * ((2 * Math.PI) / 5), // +126 deg (Lower-Left)
    glowColor: "#0FAAFF",
    accentColor: "#00A1E0",
    ariaLabel: "Enterprise Platforms: Oracle, SAP, Salesforce",
    items: [
      { name: "Oracle", icon: "/logos/oracle.png" },
      { name: "SAP", icon: "/logos/sap.png" },
      { name: "Salesforce" },
    ],
  },
  {
    id: "cloud-platforms",
    title: "Cloud Platforms",
    angle: -Math.PI / 2 + 4 * ((2 * Math.PI) / 5), // +198 deg (Upper-Left)
    glowColor: "#168CFF",
    accentColor: "#4285F4",
    ariaLabel: "Cloud Platforms: AWS, Azure, GCP",
    items: [
      { name: "AWS", icon: "/logos/amazon.png" },
      { name: "Azure", icon: "/logos/Azure.png" },
      { name: "GCP", icon: "/logos/google_cloud.png" },
    ],
  },
];

// Strict Mobile Architectural Stack Hierarchy Order
const MOBILE_HIERARCHY_ORDER = [
  "ai-iot",
  "cloud-platforms",
  "enterprise-platforms",
  "data-platforms",
  "career-development",
];

export function CenterFlow({
  centerTitle = "ACCORTO",
  centerSubtitle = "INTELLIGENCE LAYER",
  groups,
  nodes,
  className,
  pulseColor = "#00D9FF",
  lineWidth = 1.85,
  pulseWidth = 5.0,
  pulseDuration = 4.2,
  interactive = true,
  enableMouseParallax = true,
  enableScrollParallax = true,
}: CenterFlowProps) {
  const activeGroups = groups || nodes || DEFAULT_GROUPS;
  const containerRef = useRef<HTMLDivElement>(null);
  const filterId = useId();
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Responsive Dimensions & Uniform Connector Line Length
  const [dims, setDims] = useState({
    width: 1040,
    height: 860,
    lineLength: 135, // Guaranteed identical visible connector line length for all 5 nodes
    centerSize: 184,
    cardWidth: 244,
    cardHeight: 80,
    isMobile: false,
  });

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 640) {
        // Mobile screens: use vertical stacked architecture
        setDims({
          width: Math.min(w - 24, 440),
          height: 0, // Auto height in document flow
          lineLength: 26,
          centerSize: 132,
          cardWidth: 280,
          cardHeight: 74,
          isMobile: true,
        });
      } else if (w < 1024) {
        // Tablet (640px - 1023px): scaled radial pentagon with uniform lines
        const containerW = Math.min(w - 32, 740);
        setDims({
          width: containerW,
          height: 700,
          lineLength: 95, // Identical line length on tablet
          centerSize: 148,
          cardWidth: 204,
          cardHeight: 72,
          isMobile: false,
        });
      } else if (w < 1440) {
        // Standard Desktop (1024px - 1439px)
        const containerW = Math.min(w - 48, 960);
        setDims({
          width: containerW,
          height: 810,
          lineLength: 122, // Identical line length on standard desktop
          centerSize: 174,
          cardWidth: 236,
          cardHeight: 78,
          isMobile: false,
        });
      } else {
        // Large Desktop (1440px+)
        setDims({
          width: 1040,
          height: 860,
          lineLength: 135, // Identical line length on large desktop
          centerSize: 184,
          cardWidth: 244,
          cardHeight: 80,
          isMobile: false,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Center Coordinates
  const centerX = dims.width / 2;
  const centerY = dims.height / 2;
  const centerRadius = dims.centerSize / 2;

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const ringsParallaxY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const archParallaxY = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  // Pointer Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableMouseParallax || shouldReduceMotion || !containerRef.current || dims.isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredId(null);
  };

  // Compute Mathematically Balanced Regular Pentagon Coordinates
  // CRITICAL REQUIREMENT: All 5 connector lines between center circumference and card boundary
  // have the EXACT SAME VISIBLE LENGTH (`dims.lineLength`)!
  const groupPositions = useMemo(() => {
    if (dims.isMobile) return [];

    const GROUP_COUNT = activeGroups.length || 5;
    const angleStep = (2 * Math.PI) / GROUP_COUNT;
    const startAngleRad = -Math.PI / 2; // -90 deg (12 o'clock / Top)

    const hw = dims.cardWidth / 2;
    const hh = dims.cardHeight / 2;

    return activeGroups.map((group, index) => {
      // Use mathematically exact pentagon angles: -90°, -18°, +54°, +126°, +198°
      const angleRad = group.angle !== undefined ? group.angle : startAngleRad + index * angleStep;
      const cosA = Math.cos(angleRad);
      const sinA = Math.sin(angleRad);

      // 1. Connector Start: Exactly on the central ACCORTO circumference
      const startX = centerX + cosA * centerRadius;
      const startY = centerY + sinA * centerRadius;

      // 2. Connector End: Exactly dims.lineLength distance away from start point along the radial spoke!
      // This GUARANTEES that the connector line length is 100% IDENTICAL for all 5 groups!
      const endX = startX + cosA * dims.lineLength;
      const endY = startY + sinA * dims.lineLength;

      // 3. Card Center: Placed so that the card's outer perimeter meets the connector endpoint (endX, endY)
      const distX = Math.abs(cosA) > 1e-6 ? hw / Math.abs(cosA) : Infinity;
      const distY = Math.abs(sinA) > 1e-6 ? hh / Math.abs(sinA) : Infinity;
      const cardEdgeDist = Math.min(distX, distY);

      // Position card center along the ray outward from end point
      const x = endX + cosA * cardEdgeDist;
      const y = endY + sinA * cardEdgeDist;

      const entranceDelay = 0.15 + index * 0.08;
      const pulseDelay = index * 0.45;

      return {
        group,
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
  }, [activeGroups, centerX, centerY, dims.lineLength, centerRadius, dims.cardWidth, dims.cardHeight, dims.isMobile]);

  // Ordered Groups for Mobile Architecture
  const mobileOrderedGroups = useMemo(() => {
    const groupMap = new Map(activeGroups.map((g) => [g.id, g]));
    const ordered: TechGroupNode[] = [];

    MOBILE_HIERARCHY_ORDER.forEach((id) => {
      const match = groupMap.get(id);
      if (match) ordered.push(match);
    });

    // Add any remaining groups if present
    activeGroups.forEach((g) => {
      if (!MOBILE_HIERARCHY_ORDER.includes(g.id)) {
        ordered.push(g);
      }
    });

    return ordered;
  }, [activeGroups]);

  // Loading Placeholder
  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center min-h-125 w-full">
        <div className="w-36 h-36 rounded-full bg-cyan-500/15 border border-cyan-400/30 animate-pulse" />
      </div>
    );
  }

  // =========================================================================
  // RESPONSIVE MOBILE STACKED ARCHITECTURE (width < 640px)
  // Clean, vertical document flow with zero horizontal overflow
  // Hierarchy: ACCORTO -> AI & IoT -> Cloud Platforms -> Enterprise Platforms -> Data Platforms -> Career & Development
  // =========================================================================
  if (dims.isMobile) {
    return (
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex flex-col items-center justify-center w-full select-none overflow-visible py-6 px-3",
          className
        )}
      >
        {/* Background Atmosphere Glow */}
        <div
          className="absolute pointer-events-none rounded-full blur-3xl opacity-50 -z-10"
          style={{
            width: 300,
            height: 300,
            top: 40,
            background: "radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, rgba(22, 140, 255, 0.08) 60%, transparent 80%)",
          }}
        />

        {/* 1. Central ACCORTO Core Node */}
        <div
          className="relative flex flex-col items-center justify-center rounded-full text-center"
          style={{
            width: dims.centerSize,
            height: dims.centerSize,
          }}
          role="region"
          aria-label="Accorto Intelligence Layer Core"
        >
          {/* Cyan Glow Halo */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none -z-10"
            style={{
              background: "radial-gradient(circle, rgba(0, 217, 255, 0.45) 0%, rgba(22, 140, 255, 0.25) 50%, transparent 75%)",
              filter: "blur(18px)",
              transform: "scale(1.15)",
            }}
          />

          {/* Central Glass Spherical Core */}
          <div
            className="relative flex flex-col items-center justify-center w-full h-full rounded-full overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(12, 38, 68, 0.96) 0%, rgba(7, 28, 52, 0.94) 55%, rgba(10, 34, 60, 0.96) 100%)",
              border: "1.5px solid rgba(0, 217, 255, 0.6)",
              boxShadow: "inset 0 1px 2px 0 rgba(255, 255, 255, 0.35), inset 0 -3px 10px 0 rgba(0, 217, 255, 0.3), 0 12px 32px rgba(0, 0, 0, 0.6), 0 0 18px rgba(0, 217, 255, 0.25)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-cyan-400/15 to-white/25 pointer-events-none" />
            <div className="absolute inset-0.5 rounded-full border border-cyan-400/30 pointer-events-none" />

            <span className="font-display font-black tracking-wider text-white text-base leading-none select-none drop-shadow-[0_2px_10px_rgba(0,217,255,0.6)]">
              {centerTitle}
            </span>
            <span className="font-mono font-bold tracking-[0.14em] text-cyan-300 uppercase text-[9px] mt-1.5 opacity-95 select-none text-center leading-tight drop-shadow-[0_1px_5px_rgba(0,217,255,0.4)]">
              {centerSubtitle}
            </span>
          </div>
        </div>

        {/* 2. Vertical Stack of 5 Group Cards with Uniform Glowing Connectors */}
        <div className="flex flex-col items-center w-full max-w-sm mt-1">
          {mobileOrderedGroups.map((group, idx) => (
            <React.Fragment key={group.id}>
              {/* Vertical Glowing Connector Line */}
              <div className="flex flex-col items-center justify-center my-1 h-6">
                <div className="w-0.5 h-full bg-linear-to-b from-cyan-400/80 via-blue-500/60 to-cyan-400/80 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00D9FF]" />
                </div>
              </div>

              {/* Group Card with Generous Padding */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * idx, ease: "easeOut" }}
                className="w-full rounded-2xl px-5 py-3.5 flex flex-col items-center text-center transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(12, 34, 60, 0.94) 0%, rgba(7, 24, 46, 0.92) 100%)",
                  border: "1px solid rgba(0, 217, 255, 0.32)",
                  boxShadow: `0 8px 24px rgba(0, 0, 0, 0.45), 0 0 12px ${group.glowColor}18`,
                  backdropFilter: "blur(18px)",
                }}
                role="region"
                aria-label={group.ariaLabel || `${group.title}: ${group.items.map((i) => i.name).join(", ")}`}
              >
                {/* Group Title with Domain Dot Indicator */}
                <div className="flex items-center justify-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: group.glowColor,
                      boxShadow: `0 0 6px ${group.glowColor}`,
                    }}
                  />
                  <span className="font-display font-semibold text-white text-xs sm:text-sm tracking-wide">
                    {group.title}
                  </span>
                </div>

                {/* Technology Members */}
                <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mt-1.5 text-[11px] text-slate-200">
                  {group.items.map((item, itemIdx) => (
                    <span key={item.name} className="inline-flex items-center gap-1">
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt=""
                          className="w-3.5 h-3.5 object-contain shrink-0 filter contrast-[1.08] brightness-[1.02]"
                        />
                      )}
                      <span className="font-medium text-slate-300">{item.name}</span>
                      {itemIdx < group.items.length - 1 && (
                        <span className="text-cyan-400/40 ml-1 select-none font-bold">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    );
  }

  // =========================================================================
  // DESKTOP & TABLET RADIAL ARCHITECTURE (width >= 640px)
  // Mathematically balanced regular pentagon with identical connector line lengths
  // Exactly 5 outer group nodes and 5 primary SVG connector spokes of identical length
  // =========================================================================
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
        className
      )}
    >
      {/* Outer Constrained Sizing Frame — Mathematically Centered */}
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
          <div
            className="absolute rounded-full pointer-events-none opacity-80 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: (centerRadius + dims.lineLength) * 2.3,
              height: (centerRadius + dims.lineLength) * 2.3,
              left: centerX,
              top: centerY,
              background:
                "radial-gradient(circle, rgba(0, 217, 255, 0.14) 0%, rgba(22, 140, 255, 0.07) 45%, rgba(3, 18, 36, 0) 70%)",
              filter: "blur(48px)",
            }}
          />
        </motion.div>

        {/* =========================================================================
            LAYER 2: CONCENTRIC RADAR ORBIT RINGS
            Strictly centered at (centerX, centerY) via -translate-x-1/2 -translate-y-1/2
            ========================================================================= */}
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : ringsParallaxY }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          {/* Ring 1 (Inner Orbit Accent) */}
          <div
            className="absolute rounded-full border border-dashed border-cyan-400/20 dark:border-cyan-400/18 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: centerRadius * 2.7,
              height: centerRadius * 2.7,
              left: centerX,
              top: centerY,
            }}
          />

          {/* Ring 2 (Main Orbit Ring connecting all 5 node endpoints at identical radius) */}
          <div
            className="absolute rounded-full border border-cyan-500/28 dark:border-cyan-400/22 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: (centerRadius + dims.lineLength) * 2.0,
              height: (centerRadius + dims.lineLength) * 2.0,
              left: centerX,
              top: centerY,
            }}
          />

          {/* Ring 3 (Outer Subtle Radar Boundary) */}
          <div
            className="absolute rounded-full border border-dashed border-cyan-400/10 dark:border-cyan-400/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: (centerRadius + dims.lineLength) * 2.56,
              height: (centerRadius + dims.lineLength) * 2.56,
              left: centerX,
              top: centerY,
            }}
          />
        </motion.div>

        {/* =========================================================================
            LAYER 3: NETWORK LAYER (SVG Connectors & Traveling Pulse Packets)
            All 5 lines have the EXACT same length dims.lineLength
            ========================================================================= */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : mousePos.x,
            y: shouldReduceMotion ? 0 : mousePos.y + (enableScrollParallax ? Number(archParallaxY.get()) : 0),
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            viewBox={`0 0 ${dims.width} ${dims.height}`}
            style={{ width: dims.width, height: dims.height }}
          >
            <defs>
              {groupPositions.map(({ group, startX, startY, endX, endY }) => (
                <linearGradient
                  key={`flow-grad-${group.id}`}
                  id={`flow-grad-${group.id}-${filterId}`}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#168CFF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor={group.glowColor} stopOpacity="0.95" />
                </linearGradient>
              ))}

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

            {/* Exactly 5 Primary Connection Lines of IDENTICAL length */}
            {groupPositions.map(({ group, startX, startY, endX, endY, pulseDelay }) => {
              const isHovered = hoveredId === group.id;
              const isOtherHovered = hoveredId !== null && !isHovered;
              const baseOpacity = isHovered ? 1.0 : isOtherHovered ? 0.3 : 0.55;
              const strokeW = isHovered ? lineWidth * 1.6 : lineWidth;

              return (
                <g key={`spoke-${group.id}`}>
                  {/* Primary Connection Line */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: baseOpacity }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={`url(#flow-grad-${group.id}-${filterId})`}
                    strokeWidth={strokeW}
                    strokeLinecap="round"
                    animate={{ opacity: baseOpacity }}
                    style={{
                      filter: isHovered
                        ? `drop-shadow(0 0 6px ${group.glowColor})`
                        : "drop-shadow(0 0 2px rgba(0, 217, 255, 0.4))",
                    }}
                  />

                  {/* Center Circumference Terminal Dot */}
                  <circle
                    cx={startX}
                    cy={startY}
                    r={isHovered ? 3.5 : 2.5}
                    fill="#00D9FF"
                    className="transition-all duration-300"
                    style={{ filter: "drop-shadow(0 0 4px #00D9FF)" }}
                  />

                  {/* Group Card Perimeter Terminal Dot */}
                  <circle
                    cx={endX}
                    cy={endY}
                    r={isHovered ? 3.5 : 2.5}
                    fill={group.glowColor}
                    className="transition-all duration-300"
                    style={{ filter: `drop-shadow(0 0 4px ${group.glowColor})` }}
                  />

                  {/* Traveling Data Pulse Bead — Perfectly Synchronized Speed */}
                  {!shouldReduceMotion && (
                    <>
                      <motion.circle
                        r={isHovered ? pulseWidth * 1.3 : pulseWidth}
                        fill={isHovered ? group.glowColor : pulseColor}
                        filter={`url(#beam-glow-${filterId})`}
                        animate={{
                          cx: [startX, endX],
                          cy: [startY, endY],
                          opacity: [0, 0.95, 0.95, 0],
                          scale: [0.85, 1.1, 1.0, 0.85],
                        }}
                        transition={{
                          duration: pulseDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: pulseDelay,
                        }}
                      />

                      <motion.circle
                        r={pulseWidth * 0.42}
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
              Strictly Positioned at (centerX, centerY) via -translate-x-1/2 -translate-y-1/2
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
              {/* Cyan Glow Halo */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0, 217, 255, 0.55) 0%, rgba(22, 140, 255, 0.3) 45%, transparent 70%)",
                  filter: "blur(24px)",
                  transform: hoveredId ? "scale(1.28)" : "scale(1.18)",
                  transition: "transform 0.5s ease-out",
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
                {/* Specular Light Reflection */}
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
              OUTER TECHNOLOGY GROUP NODES (EXACTLY 5)
              Positioned with center at (group.x, group.y) via -translate-x-1/2 -translate-y-1/2
              Normalized identical footprint, generous padding, domain dot indicators
              ======================================================================= */}
          <div className="absolute inset-0 pointer-events-none">
            {groupPositions.map(({ group, x, y, entranceDelay }) => {
              const isHovered = hoveredId === group.id;

              return (
                <div
                  key={group.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto select-none outline-hidden cursor-pointer group"
                  style={{
                    left: x,
                    top: y,
                    width: dims.cardWidth,
                    height: dims.cardHeight,
                    zIndex: 30,
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={group.ariaLabel || `${group.title}: ${group.items.map((i) => i.name).join(", ")}`}
                  aria-pressed={isHovered}
                  onMouseEnter={() => interactive && setHoveredId(group.id)}
                  onMouseLeave={() => interactive && setHoveredId(null)}
                  onFocus={() => interactive && setHoveredId(group.id)}
                  onBlur={() => interactive && setHoveredId(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={
                      isHovered && !shouldReduceMotion
                        ? { y: -2 }
                        : { y: 0 }
                    }
                    transition={{
                      opacity: { duration: 0.55, delay: entranceDelay, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 0.2, ease: "easeOut" },
                    }}
                    className="relative w-full h-full"
                  >
                    {/* Ambient Glow Halo */}
                    <div
                      className="absolute inset-0 rounded-2xl transition-opacity duration-300 -z-10 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${group.glowColor}40 0%, ${group.glowColor}10 50%, transparent 75%)`,
                        opacity: isHovered ? 0.9 : 0.35,
                        filter: "blur(14px)",
                      }}
                    />

                    {/* Glassmorphic Group Card Surface with Generous Padding */}
                    <div
                      className="relative flex flex-col items-center justify-center w-full h-full rounded-2xl px-4 py-3 text-center transition-all duration-300 overflow-hidden"
                      style={{
                        background: isHovered
                          ? "linear-gradient(135deg, rgba(14, 38, 68, 0.97) 0%, rgba(10, 28, 52, 0.95) 100%)"
                          : "linear-gradient(135deg, rgba(10, 30, 54, 0.94) 0%, rgba(7, 22, 42, 0.92) 100%)",
                        border: isHovered
                          ? `1.5px solid ${group.glowColor}`
                          : "1px solid rgba(0, 217, 255, 0.32)",
                        boxShadow: isHovered
                          ? `0 0 26px ${group.glowColor}45, 0 10px 28px rgba(0, 0, 0, 0.55)`
                          : `0 8px 24px rgba(0, 0, 0, 0.45), 0 0 12px ${group.glowColor}18`,
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {/* Top Specular Sheen */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-cyan-400/5 to-white/10 pointer-events-none" />

                      {/* Level 2 Hierarchy: Dominant Group Title with Brand Dot */}
                      <div className="flex items-center justify-center gap-1.5 leading-none">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: group.glowColor,
                            boxShadow: `0 0 6px ${group.glowColor}`,
                          }}
                        />
                        <span className="font-display font-semibold text-white tracking-wide text-xs sm:text-[13px] leading-tight select-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                          {group.title}
                        </span>
                      </div>

                      {/* Level 3 Hierarchy: Technology Members with Generous Spacing */}
                      <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-0.5 mt-1.5 text-[10.5px] sm:text-[11.5px] text-slate-200 dark:text-slate-200 select-none">
                        {group.items.map((item, idx) => (
                          <span key={item.name} className="inline-flex items-center gap-1 whitespace-nowrap">
                            {item.icon && (
                              <img
                                src={item.icon}
                                alt=""
                                className="w-3.5 h-3.5 object-contain shrink-0 filter contrast-[1.08] brightness-[1.05]"
                              />
                            )}
                            <span className="leading-tight font-medium text-slate-300 dark:text-slate-200">{item.name}</span>
                            {idx < group.items.length - 1 && (
                              <span className="text-cyan-400/40 ml-0.5 select-none font-bold">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CenterFlow;
