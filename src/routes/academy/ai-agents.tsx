import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { Cpu, Award } from "lucide-react";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { BorderGlow } from "@/components/animations/BorderGlow";

export const Route = createFileRoute("/academy/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Agents & Autonomous Workflows Course — Accorto Academy" },
      {
        name: "description",
        content:
          "Build multi-agent graphs. Learn tool parsing, task execution, state management, and memory trees with LangGraph and CrewAI.",
      },
      { property: "og:title", content: "AI Agents Course — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/ai-agents" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/ai-agents" }],
  }),
  component: AIAgentsCourse,
});

function AIAgentsCourse() {
  return (
    <>
      <PageHero
        tag="Academy Course"
        title={
          <>
            Autonomous <span className="text-gradient">AI Agents</span>
          </>
        }
        subtitle="Architect autonomous agent loops. Master LangGraph nodes, CrewAI agents, AutoGen conversations, tool call integrations, and memory persistence."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-8 md:pb-12">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Syllabus 1: Agent Basics",
                  desc: "Single-agent loops, reasoning chains, output parsing, and dynamic tool schemas.",
                },
                {
                  title: "Syllabus 2: State & Memory",
                  desc: "Short-term context memory, persistent storage systems, checkpoint managers, and backtracking loops.",
                },
                {
                  title: "Syllabus 3: Multi-Agent Systems",
                  desc: "Hierarchical agent networks, peer-to-peer conversations, shared state databases, and agent communication protocols.",
                },
                {
                  title: "Syllabus 4: Production Agents",
                  desc: "Telemetry logs, trace visualizers (LangSmith), human-in-the-loop triggers, and cost control limits.",
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
                Duration: 8 Weeks · Level: Advanced
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
