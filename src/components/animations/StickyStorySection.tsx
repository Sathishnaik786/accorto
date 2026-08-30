import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StickyStoryStep {
  id: string | number;
  badge?: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  tags?: string[];
}

export interface StickyStorySectionProps {
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  steps: StickyStoryStep[];
  className?: string;
}

export function StickyStorySection({
  tag = "ENGINEERING BLUEPRINT",
  title,
  subtitle,
  steps,
  className,
}: StickyStorySectionProps) {
  return (
    <div className={cn("relative w-full py-16 md:py-24 lg:py-32", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Pinned Anchor Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-brand dark:text-brand-2 uppercase bg-brand/10 dark:bg-white/5 border border-brand/20 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {tag}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed font-medium max-w-md">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Scrolling Story Milestones */}
        <div className="lg:col-span-7 space-y-12 sm:space-y-16">
          {steps.map((step, idx) => (
            <StoryStepCard key={step.id} step={step} index={idx} total={steps.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryStepCard({
  step,
  index,
  total,
}: {
  step: StickyStoryStep;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.3, 0.7, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="p-6 sm:p-8 md:p-10 rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md group text-left"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="font-mono text-xs font-bold text-brand dark:text-brand-2 uppercase tracking-widest">
          PHASE 0{index + 1} / 0{total}
        </span>
        {Icon && (
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 dark:bg-white/5 text-brand">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
        {step.title}
      </h3>

      <p className="mt-3 text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed font-medium">
        {step.description}
      </p>

      {step.tags && step.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
          {step.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
