import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { BorderGlow } from "@/components/animations/BorderGlow";
import { ShinyText } from "@/components/animations/ShinyText";
import { ScrollVelocity } from "@/components/animations/ScrollVelocity";
import { ScrollWordReveal } from "@/components/animations/ScrollWordReveal";


import {
  GraduationCap,
  Brain,
  Sparkles,
  Search,
  Cpu,
  Layers,
  Terminal,
  BookOpen,
  Users,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  ChevronDown,
  LineChart,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/academy/")({
  head: () => ({
    meta: [
      { title: "Enterprise AI Training & Engineering Academy — Accorto Technologies" },
      {
        name: "description",
        content:
          "Master Generative AI, LangChain, AI Agents, Prompt Engineering, and RAG. Practical certification programs designed by enterprise consulting architects.",
      },
      { property: "og:title", content: "Accorto Academy — Enterprise AI Training" },
      {
        property: "og:description",
        content:
          "Master AI engineering and advanced software development with certified consulting engineers.",
      },
      { property: "og:url", content: "https://accorto.tech/academy" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy" }],
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
              name: "Academy",
              item: "https://accorto.tech/academy",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who can join the Accorto Academy programs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our programs are designed for students, working professionals, software developers, and engineering teams seeking practical AI upskilling.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need prior coding experience?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer courses ranging from Beginner to Advanced levels. Prior basic programming knowledge is recommended for AI Engineering, but we also cover foundations.",
              },
            },
            {
              "@type": "Question",
              name: "Will practical projects be included in the training?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, every module centers on real-world projects such as AI Resume Builders, Multi-Agent Assistants, and RAG Chatbots to simulate enterprise challenges.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: AcademyLanding,
});

const PROGRAMS = [
  {
    id: "ai-training",
    icon: Brain,
    name: "AI Engineering",
    desc: "16-week comprehensive path from fundamentals to production-grade AI agents.",
    link: "/academy/ai-training",
    badge: "Most Popular",
  },
  {
    id: "generative-ai",
    icon: Sparkles,
    name: "Generative AI",
    desc: "Master large language model architectures, embeddings, and fine-tuning configurations.",
    link: "/academy/generative-ai",
  },
  {
    id: "prompt-engineering",
    icon: Terminal,
    name: "Prompt Engineering",
    desc: "Advanced prompt techniques including Few-Shot, Chain-of-Thought, and structured JSON outputs.",
    link: "/academy/prompt-engineering",
  },
  {
    id: "rag",
    icon: Search,
    name: "RAG Systems",
    desc: "Build production vector search pipelines using LangChain, LlamaIndex, Pinecone, and ChromaDB.",
    link: "/academy/rag",
  },
  {
    id: "ai-agents",
    icon: Cpu,
    name: "AI Agents",
    desc: "Architect autonomous agent graphs using LangGraph, CrewAI, and Microsoft AutoGen.",
    link: "/academy/ai-agents",
  },
  {
    id: "mcp",
    icon: Layers,
    name: "MCP Protocol",
    desc: "Integrate context with Model Context Protocol servers, resources, and client schemas.",
    link: "/academy/mcp",
  },
  {
    id: "python-for-ai",
    icon: BookOpen,
    name: "Python for AI",
    desc: "A focused introduction to Python programming, object-oriented concepts, NumPy, and Pandas.",
    link: "/academy/python-for-ai",
  },
  {
    id: "deep-learning",
    icon: GraduationCap,
    name: "Deep Learning",
    desc: "Build neural network architectures, CNNs, RNNs, and Transformers with PyTorch.",
    link: "/academy/deep-learning",
  },
  {
    id: "corporate-training",
    icon: Users,
    name: "Corporate Training",
    desc: "Upskill engineering cohorts, drive Copilot adoption, and implement enterprise AI governance.",
    link: "/academy/corporate-training",
    badge: "Enterprise",
  },
];

const FAQS = [
  {
    q: "Who can join?",
    a: "Our programs are open to students, developers, software engineers, and corporate teams. We structure programs from Beginner (Python/Foundations) to Expert (Agent Graphs/Observability).",
  },
  {
    q: "Do I need coding experience?",
    a: "Yes, basic familiarity with variables and logic is highly beneficial. For candidates starting from scratch, our 'Python for AI' course covers programming basics before moving to ML libraries.",
  },
  {
    q: "Will projects be included?",
    a: "Yes. Every program centers on 100% practical projects (e.g. AI Resume Builders, Multi-Agent Assistants, RAG Chatbots) to replicate real enterprise environments.",
  },
  {
    q: "Will certificates be provided?",
    a: "Absolutely. Upon passing all module evaluations and submitting capstone projects, learners receive verifiable digital credentials (Beginner, Associate, Professional, Expert levels).",
  },
  {
    q: "Is placement assistance available?",
    a: "We provide resume building reviews, portfolio showcases on GitHub, mock interview sessions with enterprise consultants, and shares with our hiring partner network.",
  },
  {
    q: "Can teams be trained?",
    a: "Yes. We offer custom corporate workshops, virtual training cycles, and technology copilot adoption strategies tailored for enterprise engineering groups.",
  },
];

const LMS_TABS = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "LMS Learner Portal",
    desc: "Verifiable credentials, certifications trackers, module timelines, and grading dashboards.",
  },
  {
    id: "recorded",
    label: "Recorded Classes",
    title: "Video on Demand",
    desc: "Lifetime access to HD recording sessions, code repository references, and structured transcripts.",
  },
  {
    id: "live",
    label: "Live Classes",
    title: "Interactive Lectures",
    desc: "Weekly live sessions, screen-sharing reviews, and direct Q&A cycles with enterprise consultants.",
  },
  {
    id: "assessment",
    label: "Assessments",
    title: "Skill Evaluations",
    desc: "Automated test suites, model evaluation runs, grading metrics, and instant test feedbacks.",
  },
  {
    id: "community",
    label: "Community",
    title: "Collaborative Forums",
    desc: "Private developer channels, peer hackathons, collaborative projects, and shared resources portals.",
  },
];

