import React from "react";
import "./StarBorder.css";

export interface StarBorderProps<T extends React.ElementType = "button"> {
  as?: T;
  className?: string;
  innerClassName?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

export function StarBorder<T extends React.ElementType = "button">({
  as,
  className = "",
  innerClassName = "",
  color = "rgba(56, 189, 248, 0.9)",
  speed = "6s",
  thickness = 1.5,
  backgroundColor,
  textColor,
  borderColor,
  children,
  style,
  ...rest
}: StarBorderProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button";

  const innerStyle: React.CSSProperties = {};
  if (backgroundColor) innerStyle.background = backgroundColor;
  if (textColor) innerStyle.color = textColor;
  if (borderColor) innerStyle.borderColor = borderColor;

  return (
    <Component
      className={`star-border-container ${className}`.trim()}
      style={{
        padding: `${thickness}px`,
        ...style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 22%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 22%)`,
          animationDuration: speed,
        }}
      />

      <div className={`inner-content ${innerClassName}`.trim()} style={innerStyle}>
        {children}
      </div>
    </Component>
  );
}

export default StarBorder;
