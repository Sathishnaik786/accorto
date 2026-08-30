import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { FinalCTA } from "@/components/home";
import {
  Database,
  Layers,
  Cpu,
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  Search,
  Compass,
  Wrench,
  TrendingUp,
  Headphones,
  Clock,
  Boxes,
} from "lucide-react";

export const Route = createFileRoute("/services/ai-enterprise-data")({
  head: () => ({
    meta: [
      {
        title:
          "AI for Enterprise Data | Snowflake, Databricks & GenAI | Accorto Technologies",
      },
      {
        name: "description",
        content:
          "Build governed enterprise data platforms, predictive analytics, RAG, GenAI applications, and MLOps capabilities on Snowflake and Databricks.",
      },
      { property: "og:title", content: "AI for Enterprise Data — Accorto Technologies" },
      {
        property: "og:description",
        content:
          "Build governed enterprise data platforms, predictive analytics, RAG, GenAI applications, and MLOps on Snowflake and Databricks.",
      },
      { property: "og:url", content: "https://accorto.tech/services/ai-enterprise-data" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/services/ai-enterprise-data" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI for Enterprise Data",
          provider: {
            "@type": "Organization",
            name: "Accorto Technologies",
            url: "https://accorto.tech",
          },
          description:
            "Enterprise Lakehouse data engineering, Snowflake Cortex, Databricks Mosaic AI, RAG pipelines, and MLOps platforms.",
          url: "https://accorto.tech/services/ai-enterprise-data",
        }),
      },
    ],
  }),
  component: ServiceAiEnterpriseData,
});

const PLATFORM_CARDS = [
  {
    name: "Snowflake",
    tagline: "Data Cloud, Cortex AI & Real-Time Streams",
    badge: "Cloud Data Platform",
    desc: "Architecting zero-maintenance data warehouses and intelligent applications natively within the Snowflake Data Cloud.",
    points: [
      "Snowflake Cortex AI & native LLM SQL functions",
      "Secure data sharing & marketplace data integration",
      "Cross-business-unit unified analytics & semantic models",
      "Warehouse cost governance & compute quota automation",
      "Streaming ingestion via Snowpipe & Dynamic Tables",
    ],
  },
  {
    name: "Databricks",
    tagline: "Lakehouse, Unity Catalog & Mosaic AI",
    badge: "Unified Analytics & ML",
    desc: "Unifying data engineering, BI, and advanced machine learning into an open Delta Lake Lakehouse architecture.",
    points: [
      "Lakehouse data engineering with Delta Lake & Apache Spark",
      "Unity Catalog fine-grained data & AI asset governance",
      "Mosaic AI vector search & custom LLM fine-tuning",
      "MLflow production pipelines, feature stores & model registries",
      "CI/CD deployment automation for machine learning artifacts",
    ],
  },
];

const DELIVERABLES = [
  {
    icon: Database,
    title: "Data Foundation",
    desc: "Schema modernization, automated ingestion pipelines, master data governance, and automated quality validation.",
    points: ["Lakehouse architecture", "dbt data modeling", "Automated data quality checks"],
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Time-series forecasting, revenue prediction, customer churn modeling, and operational demand forecasting.",
    points: ["Demand sensing models", "Risk scoring algorithms", "Anomaly detection engines"],
  },
  {
    icon: Sparkles,
    title: "GenAI on Your Data",
    desc: "Private enterprise RAG pipelines, internal knowledge copilots, and conversational BI analytics layers.",
    points: ["Vector embeddings & search", "Role-filtered context retrieval", "Zero data leakage guardrails"],
  },
  {
    icon: Cpu,
    title: "MLOps & Scale",
    desc: "Continuous model evaluation, drift monitoring, automated retraining pipelines, and cost governance.",
    points: ["Automated regression testing", "Model registry CI/CD", "GPU compute optimization"],
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    desc: "Conduct data maturity assessment, schema inventory, security compliance review, and source system mapping.",
  },
  {
    step: "02",
    title: "Plan",
    icon: Compass,
    desc: "Design target Lakehouse architecture on Snowflake or Databricks with robust Unity/Cortex governance policies.",
  },
  {
    step: "03",
    title: "Implement",
    icon: Wrench,
    desc: "Construct ingestion pipelines, build dbt transformation models, deploy vector indexes, and configure agentic endpoints.",
  },
  {
    step: "04",
    title: "Optimize",
    icon: TrendingUp,
    desc: "Tune SQL warehouse compute sizing, cache vector queries, and optimize model latency against SLA targets.",
  },
  {
    step: "05",
    title: "Support",
    icon: Headphones,
    desc: "Managed data operations, 24/7 pipeline health telemetry, model drift monitoring, and continuous governance audits.",
  },
];

