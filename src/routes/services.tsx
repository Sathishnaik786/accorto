import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { FinalCTA } from "@/components/home";
import { StickyStory } from "@/components/premium/StickyStory";
import { SectionDivider } from "@/components/premium/SectionDivider";
import { ArchitectureDiagram } from "@/components/premium/ArchitectureDiagram";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ScrollVelocity } from "@/components/animations/ScrollVelocity";
import { PracticeSection } from "@/components/services";
import { PRACTICES } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Enterprise Practices & Consulting Services — Accorto Technologies" },
      {
        name: "description",
        content:
          "Accelerate growth with our enterprise practices in AI & IoT, Enterprise Structure, Enterprise Data, Oracle ERP, SAP Solutions, Cloud, and Digital Transformation.",
      },
      { property: "og:title", content: "Accorto Enterprise Practices" },
      {
        property: "og:description",
        content: "Full-stack enterprise technology and AI consulting services for global organizations.",
      },
      { property: "og:url", content: "https://accorto.tech/services" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
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
                name: "Services",
                item: "https://accorto.tech/services",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI & IoT Operational Intelligence",
            provider: {
              "@type": "Organization",
              name: "Accorto Technologies",
              url: "https://accorto.tech",
            },
            description: "Physical-world sensor arrays, real-time dashboards, and predictive anomaly alerts.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Oracle ERP Consulting",
            provider: {
              "@type": "Organization",
              name: "Accorto Technologies",
              url: "https://accorto.tech",
            },
            description: "End-to-end Oracle Cloud & EBS implementations at enterprise scale.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SAP Solutions",
            provider: {
              "@type": "Organization",
              name: "Accorto Technologies",
              url: "https://accorto.tech",
            },
            description: "S/4HANA migration, custom Fiori apps, and BTP integration consulting.",
          },
        ]),
      },
    ],
  }),
  component: Services,
});

function Services() {
  const stickySteps = [
    {
      title: "Discover",
      subtitle: "Map systems and bottlenecks",
      desc: "We audit your existing ledger schemas, IoT telemetry streams, and human processes to locate operational lag and compile empirical metrics.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Audit Scope
            </span>
            <span className="text-[10px] font-mono font-bold text-brand">STAGE 01</span>
          </div>
          <div className="space-y-2 mt-2">
            <div className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-xl flex items-center justify-between text-xs shadow-xs">
              <span className="text-slate-600 dark:text-zinc-400 font-medium">IoT &amp; Core Interfaces</span>
              <span className="font-bold text-slate-900 dark:text-white">100% Mapped</span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-xl flex items-center justify-between text-xs shadow-xs">
              <span className="text-slate-600 dark:text-zinc-400 font-medium">Custom Technical Debt</span>
              <span className="font-bold text-amber-500">Flagged for Pruning</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Architect",
      subtitle: "Design the target blueprint",
      desc: "We construct your future-state architecture, decoupling extensions from the core ERP and establishing native Lakehouse data pipelines.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Clean Architecture
          </span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-xl text-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block">
                Standard APIs
              </span>
              <span className="text-zinc-500 text-[10px] mt-1 block font-medium">
                Standard Upgrades
              </span>
            </div>
            <div className="p-3 bg-brand/5 border border-brand/20 rounded-xl text-xs">
              <span className="text-brand font-bold block">Edge &amp; BTP</span>
              <span className="text-zinc-500 text-[10px] mt-1 block font-medium">
                Side-by-side scale
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Build",
      subtitle: "Sprint-based delivery",
      desc: "Our delivery teams execute 2-week agile sprints, deploying tested code into staging with continuous client validation checkpoints.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Sprint Cadence
          </span>
          <div className="space-y-1.5 mt-2">
            <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-linear-to-r from-brand to-emerald-400 w-3/4 rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-500">
              <span>Sprint 04 of 06</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">75% Complete</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Deploy",
      subtitle: "Zero-downtime cutover",
      desc: "Mock dress rehearsals and automated validation scripts ensure your production cutover completes safely over a single weekend window.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Cutover Telemetry
          </span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-xl shadow-xs">
              <span className="text-zinc-500 text-[8px] uppercase font-bold">Downtime</span>
              <span className="text-emerald-600 dark:text-emerald-400 block mt-0.5 font-bold">
                0 Hours
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-xl shadow-xs">
              <span className="text-zinc-500 text-[8px] uppercase font-bold">Alert Latency</span>
              <span className="text-slate-900 dark:text-white block mt-0.5 font-semibold">
                &lt;500ms
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Scale",
      subtitle: "Optimize and expand",
      desc: "Our analytics dashboards measure post-launch performance constantly, feeding optimization metrics directly back into the engine.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Post-Launch ROI
          </span>
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-zinc-500 text-[9px] uppercase font-bold">
                Consolidation Gains
              </span>
              <div className="font-display text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                +47%
              </div>
            </div>
            <div>
              <span className="text-zinc-500 text-[9px] uppercase font-bold">FinOps Savings</span>
              <div className="font-display text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                -35%
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHero
        tag="Practices &amp; Capabilities"
        title={
          <>
            Enterprise Practices. <span className="text-gradient">One connected intelligence layer.</span>
          </>
        }
        subtitle="From physical IoT sensor arrays to ERP systems of record and modern Lakehouse data architectures — explore our core enterprise practices below."
      >
        <div className="flex flex-wrap gap-2">
          {PRACTICES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 shadow-xs rounded-full px-4 py-2 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              {p.name}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Anchor alias for legacy #ai links */}
      <div id="ai" className="sr-only" aria-hidden="true" />

      {PRACTICES.map((p, i) => (
        <PracticeSection key={p.id} p={p} flip={i % 2 === 1} />
      ))}

      {/* Horizontal Scrolling Typography Marquee */}
      <div className="py-6 sm:py-10 border-y border-border/20 overflow-hidden bg-slate-50/50 dark:bg-card/30 backdrop-blur-xs">
        <ScrollVelocity
          items={[
            "AI & IOT TELEMETRY",
            "ORACLE CLOUD ERP",
            "SAP S/4HANA & BTP",
            "SNOWFLAKE & DATABRICKS",
            "MULTI-CLOUD FINOPS",
            "DIGITAL TRANSFORMATION",
          ]}
          direction="right"
          defaultVelocity={1.5}
        />
      </div>

      <SectionDivider label="02 / ENTERPRISE ARCHITECTURE" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <ScrollReveal
          baseOpacity={0.15}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="my-6 text-center max-w-4xl mx-auto"
          textClassName="text-2xl sm:text-4xl font-display font-semibold text-slate-900 dark:text-white leading-snug"
        >
          We connect fragmented legacy infrastructure, Lakehouse data platforms, and edge IoT sensors into unified enterprise systems engineered for scale.
        </ScrollReveal>
        <ArchitectureDiagram />
      </section>

      <SectionDivider label="03 / IMPLEMENTATION ENGINE" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <StickyStory steps={stickySteps} />
      </section>

      <div className="-mt-12 sm:-mt-20 lg:-mt-28">
        <FinalCTA />
      </div>
    </>
  );
}
