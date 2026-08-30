import React, { useState, useEffect, useId, forwardRef } from "react";
import { cn } from "@/lib/utils";
import "./GlassSurface.css";

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
  borderRadius?: number | string;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
  borderGradient?: string;
  interactive?: boolean;
}

export const GlassSurface = forwardRef<HTMLDivElement, GlassSurfaceProps>(
  (
    {
      children,
      className,
      style,
      width = "100%",
      height = "auto",
      borderRadius = 20,
      borderWidth = 1,
      brightness = 32,
      opacity = 0.96,
      blur = 24,
      displace = 0,
      backgroundOpacity = 0.92,
      saturation = 1.05,
      distortionScale = -60,
      redOffset = 0,
      greenOffset = 4,
      blueOffset = 8,
      mixBlendMode = "normal",
      borderGradient,
      ...rest
    },
    ref
  ) => {
    const rawId = useId();
    const filterId = `glass-distortion-${rawId.replace(/[:]/g, "")}`;
    const [supportsSvgFilter, setSupportsSvgFilter] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      // Feature detection for SVG backdrop-filter support in Chromium / Safari
      try {
        const isSupported =
          typeof CSS !== "undefined" &&
          CSS.supports &&
          (CSS.supports("backdrop-filter", "blur(10px)") ||
            CSS.supports("-webkit-backdrop-filter", "blur(10px)"));
        setSupportsSvgFilter(isSupported);
      } catch {
        setSupportsSvgFilter(false);
      }
    }, []);

    const radiusValue =
      typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

    const baseFrequency = Math.abs(distortionScale) > 0 ? 0.015 : 0.02;
    const numOctaves = 2;
    const displacementScale = displace || (distortionScale !== 0 ? 8 : 0);

    return (
      <div
        ref={ref}
        className={cn("glass-surface-wrapper overflow-hidden", className)}
        style={{
          width,
          height,
          borderRadius: radiusValue,
          ...style,
        }}
        {...rest}
      >
        {/* Hidden SVG Filter Definition for Translucent Refraction */}
        <svg
          className="glass-surface-filter-svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter
              id={filterId}
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
            >
              {displacementScale > 0 && (
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency={`${baseFrequency} ${baseFrequency * 1.2}`}
                  numOctaves={numOctaves}
                  result="noise"
                />
              )}
              {displacementScale > 0 && (
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale={displacementScale}
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displaced"
                />
              )}

              {/* Subtle Chromatic Offsets */}
              {redOffset !== 0 && (
                <feOffset
                  in={displacementScale > 0 ? "displaced" : "SourceGraphic"}
                  dx={redOffset}
                  dy={0}
                  result="red"
                />
              )}
              {greenOffset !== 0 && (
                <feOffset
                  in={displacementScale > 0 ? "displaced" : "SourceGraphic"}
                  dx={greenOffset}
                  dy={0}
                  result="green"
                />
              )}
              {blueOffset !== 0 && (
                <feOffset
                  in={displacementScale > 0 ? "displaced" : "SourceGraphic"}
                  dx={blueOffset}
                  dy={0}
                  result="blue"
                />
              )}
            </filter>
          </defs>
        </svg>

        {/* Primary Glass Backdrop Surface — Dense dark navy base + backdrop blur to fully occlude background typography */}
        <div
          className="glass-surface-backdrop transition-opacity duration-300"
          style={{
            borderRadius: radiusValue,
            opacity,
            backdropFilter: mounted
              ? `blur(${blur}px) saturate(${saturation * 100}%) brightness(${brightness}%)`
              : `blur(${blur}px) saturate(${saturation * 100}%) brightness(${brightness}%)`,
            WebkitBackdropFilter: mounted
              ? `blur(${blur}px) saturate(${saturation * 100}%) brightness(${brightness}%)`
              : `blur(${blur}px) saturate(${saturation * 100}%) brightness(${brightness}%)`,
            backgroundColor: `rgba(3, 14, 28, ${backgroundOpacity})`,
            mixBlendMode,
          }}
        />

        {/* Subtle Specular Border Highlight */}
        <div
          className="glass-surface-border pointer-events-none"
          style={{
            borderRadius: radiusValue,
            border: `${borderWidth}px solid rgba(255, 255, 255, 0.10)`,
            boxShadow:
              "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), 0 30px 80px rgba(0, 0, 0, 0.55)",
            background:
              borderGradient ||
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
          }}
        />

        {/* Sharp Interactive Content Layer */}
        <div className="glass-surface-content relative z-10">{children}</div>
      </div>
    );
  }
);

GlassSurface.displayName = "GlassSurface";

export default GlassSurface;