function ServiceAiEnterpriseData() {
  return (
    <>
      {/* Hero */}
      <PageHero
        tag="Data & Lakehouse Practice"
        title={
          <>
            Your data platform is the foundation.{" "}
            <span className="text-gradient">We make it intelligent.</span>
          </>
        }
        subtitle="AI/ML pipelines, governance, and generative AI applications built natively on Snowflake and Databricks — turning raw enterprise data into forecasts, copilots, and decisions."
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
            href="#capabilities"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-bold text-slate-800 dark:text-white hover:border-brand transition-colors"
          >
            Explore Data &amp; AI Capabilities <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Why Data Comes First */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <Reveal>
          <div className="rounded-4xl bg-slate-50 dark:bg-card border border-slate-200/80 dark:border-white/5 p-8 sm:p-12 md:p-16 shadow-xs">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
                Architectural Principle
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                The AI advantage starts with the data layer.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Every successful AI initiative depends on clean, governed, and accessible data. Without hardened pipeline automation, metadata governance, and quality validation, machine learning models degrade and generative AI copilots hallucinate. Accorto engineers the foundational data pipelines before scaling AI applications across your enterprise.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Snowflake & Databricks Platform Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <SectionHeading
          tag="Core Platforms"
          title={
            <>
              Engineered natively on <span className="text-gradient">Snowflake &amp; Databricks</span>
            </>
          }
          subtitle="Leveraging native compute engines, vector stores, and governance frameworks to avoid brittle custom wrappers."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {PLATFORM_CARDS.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.08}>
              <PremiumCard className="p-6 sm:p-8 h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                      {p.name}
                    </h3>
                    <PremiumBadge className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {p.badge}
                    </PremiumBadge>
                  </div>
                  <div className="text-xs font-mono font-bold text-brand mt-1">{p.tagline}</div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {p.desc}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {p.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Architecture Paradigm</span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">Native Cloud Lakehouse</span>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What We Deliver (4 Cards) */}
      <section id="capabilities" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <SectionHeading
          tag="What We Deliver"
          title={
            <>
              Four pillars of <span className="text-gradient">enterprise data intelligence</span>
            </>
          }
          subtitle="From baseline lakehouse ingestion to conversational enterprise RAG and MLOps observability."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERABLES.map((d, idx) => (
            <Reveal key={d.title} delay={idx * 0.05}>
              <PremiumCard className="p-6 h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="p-3 rounded-2xl bg-brand/10 text-brand w-fit">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {d.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                  {d.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      <span className="h-1 w-1 rounded-full bg-brand shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
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
            tag="Delivery Framework"
            title={
              <>
                Structured engineering for <span className="text-gradient">mission-critical data</span>
              </>
            }
            subtitle="How we migrate, model, govern, and operationalize enterprise data platforms."
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

      {/* Case Study Section (Safe State) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <div className="rounded-4xl border border-dashed border-slate-300 dark:border-white/10 p-8 sm:p-12 text-center bg-white dark:bg-card/40">
            <Clock className="h-8 w-8 text-brand mx-auto mb-3" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
              Case Study · In Documentation
            </span>
            <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Enterprise Data &amp; Lakehouse Blueprints
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto font-medium">
              We are currently publishing verified performance benchmarks and architecture case studies for our Snowflake and Databricks deployments.
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
