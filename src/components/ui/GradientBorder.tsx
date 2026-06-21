import React from "react";
import { cn } from "@/lib/utils";

interface GradientBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  innerClassName?: string;
}

export const GradientBorder = React.forwardRef<HTMLDivElement, GradientBorderProps>(
  ({ children, className, innerClassName, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-[32px] p-px", className)}
        style={{
          background: "linear-gradient(135deg, rgba(79, 70, 229, 0.18), transparent 30%, rgba(6, 182, 212, 0.15))",
        }}
        {...props}
      >
        <div className={cn("h-full w-full rounded-[31px] bg-[#0B1117]", innerClassName)}>
          {children}
        </div>
      </div>
    );
  }
);

GradientBorder.displayName = "GradientBorder";