function AcademyLanding() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      {/* Page Hero with integrated CTAs */}
      <PageHero
        tag="Accorto Academy"
        title={
          <>
            Master AI Engineering & <span className="text-gradient">Software Development</span>
          </>
        }
        subtitle="Industry-ready training programs designed and delivered by active enterprise engineers and consultants. Step into the future of enterprise software."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SpecularButton
            href="#programs"
            size="md"
            variant="brand"
            className="shadow-brand hover:shadow-brand-lg"
          >
            Explore Programs
          </SpecularButton>
          <Link
            to="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white hover:scale-105 hover:bg-white/10 transition-all"
          >
            Book Free Demo
          </Link>
          <Link
            to="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white hover:scale-105 hover:bg-white/10 transition-all"
          >
            Download Curriculum
          </Link>
        </div>
      </PageHero>

      {/* Next Section: Statistics Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Learners Trained" },
            { value: "20+", label: "Production Projects" },
            { value: "10+", label: "Target Certifications" },
            { value: "100%", label: "Hands-on Practical" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 h-full flex flex-col justify-center shadow-xs hover:shadow-md">
                <div className="font-display text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Horizontal Scrolling Typography Marquee */}
      <div className="py-6 sm:py-10 border-y border-border/20 overflow-hidden bg-slate-50/50 dark:bg-card/30 backdrop-blur-xs">
        <ScrollVelocity
          items={[
            "LEARN",
            "BUILD",
            "SHIP",
            "SCALE",
            "LEAD",
            "CERTIFY",
          ]}
          direction="left"
          defaultVelocity={1.6}
        />
      </div>

      {/* Programs Catalog */}
      <section
        id="programs"
        className="mx-auto max-w-7xl px-4 sm:px-6 py-20 border-t border-border/10"
      >
        {/* Featured Career Development Track Banner */}
        <div className="mb-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-brand/15 via-brand-2/10 to-transparent border border-brand/25 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand px-2.5 py-0.5 rounded-full bg-brand/10 border border-brand/20">
                  New Track · Claude Pathways
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  AI Career Development &amp; Certification Pathways
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Structured learning pathways for consultants, developers, and enterprise architects preparing for verified AI engineering roles.
                </p>
              </div>
              <Link
                to="/academy/ai-career-development"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-[#031224] font-bold text-xs hover:opacity-95 transition-opacity"
              >
                Explore Certification Tracks <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 text-xs font-semibold text-brand">
            Curriculum Paths
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Specialized AI Training &amp; Cohorts
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-normal">
            Acquire role-based qualifications vetted by systems integrators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, idx) => {
            const Icon = prog.icon;
            const isFeatured = !!prog.badge;
            const cardContent = (
              <Link
                to={prog.link}
                className="group relative flex flex-col justify-between h-full rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border hover:border-brand/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-border text-slate-700 dark:text-slate-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    {prog.badge && (
                      <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                        {prog.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-5">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-normal leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center text-xs font-bold text-brand group-hover:text-brand-3 group-hover:gap-2 transition-all">
                  <span>View Curriculum</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );

            return (
              <Reveal key={prog.id} delay={idx * 0.04}>
                {isFeatured ? (
                  <BorderGlow borderRadius={24} className="h-full">
                    {cardContent}
                  </BorderGlow>
                ) : (
                  <div className="h-full">{cardContent}</div>
                )}

              </Reveal>

            );
          })}
        </div>
      </section>


      {/* Future-Ready LMS Tabs Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 border-t border-border/10 bg-radial-subtle">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 text-xs font-semibold text-brand">
            Future-Ready Architecture
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Accorto Learning Platform Mockup
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-normal">
            Explore features that will integrate into our future dashboard and learning portal.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-6 max-w-4xl mx-auto border border-white/10 shadow-xl">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 border-b border-border/50 pb-4">
            {LMS_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-border"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          {LMS_TABS.filter((t) => t.id === activeTab).map((tab) => (
            <div key={tab.id} className="mt-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-3">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-brand">
                  <ShieldCheck className="h-3.5 w-3.5" /> Coming Soon Hook
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {tab.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {tab.desc} Fully integrated system mockups including mock profiles, dashboard
                  interfaces, recorded video repositories, sandbox sandboxes, and calendar
                  schedules.
                </p>
              </div>
              <div className="flex-1 w-full bg-slate-100 dark:bg-white/5 rounded-2xl p-6 border border-border flex flex-col justify-between min-h-40 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[8px] bg-brand/10 text-brand px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Proto UI
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-1/3 bg-slate-300 dark:bg-slate-700 rounded" />
                  <div className="h-2 w-2/3 bg-slate-300 dark:bg-slate-700 rounded" />
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="h-6 w-16 bg-brand/20 border border-brand/20 rounded-md" />
                  <div className="h-5 w-5 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 border-t border-border/10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-slate-900 dark:text-white mb-10 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="glass rounded-2xl overflow-hidden border border-border/50">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal border-t border-border/20 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
