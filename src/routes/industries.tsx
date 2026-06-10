import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import {
  GraduationCap,
  Stethoscope,
  Factory,
  ShoppingBag,
  Landmark,
  Truck,
  Building2,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Sectors Served — Accorto Technologies" },
      {
        name: "description",
        content:
          "Explore our specialized consulting expertise in Education, Healthcare, Manufacturing, Retail, Finance, and Logistics. Tailored enterprise IT solutions.",
      },
      { property: "og:title", content: "Industries we serve" },
      {
        property: "og:description",
        content: "Specialized solutions for regulated and complex industries.",
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
  component: Industries,
});

const INDUSTRIES = [
  {
    id: "edu",
    icon: GraduationCap,
    name: "Education",
    challenges: [
      "Fragmented student systems",
      "Hybrid learning at scale",
      "Outdated campus operations",
    ],
    solutions: ["Modern SIS on cloud", "Smart campus platforms", "AI-driven student success"],
    benefits: ["+18% retention", "Lower IT TCO", "Faster admissions"],
    highlight: "Top-100 university unified 9 systems into one student platform in 7 months.",
  },
  {
    id: "hc",
    icon: Stethoscope,
    name: "Healthcare",
    challenges: ["Siloed clinical data", "Claims leakage", "Compliance burden"],
    solutions: ["Interoperable HIS", "AI claims integrity", "HIPAA-grade cloud"],
    benefits: ["-32% claim denials", "Faster discharge", "Audit-ready"],
    highlight: "Multi-hospital network deployed AI claims engine across 12 facilities.",
  },
  {
    id: "mfg",
    icon: Factory,
    name: "Manufacturing",
    challenges: ["Unplanned downtime", "Supply chain shocks", "Quality variability"],
    solutions: ["Predictive maintenance", "Control tower", "Digital twin"],
    benefits: ["-41% downtime", "Inventory -22%", "Yield +9pt"],
    highlight: "Global OEM cut maintenance cost by 41% with predictive AI across 22 plants.",
  },
  {
    id: "ret",
    icon: ShoppingBag,
    name: "Retail",
    challenges: ["Channel fragmentation", "Stockouts", "Personalization at scale"],
    solutions: ["Unified commerce", "Demand forecasting", "In-store AI"],
    benefits: ["+24% conversion", "Faster fulfillment", "Higher AOV"],
    highlight: "Retail conglomerate unified 9 ERPs and 4 commerce stacks in 11 months.",
  },
  {
    id: "fin",
    icon: Landmark,
    name: "Finance",
    challenges: ["Legacy core", "Fraud at scale", "Regulatory burden"],
    solutions: ["Core modernization", "Real-time fraud AI", "RegTech automation"],
    benefits: ["92% fraud caught", "Lower cost-to-serve", "Faster product launches"],
    highlight: "Tier-1 bank deployed real-time fraud AI scoring 1.2M txns/day.",
  },
  {
    id: "gov",
    icon: Building2,
    name: "Government",
    challenges: ["Citizen experience gaps", "Data silos", "Long procurement cycles"],
    solutions: ["Citizen portals", "Open data platforms", "Secure cloud"],
    benefits: ["Higher satisfaction", "Operational savings", "Transparency"],
    highlight: "State agency launched citizen portal with 2.4M monthly users.",
  },
  {
    id: "log",
    icon: Truck,
    name: "Logistics",
    challenges: ["Visibility gaps", "Route inefficiency", "Warehouse labor"],
    solutions: ["Control towers", "Route optimization", "Warehouse robotics"],
    benefits: ["-19% fuel", "OTIF +12pt", "Higher throughput"],
    highlight: "3PL operator improved OTIF by 12 points using control tower AI.",
  },
];

function Industries() {
  const [active, setActive] = useState(INDUSTRIES[0].id);
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
        <div className="flex flex-wrap gap-2 mb-10">
          {INDUSTRIES.map((it) => {
            const A = it.icon;
            const isActive = active === it.id;
            return (
              <button
                key={it.id}
                onClick={() => setActive(it.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-lg shadow-brand/30"
                    : "glass hover:bg-white/10"
                }`}
              >
                <A className="h-4 w-4" /> {it.name}
              </button>
            );
          })}
        </div>

        {INDUSTRIES.filter((i) => i.id === active).map((it) => (
          <Reveal key={it.id}>
            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <Card
                  title="Challenges"
                  icon={AlertCircle}
                  items={it.challenges}
                  tone="text-rose-400"
                />
              </div>
              <div className="lg:col-span-4">
                <Card
                  title="Our solutions"
                  icon={Sparkles}
                  items={it.solutions}
                  tone="text-brand"
                />
              </div>
              <div className="lg:col-span-4">
                <Card title="Benefits" icon={Target} items={it.benefits} tone="text-emerald-400" />
              </div>
              <div className="lg:col-span-12">
                <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-10">
                  <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                    Case highlight
                  </h3>
                  <p className="mt-3 font-display text-2xl md:text-3xl font-semibold max-w-3xl leading-tight">
                    {it.highlight}
                  </p>
                  <Link
                    to="/case-studies"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white"
                  >
                    Read related case studies <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
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
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  tone: string;
}) {
  return (
    <div className="h-full rounded-3xl glass p-6">
      <div className="flex items-center gap-2">
        <Icon className={`h-5 w-5 ${tone}`} />
        <h3 className="font-display font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((b) => (
          <li key={b} className="flex gap-2">
            <span
              className={`mt-2 h-1 w-1 rounded-full ${tone.replace("text-", "bg-")} shrink-0`}
            />{" "}
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
