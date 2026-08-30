import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { Terminal, Award } from "lucide-react";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { BorderGlow } from "@/components/animations/BorderGlow";

export const Route = createFileRoute("/academy/prompt-engineering")({
  head: () => ({
    meta: [
      { title: "Prompt Engineering Course & Structured Outputs — Accorto Academy" },
      {
        name: "description",
        content:
          "Master enterprise prompt engineering. Learn few-shot prompting, chain-of-thought, tool schema generation, and guardrails.",
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
            Prompt Engineering & <span className="text-gradient">Structured Outputs</span>
          </>
        }
        subtitle="Move beyond raw text generation. Master advanced reasoning chains, JSON schema guarantees, dynamic function calls, and red-teaming."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-8 md:pb-12">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Syllabus 1: Reasoning Chains",
                  desc: "Zero-shot, Few-shot prompts, Chain-of-Thought (CoT), and ReAct prompting loops.",
                },
                {
                  title: "Syllabus 2: System Directives",
                  desc: "Negative constraints, system roles definitions, temperature controls, and output formatting.",
                },
                {
                  title: "Syllabus 3: Structured Outputs",
                  desc: "JSON schemas, tool calling payloads, schema parsing validations, and formatting parameters.",
                },
                {
                  title: "Syllabus 4: Robustness & Audits",
                  desc: "Prompt injection defenses, output evaluations, telemetry logs, and LLM benchmarking.",
                },
              ].map((item, idx) => (
                <BorderGlow key={idx} borderRadius={16} className="h-full">
                  <div className="glass rounded-2xl p-5 h-full">
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </BorderGlow>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-border/50 pt-6">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Duration: 4 Weeks · Level: Beginner to Intermediate
              </div>
              <SpecularButton
                to="/contact"
                size="sm"
                variant="brand"
                className="shadow-brand hover:shadow-brand-lg"
              >
                Enroll Now <Award className="h-4 w-4" />
              </SpecularButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
