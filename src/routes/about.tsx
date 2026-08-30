import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/section";
import { DotGrid } from "@/components/animations/DotGrid";
import { FadeContent } from "@/components/animations/FadeContent";
import { ShinyText } from "@/components/animations/ShinyText";
import { AnimatedModal } from "@/components/animations/AnimatedModal";
import { ScrollWordReveal } from "@/components/animations/ScrollWordReveal";
import { ScrollVelocity } from "@/components/animations/ScrollVelocity";
import { ImageCaptionOverlay } from "@/components/ui/ImageCaptionOverlay";
import { ArrowRight, X, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Accorto Technologies | Cloud, Data, AI & IoT" },
      {
        name: "description",
        content:
          "Learn about Accorto Technologies, our leadership, and our expertise across Cloud, Data, AI, and IoT.",
      },
      { property: "og:title", content: "About Accorto Technologies | Cloud, Data, AI & IoT" },
      {
        property: "og:description",
        content:
          "Learn about Accorto Technologies, our leadership, and our expertise across Cloud, Data, AI, and IoT.",
      },
      { property: "og:url", content: "https://accorto.tech/about" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/about" }],
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
              name: "About",
              item: "https://accorto.tech/about",
            },
          ],
        }),
      },
    ],
  }),
  component: About,
});

interface Executive {
  id: string;
  name: string;
  role: string;
  roleSubtitle: string;
  company: string;
  initials: string;
  image?: string;
  linkedin?: string;
  summary: string;
  shortBio: string[];
  expertise: string[];
  bio: string[];
}

const LEADERSHIP: Executive[] = [
  {
    id: "venu-gaddam",
    name: "Venu Gaddam",
    role: "Chief Executive Officer",
    roleSubtitle: "CHIEF EXECUTIVE OFFICER",
    company: "Accorto Technologies",
    initials: "VG",
    image: "/images/venu-gaddam.jpg",
    linkedin: "https://www.linkedin.com/company/accorto-technologies",
    summary:
      "Nearly three decades of experience across Cloud, Data, AI, enterprise technology, and global digital transformation.",
    shortBio: [
      "Venu Gaddam is the Chief Executive Officer of Accorto Technologies, a global Cloud, Data, and AI consulting partner helping Fortune 500 organizations drive enterprise transformation.",
      "With nearly three decades of experience, Venu has architected and scaled cloud platforms, enterprise data systems, and applied AI solutions across complex, global environments. At Accorto, he is leading the company into a new frontier with an AI-powered IoT platform designed to give data center operators continuous, proactive visibility into energy consumption and physical asset health.",
      "At Accorto, his focus is on translating cloud, data, AI, and IoT capabilities into resilient, measurable business outcomes.",
    ],
    expertise: ["Cloud", "Data", "AI", "IoT"],
    bio: [
      "Venu Gaddam is the Chief Executive Officer of Accorto Technologies, a global Cloud, Data, and AI consulting partner helping Fortune 500 organizations drive enterprise transformation.",
      "With nearly three decades of experience, Venu has architected and scaled cloud platforms, enterprise data systems, and applied AI solutions across complex, global environments. At Accorto, he is leading the company into a new frontier with an AI-powered IoT platform designed to give data center operators continuous, proactive visibility into energy consumption and physical asset health. The platform combines automated audits and predictive health checks to identify potential failures before they occur, helping protect uptime, operational resilience, and business continuity.",
      "Venu's career is defined by measurable enterprise-scale impact. At Oracle, he architected and drove adoption of cloud and data platform solutions that generated an estimated $600 million in annual business impact. At Gilead Sciences, he led the technology backbone supporting the global rollout of COVID-19 products across 200 markets worldwide, contributing to a program estimated to have generated $2 billion in ROI while supporting the delivery of critical products at global scale.",
      "Before Accorto, Venu held senior technology and platform leadership roles at Gilead Sciences, Oracle, Google, and L2L Systems. His work has covered AWS, Azure, and Google Cloud; enterprise platforms including SAP S/4HANA; large-scale data architectures; and AI/ML solutions for global and highly regulated environments.",
      "He also built an independent Cloud and AI consulting practice, advising organizations on cloud migration, enterprise data strategy, applied AI adoption, and systems integration across major enterprise platforms.",
      "Venu holds a Bachelor's degree in Computer Science Engineering and an MBA from Cornell University.",
      "He is based in the San Francisco Bay Area.",
    ],
  },
  {
    id: "vasu-kasireddy",
    name: "Vasu Kasireddy",
    role: "Chief Operating Officer",
    roleSubtitle: "CHIEF OPERATING OFFICER",
    company: "Accorto Technologies",
    initials: "VK",
    image: "/images/vasu-kasireddy.jpg",
    linkedin: "https://www.linkedin.com/company/accorto-technologies",
    summary:
      "More than 25 years of experience across construction, infrastructure, operations, entrepreneurship, and business management.",
    shortBio: [
      "Vasu Kasireddy is the Chief Operating Officer of Accorto Technologies, bringing more than 25 years of experience in the construction and infrastructure industry.",
      "Throughout his career, Vasu has successfully executed irrigation, road, and building projects, developing extensive expertise in project execution, operations, and business management.",
      "As an entrepreneur, Vasu built and managed a construction company that achieved an estimated $3 million in annual business, demonstrating strong leadership, operational management, and business-growth capabilities.",
    ],
    expertise: ["Operations", "Infrastructure", "Business", "Leadership"],
    bio: [
      "Vasu Kasireddy is the Chief Operating Officer of Accorto Technologies, bringing more than 25 years of experience in the construction and infrastructure industry.",
      "Throughout his career, Vasu has successfully executed irrigation, road, and building projects, developing extensive expertise in project execution, operations, and business management.",
      "As an entrepreneur, Vasu built and managed a construction company that achieved an estimated $3 million in annual business, demonstrating strong leadership, operational management, and business-growth capabilities.",
      "Vasu also served as Managing Partner at Cozone LLP, an IT workspace and infrastructure business.",
      "His experience across construction, infrastructure, technology, and business services gives him a broad perspective on operations, execution, business development, and organizational leadership.",
      "As COO of Accorto Technologies, Vasu brings his industry experience, entrepreneurial mindset, operational expertise, and leadership to support the company's continued growth and execution.",
    ],
  },
];

