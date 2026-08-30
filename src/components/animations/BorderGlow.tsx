import React from "react";
import "./BorderGlow.css";

export interface BorderGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  borderRadius?: number;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = "",
  borderRadius = 24,
  backgroundColor = "transparent",
  style,
  ...rest
}) => {
  return (
    <div
      className={`border-glow-card${className ? ` ${className}` : ""}`}
      style={{
        "--border-radius": `${borderRadius}px`,
        "--card-bg": backgroundColor,
        ...style,
      } as React.CSSProperties}
      {...rest}
    >
      <div className="border-glow-inner">{children}</div>
    </div>
  );
};

export default BorderGlow;
