import React from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "../section";
import { PremiumCard } from "../ui/PremiumCard";
import { BentoGrid, BentoGridItem } from "../premium/BentoGrid";
import { StarBorder } from "../animations/StarBorder";
import { Counter } from "../counter";
import { cn } from "../../lib/utils";
import {
  Activity,
  Layers3,
  Database,
  Cloud,
  Cpu,
  Star,
  CheckCircle2,
  ArrowRight,
  Radio,
  Server,
  Zap,
} from "lucide-react";
import { PRACTICES } from "@/data/services";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "ai-iot": Activity,
  "ai-enterprise-structure": Cpu,
  "ai-enterprise-data": Database,
  oracle: Server,
  sap: Layers3,
  cloud: Cloud,
};

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-[0.95]">
        {value}
      </div>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500 font-bold mt-1">
        {label}
      </div>
    </div>
  );
}

interface ServiceCardProps {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  desc: string;
  points: string[];
  link: string;
  badge?: string;
  wide?: boolean;
}

function ServiceCard({ icon: Icon, name, desc, points, link, badge, wide = false }: ServiceCardProps) {
  return (
    <PremiumCard
      hover={true}
      glow={false}
      className={cn(
        "group relative p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between gap-5 sm:gap-8 transition-all duration-300 ease-out z-10 rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1",
        wide ? "md:flex-row md:items-center md:gap-10" : "",
      )}
    >
      <div className={cn("flex flex-col gap-4 relative z-10", wide ? "md:flex-1" : "")}>
        <div className="flex items-center justify-between">
          <div className="inline-grid h-12 w-12 place-items-center rounded-[18px] bg-brand/8 dark:bg-white/5 border border-brand/15 dark:border-white/10 text-brand shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
            <Icon className="h-6 w-6" />
          </div>
          {badge && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand px-2.5 py-0.5 rounded-full bg-brand/10 border border-brand/20">
              {badge}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
            {name}
          </h3>
          <p className="mt-2 text-sm text-[#64748B] dark:text-zinc-400 leading-relaxed font-medium">
            {desc}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div
          className={cn(
            "grid grid-cols-2 gap-2 text-xs text-[#64748B] dark:text-zinc-400 leading-relaxed relative z-10 font-medium",
            wide ? "md:mt-0 md:flex-1" : "",
          )}
        >
          {points.map((p: string) => (
            <div key={p} className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
              <span className="truncate">{p}</span>
            </div>
          ))}
        </div>
        <Link
          to={link}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors pt-2 border-t border-slate-100 dark:border-white/5"
        >
          Explore practice <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </PremiumCard>
  );
}

export function ServicesShowcase() {
  const bentoSpans = [
    "md:col-span-6 lg:col-span-5", // AI for Enterprise Structure
    "md:col-span-6 lg:col-span-5", // AI for Enterprise Data
    "md:col-span-6 lg:col-span-4", // Oracle ERP
    "md:col-span-6 lg:col-span-4", // SAP Solutions
    "md:col-span-12 lg:col-span-4", // Cloud Consulting
  ];

  const aiIot = PRACTICES[0]; // AI & IoT flagship
  const nextPractices = PRACTICES.slice(1, 6);

  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="AI & Enterprise Practices"
          title={
            <>
              Three AI pillars. <span className="text-gradient">Fully integrated into core systems.</span>
            </>
          }
          subtitle="From physical IoT sensor arrays to enterprise SAP/Oracle structures and governed Snowflake Lakehouses — we engineer AI into every layer."
        />
        <BentoGrid className="mt-6 md:mt-8">
          {/* Main Featured Flagship AI & IoT Card */}
          <BentoGridItem colSpan="md:col-span-12 lg:col-span-7 lg:row-span-2">
            <Reveal className="h-full">
              <PremiumCard
                hover={true}
                className="relative h-full p-6 sm:p-8 md:p-10 group transition-all duration-500 ease-out rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 flex-wrap">
                    <StarBorder
                      as="div"
                      color="rgba(112, 255, 74, 0.9)"
                      speed="4s"
                      thickness={1}
                      className="inline-flex rounded-full"
                      innerClassName="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-[#70FF4A] border border-slate-200 dark:border-transparent"
                    >
                      <Radio className="h-3 w-3 text-[#70FF4A] animate-pulse" /> Flagship AI Offering
                    </StarBorder>
                  </div>
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                    AI &amp; IoT: Physical-World Intelligence
                  </h3>
                  <p className="mt-4 text-[#64748B] dark:text-zinc-400 leading-relaxed max-w-xl text-sm font-medium">
                    Deploy real-time O2, H2, particulate dust, gas, and water telemetry with edge gateways,
                    sub-second anomaly alert dispatch, and unified live facility dashboards that prevent downtime and incidents.
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {[
                      "O2 & H2 Gas Safety Monitors",
                      "Particulate Dust Telemetry",
                      "Multi-Gas & Effluent Analysers",
                      "Real-Time Anomaly Alerts",
                      "Edge Telemetry Gateways",
                      "Unified Operational Dashboards",
                    ].map((p) => (
                      <div
                        key={p}
                        className="flex items-center gap-2 text-sm text-[#64748B] dark:text-zinc-400 leading-relaxed font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> {p}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
                    <Stat
                      label="ERP go-lives"
                      value={<Counter to={60} suffix="+" />}
                    />
                    <Stat
                      label="Avg ROI"
                      value={<Counter to={312} suffix="%" />}
                    />
                    <Stat
                      label="Alert Dispatch"
                      value="Real-Time"
                    />
                  </div>
                  <Link
                    to="/services/ai-iot"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-brand transition-colors"
                  >
                    Explore AI &amp; IoT solutions <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </PremiumCard>
            </Reveal>
          </BentoGridItem>

          {/* Remaining 5 cards */}
          {nextPractices.map((s, idx) => {
            const Icon = ICON_MAP[s.id] || Zap;
            const targetLink =
              s.id.startsWith("ai-")
                ? `/services/${s.id}`
                : `/services#${s.id}`;

            return (
              <BentoGridItem key={s.name} colSpan={bentoSpans[idx]}>
                <Reveal className="h-full" delay={idx * 0.06}>
                  <ServiceCard
                    id={s.id}
                    icon={Icon}
                    name={s.name}
                    desc={s.shortDesc}
                    points={s.features.slice(0, 4)}
                    link={targetLink}
                    badge={s.badge}
                  />
                </Reveal>
              </BentoGridItem>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
