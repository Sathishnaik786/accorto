import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { FinalCTA } from "@/components/home";
import {
  Cpu,
  Layers,
  Database,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Server,
  Workflow,
  Sparkles,
  Search,
  Compass,
  Wrench,
  TrendingUp,
  Headphones,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/services/ai-enterprise-structure")({
  head: () => ({
    meta: [
      {
        title:
          "AI for Enterprise Structure | SAP, Oracle, Salesforce & PeopleSoft | Accorto Technologies",
      },
      {
        name: "description",
        content:
          "Embed AI into SAP, Oracle, Salesforce, and PeopleSoft workflows with enterprise-grade copilots, agents, prediction, and intelligent automation.",
      },
      { property: "og:title", content: "AI for Enterprise Structure — Accorto Technologies" },
      {
        property: "og:description",
        content:
          "Embed AI into SAP, Oracle, Salesforce, and PeopleSoft workflows with enterprise-grade copilots.",
      },
      { property: "og:url", content: "https://accorto.tech/services/ai-enterprise-structure" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/services/ai-enterprise-structure" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI for Enterprise Structure",
          provider: {
            "@type": "Organization",
            name: "Accorto Technologies",
            url: "https://accorto.tech",
          },
          description:
            "Generative and predictive AI layered directly into SAP, Oracle, Salesforce, and PeopleSoft systems of record.",
          url: "https://accorto.tech/services/ai-enterprise-structure",
        }),
      },
    ],
  }),
  component: ServiceAiEnterpriseStructure,
});

const PLATFORMS = [
  {
    name: "SAP",
    tagline: "S/4HANA, BTP & Fiori AI Integration",
    badge: "Core ERP",
    color: "from-blue-500 to-sky-500",
    points: [
      "GenAI copilots embedded inside S/4HANA & Fiori interfaces",
      "Predictive maintenance & asset analytics running on SAP BTP",
      "Intelligent document processing for SuccessFactors HR workflows",
      "Automated anomaly detection in finance & procurement ledgers",
    ],
  },
  {
    name: "Oracle",
    tagline: "Fusion Cloud, EPM & Analytics AI",
    badge: "Enterprise Suite",
    color: "from-red-500 to-orange-500",
    points: [
      "AI-augmented Fusion HCM with attrition risk prediction & skills matching",
      "EPM financial forecasting copilots for variance analysis",
      "SCM demand sensing and automated inventory optimization",
      "Oracle Analytics Cloud natural-language query and synthesis layer",
    ],
  },
  {
    name: "Salesforce",
    tagline: "CRM & Autonomous Agentic Workflows",
    badge: "Customer Platform",
    color: "from-cyan-500 to-blue-500",
    points: [
      "Custom AI agents for autonomous sales outreach & service triage",
      "Predictive lead scoring & dynamic next-best-action models",
      "AI-generated case summarization & resolution suggestions",
      "Automated CRM data hygiene & enrichment pipelines",
    ],
  },
  {
    name: "PeopleSoft",
    tagline: "HCM Modernization & Compliance AI",
    badge: "Legacy Modernization",
    color: "from-indigo-500 to-purple-500",
    points: [
      "AI-assisted HCM self-service for benefits & payroll inquiries",
      "Automated compliance audit monitoring & payroll anomaly alerts",
      "Predictive workforce planning & capacity modeling",
      "Accelerated PeopleSoft-to-Cloud AI migration accelerators",
    ],
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    desc: "Map current-state workflows, permission matrices, and operational bottlenecks across each core platform.",
  },
  {
    step: "02",
    title: "Plan",
    icon: Compass,
    desc: "Identify highest-ROI AI insertion points per module without disrupting established financial and compliance controls.",
  },
  {
    step: "03",
    title: "Implement",
    icon: Wrench,
    desc: "Embed native AI copilots, agentic connectors, and private VPC LLM gateways with strict role-based data isolation.",
  },
  {
    step: "04",
    title: "Optimize",
    icon: TrendingUp,
    desc: "Tune models against user adoption telemetry, response accuracy benchmarks, and workflow completion velocity.",
  },
  {
    step: "05",
    title: "Support",
    icon: Headphones,
    desc: "Ongoing model performance evaluation, compliance audit logging, prompt regression testing, and system updates.",
  },
];

