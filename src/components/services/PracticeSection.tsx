import React from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../section";
import { Counter } from "../counter";
import { AnimatedContent } from "../animations/AnimatedContent";
import { ParallaxImage } from "../animations/ParallaxImage";
import {
  Database,
  Layers3,
  Brain,
  Cloud,
  Rocket,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Boxes,
} from "lucide-react";
import type { ServicePractice } from "@/data/services";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  oracle: Database,
  sap: Layers3,
  ai: Brain,
  cloud: Cloud,
  dx: Rocket,
  dm: Megaphone,
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-white/5 rounded-3xl p-5 shadow-xs">
      <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 font-bold">
        {title}
      </div>
      {children}
    </div>
  );
}

export function PracticeSection({ p, flip }: { p: ServicePractice; flip: boolean }) {
  const Icon = ICON_MAP[p.id] || Database;

  return (
    <section
      id={p.id}
      className="relative py-16 md:py-24 lg:py-32 border-t border-border/40 bg-radial-subtle"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`grid lg:grid-cols-12 gap-12 items-start ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-full px-3 py-1 text-xs text-slate-600 dark:text-slate-300 shadow-xs">
              <Icon className="h-3.5 w-3.5 text-brand" /> Practice
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
              {p.name}
            </h2>
            <p className="mt-3 text-lg font-bold text-brand">{p.tagline}</p>
            <p className="mt-5 text-[#64748B] dark:text-slate-300 leading-relaxed font-normal">
              {p.overview}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Block title="Key benefits">
                <ul className="space-y-2 text-sm font-normal">
                  {p.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="mt-1.5 h-4 w-4 text-emerald-400 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Capabilities">
                <ul className="grid grid-cols-2 gap-y-2 text-sm font-normal">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand" /> {f}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <div className="mt-6">
              <Block title="Delivery process">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-1.5">
                  {p.process.map((s, idx) => (
                    <AnimatedContent
                      key={s}
                      distance={25}
                      direction="vertical"
                      delay={idx * 0.05}
                      threshold={0.1}
                      duration={0.45}
                      scale={0.97}
                    >
                      <div className="relative bg-slate-50 dark:bg-[#102947] rounded-2xl p-3 flex flex-col justify-between min-h-20 border border-slate-200/60 dark:border-white/5 shadow-xs">
                        <span className="text-[10px] font-mono font-bold text-brand bg-brand/10 w-5 h-5 rounded-full flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-900 dark:text-white mt-2 leading-tight">
                          {s}
                        </span>
                      </div>
                    </AnimatedContent>
                  ))}
                </div>
              </Block>
            </div>

            <div className="mt-6">
              <Block title="Technology stack">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="bg-slate-50 dark:bg-[#102947] rounded-md px-2.5 py-1 text-xs font-mono text-slate-600 dark:text-slate-300 hover:bg-brand/10 hover:text-brand transition-colors cursor-default select-none border border-slate-200/60 dark:border-white/10 shadow-xs"
                    >
                      <Boxes className="inline h-3 w-3 mr-1 text-brand" />
                      {t}
                    </span>
                  ))}
                </div>
              </Block>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-slate-200 dark:border-border/30 pt-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Need Expert Guidance?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {"Talk directly to a partner from our "}
                  {p.name}
                  {" practice."}
                </p>
              </div>
              <Link
                to="/contact"
                className="sm:ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white shadow-brand hover:scale-105 hover:shadow-brand-lg transition-all text-center justify-center whitespace-nowrap"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative aspect-4/5 rounded-4xl overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-lg">
              <ParallaxImage
                src={p.image}
                alt={`${p.name} consulting and enterprise solutions`}
                aspectRatio="aspect-4/5"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#031224] via-[#031224]/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-3 z-10">
                {p.results.map(([v, l]) => {
                  const num = parseInt(v);
                  const suffix = v.replace(/[\d.]/g, "");
                  return (
                    <div
                      key={l}
                      className="p-2.5 sm:p-3 bg-white/90 dark:bg-[#0C223D]/90 border border-slate-200/40 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white shadow-md animate-fade-in"
                    >
                      <div className="font-display text-lg sm:text-xl font-bold">
                        {isNaN(num) ? (
                          v
                        ) : (
                          <Counter to={num} suffix={suffix} />
                        )}
                      </div>
                      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-1 leading-tight font-semibold">
                        {l}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
