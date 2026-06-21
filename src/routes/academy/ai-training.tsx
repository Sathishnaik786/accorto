import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import {
  Calendar,
  Layers,
  Sparkles,
  BookOpen,
  Award,
  ChevronRight,
  Database,
  ArrowRight,
  Code2,
} from "lucide-react";

export const Route = createFileRoute("/academy/ai-training")({
  head: () => ({
    meta: [
      { title: "AI Engineering Course & Hands-on Training — Accorto Academy" },
      {
        name: "description",
        content:
          "Master AI Engineering with our 16-week comprehensive program. Study RAG, LLM agent graphs, MCP servers, and fine-tuning with enterprise consultants.",
      },
      { property: "og:title", content: "AI Engineering Course — Accorto Academy" },
      {
        property: "og:description",
        content: "16 weeks curriculum from Python basics to Deep Learning, RAG pipelines, and Agent frameworks.",
      },
      { property: "og:url", content: "https://accorto.tech/academy/ai-training" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/ai-training" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Enterprise AI Engineering & Software Development Program",
          description: "16-week comprehensive path from fundamentals to production-grade AI agents.",
          provider: {
            "@type": "Organization",
            name: "Accorto Technologies Academy",
            sameAs: "https://accorto.tech",
          },
        }),
      },
    ],
  }),
  component: AIEngineeringCourse,
});

