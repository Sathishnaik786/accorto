import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "./section";
import { useMotionSystem, useMouseParallax } from "../lib/motion-presets";
import { PremiumCard } from "./ui/PremiumCard";
import { GlassPanel } from "./ui/GlassPanel";
import { PremiumBadge } from "./ui/PremiumBadge";
import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "./premium/BentoGrid";
import { StatsCluster } from "./premium/StatsCluster";

const MotionLink = motion(Link);
import {
  Database,
  Layers3,
  Cpu,
  Cloud,
  Rocket,
  Megaphone,
  ShieldCheck,
  Brain,
  Workflow,
  Building2,
  Stethoscope,
  Factory,
  ShoppingBag,
  Landmark,
  Truck,
  GraduationCap,
  Search,
  FileCheck2,
  Hammer,
  LineChart,
  LifeBuoy,
  Quote,
  Star,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Counter } from "./counter";

/* ---------- Client logos marquee ---------- */
export function ClientLogos() {
  const logos = [
    "Oracle",
    "SAP",
    "AWS",
    "Azure",
    "Google Cloud",
    "OpenAI",
  ];
  const doubled = [...logos, ...logos, ...logos, ...logos];
  return (
    <section className="py-16 md:py-24 lg:py-32 border-y border-border/50">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by industry leaders worldwide
        </p>
      </Reveal>
      <div className="relative overflow-hidden no-scrollbar">
        <div className="flex gap-16 animate-marquee w-max">
          {doubled.map((l, i) => (
            <div
              key={i}
              className="font-display text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {l}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

/* ---------- Services showcase (featured layout, not repetitive) ---------- */
const SERVICES = [
  {
    icon: Database,
    name: "Oracle ERP",
    color: "from-red-500 to-orange-500",
    desc: "Oracle Cloud ERP, EBS, Fusion HCM, and PeopleSoft — implementation, migration, and managed services.",
    points: ["Cloud ERP migration", "EBS R12 upgrades", "Fusion HCM", "Oracle Analytics"],
  },
  {
    icon: Layers3,
    name: "SAP Solutions",
    color: "from-blue-500 to-sky-500",
    desc: "S/4HANA transformations, BTP innovations, SAP Fiori UX, and end-to-end module rollouts.",
    points: ["S/4HANA RISE", "SAP BTP", "Fiori & UI5", "SuccessFactors"],
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    color: "from-violet-500 to-fuchsia-500",
    desc: "Generative AI, predictive analytics, computer vision, and enterprise MLOps platforms.",
    points: ["GenAI copilots", "Forecasting", "Computer vision", "MLOps"],
  },
  {
    icon: Rocket,
    name: "Digital Transformation",
    color: "from-emerald-500 to-cyan-500",
    desc: "Reimagine operations, products, and customer experiences end-to-end.",
    points: ["Operating models", "CX redesign", "Process mining", "Change mgmt"],
  },
  {
    icon: Cloud,
    name: "Cloud Consulting",
    color: "from-cyan-500 to-blue-500",
    desc: "Multi-cloud strategy and FinOps across AWS, Azure, GCP, and Oracle Cloud.",
    points: ["Landing zones", "Migration", "Kubernetes", "FinOps"],
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    color: "from-pink-500 to-rose-500",
    desc: "Performance marketing, SEO, marketing automation, and brand experience at scale.",
    points: ["SEO & content", "Paid media", "MarTech stack", "Analytics"],
  },
];

export function ServicesShowcase() {
  const { cardHover, cardHoverTransition } = useMotionSystem();

  const bentoSpans = [
    "md:col-span-6 lg:col-span-5", // SAP Solutions
    "md:col-span-6 lg:col-span-5", // AI & ML
    "md:col-span-6 lg:col-span-4", // Digital Transformation
    "md:col-span-6 lg:col-span-4", // Cloud Consulting
    "md:col-span-12 lg:col-span-4", // Digital Marketing
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="What we do"
          title={
            <>
              Services engineered for <span className="text-gradient">enterprise outcomes</span>
            </>
          }
          subtitle="From core ERP to applied AI, our practices are built around measurable business results, not slideware."
        />
        <BentoGrid className="mt-10 md:mt-16">
          {/* Main Featured Oracle ERP Card */}
          <BentoGridItem colSpan="md:col-span-12 lg:col-span-7 lg:row-span-2">
            <Reveal className="h-full">
              <PremiumCard 
                hover={true}
                className="relative h-full p-6 sm:p-8 md:p-10 group transition-all duration-500 ease-out rounded-[32px]"
              >
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                    <Star className="h-3 w-3 text-amber-400 animate-pulse" /> Featured Practice
                  </div>
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                    Oracle ERP Cloud, end-to-end
                  </h3>
                  <p className="mt-4 text-zinc-400 leading-8 max-w-xl text-sm">
                    From discovery through hypercare, our certified Oracle practice has delivered 60+
                    ERP programs across Finance, SCM, HCM and EPM. We accelerate value with reusable
                    accelerators, prebuilt analytics, and a global delivery pod.
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {[
                      "Oracle Cloud ERP",
                      "Fusion HCM",
                      "EPM Cloud",
                      "SCM Cloud",
                      "Oracle Analytics",
                      "Integration Cloud",
                    ].map((p) => (
                      <div key={p} className="flex items-center gap-2 text-sm text-zinc-400 leading-8">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {p}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
                    <Stat
                      label="ERP go-lives"
                      value={
                        <>
                          <Counter to={60} suffix="+" />
                        </>
                      }
                    />
                    <Stat
                      label="Avg ROI"
                      value={
                        <>
                          <Counter to={312} suffix="%" />
                        </>
                      }
                    />
                    <Stat
                      label="Faster close"
                      value={
                        <>
                          <Counter to={47} suffix="%" />
                        </>
                      }
                    />
                  </div>
                  <Link
                    to="/services"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-brand transition-colors"
                  >
                    Explore Oracle practice <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </PremiumCard>
            </Reveal>
          </BentoGridItem>

          {/* Remaining items mapping */}
          {SERVICES.slice(1).map((s, idx) => (
            <BentoGridItem key={s.name} colSpan={bentoSpans[idx]}>
              <Reveal className="h-full" delay={idx * 0.06}>
                <ServiceCard {...s} />
              </Reveal>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[0.95]">{value}</div>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">{label}</div>
    </div>
  );
}
interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
  desc: string;
  points: string[];
  wide?: boolean;
}

function ServiceCard({ icon: Icon, name, color, desc, points, wide = false }: ServiceCardProps) {
  return (
    <PremiumCard
      hover={true}
      className={cn(
        "group relative p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between gap-5 sm:gap-8 transition-all duration-500 ease-out z-10 rounded-[32px]",
        wide ? "md:flex-row md:items-center md:gap-10" : ""
      )}
    >
      <div className={cn("flex flex-col gap-4 relative z-10", wide ? "md:flex-1" : "")}>
        <div
          className="inline-grid h-12 w-12 place-items-center rounded-[18px] bg-white/5 border border-white/10 text-brand dark:text-brand-3 shadow-md md:group-hover:scale-105 transition-all duration-500 ease-out"
        >
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white leading-[0.95] tracking-tight">{name}</h3>
          <p className="mt-2 text-sm text-zinc-400 leading-8">{desc}</p>
        </div>
      </div>
      <div
        className={cn(
          "grid grid-cols-2 gap-3 text-xs text-zinc-400 leading-8 relative z-10",
          wide ? "md:mt-0 md:flex-1" : ""
        )}
      >
        {points.map((p: string) => (
          <div key={p} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> {p}
          </div>
        ))}
      </div>
    </PremiumCard>
  );
}

/* ---------- Industries ---------- */
export function Industries() {
  const { cardHover, cardHoverTransition } = useMotionSystem();
  const items = [
    {
      icon: GraduationCap,
      name: "Education",
      desc: "Smart campus, SIS modernization, online learning platforms.",
    },
    {
      icon: Stethoscope,
      name: "Healthcare",
      desc: "HIS, telehealth, claims AI, and HIPAA-grade cloud.",
    },
    {
      icon: Factory,
      name: "Manufacturing",
      desc: "Smart factory, MES, predictive maintenance and IoT.",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      desc: "Unified commerce, demand forecasting, in-store AI.",
    },
    {
      icon: Landmark,
      name: "Finance",
      desc: "Core banking modernization, risk, and AI fraud detection.",
    },
    {
      icon: Truck,
      name: "Logistics",
      desc: "Control towers, route optimization, warehouse robotics.",
    },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="Industries"
          title={
            <>
              Domain depth across <span className="text-gradient">regulated industries</span>
            </>
          }
          subtitle="Tailored solutions built on years of operating inside the world's most complex industries."
        />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.08}>
              <motion.div
                whileHover={cardHover}
                transition={cardHoverTransition}
                className="group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl glass p-4 sm:p-6 border border-transparent hover:border-brand/30 dark:hover:border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity blur-2xl" />
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-brand-soft text-brand">
                  <it.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-3 sm:mt-5 font-display text-base sm:text-xl font-semibold text-slate-900 dark:text-white">{it.name}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{it.desc}</p>
                <Link
                  to="/industries"
                  className="mt-3 sm:mt-5 inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-brand transition-colors"
                >
                  Explore solutions <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Transformation Journey timeline ---------- */
export function Journey() {
  const steps = [
    {
      icon: Search,
      name: "Discover",
      desc: "Stakeholder interviews, current-state assessment, value mapping.",
    },
    {
      icon: FileCheck2,
      name: "Plan",
      desc: "Roadmap, architecture blueprints, governance, and KPIs.",
    },
    {
      icon: Hammer,
      name: "Implement",
      desc: "Agile delivery pods, accelerators, integration & data migration.",
    },
    {
      icon: LineChart,
      name: "Optimize",
      desc: "Performance tuning, AI augmentation, adoption analytics.",
    },
    {
      icon: LifeBuoy,
      name: "Support",
      desc: "24/7 managed services, SLA monitoring, continuous innovation.",
    },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32 relative bg-radial-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="Our Methodology"
          title={
            <>
              The Accorto <span className="text-gradient">Transformation Journey</span>
            </>
          }
          subtitle="A proven five-stage playbook used across 100+ enterprise programs."
          center
        />
        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-linear-to-r from-transparent via-brand to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="text-center group">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-[0.06] blur-xl group-hover:opacity-10 transition-opacity" />
                    <div className="relative h-24 w-24 grid place-items-center rounded-full glass">
                      <s.icon className="h-9 w-9 text-brand" />
                    </div>
                    <div className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-white text-xs font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Metrics ---------- */
export function Metrics() {
  const items = [
    { v: 60, s: "+", l: "ERP Programs" },
    { v: 312, s: "%", l: "Average ROI" },
    { v: 47, s: "%", l: "Faster Close" },
    { v: 18, s: "", l: "Countries" },
  ];
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#002624]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
          {items.map((m, i) => (
            <Reveal key={m.l} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3">
                <div className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]">
                  <Counter to={m.v} suffix={m.s} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-2">
                  {m.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Case Studies Preview ---------- */
export function CaseStudiesPreview() {
  const { cardHover, cardHoverTransition } = useMotionSystem();
  const cases = [
    {
      tag: "Oracle ERP",
      title: "Global manufacturer cuts financial close by 47%",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
      metric: "47% faster close",
    },
    {
      tag: "SAP S/4HANA",
      title: "Retail conglomerate unifies 9 ERPs into one",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
      metric: "$28M savings",
    },
    {
      tag: "AI & ML",
      title: "Bank deploys real-time fraud AI at scale",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
      metric: "92% fraud caught",
    },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading
            tag="Case Studies"
            title={
              <>
                Outcomes that <span className="text-gradient">moved markets</span>
              </>
            }
            subtitle="A glimpse at the enterprise programs that defined the last few quarters."
          />
          <Link
            to="/case-studies"
            className="text-sm font-medium inline-flex items-center gap-1 hover:text-brand"
          >
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <MotionLink
                to="/case-studies"
                whileHover={cardHover}
                transition={cardHoverTransition}
                className="group block overflow-hidden rounded-[32px] glass border border-transparent hover:border-brand/30 dark:hover:border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative aspect-4/3 overflow-hidden m-3 rounded-[24px] shadow-sm">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A312C]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-xs font-medium text-white">
                    {c.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 glass-strong rounded-full px-3 py-1 text-xs font-semibold text-white">
                    {c.metric}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                    {c.title}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    Read case study <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </MotionLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  const items = [
    {
      quote:
        "Accorto's Oracle Cloud rollout was the cleanest enterprise program we have ever run — on time and 18% under budget.",
      name: "Anita R.",
      role: "CFO, Global Manufacturing",
    },
    {
      quote:
        "Their AI team replaced three of our forecasting tools with a single platform. Forecast accuracy jumped 22 points.",
      name: "Marcus L.",
      role: "VP Data, Retail",
    },
    {
      quote:
        "From strategy to hypercare, the team operated like an extension of ours. Truly world-class consulting.",
      name: "Priya N.",
      role: "CIO, Financial Services",
    },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#002624]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="Client Voices"
          title={
            <>
              Trusted by leaders who <span className="text-gradient">demand more</span>
            </>
          }
          center
        />
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <PremiumCard
                hover={true}
                className="h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 rounded-[32px]"
              >
                <div className="space-y-4 text-left">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-zinc-300 leading-relaxed italic font-medium">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
export function Certifications() {
  const { cardHover, cardHoverTransition } = useMotionSystem();
  const items = [
    { icon: Award, name: "Oracle Certified", lvl: "Cloud Solutions Partner" },
    { icon: Award, name: "SAP Expertise", lvl: "Certified Integration Partner" },
    { icon: Workflow, name: "Cloud Consulting", lvl: "AWS & Azure Advanced" },
    { icon: Cpu, name: "AI Solutions", lvl: "Generative AI Certified" },
    { icon: ShieldCheck, name: "ISO 27001", lvl: "Information Security" },
    { icon: ShieldCheck, name: "SOC 2 Type II", lvl: "Audited Operations" },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Certifications & Partnerships
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.08}>
              <motion.div
                whileHover={cardHover}
                transition={cardHoverTransition}
                className="glass rounded-3xl p-5 flex flex-col items-center text-center gap-2 border border-transparent hover:border-brand/30 dark:hover:border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <i.icon className="h-6 w-6 text-brand" />
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{i.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{i.lvl}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  const { buttonTap, buttonTransition } = useMotionSystem();
  const { parallaxProps, handleMouseMove, handleMouseLeave } = useMouseParallax(8);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div
            ref={cardRef}
            onMouseMove={(e) => {
              handleCardMouseMove(e);
              handleMouseMove(e);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={(e) => {
              setIsHovered(false);
              handleMouseLeave();
            }}
            className="relative overflow-hidden rounded-[32px] bg-[#001a18] border border-white/6 px-5 py-10 sm:p-16 md:p-28 text-center group shadow-2xl select-none"
          >
            {/* Backdrop image overlay */}
            <img 
              src="/card_1.jpg" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-[1.05] z-0 pointer-events-none transition-transform duration-2000 group-hover:scale-105"
            />
            {/* Dark gradient layer */}
            <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />

            {/* Interactive Spotlight layer */}
            {isHovered && (
              <div
                className="absolute inset-0 z-15 pointer-events-none transition-opacity duration-500 opacity-100"
                style={{
                  background: `radial-gradient(circle 400px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
                }}
              />
            )}

            {/* Subtle noise layer */}
            <div className="absolute inset-0 opacity-[0.008] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')] z-10" />

            <motion.div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6" {...parallaxProps}>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl">
                Ready to ship the next era of your enterprise?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-8 max-w-xl">
                Talk to an enterprise architect. 30 minutes, zero obligation, immediate value.
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={buttonTap}
                  transition={buttonTransition}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#002624] hover:bg-slate-100 transition-all duration-200 shadow-md"
                >
                  Book Free Consultation
                </MotionLink>
                <MotionLink
                  to="/case-studies"
                  whileHover={{ scale: 1.03 }}
                  whileTap={buttonTap}
                  transition={buttonTransition}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                >
                  See client results
                </MotionLink>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