const CAPABILITIES = ["Cloud", "Data", "AI", "IoT"];

/* =========================================================================
   REUSABLE EDITORIAL PORTRAIT COMPONENT
   ========================================================================= */
interface ProfilePortraitProps {
  exec: Executive;
}

function ProfilePortrait({ exec }: ProfilePortraitProps) {
  return (
    <div className="relative w-full aspect-4/5 min-h-115 sm:min-h-130 max-w-md mx-auto lg:max-w-none rounded-4xl overflow-hidden border border-slate-200/80 dark:border-white/8 shadow-2xl bg-linear-to-b from-[#091524] via-[#050D18] to-[#02070D] group transition-all duration-500">
      {/* Portrait Image with subtle hover zoom and brightness elevation */}
      {exec.image ? (
        <div className="relative w-full h-full">
          <img
            src={exec.image}
            alt={`${exec.name} — ${exec.role}, ${exec.company}`}
            className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.04] group-hover:scale-[1.02] group-hover:brightness-100 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
              const fallback = document.getElementById(`fallback-${exec.id}`);
              if (fallback) fallback.style.display = "flex";
            }}
          />
          {/* Ambient vignette scrim */}
          <div className="absolute inset-0 bg-linear-to-t from-[#02070D]/95 via-transparent to-transparent opacity-75 pointer-events-none" />
        </div>
      ) : null}

      {/* Abstract Identity Monogram Fallback */}
      <div
        id={`fallback-${exec.id}`}
        className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center select-none ${
          exec.image ? "hidden" : "flex"
        }`}
      >
        <div className="absolute inset-0 bg-radial from-brand/20 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
        <div className="absolute -top-28 -left-28 h-56 w-56 rounded-full bg-brand-2/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 h-56 w-56 rounded-full bg-brand/15 blur-3xl pointer-events-none" />

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-display font-bold text-[11rem] sm:text-[13rem] tracking-tighter text-white/3 dark:text-white/2.5 leading-none">
            {exec.initials}
          </span>
        </div>

        <div className="mb-6 font-mono text-[9px] uppercase tracking-[0.3em] text-slate-400/80">
          Accorto Technologies
        </div>
        <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl bg-white/3 border border-white/10 flex items-center justify-center font-display text-4xl sm:text-5xl font-bold text-white shadow-brand backdrop-blur-md group-hover:scale-105 group-hover:border-white/20 transition-all duration-500">
          {exec.initials}
        </div>
      </div>

      {/* Standardized Global Image Caption Overlay */}
      <ImageCaptionOverlay
        name={exec.name}
        role={exec.role}
      />
    </div>
  );
}

/* =========================================================================
   REUSABLE EDITORIAL EXECUTIVE PROFILE ROW COMPONENT
   ========================================================================= */
interface ExecutiveProfileProps {
  exec: Executive;
  reversed?: boolean;
  onSelect: (exec: Executive) => void;
}

function ExecutiveProfile({ exec, reversed = false, onSelect }: ExecutiveProfileProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
      {/* Portrait Column */}
      <div
        className={`lg:col-span-5 ${
          reversed ? "order-1 lg:order-2" : "order-1 lg:order-1"
        }`}
      >
        <Reveal delay={reversed ? 0.12 : 0.04}>
          <ProfilePortrait exec={exec} />
        </Reveal>
      </div>

      {/* Content Column */}
      <div
        className={`lg:col-span-7 flex flex-col justify-center space-y-6 max-w-2xl ${
          reversed ? "order-2 lg:order-1" : "order-2 lg:order-2"
        }`}
      >
        {/* Executive Identity Header & Verified Social Link */}
        <Reveal delay={reversed ? 0.04 : 0.08}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                {exec.roleSubtitle}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                {exec.name}
              </h3>
            </div>
            {exec.linkedin && (
              <a
                href={exec.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-slate-100 dark:bg-white/4 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-brand hover:border-brand/40 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label={`${exec.name} LinkedIn Profile`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        </Reveal>

        {/* Strong Experience Statement */}
        <Reveal delay={reversed ? 0.08 : 0.12}>
          <p className="font-sans text-2xl sm:text-3xl lg:text-[2.05rem] text-slate-900 dark:text-slate-100 font-normal leading-[1.3] tracking-tight">
            {exec.summary}
          </p>
        </Reveal>

        {/* Visible Short Biography Paragraphs */}
        <Reveal delay={reversed ? 0.12 : 0.16}>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {exec.shortBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {/* Compact Editorial Expertise Tags */}
        <Reveal delay={reversed ? 0.16 : 0.2}>
          <div className="flex flex-wrap gap-2 pt-1">
            {exec.expertise.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/8 px-3.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-brand/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Glowing Know More Button (inspired by Get Started aesthetic) */}
        <Reveal delay={reversed ? 0.2 : 0.24}>
          <div className="pt-2">
            <button
              onClick={() => onSelect(exec)}
              className="group/btn inline-flex items-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-full bg-slate-900/60 dark:bg-card/70 backdrop-blur-md border border-brand/35 hover:border-brand text-sm font-semibold text-slate-900 dark:text-white shadow-[0_0_20px_rgba(56,189,248,0.12)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:bg-brand/10 dark:hover:bg-brand/15 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={`Know more about ${exec.name}, ${exec.role}`}
            >
              <span>Know More</span>
              <ArrowRight className="h-4 w-4 text-brand transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN ABOUT PAGE COMPONENT
   ========================================================================= */
function About() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headingScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.95]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      {/* =========================================================================
          SECTION 1 — HERO
          Editorial, oversized typography with subtle ambient lighting & scroll parallax
          ========================================================================= */}
      <section
        ref={heroRef}
        className="relative overflow-hidden w-full pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28 border-b border-border/10"
      >
        {/* Subtle Ambient Background Canvas */}
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none h-full w-full"
          aria-hidden="true"
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-32 -left-32 h-128 w-lg rounded-full bg-brand/10 dark:bg-brand/7 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/4 -right-32 h-136 w-136 rounded-full bg-brand-2/10 dark:bg-brand-2/5 blur-[140px] pointer-events-none" />

          {/* Quiet DotGrid Texture */}
          <DotGrid
            dotSize={3.5}
            gap={32}
            baseColor="#162A45"
            activeColor="#38BDF8"
            proximity={90}
            speedTrigger={140}
            shockRadius={140}
            shockStrength={2}
            resistance={850}
            returnDuration={1.2}
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Subtle Eyebrow with Pulsing Live Status Indicator */}
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-1.5 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <ShinyText
                text="ABOUT ACCORTO TECHNOLOGIES"
                speed={3}
                shineColor="#38BDF8"
                color="currentColor"
              />
            </div>
          </Reveal>

          {/* Oversized Main Heading with Layered Scroll Parallax */}
          <motion.div style={{ y: headingY, scale: headingScale }}>
            <FadeContent delay={0.08} blur={true} distance={18}>
              <h1 className="mt-8 font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[0.92] max-w-5xl">
                Building What’s
                <br className="hidden sm:inline" /> Next
              </h1>
            </FadeContent>
          </motion.div>

          {/* Constrained Editorial Hero Description */}
          <motion.div style={{ y: descY }}>
            <FadeContent delay={0.18} blur={false} distance={14}>
              <p className="mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
                Accorto Technologies combines Cloud, Data, AI, and IoT expertise to help organizations
                solve complex technology challenges and create measurable business impact.
              </p>
            </FadeContent>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — COMPANY INTRODUCTION
          Editorial Two-Column Composition with ScrollWordReveal
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 border-b border-border/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Stacked Large Heading (~38% width) */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.04]">
                Technology.
                <br />
                Experience.
                <br />
                <span className="text-gradient">Impact.</span>
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Scroll-Driven Statement and Capability Strip (~62% width) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <ScrollWordReveal
              text="Accorto Technologies brings together deep enterprise engineering, technology expertise, business experience, and operational leadership to build practical solutions across Cloud, Data, AI, and IoT."
              highlightWords={["deep", "enterprise", "engineering,", "leadership", "Cloud,", "Data,", "AI,", "IoT."]}
              className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-slate-700 dark:text-slate-300"
            />

            {/* Capability Labels: Minimal Inline Strip */}
            <Reveal delay={0.16}>
              <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-5 sm:gap-x-7 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                {CAPABILITIES.map((cap, idx) => (
                  <div key={cap} className="flex items-center gap-5 sm:gap-7">
                    {idx > 0 && (
                      <span
                        className="h-1 w-1 rounded-full bg-slate-300 dark:bg-white/20"
                        aria-hidden="true"
                      />
                    )}
                    <span className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200 cursor-default">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HORIZONTAL CINEMATIC MARQUEE
          ========================================================================= */}
      <div className="py-6 sm:py-10 border-b border-border/20 overflow-hidden bg-slate-50/50 dark:bg-card/30 backdrop-blur-xs">
        <ScrollVelocity
          items={[
            "EXPERIENCE",
            "ARCHITECTURE",
            "IMPACT",
            "CRAFTSMANSHIP",
            "RESILIENCE",
          ]}
          direction="left"
          defaultVelocity={1.5}
        />
      </div>

      {/* =========================================================================
          SECTION 3 — LEADERSHIP
          Editorial Executive Profile Presentations (Dominant Centerpiece)
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
        {/* Integrated Section Header */}
        <Reveal>
          <div className="max-w-2xl mb-14 sm:mb-18 lg:mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand">
              LEADERSHIP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-3">
              Our Leadership
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Experience that turns technology and opportunity into lasting impact.
            </p>
          </div>
        </Reveal>

        {/* Alternating Editorial Executive Profile Rows */}
        <div className="space-y-28 sm:space-y-36 lg:space-y-40">
          {LEADERSHIP.map((exec, idx) => (
            <ExecutiveProfile
              key={exec.id}
              exec={exec}
              reversed={idx % 2 === 1}
              onSelect={(selected) => setSelectedExecutive(selected)}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          PROGRESSIVE DISCLOSURE BIOGRAPHY MODAL
          Executive Profile Dossier
          ========================================================================= */}
      <AnimatedModal
        isOpen={!!selectedExecutive}
        onClose={() => setSelectedExecutive(null)}
        className="w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-strong rounded-4xl border border-white/15 p-6 sm:p-10 shadow-2xl relative text-left"
      >
        {selectedExecutive && (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-border/10">
              <div className="flex items-center gap-4">
                {selectedExecutive.image ? (
                  <div className="h-16 w-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-brand">
                    <img
                      src={selectedExecutive.image}
                      alt={selectedExecutive.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center font-display text-xl font-bold text-white shadow-brand shrink-0">
                    {selectedExecutive.initials}
                  </div>
                )}
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {selectedExecutive.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand mt-0.5">
                    {selectedExecutive.role}, {selectedExecutive.company}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedExecutive(null)}
                className="rounded-full p-2 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Close biography modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Verbatim Approved Biography Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {selectedExecutive.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-border/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground">Expertise:</span>
                {selectedExecutive.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-3 py-0.5 text-xs font-semibold text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedExecutive(null)}
                className="glass rounded-full px-6 py-2.5 text-xs font-semibold text-slate-900 dark:text-white hover:bg-white/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </AnimatedModal>
    </div>
  );
}






