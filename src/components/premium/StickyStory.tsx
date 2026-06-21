import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassPanel } from "../ui/GlassPanel";

interface StoryStep {
  title: string;
  subtitle: string;
  desc: string;
  visual: React.ReactNode;
}

interface StickyStoryProps {
  steps: StoryStep[];
  className?: string;
}

export function StickyStory({ steps, className }: StickyStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-step-idx") || "0");
            setActiveIdx(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const stepElements = containerRef.current?.querySelectorAll("[data-step-idx]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => {
      stepElements?.forEach((el) => observer.unobserve(el));
    };
  }, [steps]);

  return (
    <div
      ref={containerRef}
      className={cn("relative grid lg:grid-cols-12 gap-12 items-start py-20", className)}
    >
      {/* Left Sticky Content */}
      <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 select-none z-10 text-left">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand font-semibold shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" /> Delivery Engine
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.02] tracking-tight">
          How we work
        </h2>
        <div className="relative border-l-2 border-white/5 dark:border-white/5 pl-6 py-2 space-y-8">
          {steps.map((s, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "transition-all duration-500 relative",
                  isActive ? "opacity-100 translate-x-1" : "opacity-30"
                )}
              >
                {isActive && (
                  <div className="absolute left-[-31px] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-brand ring-4 ring-white/10 dark:ring-black/35 shadow-md transition-all duration-500" />
                )}
                <span className="text-[10px] font-mono font-bold text-brand uppercase tracking-wider block">
                  Phase 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Scroll Items */}
      <div className="lg:col-span-7 space-y-24">
        {steps.map((s, idx) => (
          <div
            key={idx}
            data-step-idx={idx}
            className="min-h-[50vh] flex items-center justify-center pt-8 first:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <GlassPanel className="p-8 md:p-12 hover:border-brand/20 transition-all duration-500 select-none shadow-xl text-left">
                {s.visual}
              </GlassPanel>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
