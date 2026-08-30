import React from "react";
import { cn } from "@/lib/utils";

export interface ImageCaptionOverlayProps {
  name: string;
  role?: string;
  company?: string;
  className?: string;
  nameClassName?: string;
  roleClassName?: string;
  inset?: boolean;
}

/**
 * ImageCaptionOverlay — Global standardized bottom glass caption overlay for image-based cards.
 * Renders a frosted translucent glass overlay over the bottom portion of an image.
 */
export function ImageCaptionOverlay({
  name,
  role,
  company,
  className,
  nameClassName,
  roleClassName,
  inset = false,
}: ImageCaptionOverlayProps) {
  const subtitle = [role, company].filter(Boolean).join(" · ") || role;

  if (inset) {
    return (
      <div
        className={cn(
          "absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20",
          "p-5 sm:p-6 lg:p-7 rounded-3xl",
          "bg-[#050A12]/70 dark:bg-[#030810]/75 backdrop-blur-xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
          "text-left select-none transition-all duration-300",
          className,
        )}
      >
        <h3
          className={cn(
            "font-display text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-[1.15]",
            nameClassName,
          )}
        >
          {name}
        </h3>
        {subtitle && (
          <p
            className={cn(
              "text-sm sm:text-base lg:text-lg font-semibold text-white/90 leading-snug mt-1.5",
              roleClassName,
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute bottom-0 inset-x-0 z-20",
        "p-6 sm:p-8 lg:p-8 pt-12",
        "bg-linear-to-t from-[#02070D]/95 via-[#050A12]/80 to-transparent backdrop-blur-lg border-t border-white/10",
        "flex flex-col justify-end text-left select-none",
        className,
      )}
    >
      <h3
        className={cn(
          "font-display text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-[1.15]",
          nameClassName,
        )}
      >
        {name}
      </h3>
      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base lg:text-lg font-semibold text-white/90 leading-snug mt-1.5",
            roleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
