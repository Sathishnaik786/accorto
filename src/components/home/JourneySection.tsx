import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, SectionHeading } from "../section";
import { Search, FileCheck2, Hammer, LineChart, LifeBuoy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyStage {
  step: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "01",
    name: "Discover",
    desc: "Stakeholder interviews, current-state assessment, value mapping.",
    icon: Search,
    accent: "#009CFF",
  },
  {
    step: "02",
    name: "Plan",
    desc: "Roadmap, architecture blueprints, governance, and KPIs.",
    icon: FileCheck2,
    accent: "#00D9FF",
  },
  {
    step: "03",
    name: "Implement",
    desc: "Agile delivery pods, accelerators, integration & data migration.",
    icon: Hammer,
    accent: "#00E5FF",
  },
  {
    step: "04",
    name: "Optimize",
    desc: "Performance tuning, AI augmentation, adoption analytics.",
    icon: LineChart,
    accent: "#26E6C7",
  },
  {
    step: "05",
    name: "Support",
    desc: "24/7 managed services, SLA monitoring, continuous innovation.",
    icon: LifeBuoy,
    accent: "#8FFF3D",
  },
];

export function JourneySection() {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <section
      aria-label="The Accorto Transformation Journey"
      className="py-14 sm:py-18 lg:py-24 relative overflow-hidden bg-radial-subtle"
    >
      {/* Restrained ambient atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-cyan-500/4 dark:bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute right-[12%] top-[45%] w-75 h-50 bg-emerald-500/3 dark:bg-emerald-400/4 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Heading with standard Accorto tokens */}
        <SectionHeading
          tag="Our Methodology"
          title={
            <>
              The Accorto{" "}
              <span className="text-gradient">Transformation Journey</span>
            </>
          }
          subtitle="A proven five-stage playbook used across 100+ enterprise programs."
          center
        />

        {/* ========================================================================= */}
        {/* DESKTOP FIVE-COLUMN ARCHITECTURAL SYSTEM (lg:block)                      */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative mt-16 xl:mt-20">
          {/* Continuous Vector Connector Line passing through exact node centers (y=28px) */}
          <div className="absolute top-0 left-0 right-0 h-14 pointer-events-none z-0" aria-hidden="true">
            <svg
              className="w-full h-14 overflow-visible"
              viewBox="0 0 1000 56"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="journeyPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#009CFF" stopOpacity="0.4" />
                  <stop offset="25%" stopColor="#00D9FF" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#26E6C7" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#8FFF3D" stopOpacity="0.4" />
                </linearGradient>
                <filter id="particleGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Underlying Technical Guide Rail */}
              <line
                x1="10%"
                y1="28"
                x2="90%"
                y2="28"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Primary Connector Vector (Start: Node 01 Center -> End: Node 05 Center) */}
              <line
                x1="10%"
                y1="28"
                x2="90%"
                y2="28"
                stroke="url(#journeyPathGradient)"
                strokeWidth="1.5"
              />

              {/* Travelling Data Flow Pulse */}
              {!shouldReduceMotion && (
                <motion.circle
                  r="3.5"
                  fill="#00E5FF"
                  filter="url(#particleGlow)"
                  initial={{ cx: "10%", cy: 28, opacity: 0 }}
                  animate={{
                    cx: ["10%", "90%"],
                    opacity: [0, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Mathematical Station Node Anchor Rings */}
              {JOURNEY_STAGES.map((_, i) => {
                const cxPercent = 10 + i * 20;
                return (
                  <g key={i}>
                    <circle
                      cx={`${cxPercent}%`}
                      cy="28"
                      r="6"
                      fill="none"
                      stroke="rgba(0, 217, 255, 0.2)"
                      strokeWidth="1"
                    />
                    <circle
                      cx={`${cxPercent}%`}
                      cy="28"
                      r="2"
                      fill={activeStage === i ? "#00E5FF" : "rgba(255,255,255,0.35)"}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 5-Column Grid with Shared Geometry */}
          <div className="grid grid-cols-5 gap-4 xl:gap-6 relative z-10">
            {JOURNEY_STAGES.map((stage, i) => {
              const isActive = activeStage === i;
              const Icon = stage.icon;

              return (
                <Reveal key={stage.name} delay={i * 0.06}>
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label={`Stage ${stage.step}: ${stage.name}. ${stage.desc}`}
                    onMouseEnter={() => setActiveStage(i)}
                    onMouseLeave={() => setActiveStage(null)}
                    onFocus={() => setActiveStage(i)}
                    onBlur={() => setActiveStage(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveStage(isActive ? null : i);
                      }
                    }}
                    className={cn(
                      "group flex flex-col items-center outline-none cursor-pointer select-none transition-all duration-300",
                      "focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900 rounded-3xl"
                    )}
                  >
                    {/* Node Container (Fixed 56px height, center at y=28px) */}
                    <div className="relative h-14 w-full flex items-center justify-center">
                      {/* Restrained Active Glow */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full blur-md transition-opacity duration-300 pointer-events-none",
                          isActive ? "opacity-100 bg-cyan-400/20" : "opacity-0 bg-cyan-400/10"
                        )}
                      />

                      {/* Circular Stage Node */}
                      <div
                        className={cn(
                          "relative h-14 w-14 rounded-full grid place-items-center transition-all duration-300",
                          "bg-[#07192D] dark:bg-[#07192D] backdrop-blur-md",
                          "border",
                          isActive
                            ? "border-cyan-400 ring-2 ring-cyan-400/25 shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                            : "border-slate-200/40 dark:border-white/10"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5 transition-colors duration-300",
                            isActive ? "text-cyan-300" : "text-brand"
                          )}
                        />

                        {/* Stage Number Badge */}
                        <div
                          className={cn(
                            "absolute -top-1 -right-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold leading-none shadow-xs border transition-all duration-300",
                            isActive
                              ? "bg-gradient-brand text-white border-white/30"
                              : "bg-slate-800 text-slate-300 border-white/10"
                          )}
                        >
                          {stage.step}
                        </div>
                      </div>
                    </div>

                    {/* Vertical Connector Trace from Node to Card */}
                    <div className="h-6 w-full flex flex-col items-center justify-center" aria-hidden="true">
                      <div
                        className={cn(
                          "w-px h-full transition-colors duration-300",
                          isActive
                            ? "bg-linear-to-b from-cyan-400 via-cyan-400/50 to-cyan-400/20"
                            : "bg-linear-to-b from-cyan-500/25 to-transparent"
                        )}
                      />
                      <div
                        className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-300 -mt-0.5",
                          isActive ? "bg-cyan-400 shadow-[0_0_6px_#00D9FF]" : "bg-cyan-500/30"
                        )}
                      />
                    </div>

                    {/* Stage Card with Equal Visual Baseline & Structure */}
                    <div
                      className={cn(
                        "w-full h-full min-h-52.5 p-5 rounded-2xl flex flex-col justify-between text-left transition-all duration-300",
                        "bg-white/85 dark:bg-[#07192D]/75 backdrop-blur-xl",
                        "border shadow-sm dark:shadow-none",
                        isActive
                          ? "border-cyan-400/50 shadow-[0_8px_28px_rgba(0,156,255,0.12)] bg-white dark:bg-[#09203A]/85"
                          : "border-slate-200/80 dark:border-white/8"
                      )}
                    >
                      <div>
                        {/* Stage Label */}
                        <div className="flex items-center justify-between">
                          <span
                            className={cn(
                              "text-[10px] font-mono font-bold tracking-wider uppercase transition-colors",
                              isActive ? "text-cyan-400" : "text-slate-500 dark:text-slate-400"
                            )}
                          >
                            STAGE {stage.step}
                          </span>
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                              isActive ? "bg-cyan-400 shadow-[0_0_6px_#00D9FF]" : "bg-slate-300 dark:bg-white/20"
                            )}
                          />
                        </div>

                        {/* Stage Title */}
                        <h3 className="mt-3 font-display text-lg xl:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                          {stage.name}
                        </h3>

                        {/* Stage Description */}
                        <p className="mt-2 text-xs xl:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>

                      {/* Card Footer Divider & Label */}
                      <div className="mt-auto pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: stage.accent }}
                          />
                          <span className="text-[10px] tracking-wide">Methodology</span>
                        </div>
                        <ArrowRight
                          className={cn(
                            "h-3.5 w-3.5 transition-all duration-300",
                            isActive
                              ? "text-cyan-400 translate-x-0.5"
                              : "text-slate-400 dark:text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET RESPONSIVE TIMELINE (lg:hidden)                          */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative mt-12 sm:mt-16">
          {/* Continuous Vertical Guide Path */}
          <div className="absolute left-6 sm:left-7 top-6 bottom-6 w-0.5 bg-linear-to-b from-[#009CFF] via-[#00E5FF] to-[#8FFF3D] opacity-35" aria-hidden="true" />

          {/* Animated Vertical Pulse for Mobile */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute left-5.75 sm:left-6.75 w-1 h-8 rounded-full bg-cyan-300 shadow-[0_0_8px_#00D9FF] pointer-events-none z-10"
              animate={{
                top: ["2%", "94%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Vertical Step Nodes & Cards */}
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {JOURNEY_STAGES.map((stage, i) => {
              const isActive = activeStage === i;
              const Icon = stage.icon;

              return (
                <Reveal key={stage.name} delay={i * 0.07}>
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label={`Stage ${stage.step}: ${stage.name}. ${stage.desc}`}
                    onMouseEnter={() => setActiveStage(i)}
                    onMouseLeave={() => setActiveStage(null)}
                    onFocus={() => setActiveStage(i)}
                    onBlur={() => setActiveStage(null)}
                    className={cn(
                      "group flex items-start gap-4 sm:gap-6 outline-none transition-all duration-300",
                      "focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
                    )}
                  >
                    {/* Circular Node Station */}
                    <div className="relative shrink-0 pt-1">
                      <div
                        className={cn(
                          "relative h-12 w-12 sm:h-14 sm:w-14 rounded-full grid place-items-center transition-all duration-300",
                          "bg-[#07192D] dark:bg-[#07192D] backdrop-blur-md",
                          "border shadow-sm",
                          isActive
                            ? "border-cyan-400 ring-2 ring-cyan-400/25 shadow-[0_0_16px_rgba(0,217,255,0.3)]"
                            : "border-slate-200/40 dark:border-white/10"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5 transition-colors duration-300",
                            isActive ? "text-cyan-300" : "text-brand"
                          )}
                        />

                        {/* Number Badge */}
                        <div
                          className={cn(
                            "absolute -top-1 -right-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold leading-none shadow-xs border",
                            isActive
                              ? "bg-gradient-brand text-white border-white/30"
                              : "bg-slate-800 text-slate-300 border-white/10"
                          )}
                        >
                          {stage.step}
                        </div>
                      </div>
                    </div>

                    {/* Stage Card */}
                    <div
                      className={cn(
                        "flex-1 p-4 sm:p-5 rounded-2xl transition-all duration-300",
                        "bg-white/85 dark:bg-[#07192D]/75 backdrop-blur-xl",
                        "border shadow-sm dark:shadow-none",
                        isActive
                          ? "border-cyan-400/50 shadow-[0_6px_20px_rgba(0,156,255,0.1)] bg-white dark:bg-[#09203A]/85"
                          : "border-slate-200/80 dark:border-white/8"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "text-[10px] font-mono font-bold tracking-wider uppercase",
                            isActive ? "text-cyan-400" : "text-slate-500 dark:text-slate-400"
                          )}
                        >
                          STAGE {stage.step}
                        </span>
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            isActive ? "bg-cyan-400" : "bg-slate-300 dark:bg-white/20"
                          )}
                        />
                      </div>

                      <h3 className="mt-1.5 font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                        {stage.name}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

