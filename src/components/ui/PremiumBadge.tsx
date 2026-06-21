import React from "react";
import { cn } from "@/lib/utils";

interface PremiumBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const PremiumBadge = React.forwardRef<HTMLSpanElement, PremiumBadgeProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border border-white/10 bg-white/3 backdrop-blur-md px-4 py-2 text-xs tracking-[0.18em] uppercase text-zinc-300 transition-all duration-500 hover:border-white/20 select-none",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

PremiumBadge.displayName = "PremiumBadge";
