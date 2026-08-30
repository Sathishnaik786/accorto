import React, { useState, useEffect, useCallback, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionTag } from "@/components/section";

export interface CardCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getItemKey?: (item: T, index: number) => React.Key;
  tag?: string;
  title?: ReactNode;
  subtitle?: string;
  headerAction?: ReactNode;
  className?: string;
  slideClassName?: string;
  loop?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  ariaLabel?: string;
}

export function CardCarousel<T>({
  items,
  renderItem,
  getItemKey,
  tag,
  title,
  subtitle,
  headerAction,
  className,
  slideClassName,
  loop = false,
  showPagination = true,
  showNavigation = true,
  ariaLabel = "Content Carousel",
}: CardCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onSelect, onReInit]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      } else if (event.key === "Home") {
        event.preventDefault();
        scrollTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        if (scrollSnaps.length > 0) {
          scrollTo(scrollSnaps.length - 1);
        }
      }
    },
    [scrollPrev, scrollNext, scrollTo, scrollSnaps.length],
  );

  const defaultKeyGetter = (item: T, index: number): React.Key => {
    if (getItemKey) return getItemKey(item, index);
    if (typeof item === "object" && item !== null) {
      const candidate = (item as { id?: string | number; key?: string | number }).id ??
        (item as { id?: string | number; key?: string | number }).key;
      if (candidate !== undefined && candidate !== null) return candidate;
    }
    return index;
  };

  const hasHeader = Boolean(tag || title || subtitle || showNavigation || headerAction);
  const isScrollable = scrollSnaps.length > 1;

  return (
    <section
      className={cn("relative w-full overflow-hidden", className)}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDownCapture={handleKeyDown}
      tabIndex={0}
    >
      {/* Carousel Section Header */}
      {hasHeader ? (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl text-left">
            {tag ? (
              <Reveal>
                <SectionTag>{tag}</SectionTag>
              </Reveal>
            ) : null}
            {title ? (
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-slate-900 dark:text-white">
                  {title}
                </h2>
              </Reveal>
            ) : null}
            {subtitle ? (
              <Reveal delay={0.1}>
                <p className="mt-4 text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed font-medium">
                  {subtitle}
                </p>
              </Reveal>
            ) : null}
          </div>

          {/* Navigation Controls and Header Action */}
          <div className="flex items-center gap-4 shrink-0 self-start md:self-end">
            {headerAction}

            {showNavigation && (
              <div className="flex items-center gap-2" role="group" aria-label="Carousel navigation controls">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  aria-label="Previous slide"
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-card text-slate-800 dark:text-slate-100 flex items-center justify-center hover:border-brand/40 hover:text-brand dark:hover:text-brand shadow-xs hover:shadow-md transition-all active:scale-95 motion-reduce:active:scale-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 dark:disabled:hover:border-white/10 disabled:hover:text-slate-800 dark:disabled:hover:text-slate-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Next slide"
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-card text-slate-800 dark:text-slate-100 flex items-center justify-center hover:border-brand/40 hover:text-brand dark:hover:text-brand shadow-xs hover:shadow-md transition-all active:scale-95 motion-reduce:active:scale-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 dark:disabled:hover:border-white/10 disabled:hover:text-slate-800 dark:disabled:hover:text-slate-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {/* Carousel Viewport and Track */}
      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 sm:-mx-6 px-4 sm:px-6"
        aria-live="polite"
      >
        <div className="flex -ml-4 sm:-ml-5 md:-ml-6 touch-pan-y items-stretch">
          {items.map((item, index) => (
            <div
              key={defaultKeyGetter(item, index)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              className={cn(
                "min-w-0 shrink-0 grow-0 pl-4 sm:pl-5 md:pl-6 basis-[88%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3 flex flex-col h-auto",
                slideClassName,
              )}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {showPagination && isScrollable && (
        <nav
          className="flex items-center justify-center gap-2 mt-8 sm:mt-10"
          aria-label="Carousel slide pagination"
        >
          {scrollSnaps.map((_, index) => {
            const isActive = index === selectedIndex;
            return (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand",
                  isActive
                    ? "w-7 bg-gradient-brand shadow-xs"
                    : "w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40",
                )}
              />
            );
          })}
        </nav>
      )}
    </section>
  );
}
