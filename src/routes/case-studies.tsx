import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/lib/motion-presets";
import { ComparisonCard } from "@/components/premium/ComparisonCard";
import { SectionDivider } from "@/components/premium/SectionDivider";

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

const CASES = [
  {
    cat: "Oracle",
    title: "Global manufacturer cuts financial close by 47%",
    client: "Aurora Manufacturing",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1000&q=80",
    metric: "47% faster close",
    desc: "Migrated 12 legal entities to Oracle Cloud ERP in 9 months.",
    before: "17-day close",
    after: "9-day close",
    roi: "312% ROI in 12mo",
    outcome: "Saved $2.4M annually",
    industry: "Manufacturing",
    tech: ["Oracle ERP Cloud", "EPM Cloud"],
  },
  {
    cat: "SAP",
    title: "Retail conglomerate unifies 9 ERPs into one",
    client: "Northwind Retail",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80",
    metric: "$28M savings",
    desc: "S/4HANA RISE program across 14 brands.",
    before: "9 legacy ERPs",
    after: "1 S/4HANA core",
    roi: "240% ROI in 18mo",
    outcome: "$28M operational savings",
    industry: "Retail",
    tech: ["SAP S/4HANA RISE", "BTP"],
  },
  {
    cat: "AI",
    title: "Bank deploys real-time fraud AI at scale",
    client: "Meridian Bank",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1000&q=80",
    metric: "92% fraud caught",
    desc: "Real-time scoring on 1.2M transactions/day.",
    before: "Manual audit check",
    after: "Real-time AI score",
    roi: "180% ROI in 6mo",
    outcome: "92% fraud caught instantly",
    industry: "Finance",
    tech: ["Applied AI", "MLOps Platform"],
  },
  {
    cat: "Cloud",
    title: "Insurer modernizes core to AWS landing zone",
    client: "Sentinel Insurance",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80",
    metric: "35% infra savings",
    desc: "200+ workloads migrated with zero downtime.",
    before: "On-premise servers",
    after: "AWS landing zone",
    roi: "195% ROI in 15mo",
    outcome: "35% infrastructure savings",
    industry: "Finance",
    tech: ["AWS Migration", "Cloud Ops"],
  },
  {
    cat: "Oracle",
    title: "Hospital network rolls out Fusion HCM",
    client: "Caremount Health",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&q=80",
    metric: "60k employees onboarded",
    desc: "12-month HCM transformation across 18 hospitals.",
    before: "Manual scheduling logs",
    after: "Unified Fusion portal",
    roi: "150% ROI in 12mo",
    outcome: "60k employee onboarding automated",
    industry: "Healthcare",
    tech: ["Oracle Fusion HCM", "OIC"],
  },
  {
    cat: "AI",
    title: "Telco predicts churn 6 weeks earlier",
    client: "Vantage Telecom",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80",
    metric: "+22pt accuracy",
    desc: "GenAI copilot for retention agents.",
    before: "2-week latency flags",
    after: "6-week predictive flags",
    roi: "280% ROI in 9mo",
    outcome: "Saved 18% churn pipeline",
    industry: "Logistics",
    tech: ["Generative AI", "Vector Database"],
  },
  {
    cat: "SAP",
    title: "FMCG launches integrated planning on BTP",
    client: "Northstar FMCG",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
    metric: "Inventory -22%",
    desc: "IBP + BTP extensions live in 5 months.",
    before: "Excess inventory stockpile",
    after: "BTP demand scheduling",
    roi: "210% ROI in 12mo",
    outcome: "Inventory stockpile cut by 22%",
    industry: "Manufacturing",
    tech: ["SAP BTP", "SAP CAPM"],
  },
  {
    cat: "Cloud",
    title: "Logistics control tower on Azure",
    client: "GlobalRoute Logistics",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80",
    metric: "OTIF +12pt",
    desc: "Real-time visibility across 40+ DCs.",
    before: "Manual routing control",
    after: "Azure control tower",
    roi: "225% ROI in 10mo",
    outcome: "OTIF delivery rates up 12pt",
    industry: "Logistics",
    tech: ["Azure Cloud", "Data Analytics"],
  },
];

const CATS = ["All", "Oracle", "SAP", "AI", "Cloud"];

function CaseCard({ c, delay }: { c: typeof CASES[0]; delay: number }) {
  const { parallaxProps, handleMouseMove, handleMouseLeave } = useMouseParallax(5);

  return (
    <Reveal delay={delay}>
      <div 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave} 
        className="h-full"
      >
        <motion.div {...parallaxProps} className="h-full">
          <PremiumCard className="group h-full flex flex-col relative rounded-[32px]">
            <div className="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="relative aspect-4/3 rounded-[32px] overflow-hidden m-3 shadow-md z-10">
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover rounded-[32px] brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <PremiumBadge className="px-2.5 py-1 text-[10px] bg-black/40 border-white/10 text-white backdrop-blur-md">
                  {c.cat}
                </PremiumBadge>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1 text-white shadow-sm">
                <TrendingUp className="h-3 w-3 text-emerald-400" /> {c.metric}
              </div>
            </div>
            <div className="p-6 pt-3 flex flex-col flex-1 relative z-10 text-left">
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.18em]">{c.client}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand transition-colors leading-[1.02] tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">{c.desc}</p>

              <div className="mt-4 pt-4 border-t border-slate-200/20 dark:border-white/5 space-y-4">
                <ComparisonCard
                  title="Transformation Blueprint"
                  beforeLabel="Legacy State"
                  beforeVal={c.before}
                  afterLabel="Modernized State"
                  afterVal={c.after}
                  className="p-4 gap-2"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="inner-card p-4 flex flex-col justify-between">
                    <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">ROI Metric</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 mt-1 block truncate text-sm">{c.roi}</span>
                  </div>
                  <div className="inner-card p-4 flex flex-col justify-between">
                    <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">Outcome Goal</span>
                    <span className="font-semibold text-slate-900 dark:text-white mt-1 block truncate leading-tight text-xs">{c.outcome}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 flex flex-wrap gap-1.5">
                <span className="text-[9px] bg-white/5 border border-white/10 text-zinc-400 rounded-md px-2.5 py-0.5 font-semibold">{c.industry}</span>
                {c.tech.map((t) => (
                  <span key={t} className="text-[9px] bg-brand/10 text-brand dark:text-brand-3 border border-brand/20 rounded-md px-2.5 py-0.5 font-semibold">{t}</span>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand dark:text-brand-3 hover:text-brand-2 transition-all self-start group/link"
              >
                Read full story <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
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
    () => (cat === "All" ? CASES : CASES.filter((c) => c.cat === cat)),
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-32">
        <h2 className="sr-only">Client Case Studies</h2>
        <div className="flex flex-wrap gap-2 mb-14">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                cat === c
                  ? "bg-gradient-brand text-white shadow-brand hover:scale-105 hover:shadow-brand-lg"
                  : "glass text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/8"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <CaseCard key={c.title} c={c} delay={i * 0.04} />
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
