import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import { Layers, Award } from "lucide-react";

export const Route = createFileRoute("/academy/mcp")({
  head: () => ({
    meta: [
      { title: "MCP Model Context Protocol Course — Accorto Academy" },
      {
        name: "description",
        content: "Master Anthropic Model Context Protocol (MCP). Learn how to build custom MCP servers, define tool schemas, and link databases.",
      },
      { property: "og:title", content: "MCP Course — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/mcp" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/mcp" }],
  }),
  component: MCPCourse,
});

function MCPCourse() {
  return (
    <>
      <PageHero
        tag="Academy Course"
        title={
          <>
            Model Context <span className="text-gradient">Protocol (MCP)</span>
          </>
        }
        subtitle="Learn to connect large language models to databases, APIs, and file systems securely using Anthropic's Model Context Protocol."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Syllabus 1: MCP Core", desc: "Understanding the client-server-model loop, MCP endpoints, secure transport layers, and protocol standards." },
                { title: "Syllabus 2: Server Architecture", desc: "Build MCP servers in TypeScript and Python, expose tools, and bind local context resources." },
                { title: "Syllabus 3: Context & Databases", desc: "Read database schemas, file system links, and query pipelines, and pipe them securely into models." },
                { title: "Syllabus 4: Client Implementations", desc: "Configuring Cursor, Claude Desktop, and custom react clients to query custom local MCP servers." },
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-5">
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-border/50 pt-6">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Duration: 4 Weeks · Level: Advanced
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
