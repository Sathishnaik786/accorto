import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Partner } from "./types";

interface TechNodeProps {
  partner: Partner;
  x: number;
  y: number;
  width: number;
  height: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick?: () => void;
  isActive?: boolean;
}

export const TechNode = React.memo(
  ({
    partner,
    x,
    y,
    width,
    height,
    isHovered,
    onHoverStart,
    onHoverEnd,
    onClick,
    isActive = false,
  }: TechNodeProps) => {
    const shouldReduceMotion = useReducedMotion();

    // Derive sizes from node width for responsive scaling
    const isSmall = width <= 110;
    const iconSize = isSmall ? 28 : 52;
    const fontSize = isSmall ? 11 : 16;
    const px = isSmall ? 10 : 20;
    const gap = isSmall ? 6 : 12;

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    };

    return (
      <div
        className="absolute z-30 cursor-pointer pointer-events-auto select-none rounded-full outline-none bg-transparent p-1 group"
        style={{
          left: x,
          top: y,
          minWidth: width + 8,
          height: height + 8,
          transform: "translate(-50%, -50%)",
          boxSizing: "border-box",
        }}
        tabIndex={0}
        role="button"
        aria-label={`${partner.name} integration`}
        aria-selected={isActive || isHovered}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        onFocus={onHoverStart}
        onBlur={onHoverEnd}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        <motion.div
          className="relative w-full h-full flex items-center rounded-full"
          animate={isHovered && !shouldReduceMotion ? { scale: 1.08, y: -6 } : { scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Soft background glow halo on hover */}
          <div
            className="absolute inset-0 rounded-full transition-opacity duration-300 -z-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${partner.glowColor}25 0%, transparent 70%)`,
              opacity: isHovered ? 1 : 0,
              transform: "scale(1.5)",
            }}
          />

          {/* The Card Body */}
          <div
            className={`relative flex items-center h-full w-full rounded-full border transition-all duration-300 whitespace-nowrap
              group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-eco-bg
              ${isActive ? "ring-2 ring-primary ring-offset-2 ring-offset-eco-bg" : ""}`}
            style={{
              paddingInline: px,
              gap,
              backgroundColor: "var(--eco-card-bg)",
              borderColor: isHovered ? partner.glowColor : "var(--color-border)",
              boxShadow: isHovered
                ? `0 0 40px ${partner.glowColor}, 0 20px 50px rgba(0,0,0,0.08)`
                : "0 20px 50px rgba(0,0,0,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Brand Icon wrapper */}
            <div
              className="shrink-0 flex items-center justify-center rounded-full overflow-hidden"
              style={{ width: iconSize, height: iconSize }}
            >
              <BrandIcon name={partner.name} color={partner.glowColor} size={iconSize} />
            </div>

            {/* Partner Text - WCAG contrast compliant */}
            <span
              className="font-display font-semibold select-none text-[#0F172A] dark:text-white"
              style={{ fontSize }}
            >
              {partner.name}
            </span>
          </div>
        </motion.div>
      </div>
    );
  },
);

TechNode.displayName = "TechNode";

// Brand Logos from public/logos
interface BrandIconProps {
  name: string;
  color: string;
  size: number;
}

function BrandIcon({ name, size }: BrandIconProps) {
  let src = "";
  switch (name) {
    case "OpenAI":
      src = "/logos/Open-AI.png";
      break;
    case "Google Cloud":
      src = "/logos/google_cloud.png";
      break;
    case "Azure":
      src = "/logos/Azure.png";
      break;
    case "AWS":
      src = "/logos/amazon.png";
      break;
    case "SAP":
      src = "/logos/sap.png";
      break;
    case "Oracle":
      src = "/logos/oracle.png";
      break;
    case "Power BI":
      src = "/logos/power-bi.png";
      break;
    default:
      return null;
  }

  return (
    <img
      src={src}
      alt={`${name} Logo`}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}