const MODULES = [
  {
    num: "MODULE 1",
    name: "AI Foundations",
    topics: ["Introduction to AI", "Machine Learning concepts", "Deep Learning basics", "Generative AI paradigm"],
    tools: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    num: "MODULE 2",
    name: "Python For AI",
    topics: ["Variables & logic gates", "Functions & modules", "Object-Oriented Programming (OOP)", "Data libraries (NumPy, Pandas)"],
    tools: ["VS Code", "Jupyter Notebooks"],
  },
  {
    num: "MODULE 3",
    name: "Prompt Engineering",
    topics: ["Zero-shot & Few-shot systems", "Chain-of-Thought (CoT) prompting", "Self-consistency & directional cues", "Structured JSON outputs & schemas"],
    tools: ["ChatGPT", "Claude API"],
  },
  {
    num: "MODULE 4",
    name: "Machine Learning",
    topics: ["Linear & Logistic Regression", "Support Vector Machines & Random Forests", "K-Means & DBSCAN Clustering"],
    tools: ["Scikit-learn", "SciPy"],
  },
  {
    num: "MODULE 5",
    name: "Deep Learning",
    topics: ["Multi-Layer Perceptrons (MLPs)", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Transformer architectures & self-attention"],
    tools: ["TensorFlow", "PyTorch"],
  },
  {
    num: "MODULE 6",
    name: "Generative AI",
    topics: ["Embedding generations", "Open-source LLM setups", "Supervised Fine-Tuning (SFT) workflows", "Vector representations & search metrics"],
    tools: ["Hugging Face", "Ollama"],
  },
  {
    num: "MODULE 7",
    name: "RAG Systems",
    topics: ["Vector search databases", "Document chunking & loading protocols", "Semantic cache strategies", "Hybrid search & re-ranking modules"],
    tools: ["LangChain", "LlamaIndex", "Pinecone", "ChromaDB"],
  },
  {
    num: "MODULE 8",
    name: "AI Agents",
    topics: ["Agentic workflow loops", "Tool calling & parsing loops", "Multi-agent coordination graphs", "Memory states & persistence"],
    tools: ["LangGraph", "CrewAI", "AutoGen"],
  },
  {
    num: "MODULE 9",
    name: "MCP Protocol",
    topics: ["Model Context Protocol architecture", "MCP servers implementations", "Context linking & dynamic tool binding", "Resource schemas & definitions"],
    tools: ["MCP Servers", "Cursor", "Claude Desktop"],
  },
  {
    num: "MODULE 10",
    name: "Deployment",
    topics: ["Containerization & image builds", "REST APIs endpoints definition", "Cloud infrastructure setup", "CI/CD automated pipelines"],
    tools: ["Docker", "FastAPI", "AWS", "Azure"],
  },
  {
    num: "MODULE 11",
    name: "Production AI",
    topics: ["Observability & telemetry logs", "Output guardrails & filters", "System evaluation benchmarks (RAGAS)", "Cost tracking & latency reductions"],
    tools: ["LangSmith", "Helicone"],
  },
];

const PROJECTS = [
  {
    name: "AI Resume Builder",
    desc: "A tool analyzing resume PDFs, aligning keywords with job descriptions, and outputting JSON resumes.",
    techs: ["Gemini", "FastAPI", "React"],
  },
  {
    name: "AI Chatbot with RAG",
    desc: "Knowledgebase chatbot supporting conversational search across multi-format documents (PDF, Doc, web).",
    techs: ["LangChain", "Pinecone", "Claude"],
  },
  {
    name: "Multi-Agent Assistant",
    desc: "A collaborative crew where agents research, code, draft, and critique blog summaries automatically.",
    techs: ["CrewAI", "LangGraph", "Python"],
  },
  {
    name: "Voice AI Assistant",
    desc: "Real-time speech translation agent supporting low-latency calls, transcription, and speech synthesis.",
    techs: ["PyTorch", "FastAPI", "AWS"],
  },
  {
    name: "Document Intelligence Platform",
    desc: "Enterprise OCR and intelligence dashboard extracting table and entity data from bank checks.",
    techs: ["Docker", "PostgreSQL", "OpenAI"],
  },
];

const CERTS = [
  { level: "Beginner", desc: "Python syntax, programming loops, basic ML algorithms, and prompt techniques." },
  { level: "Associate", desc: "ML pipelines, deep learning network models (CNN/Transformers), and database queries." },
  { level: "Professional", desc: "Advanced RAG, multi-agent frameworks, tool integrations, and custom prompt templates." },
  { level: "Expert", desc: "Production MLOps pipelines, observabilities logs, fine-tuning setups, and cost evaluation plans." },
];

const TECHS = [
  { name: "OpenAI", glow: "hover:text-[#10A37F]" },
  { name: "Claude", glow: "hover:text-[#D97706]" },
  { name: "Gemini", glow: "hover:text-[#4285F4]" },
  { name: "Python", glow: "hover:text-[#FFE052]" },
  { name: "FastAPI", glow: "hover:text-[#009485]" },
  { name: "React", glow: "hover:text-[#61DAFB]" },
  { name: "LangChain", glow: "hover:text-[#F39C12]" },
  { name: "CrewAI", glow: "hover:text-[#7C3AED]" },
  { name: "Docker", glow: "hover:text-[#2496ED]" },
  { name: "AWS", glow: "hover:text-[#FF9900]" },
  { name: "Azure", glow: "hover:text-[#0078D4]" },
  { name: "PostgreSQL", glow: "hover:text-[#336791]" },
  { name: "Redis", glow: "hover:text-[#DC382D]" },
  { name: "Pinecone", glow: "hover:text-[#70FF4A]" },
  { name: "ChromaDB", glow: "hover:text-[#1F618D]" },
  { name: "GitHub", glow: "hover:text-[#181717]" },
];

function AIEngineeringCourse() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <>
      {/* Page Hero */}
      <PageHero
        tag="Academy Course"
        title={
          <>
            Enterprise <span className="text-gradient">AI Engineering</span> Program
          </>
        }
        subtitle="16-week comprehensive path from fundamentals to production-grade AI agents. Built for developers ready to build real systems."
      />

      {/* Quick Metrics */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "Duration", val: "16 Weeks" },
            { label: "Level", val: "Beginner → Advanced" },
            { label: "Commitment", val: "10-12 hrs/week" },
            { label: "Methodology", val: "Cohort-based" },
          ].map((m, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{m.label}</div>
              <div className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                {m.val}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Module Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 border-t border-border/10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand block mb-4">
              Curriculum Roadmap
            </span>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 no-scrollbar">
              {MODULES.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold text-xs whitespace-nowrap flex items-center justify-between outline-none ${
                    activeModule === idx
                      ? "bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">
                      {mod.num}
                    </span>
                    <span>{mod.name}</span>
                  </div>
                  {activeModule === idx && (
                    <span className="hidden lg:block h-1.5 w-1.5 rounded-full bg-brand" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Module Panel Detail */}
          <div className="lg:col-span-8">
            {MODULES.filter((_, idx) => idx === activeModule).map((mod) => (
              <Reveal key={mod.num}>
                <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">
                      {mod.num}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-4">
                    {mod.name}
                  </h3>

                  {/* Topics List */}
                  <div className="mt-6">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      Key Topics Covered
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {mod.topics.map((top, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                          <span>{top}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools / Libraries */}
                  {mod.tools && (
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        Tools & Libraries Vetted
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {mod.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone Projects Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 border-t border-border/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 text-xs font-semibold text-brand">
            Practical Portfolios
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Production Capstone Projects
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Learn by building enterprise-grade tools. Vetted code setups deployed in sandboxes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all border border-border hover:border-brand/35"
            >
              <div>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 border border-border">
                  <Code2 className="h-4 w-4 text-brand" />
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white mt-4 text-lg">
                  {proj.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/50 pt-4">
                {proj.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-brand/10 text-brand px-2 py-0.5 text-[10px] font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 border-t border-border/10 bg-radial-subtle">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 text-xs font-semibold text-brand">
            Verifiable Credentials
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Accorto Academy AI Certifications
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Graduated evaluation checkpoints to certify engineering depth.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connector */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-white/10 -translate-x-1/2" />

          <div className="space-y-8">
            {CERTS.map((cert, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:px-8">
                    <div
                      className={`glass rounded-2xl p-6 border border-border shadow-lg ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      <span className="text-[10px] font-bold text-brand uppercase tracking-widest bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">
                        {cert.level} Level
                      </span>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-3">
                        Certified AI {cert.level}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bullet center dot */}
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-brand flex items-center justify-center text-white font-bold text-xs">
                    {idx + 1}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grayscale Tech Stack Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 border-t border-border/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Integrated Enterprise Stack
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Learn the exact tooling pipelines used in our client solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
          {TECHS.map((tech) => (
            <div
              key={tech.name}
              className="glass rounded-xl p-4 flex items-center justify-center min-h-[64px] transition-all duration-300 group cursor-default select-none border border-border hover:border-brand/20 hover:-translate-y-0.5"
            >
              <span
                className={`font-display font-bold text-xs tracking-wider text-slate-400 dark:text-slate-500 group-hover:scale-105 transition-all ${tech.glow}`}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
