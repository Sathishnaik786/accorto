import React from "react";
import { cn } from "@/lib/utils";
import { SectionBackground } from "./SectionBackground";

interface PremiumSectionProps extends React.HTMLAttributes<HTMLElement> {}

export const PremiumSection = React.forwardRef<HTMLElement, PremiumSectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-[40px] py-24 border border-white/4 bg-white/1 dark:bg-black/2",
          className
        )}
        {...props}
      >
        <SectionBackground />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {children}
        </div>
      </section>
    );
  }
);

PremiumSection.displayName = "PremiumSection";
