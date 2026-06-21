import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import { Terminal, Award } from "lucide-react";

export const Route = createFileRoute("/academy/prompt-engineering")({
  head: () => ({
    meta: [
      { title: "Prompt Engineering Course & Structured Outputs — Accorto Academy" },
      {
        name: "description",
        content: "Master advanced prompt strategies. Learn Chain-of-Thought, few-shot prompts, and system configurations with enterprise instructors.",
      },
      { property: "og:title", content: "Prompt Engineering Course — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/prompt-engineering" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/prompt-engineering" }],
  }),
  component: PromptEngineeringCourse,
});

function PromptEngineeringCourse() {
  return (
    <>
      <PageHero
        tag="Academy Course"
        title={
          <>
            Advanced <span className="text-gradient">Prompt Engineering</span>
          </>
        }
        subtitle="Learn techniques to direct LLM outputs reliably. Master structured JSON layouts, prompt logs, and guardrails templates."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Syllabus 1: Foundations", desc: "System vs User messages, temperature controls, context length strategies, and safety constraints." },
                { title: "Syllabus 2: Reasoning Prompts", desc: "Chain-of-Thought (CoT), Self-Consistency protocols, ReAct patterns, and self-correction." },
                { title: "Syllabus 3: Structured Outputs", desc: "JSON schemas, tool calling payloads, schema parsing validations, and formatting parameters." },
                { title: "Syllabus 4: Robustness & Audits", desc: "Prompt injection defenses, output evaluations, telemetry logs, and LLM benchmarking." },
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-5">
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-border/50 pt-6">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Duration: 4 Weeks · Level: Beginner to Intermediate
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                Enroll Now <Award className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}
