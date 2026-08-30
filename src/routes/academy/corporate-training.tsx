import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import { Users, Award, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { BorderGlow } from "@/components/animations/BorderGlow";

export const Route = createFileRoute("/academy/corporate-training")({
  head: () => ({
    meta: [
      { title: "Corporate AI Training & Enterprise Workshops — Accorto Academy" },
      {
        name: "description",
        content:
          "Empower your engineering teams. Custom corporate AI workshops on Copilot adoption, RAG architectures, and AI governance standards.",
      },
      { property: "og:title", content: "Corporate AI Training — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/corporate-training" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/corporate-training" }],
  }),
  component: CorporateTraining,
});

const SERVICES = [
  {
    name: "Generative AI Integration",
    desc: "Build domain-specific LLM adapters, fine-tuning setups, and secure enterprise ingestion structures.",
  },
  {
    name: "Copilot & Tool Adoption",
    desc: "Optimize developer workflows with customized pair-programming agents and productivity metrics.",
  },
  {
    name: "AI Agents Workflows",
    desc: "Train cohorts to architect multi-agent autonomous graphs that handle complex back-office tasks.",
  },
  {
    name: "Process Automation",
    desc: "Replace fragile script systems with robust AI-driven semantic parsers and classification triggers.",
  },
  {
    name: "AI Governance & Audits",
    desc: "Establish model safety guidelines, cost management benchmarks, privacy protocols, and compliance frameworks.",
  },
  {
    name: "RAG Architectures",
    desc: "Implement secure retriever-retrieval systems matching legacy databases with modern context engines.",
  },
  {
    name: "Team Upskilling",
    desc: "Comprehensive engineering curriculum cycles from basic syntax structures to advanced production MLOps.",
  },
  {
    name: "Enterprise Workshops",
    desc: "On-site intensive training modules covering vector databases, MCP protocols, and security guardrails.",
  },
];

function CorporateTraining() {
  return (
    <>
      <PageHero
        tag="Corporate Training"
        title={
          <>
            AI Enablement for <span className="text-gradient">Modern Enterprises</span>
          </>
        }
        subtitle="Custom, instructor-led engineering upskilling programs and strategic workshops designed for mid-market and Fortune 500 tech cohorts."
      />

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <Reveal key={idx}>
              <BorderGlow borderRadius={24} className="h-full">
                <div className="glass rounded-3xl p-6 h-full flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all border border-border/50">
                  <div>
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 border border-border">
                      <ShieldCheck className="h-4 w-4 text-brand" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white mt-4 text-base leading-snug">
                      {s.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>

        {/* CTA Banner */}
        <Reveal>
          <BorderGlow borderRadius={24} className="mt-16 max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl glass-strong border border-white/10 shadow-2xl p-10 md:p-12 text-center w-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-[0.03] dark:opacity-[0.06]" />
              <div className="relative space-y-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Book a Corporate AI consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
                  Discuss timeline options, custom modules, on-site schedules, and licensing options
                  with our principal consultants.
                </p>
                <div className="pt-4 flex justify-center">
                  <SpecularButton
                    to="/contact"
                    size="md"
                    variant="brand"
                    className="shadow-brand hover:shadow-brand-lg"
                  >
                    Book Free Consultation <ArrowRight className="h-4 w-4" />
                  </SpecularButton>
                </div>
              </div>
            </div>
          </BorderGlow>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}
