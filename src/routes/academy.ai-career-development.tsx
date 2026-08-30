import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { FinalCTA } from "@/components/home";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Code2,
  Compass,
  Briefcase,
  Users,
  ShieldCheck,
  Sparkles,
  Laptop,
} from "lucide-react";

export const Route = createFileRoute("/academy/ai-career-development")({
  head: () => ({
    meta: [
      {
        title:
          "AI Career Development & Certification Pathways | Accorto Academy",
      },
      {
        name: "description",
        content:
          "Build enterprise AI skills across consulting, engineering, architecture, and leadership with practical career-focused training pathways.",
      },
      {
        property: "og:title",
        content: "AI Career Development — Accorto Academy",
      },
      {
        property: "og:description",
        content:
          "Build enterprise AI skills across consulting, engineering, architecture, and leadership.",
      },
      {
        property: "og:url",
        content: "https://accorto.tech/academy/ai-career-development",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://accorto.tech/academy/ai-career-development",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Enterprise AI Career Development & Certification Pathways",
          description:
            "Professional training tracks for consultants, engineers, and enterprise architects mastering generative AI, agentic systems, and MLOps.",
          provider: {
            "@type": "Organization",
            name: "Accorto Academy",
            url: "https://accorto.tech/academy",
          },
          url: "https://accorto.tech/academy/ai-career-development",
        }),
      },
    ],
  }),
  component: AcademyAiCareerDevelopment,
});

const CERTIFICATION_PATHWAYS = [
  {
    title: "Claude Certified Associate — Foundations",
    audience: "Consultants, Business Analysts & Project Leads",
    badge: "Associate Track",
    desc: "Mastering practical enterprise prompting, project context management, and daily productivity workflows.",
    points: [
      "Structured prompt engineering & XML tag formatting",
      "Claude Projects & artifact collaboration",
      "Enterprise workflow automation & document synthesis",
      "Evaluating prompt quality & edge-case testing",
    ],
  },
  {
    title: "Claude Certified Developer — Foundations",
    audience: "Software Engineers & Backend Developers",
    badge: "Developer Track",
    desc: "Building production applications with the Claude API, tool use definitions, and MCP protocol servers.",
    points: [
      "Claude API integration & streaming responses",
      "Function calling & tool use schemas",
      "Model Context Protocol (MCP) server creation",
      "Embedding search & hybrid RAG pipelines",
    ],
  },
  {
    title: "Claude Certified Architect — Foundations",
    audience: "Solution Architects & Technical Leads",
    badge: "Architect Track",
    desc: "Designing multi-agent topologies, enterprise security boundaries, context budget optimization, and governance.",
    points: [
      "Agentic system design & state machine orchestration",
      "Context window management & dynamic token routing",
      "Private VPC deployment & zero data retention policies",
      "Enterprise evaluation benchmarks & latency optimization",
    ],
  },
];

const CAREER_TRACKS = [
  {
    icon: Briefcase,
    title: "AI Fluency for Consultants",
    desc: "Non-technical AI training tailored for client-facing advisors, business analysts, and change management consultants.",
    points: ["AI strategy articulation", "ROI business cases", "Client workshop facilitation"],
  },
  {
    icon: Code2,
    title: "AI Engineer Track",
    desc: "Hands-on engineering curriculum covering API integrations, tool orchestration, vector stores, and custom agents.",
    points: ["Python for AI & LangChain", "RAG architectures", "FastAPI agent backends"],
  },
  {
    icon: Compass,
    title: "AI Solution Architect Track",
    desc: "Comprehensive system design covering multi-agent orchestration, private cloud hosting, and enterprise governance.",
    points: ["Agent topologies", "Enterprise security baselines", "Cost governance & FinOps"],
  },
  {
    icon: Users,
    title: "Leadership AI Literacy",
    desc: "Executive briefings designed for CIOs, CTOs, and digital leaders driving enterprise-wide AI adoption programs.",
    points: ["Responsible AI guardrails", "Talent bench strategy", "Vendor evaluation models"],
  },
];

function AcademyAiCareerDevelopment() {
  return (
    <>
      {/* Hero */}
      <PageHero
        tag="Accorto Academy · Enterprise Upskilling"
        title={
          <>
            Build the skills the <span className="text-gradient">AI-first enterprise is hiring for</span>.
          </>
        }
        subtitle="From foundational AI fluency to certified Claude expertise — training tracks for consultants, architects, and developers who want to lead enterprise AI programs, not just use the tools."
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
            Talk to a Career Advisor
          </SpecularButton>
          <a
            href="#pathways"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-bold text-slate-800 dark:text-white hover:border-brand transition-colors"
          >
            Explore Certification Tracks <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <Reveal>
          <div className="rounded-4xl bg-slate-50 dark:bg-card border border-slate-200/80 dark:border-white/5 p-8 sm:p-12 md:p-16 shadow-xs">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
                The Talent Imperative
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Enterprises need builders, not just users.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Enterprises are no longer asking "should we use AI" — they are asking who on their team can architect it, govern it, and ship it safely. Accorto Academy prepares consultants, developers, and solution architects with hands-on, enterprise-grade capabilities built on verified production architectures.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Certification Pathways */}
      <section id="pathways" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <SectionHeading
          tag="Certification Pathways"
          title={
            <>
              Structured tracks aligned to <span className="text-gradient">modern AI roles</span>
            </>
          }
          subtitle="Curriculum designed around prompt engineering, API development, and enterprise agentic architectures."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {CERTIFICATION_PATHWAYS.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.08}>
              <PremiumCard className="p-6 sm:p-8 h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between">
                    <PremiumBadge className="text-[10px] font-mono font-bold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
                      {p.badge}
                    </PremiumBadge>
                    <Award className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Target: {p.audience}</div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {p.desc}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {p.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Format</span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">Instructor-Led &amp; Labs</span>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Academy Career Tracks (4 Cards) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20 border-t border-slate-200/60 dark:border-white/5">
        <SectionHeading
          tag="Career Specializations"
          title={
            <>
              Tailored learning paths for <span className="text-gradient">every team role</span>
            </>
          }
          subtitle="Whether you advise clients, write production code, or design multi-cloud system architectures."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_TRACKS.map((t, idx) => (
            <Reveal key={t.title} delay={idx * 0.05}>
              <PremiumCard className="p-6 h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="p-3 rounded-2xl bg-brand/10 text-brand w-fit">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                  {t.points.map((pt) => (
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

      {/* Academy CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-slate-900 via-[#031224] to-slate-950 border border-slate-800 p-8 sm:p-12 md:p-16 text-white shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand block mb-3">
                Enterprise Talent Bench
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Ready to build your AI talent bench?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                Whether you're upskilling your own enterprise workforce or need certified AI consultants for an upcoming transformation program — our Academy advisors are here to help.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-[#031224] font-bold text-sm hover:opacity-95 transition-opacity"
                >
                  Book a Career Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/academy"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  View All Academy Programs
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
