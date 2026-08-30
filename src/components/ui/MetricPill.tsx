import React from "react";
import { cn } from "@/lib/utils";

interface MetricPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "danger" | "info";
}

const variantStyles = {
  success: "bg-emerald-500/20 text-emerald-300",
  warning: "bg-amber-500/20 text-amber-300",
  danger: "bg-orange-500/20 text-orange-300",
  info: "bg-indigo-500/20 text-indigo-300",
};

export const MetricPill = React.forwardRef<HTMLSpanElement, MetricPillProps>(
  ({ children, className, variant = "info", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border border-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium shadow-sm transition-all duration-300",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

MetricPill.displayName = "MetricPill";
