import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
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
  { title: "Senior Oracle Cloud ERP Consultant", loc: "Bengaluru · Hybrid", team: "Oracle" },
  { title: "SAP S/4HANA Solution Architect", loc: "Dubai · On-site", team: "SAP" },
  { title: "Staff ML Engineer (GenAI)", loc: "Remote · Global", team: "AI" },
  { title: "Cloud Platform Engineer (AWS)", loc: "New York · Hybrid", team: "Cloud" },
  { title: "Senior Product Designer", loc: "Bengaluru · Hybrid", team: "Design" },
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="sr-only">Why choose Accorto</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              t: "Engineering-first culture",
              d: "Senior engineers in every pod. Real ownership from day one.",
            },
            {
              icon: Globe2,
              t: "Global mobility",
              d: "Hubs in Bengaluru, Dubai and New York. Move where you grow.",
            },
            {
              icon: Sparkles,
              t: "Compounding learning",
              d: "$3,000/yr learning budget. Internal academies for Oracle, SAP, AI.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="glass rounded-3xl p-7 h-full">
                <b.icon className="h-7 w-7 text-brand" />
                <h3 className="mt-4 font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
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
          ].map((b) => (
            <div key={b.t} className="glass rounded-2xl p-5 flex items-center gap-3">
              <b.icon className="h-5 w-5 text-brand" />{" "}
              <span className="text-sm font-medium">{b.t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
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
          ].map((s) => (
            <div key={s.n} className="glass rounded-2xl p-5">
              <div className="font-display text-3xl font-semibold text-gradient">{s.n}</div>
              <h3 className="mt-1 font-semibold text-sm">{s.t}</h3>
              <p className="text-xs text-muted-foreground mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
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
            <Reveal key={j.title} delay={i * 0.03}>
              <Link
                to="/contact"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl glass px-6 py-5 hover:bg-white/5 transition-colors"
              >
                <div>
                  <div className="text-xs text-brand uppercase tracking-widest">{j.team}</div>
                  <h3 className="font-display text-lg font-semibold group-hover:text-brand transition-colors">
                    {j.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {j.loc}
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
