import * as React from "react";
import { cn } from "@/lib/utils";
import { BorderGlow } from "../animations/BorderGlow";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  borderRadius?: number;
  glowColor?: string;
  colors?: string[];
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      glow = true,
      borderRadius = 16,
      glowColor = "185 95 65",
      colors = ["#00D9FF", "#70FF4A", "#38BDF8"],
      children,
      ...props
    },
    ref,
  ) => {
    const cardEl = (
      <div
        ref={ref}
        className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
        {...props}
      >
        {children}
      </div>
    );

    if (!glow) return cardEl;

    return (
      <BorderGlow
        borderRadius={borderRadius}
        glowColor={glowColor}
        colors={colors}
        className="h-full w-full"
      >
        {cardEl}
      </BorderGlow>
    );
  },
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-heading font-semibold text-lg leading-snug tracking-tight text-card-foreground", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("font-normal text-sm text-muted-foreground leading-relaxed", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
