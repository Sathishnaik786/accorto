import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { FinalCTA } from "@/components/home";
import { AnimatedContent } from "@/components/animations/AnimatedContent";

import {
  Heart,
  Globe2,
  GraduationCap,
  Coffee,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Accorto — Join our Global Consulting Team" },
      {
        name: "description",
        content:
          "Join Accorto Technologies. Build category-defining enterprise consulting programs alongside global experts in Oracle ERP, SAP S/4HANA, AI, and Cloud.",
      },
      { property: "og:title", content: "Careers at Accorto" },
      { property: "og:description", content: "Roles, culture, and life at Accorto." },
      { property: "og:url", content: "https://accorto.tech/careers" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/careers" }],
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
              name: "Careers",
              item: "https://accorto.tech/careers",
            },
          ],
        }),
      },
    ],
  }),
  component: Careers,
});

const JOBS = [
  { title: "Senior Oracle Cloud ERP Consultant", loc: "Hyderabad, India · Hybrid", team: "Oracle" },
  { title: "SAP S/4HANA Solution Architect", loc: "Hyderabad, India · On-site", team: "SAP" },
  { title: "Staff ML Engineer (GenAI)", loc: "Remote · Global", team: "AI" },
  { title: "Cloud Platform Engineer (AWS)", loc: "Hyderabad, India · Hybrid", team: "Cloud" },
  { title: "Senior Product Designer", loc: "Hyderabad, India · Hybrid", team: "Design" },
  { title: "Engagement Manager — Financial Services", loc: "London · Hybrid", team: "Consulting" },
];

function Careers() {
  return (
    <>
      <PageHero
        tag="Careers"
        title={
          <>
            Build the <span className="text-gradient">next era of enterprise tech</span>.
          </>
        }
        subtitle="Work on the programs that boards talk about. With operators who've shipped at scale, and a culture that respects your craft."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <h2 className="sr-only">Why choose Accorto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              t: "Engineering-first culture",
              d: "Senior engineers in every pod. Real ownership from day one.",
            },
            {
              icon: Globe2,
              t: "Global mobility",
              d: "Hubs in Hyderabad, India; London, UK; and San Francisco, USA. Move where you grow.",
            },
            {
              icon: Sparkles,
              t: "Compounding learning",
              d: "$3,000/yr learning budget. Internal academies for Oracle, SAP, AI.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 p-6 sm:p-8 h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 motion-reduce:hover:translate-y-0 group shadow-md text-left">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 dark:bg-white/5 text-brand mb-5">
                  <b.icon className="h-6 w-6 text-brand group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {b.t}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] dark:text-slate-300 font-medium leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <SectionHeading
          tag="Life at Accorto"
          title={
            <>
              Real <span className="text-gradient">benefits</span>, not perks theater.
            </>
          }
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Heart, t: "Family-first healthcare" },
            { icon: GraduationCap, t: "Learning stipend" },
            { icon: Coffee, t: "Flexible hybrid" },
            { icon: ShieldCheck, t: "ESOPs for all" },
          ].map((b, idx) => (
            <AnimatedContent
              key={b.t}
              distance={25}
              direction="vertical"
              delay={idx * 0.06}
              threshold={0.1}
              duration={0.45}
              scale={0.97}
            >
              <div className="rounded-2xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 p-5 flex items-center gap-3.5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 shadow-xs">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 dark:bg-white/5 text-brand shrink-0">
                  <b.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{b.t}</span>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <SectionHeading
          tag="Hiring process"
          title={
            <>
              Respectful, <span className="text-gradient">fast</span>, transparent.
            </>
          }
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: 1, t: "Apply", d: "10-min application + portfolio." },
            { n: 2, t: "Craft interview", d: "Deep dive with a practice lead." },
            { n: 3, t: "Working session", d: "A real problem, not a brainteaser." },
            { n: 4, t: "Offer", d: "Decision within 7 days. Always." },
          ].map((s, idx) => (
            <AnimatedContent
              key={s.n}
              distance={30}
              direction="vertical"
              delay={idx * 0.08}
              threshold={0.1}
              duration={0.5}
              scale={0.96}
            >
              <div className="rounded-3xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-xs text-left">
                <div className="font-display text-3xl font-bold text-gradient">{s.n}</div>
                <h3 className="mt-2 font-bold text-sm text-slate-900 dark:text-white">{s.t}</h3>
                <p className="text-xs text-[#64748B] dark:text-slate-300 font-medium mt-1 leading-relaxed">{s.d}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <SectionHeading
          tag="Open positions"
          title={
            <>
              We're hiring. <span className="text-gradient">Across continents.</span>
            </>
          }
        />
        <div className="mt-10 space-y-3">
          {JOBS.map((j, i) => (
            <AnimatedContent
              key={j.title}
              distance={20}
              direction="vertical"
              delay={i * 0.04}
              threshold={0.08}
              duration={0.4}
              scale={0.99}
            >
              <Link
                to="/contact"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 px-6 py-5 hover:bg-slate-50 dark:hover:bg-white/8 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <div className="text-left">
                  <div className="text-[11px] font-mono font-bold text-brand dark:text-brand-2 uppercase tracking-wider">
                    {j.team}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors mt-0.5">
                    {j.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> {j.loc}
                  </span>
                  <ArrowRight className="h-4 w-4 text-brand transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
                </div>
              </Link>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
