import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageCardProps {
  id?: string;
  image: string;
  imageAlt?: string;
  category?: string;
  categoryIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  metric?: string;
  metricIcon?: LucideIcon | React.ComponentType<{ className?: string }>;
  aspectRatio?: "16/9" | "16/10" | "4/3";
  objectPosition?: string;
  className?: string;
  onClick?: () => void;
}

export function ImageCard({
  image,
  imageAlt,
  category,
  categoryIcon: CategoryIcon,
  title,
  description,
  link,
  linkText = "Explore solutions",
  metric,
  metricIcon: MetricIcon,
  aspectRatio = "16/10",
  objectPosition = "center",
  className,
  onClick,
}: ImageCardProps) {
  const [hasError, setHasError] = useState(false);

  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-16/9"
      : aspectRatio === "4/3"
        ? "aspect-4/3"
        : "aspect-16/10";

  // Parse metric to emphasize the primary value/stat as visual anchor
  const renderMetric = (metricStr: string) => {
    const parts = metricStr.trim().split(" ");
    if (parts.length > 1) {
      const [value, ...rest] = parts;
      return (
        <span className="flex items-baseline gap-1">
          <span className="font-extrabold text-emerald-400 dark:text-emerald-400">{value}</span>
          <span className="font-medium text-slate-200/90 text-[11px]">{rest.join(" ")}</span>
        </span>
      );
    }
    return <span className="font-bold text-white">{metricStr}</span>;
  };

  const cardInner = (
    <article
      onClick={onClick}
      className={cn(
        "group relative h-full flex flex-col justify-between overflow-hidden rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md text-left select-none",
        link && "cursor-pointer",
        className,
      )}
    >
      {/* Top Image Container */}
      <div
        className={cn(
          "relative overflow-hidden m-3 rounded-[24px] shadow-xs bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5",
          aspectClass,
        )}
      >
        {!hasError ? (
          <img
            src={image}
            alt={imageAlt || `${title} — Accorto Technologies`}
            loading="lazy"
            onError={() => setHasError(true)}
            style={{ objectPosition }}
            className="h-full w-full object-cover brightness-[0.96] contrast-[1.04]"
          />
        ) : null}

        {/* Ambient Subtle Vignette Scrim for Contrast */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Metric Badge Overlay (Anchor Number + Supporting Label) */}
        {metric ? (
          <div className="absolute bottom-3 right-3 bg-slate-950/90 dark:bg-black/90 backdrop-blur-md border border-white/15 rounded-full px-3 py-1 text-xs text-white flex items-center gap-1.5 shadow-md">
            {MetricIcon ? <MetricIcon className="h-3 w-3 text-emerald-400 shrink-0" aria-hidden="true" /> : null}
            {renderMetric(metric)}
          </div>
        ) : null}

        {/* Graceful Design-System Fallback if Image Fails */}
        {hasError ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-radial from-brand/15 via-[#0C223D] to-[#031224] p-4 text-center"
            aria-hidden="true"
          >
            {CategoryIcon ? (
              <div className="h-12 w-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-2">
                <CategoryIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center font-display font-bold text-xl text-brand mb-2">
                {title.charAt(0)}
              </div>
            )}
            <span className="text-xs font-semibold text-slate-300 tracking-wide">
              {category || title}
            </span>
          </div>
        ) : null}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 pt-2 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          {/* Category Tag */}
          {category ? (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand dark:text-brand-2">
              {CategoryIcon ? <CategoryIcon className="h-3.5 w-3.5 text-brand shrink-0" aria-hidden="true" /> : null}
              <span>{category}</span>
            </div>
          ) : null}

          {/* Title */}
          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors leading-snug">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* CTA Link Action */}
        {link ? (
          <div className="inline-flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors mt-auto pt-3 border-t border-slate-100 dark:border-white/5">
            <span>{linkText}</span>
            <ArrowRight
              className="h-3.5 w-3.5 text-brand transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
    </article>
  );

  if (link) {
    return (
      <Link
        to={link}
        aria-label={`${title} — ${linkText || "Explore"}`}
        className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-4xl"
      >
        {cardInner}
      </Link>
    );
  }

  return cardInner;
}
