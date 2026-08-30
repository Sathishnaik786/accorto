import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { motion, AnimatePresence } from "framer-motion";
import { useMouseParallax } from "@/lib/motion-presets";
import { ComparisonCard } from "@/components/premium/ComparisonCard";
import { CASE_STUDIES, type CaseStudyItem } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies & Client Success — Accorto Technologies" },
      {
        name: "description",
        content:
          "Read our real-world consulting success stories. Explore how we helped global enterprises optimize operations using Oracle ERP, SAP, and custom AI systems.",
      },
      { property: "og:title", content: "Case studies" },
      { property: "og:description", content: "Enterprise programs that moved markets." },
      { property: "og:url", content: "https://accorto.tech/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/case-studies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://accorto.tech",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Case Studies",
              item: "https://accorto.tech/case-studies",
            },
          ],
        }),
      },
    ],
  }),
  component: CaseStudies,
});

const CATS = ["All", "Oracle", "SAP", "AI", "Cloud"];

function CaseCard({ c, delay }: { c: CaseStudyItem; delay: number }) {
  const { parallaxProps, handleMouseMove, handleMouseLeave } = useMouseParallax(5);

  const renderMetric = (metricStr: string) => {
    const parts = metricStr.trim().split(" ");
    if (parts.length > 1) {
      const [value, ...rest] = parts;
      return (
        <span className="flex items-baseline gap-1">
          <span className="font-extrabold text-emerald-400">{value}</span>
          <span className="font-medium text-slate-200/90 text-[11px]">{rest.join(" ")}</span>
        </span>
      );
    }
    return <span className="font-bold text-white">{metricStr}</span>;
  };

  return (
    <Reveal delay={delay}>
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="h-full">
        <motion.div {...parallaxProps} className="h-full">
          <PremiumCard className="group h-full flex flex-col relative rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0">
            <div className="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" aria-hidden="true" />
            <div className="relative aspect-16/10 rounded-[24px] overflow-hidden m-3 shadow-xs z-10 border border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-white/5">
              <img
                src={c.img}
                alt={c.imageAlt || c.title}
                loading="lazy"
                className="h-full w-full object-cover rounded-[24px] brightness-[0.96] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100 motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute top-3 left-3">
                <PremiumBadge className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-black/40 border-white/10 text-white backdrop-blur-md">
                  {c.cat}
                </PremiumBadge>
              </div>

              <div className="absolute bottom-3 right-3 bg-slate-950/90 dark:bg-black/90 backdrop-blur-md border border-white/15 rounded-full px-3 py-1 text-xs text-white flex items-center gap-1.5 shadow-md">
                <TrendingUp className="h-3 w-3 text-emerald-400 shrink-0" aria-hidden="true" />
                {renderMetric(c.metric)}
              </div>
            </div>

            <div className="p-6 pt-3 flex flex-col flex-1 relative z-10 text-left">
              <div className="text-[10px] text-brand dark:text-brand-2 font-mono font-bold uppercase tracking-widest">
                {c.client}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors leading-snug tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed font-medium">
                {c.desc}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200/40 dark:border-white/5 space-y-4">
                <ComparisonCard
                  title="Transformation Blueprint"
                  beforeLabel="Legacy State"
                  beforeVal={c.before}
                  afterLabel="Modernized State"
                  afterVal={c.after}
                  className="p-4 gap-2"
                />

                <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3">
                  <div className="bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-2xl p-3 sm:p-4 flex flex-col justify-between shadow-xs">
                    <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">
                      ROI Metric
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 mt-1 block text-sm">
                      {c.roi}
                    </span>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-2xl p-3 sm:p-4 flex flex-col justify-between shadow-xs">
                    <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">
                      Outcome Goal
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white mt-1 block leading-tight text-xs">
                      {c.outcome}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 flex flex-wrap gap-1.5">
                <span className="text-[9px] bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-500 dark:text-zinc-400 rounded-md px-2.5 py-0.5 font-semibold shadow-xs">
                  {c.industry}
                </span>
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] bg-brand/10 text-brand dark:text-brand-3 border border-brand/20 rounded-md px-2.5 py-0.5 font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors pt-3 border-t border-slate-100 dark:border-white/5 group/link outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              >
                <span>Read full story</span>
                <ArrowRight className="h-3.5 w-3.5 text-brand transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
              </Link>
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </Reveal>
  );
}

function CaseStudies() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(
    () =>
      cat === "All"
        ? CASE_STUDIES
        : CASE_STUDIES.filter((c) => c.cat.toLowerCase().includes(cat.toLowerCase())),
    [cat],
  );

  return (
    <>
      <PageHero
        tag="Case Studies"
        title={
          <>
            Programs that <span className="text-gradient">moved markets</span>.
          </>
        }
        subtitle="Real client outcomes from the last few quarters across our Oracle, SAP, AI and Cloud practices."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 md:pb-24 lg:pb-32">
        <h2 className="sr-only">Client Case Studies</h2>
        <div className="flex flex-wrap gap-2 mb-14">
          {CATS.map((c) => {
            const isActive = cat === c;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative rounded-full px-4.5 py-2 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCasePill"
                    className="absolute inset-0 rounded-full bg-gradient-brand shadow-brand z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.div
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
              >
                <CaseCard c={c} delay={i * 0.04} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <FinalCTA />
    </>
  );
}
