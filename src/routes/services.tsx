import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { Counter } from "@/components/counter";
import { FinalCTA } from "@/components/home-sections";
import { StickyStory } from "@/components/premium/StickyStory";
import { SectionDivider } from "@/components/premium/SectionDivider";
import { ArchitectureDiagram } from "@/components/premium/ArchitectureDiagram";
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

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Enterprise Technology Services — Accorto Technologies" },
      {
        name: "description",
        content:
          "Accelerate growth with our enterprise services in Oracle ERP, SAP Solutions, generative AI, cloud migration, and end-to-end digital transformation.",
      },
      { property: "og:title", content: "Accorto Services" },
      {
        property: "og:description",
        content: "Full-stack enterprise technology services for global organizations.",
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
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI & Machine Learning",
            provider: {
              "@type": "Organization",
              name: "Accorto Technologies",
              url: "https://accorto.tech",
            },
            description:
              "Custom model training, predictive analytics, GenAI integrations, and MLOps pipelines.",
          },
        ]),
      },
    ],
  }),
  component: Services,
});

const PRACTICES = [
  {
    id: "oracle",
    icon: Database,
    name: "Oracle ERP",
    tagline: "From discovery to hypercare on Oracle Cloud and EBS.",
    overview:
      "Accorto's Oracle practice runs end-to-end Cloud ERP, EBS, Fusion HCM, EPM and Analytics programs with a delivery model honed across 60+ go-lives.",
    benefits: [
      "47% faster financial close",
      "30% lower TCO post-migration",
      "Single source of operational truth",
      "Audit-ready compliance by design",
    ],
    features: [
      "Cloud ERP migration",
      "EBS R12.2 upgrades",
      "Fusion HCM rollouts",
      "EPM & analytics",
      "Integration Cloud",
      "Managed services",
    ],
    process: [
      "Discovery",
      "Design & blueprint",
      "Build & integrate",
      "Test & UAT",
      "Cutover",
      "Hypercare & optimize",
    ],
    stack: ["Oracle Cloud ERP", "EBS R12", "Fusion HCM", "OAC", "OIC", "VBCS"],
    results: [
      ["60+", "ERP go-lives"],
      ["312%", "Avg ROI"],
      ["98%", "On-time delivery"],
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
  {
    id: "sap",
    icon: Layers3,
    name: "SAP Solutions",
    tagline: "S/4HANA, BTP and Fiori built for the intelligent enterprise.",
    overview:
      "We deliver greenfield, brownfield and selective S/4HANA conversions with reusable accelerators, plus innovation programs on SAP BTP.",
    benefits: [
      "Real-time analytics",
      "Unified business model",
      "Lower carbon-to-compute footprint",
      "Composable extensions on BTP",
    ],
    features: [
      "S/4HANA RISE",
      "Brownfield conversion",
      "SAP BTP innovation",
      "Fiori UX redesign",
      "SuccessFactors",
      "Ariba & Concur",
    ],
    process: ["Assessment", "Roadmap", "Conversion", "Extension on BTP", "Adoption", "AMS"],
    stack: ["S/4HANA", "BTP", "Fiori/UI5", "SAP CAPM", "SuccessFactors", "BW/4HANA"],
    results: [
      ["40+", "SAP programs"],
      ["28%", "Avg cost saving"],
      ["6mo", "Faster to value"],
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
  },
  {
    id: "ai",
    icon: Brain,
    name: "AI & Machine Learning",
    tagline: "Applied AI that ships to production, not pilots.",
    overview:
      "Our AI lab builds GenAI copilots, predictive engines, and computer vision systems on a hardened MLOps platform.",
    benefits: [
      "22pt forecast accuracy lift",
      "92% fraud detection rate",
      "Hours saved per knowledge worker",
      "Responsible AI guardrails",
    ],
    features: [
      "GenAI copilots",
      "Forecasting",
      "Recommendation",
      "Computer vision",
      "Document AI",
      "MLOps platform",
    ],
    process: [
      "Use case shaping",
      "Data foundation",
      "Prototype",
      "MLOps",
      "Productionize",
      "Continuous learning",
    ],
    stack: ["OpenAI", "Azure AI", "Vertex AI", "PyTorch", "MLflow", "Vector DBs"],
    results: [
      ["120+", "Models in production"],
      ["1.2M", "Decisions/day"],
      ["22pt", "Accuracy uplift"],
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  },
  {
    id: "cloud",
    icon: Cloud,
    name: "Cloud Consulting",
    tagline: "Multi-cloud strategy and FinOps for the long term.",
    overview:
      "Landing zones, migrations, Kubernetes platforms and FinOps governance across AWS, Azure, GCP and Oracle Cloud.",
    benefits: [
      "35% infra cost reduction",
      "Zero-trust security baseline",
      "Faster developer velocity",
      "Carbon-aware workloads",
    ],
    features: [
      "Landing zones",
      "Migration factory",
      "Kubernetes platform",
      "FinOps",
      "Site reliability",
      "Cloud security",
    ],
    process: ["Discover", "Design", "Migrate", "Modernize", "Operate", "Optimize"],
    stack: ["AWS", "Azure", "GCP", "Oracle Cloud", "Kubernetes", "Terraform"],
    results: [
      ["200+", "Workloads migrated"],
      ["35%", "Cost reduction"],
      ["99.99%", "Uptime"],
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  },
  {
    id: "dx",
    icon: Rocket,
    name: "Digital Transformation",
    tagline: "Reimagining operations, products, and experiences.",
    overview:
      "We pair strategy consultants with engineers and designers to redesign business models and ship the systems that deliver them.",
    benefits: [
      "Faster speed-to-market",
      "Higher NPS and CSAT",
      "Operational resilience",
      "Talent & change readiness",
    ],
    features: [
      "Operating model design",
      "CX & service design",
      "Process mining",
      "Automation factory",
      "Change management",
      "Product engineering",
    ],
    process: ["Diagnose", "Co-create", "Pilot", "Scale", "Operate", "Renew"],
    stack: ["Figma", "Celonis", "UiPath", "Power Platform", "ServiceNow", "Mendix"],
    results: [
      ["80+", "Programs"],
      ["3.4x", "Avg productivity"],
      ["+38%", "Revenue uplift"],
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    id: "dm",
    icon: Megaphone,
    name: "Digital Marketing",
    tagline: "Performance + brand, engineered together.",
    overview:
      "From SEO and paid media to martech engineering and lifecycle automation, our growth team scales pipelines for B2B and B2C.",
    benefits: [
      "Pipeline acceleration",
      "Lower CAC",
      "First-party data fluency",
      "Unified martech stack",
    ],
    features: [
      "SEO & content",
      "Paid media",
      "Marketing automation",
      "CDP & analytics",
      "Brand systems",
      "Web experience",
    ],
    process: ["Audit", "Strategy", "Build", "Launch", "Measure", "Iterate"],
    stack: ["GA4", "HubSpot", "Marketo", "Segment", "Adobe Experience", "Looker"],
    results: [
      ["4.1x", "Avg pipeline"],
      ["-32%", "CAC reduction"],
      ["220%", "MQL growth"],
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
];

function Services() {
  const stickySteps = [
    {
      title: "Discover",
      subtitle: "Map systems and bottlenecks",
      desc: "We audit your existing ledger schemas, system latencies, and human processes to locate operational lag and compile empirical metrics.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Discovery Telemetry</span>
            <span className="text-[8px] bg-amber-400/20 text-amber-400 font-bold px-2 py-0.5 rounded-full">Auditing...</span>
          </div>
          <div className="space-y-3">
            {[
              { label: "Core Ledgers Profiled", progress: 95 },
              { label: "API Bottlenecks Located", progress: 78 },
              { label: "Data Pipeline Sinks", progress: 62 },
            ].map((p, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-900 dark:text-slate-300 font-semibold">
                  <span>{p.label}</span>
                  <span>{p.progress}%</span>
                </div>
                <div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand rounded-full" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Architect",
      subtitle: "Design scalable blueprints",
      desc: "Our architects map target schemas, integration layers, and private AI boundary states, securing SOC 2 / GDPR baseline compliance before coding starts.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Architectural Blueprint</span>
          <div className="grid grid-cols-3 gap-3 items-center text-center mt-2">
            <div className="inner-card p-3 text-xs">
              <span className="text-brand font-bold uppercase text-[9px] block">Source</span>
              <span className="text-slate-900 dark:text-white mt-1 block font-semibold">ERP / CRM</span>
            </div>
            <div className="text-zinc-400 text-xs font-mono font-bold">──▶</div>
            <div className="inner-card p-3 text-xs">
              <span className="text-brand-3 font-bold uppercase text-[9px] block">Integration</span>
              <span className="text-slate-900 dark:text-white mt-1 block font-semibold">Accorto Hub</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Build",
      subtitle: "Develop with velocity",
      desc: "Accorto engineers deploy modular codebase extensions, certified ledger integrations, and custom neural agents inside private VPC configurations.",
      visual: (
        <div className="flex flex-col gap-3 font-mono text-[10px] text-left">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/20 dark:border-white/5">
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Active Compiler</span>
            <span className="text-emerald-500 font-bold">✓ Ready</span>
          </div>
          <div className="space-y-1 text-slate-500 dark:text-slate-400">
            <p className="text-emerald-600 dark:text-emerald-400">▶ npm run build:prod</p>
            <p>✓ Loaded 12 custom micro-agents</p>
            <p>✓ Connected Oracle ERP Fusion client API</p>
            <p>✓ Hardened SOC 2 Type II audit triggers</p>
            <p className="text-emerald-600 dark:text-emerald-400">▶ Build completed in 420ms</p>
          </div>
        </div>
      ),
    },
    {
      title: "Deploy",
      subtitle: "Release with confidence",
      desc: "Transformations release to multi-region cloud targets under FinOps bounds, managed continuously by site reliability pipelines.",
      visual: (
        <div className="flex flex-col gap-4 text-left">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Cloud Cluster Status</span>
            <span className="flex items-center gap-1 text-[8px] bg-emerald-400/20 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" /> Live
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs mt-1">
            <div className="inner-card p-3">
              <span className="text-zinc-500 text-[8px] uppercase font-bold">Region</span>
              <span className="text-slate-900 dark:text-white block mt-0.5 font-semibold">us-east-1</span>
            </div>
            <div className="inner-card p-3">
              <span className="text-zinc-500 text-[8px] uppercase font-bold">Latency</span>
              <span className="text-slate-900 dark:text-white block mt-0.5 font-semibold">14ms</span>
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
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Post-Launch ROI</span>
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-zinc-500 text-[9px] uppercase font-bold">Consolidation Gains</span>
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
        tag="Practices"
        title={
          <>
            Six practices. <span className="text-gradient">One outcomes engine.</span>
          </>
        }
        subtitle="Each Accorto practice is built around a measurable business problem — not a software category. Explore the depth of each below."
      >
        <div className="flex flex-wrap gap-2">
          {PRACTICES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="glass rounded-full px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors"
            >
              {p.name}
            </a>
          ))}
        </div>
      </PageHero>

      {PRACTICES.map((p, i) => (
        <PracticeSection key={p.id} p={p} flip={i % 2 === 1} />
      ))}

      <SectionDivider label="02 / ENTERPRISE ARCHITECTURE" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <ArchitectureDiagram />
      </section>

      <SectionDivider label="03 / IMPLEMENTATION ENGINE" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <StickyStory steps={stickySteps} />
      </section>

      <FinalCTA />
    </>
  );
}

function PracticeSection({ p, flip }: { p: (typeof PRACTICES)[number]; flip: boolean }) {
  return (
    <section id={p.id} className="relative py-16 md:py-24 lg:py-32 border-t border-border/40 bg-radial-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`grid lg:grid-cols-12 gap-12 items-start ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-slate-500 dark:text-slate-400">
              <p.icon className="h-3.5 w-3.5 text-brand" /> Practice
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">{p.name}</h2>
            <p className="mt-3 text-lg font-medium text-brand">{p.tagline}</p>
            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">{p.overview}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Block title="Key benefits">
                <ul className="space-y-2 text-sm">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Capabilities">
                <ul className="grid grid-cols-2 gap-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
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
                    <div key={s} className="relative glass rounded-2xl p-3 flex flex-col justify-between min-h-[80px] border border-white/10 hover:border-brand/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group">
                      <span className="text-[10px] font-mono font-bold text-brand bg-brand/10 w-5 h-5 rounded-full flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white mt-2 leading-tight">{s}</span>
                    </div>
                  ))}
                </div>
              </Block>
            </div>

            <div className="mt-6">
              <Block title="Technology stack">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="glass rounded-md px-2.5 py-1 text-xs font-mono text-slate-600 dark:text-slate-300 hover:bg-brand/10 hover:text-brand transition-colors cursor-default select-none border border-white/10">
                      <Boxes className="inline h-3 w-3 mr-1 text-brand" />
                      {t}
                    </span>
                  ))}
                </div>
              </Block>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-border/30 pt-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Need Expert Guidance?</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{"Talk directly to a partner from our "}{p.name}{" practice."}</p>
              </div>
              <Link
                to="/contact"
                className="sm:ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-brand hover:scale-105 hover:shadow-brand-lg transition-all text-center justify-center whitespace-nowrap"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative aspect-4/5 rounded-[32px] overflow-hidden glass-strong shadow-lg">
              <img
                src={p.image}
                alt={`${p.name} consulting and enterprise solutions`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover brightness-[0.95] contrast-[1.05] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#031224] via-[#031224]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-3">
                {p.results.map(([v, l]) => {
                  const num = parseInt(v);
                  const suffix = v.replace(/[\d.]/g, "");
                  return (
                    <div key={l} className="inner-card p-2.5 sm:p-3 text-slate-900 dark:text-white animate-fade-in">
                      <div className="font-display text-lg sm:text-xl font-semibold">
                        {isNaN(num) ? (
                          v
                        ) : (
                          <>
                            <Counter to={num} suffix={suffix} />
                          </>
                        )}
                      </div>
                      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 leading-tight">{l}</div>
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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-5 hover:bg-white/3 hover:border-white/15 transition-all duration-300 border border-white/10 shadow-lg">
      <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">{title}</div>
      {children}
    </div>
  );
}
