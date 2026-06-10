import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { Counter } from "@/components/counter";
import { FinalCTA } from "@/components/home-sections";
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

      <FinalCTA />
    </>
  );
}

function PracticeSection({ p, flip }: { p: (typeof PRACTICES)[number]; flip: boolean }) {
  return (
    <section id={p.id} className="relative py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`grid lg:grid-cols-12 gap-12 items-start ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs">
              <p.icon className="h-3.5 w-3.5 text-brand" /> Practice
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">{p.name}</h2>
            <p className="mt-3 text-lg text-brand">{p.tagline}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">{p.overview}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Block title="Key benefits">
                <ul className="space-y-2 text-sm">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Capabilities">
                <ul className="grid grid-cols-2 gap-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
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
                    <div key={s} className="relative glass-strong rounded-xl p-3 flex flex-col justify-between min-h-[80px] border border-white/5 hover:border-brand/35 transition-colors group">
                      <span className="text-[10px] font-mono font-bold text-brand bg-brand/10 w-5 h-5 rounded-full flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-foreground mt-2 leading-tight">{s}</span>
                    </div>
                  ))}
                </div>
              </Block>
            </div>

            <div className="mt-6">
              <Block title="Technology stack">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="glass rounded-md px-2.5 py-1 text-xs font-mono hover:bg-brand/10 hover:text-brand transition-colors cursor-default select-none border border-white/5">
                      <Boxes className="inline h-3 w-3 mr-1 text-brand" />
                      {t}
                    </span>
                  ))}
                </div>
              </Block>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-border/30 pt-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground">Need Expert Guidance?</h4>
                <p className="text-xs text-muted-foreground">{"Talk directly to a partner from our "}{p.name}{" practice."}</p>
              </div>
              <Link
                to="/contact"
                className="sm:ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand/20 hover:scale-105 transition-all text-center justify-center whitespace-nowrap"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden glass-strong">
              <img
                src={p.image}
                alt={`${p.name} consulting and enterprise solutions`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-[#050816]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                {p.results.map(([v, l]) => {
                  const num = parseInt(v);
                  const suffix = v.replace(/[\d.]/g, "");
                  return (
                    <div key={l} className="glass-strong rounded-2xl p-3 text-white">
                      <div className="font-display text-xl font-semibold">
                        {isNaN(num) ? (
                          v
                        ) : (
                          <>
                            <Counter to={num} suffix={suffix} />
                          </>
                        )}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider opacity-80">{l}</div>
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
    <div className="glass rounded-2xl p-5 hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300 border border-white/5">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{title}</div>
      {children}
    </div>
  );
}
