import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { FinalCTA } from "@/components/home";
import {
  Activity,
  GraduationCap,
  Stethoscope,
  Factory,
  ShoppingBag,
  Landmark,
  Building2,
  Truck,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Target,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASING } from "@/config/animations";
import { INDUSTRIES } from "@/data/industries";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>> = {
  "utilities-environmental": Activity,
  education: GraduationCap,
  healthcare: Stethoscope,
  manufacturing: Factory,
  retail: ShoppingBag,
  finance: Landmark,
  government: Building2,
  logistics: Truck,
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Sectors Served — Accorto Technologies" },
      {
        name: "description",
        content:
          "Explore our specialized enterprise consulting expertise in Utilities & Environmental, Manufacturing, Healthcare, Finance, Retail, Education, Government, and Logistics.",
      },
      { property: "og:title", content: "Industries & Sectors — Accorto Technologies" },
      {
        property: "og:description",
        content: "Specialized enterprise systems for regulated, industrial, and utility sectors.",
      },
      { property: "og:url", content: "https://accorto.tech/industries" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/industries" }],
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
              name: "Industries",
              item: "https://accorto.tech/industries",
            },
          ],
        }),
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const [active, setActive] = useState(INDUSTRIES[0].id);
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <>
      <PageHero
        tag="Industries"
        title={
          <>
            Domain depth across <span className="text-gradient">regulated industries</span>.
          </>
        }
        subtitle="Industry-aware accelerators, regulatory know-how, and reference architectures built from years of operating inside complex sectors."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <h2 className="sr-only">Industry Challenges, Solutions, and Benefits</h2>
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Industry sectors">
          {INDUSTRIES.map((it) => {
            const Icon = INDUSTRY_ICONS[it.id] || Factory;
            const isActive = active === it.id;
            return (
              <button
                key={it.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(it.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-brand scale-102"
                    : "bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-102"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" /> {it.name}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {INDUSTRIES.filter((i) => i.id === active).map((it) => (
            <motion.div
              key={it.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: EASING }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-6"
            >
              <div className="sm:col-span-1 lg:col-span-4">
                <Card
                  title="Challenges"
                  icon={AlertCircle}
                  items={it.challenges}
                  tone="text-rose-400"
                />
              </div>
              <div className="sm:col-span-1 lg:col-span-4">
                <Card
                  title="Our solutions"
                  icon={Sparkles}
                  items={it.solutions}
                  tone="text-brand"
                />
              </div>
              <div className="sm:col-span-1 lg:col-span-4">
                <Card title="Benefits" icon={Target} items={it.benefits} tone="text-emerald-400" />
              </div>
              <div className="sm:col-span-3 lg:col-span-12">
                <div className="relative overflow-hidden rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 p-8 md:p-10 shadow-md">
                  <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-brand opacity-[0.06] blur-3xl pointer-events-none" />
                  <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
                    Case highlight
                  </h3>
                  <p className="mt-3 font-display text-2xl md:text-3xl font-semibold max-w-3xl leading-tight text-slate-900 dark:text-white">
                    {it.highlight}
                  </p>
                  <Link
                    to="/case-studies"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand hover:shadow-brand-lg transition-all focus-visible:ring-2 focus-visible:ring-brand outline-none"
                  >
                    Read related case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <FinalCTA />
    </>
  );
}

function Card({
  title,
  icon: Icon,
  items,
  tone,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  items: string[];
  tone: string;
}) {
  return (
    <div className="h-full rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 text-left flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 dark:bg-white/5 text-brand shrink-0">
            <Icon className="h-4.5 w-4.5" aria-hidden="true" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">
            {title}
          </h3>
        </div>
        <ul className="mt-5 space-y-3 text-xs sm:text-sm text-[#64748B] dark:text-slate-300 font-medium leading-relaxed">
          {items.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span
                className={`mt-1.5 h-1.5 w-1.5 rounded-full ${tone.replace("text-", "bg-")} shrink-0`}
                aria-hidden="true"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