function ServiceAiEnterpriseStructure() {
  return (
    <>
      {/* Hero */}
      <PageHero
        tag="Enterprise Systems Practice"
        title={
          <>
            AI, embedded into the <span className="text-gradient">systems that run your business</span>.
          </>
        }
        subtitle="Generative and predictive AI layered directly into SAP, Oracle, Salesforce, and PeopleSoft — not bolted on as a separate tool, but built into the workflows your teams already live in."
      />

      {/* Action Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-8 mb-16 relative z-20">
        <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
          <SpecularButton
            to="/contact"
            size="lg"
            variant="brand"
            className="font-bold shadow-brand"
          >
            Book Free Consultation
          </SpecularButton>
          <a
            href="#platforms"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-bold text-slate-800 dark:text-white hover:border-brand transition-colors"
          >
            Explore Platform Capabilities <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* The Problem With Bolt-On AI */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <Reveal>
          <div className="rounded-4xl bg-slate-50 dark:bg-card border border-slate-200/80 dark:border-white/5 p-8 sm:p-12 md:p-16 shadow-xs">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500 dark:text-amber-400">
                  The Integration Bottleneck
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  The Problem With Bolt-On AI
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Standalone AI tools that live in separate browser tabs suffer from dismal adoption rates. When approvals live in <strong className="text-slate-900 dark:text-white">SAP</strong>, quarterly forecasts live in <strong className="text-slate-900 dark:text-white">Oracle</strong>, customer pipelines live in <strong className="text-slate-900 dark:text-white">Salesforce</strong>, and payroll flows through <strong className="text-slate-900 dark:text-white">PeopleSoft</strong> — forcing employees to copy-paste context destroys efficiency.
                </p>
                <p className="text-sm sm:text-base text-brand dark:text-brand-3 font-semibold">
                  Accorto builds AI into the platform, not next to it.
                </p>
              </div>
              <div className="lg:col-span-5 bg-white dark:bg-white/5 rounded-3xl p-6 border border-slate-200/60 dark:border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <ShieldAlert className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>No sensitive data leaves enterprise boundary</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <Workflow className="h-4 w-4 text-brand shrink-0" />
                  <span>Zero UI context switching for knowledge workers</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Native RBAC roles &amp; audit trails preserved</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Platform Cards */}
      <section id="platforms" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <SectionHeading
          tag="Supported Platforms"
          title={
            <>
              Native AI capabilities across <span className="text-gradient">four enterprise pillars</span>
            </>
          }
          subtitle="Pre-built adapters, workflow agents, and security guardrails tailored to your primary system of record."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {PLATFORMS.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.06}>
              <PremiumCard className="p-6 sm:p-8 h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 shadow-md">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                      {p.name}
                    </div>
                    <PremiumBadge className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {p.badge}
                    </PremiumBadge>
                  </div>
                  <div className="text-xs font-mono font-bold text-brand mt-1">{p.tagline}</div>

                  <div className="mt-6 space-y-3">
                    {p.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Supported Enterprise Version</span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">Latest &amp; LTS</span>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-slate-50/50 dark:bg-white/2 border-y border-slate-200/60 dark:border-white/5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            tag="Delivery Methodology"
            title={
              <>
                From architecture audit to <span className="text-gradient">governed production</span>
              </>
            }
            subtitle="How we deploy AI into mission-critical systems without introducing business process disruption."
            center
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {METHODOLOGY_STEPS.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.05}>
                <div className="bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 rounded-3xl p-5 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-brand">{s.step}</span>
                      <s.icon className="h-4 w-4 text-slate-400 dark:text-zinc-400" />
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Case Study Section (Safe State) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <div className="rounded-4xl border border-dashed border-slate-300 dark:border-white/10 p-8 sm:p-12 text-center bg-white dark:bg-card/40">
            <Clock className="h-8 w-8 text-brand mx-auto mb-3" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
              Case Study · In Documentation
            </span>
            <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Enterprise Structure Transformation Blueprints
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto font-medium">
              We are currently publishing verified outcome studies across our multi-platform enterprise AI programs. Explore our verified Oracle &amp; SAP ERP case studies in the meantime.
            </p>
            <div className="mt-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:underline"
              >
                View all published case studies <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
