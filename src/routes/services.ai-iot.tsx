import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { FinalCTA } from "@/components/home";
import {
  Activity,
  Radio,
  Bell,
  Gauge,
  Droplets,
  Wind,
  Flame,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  BarChart3,
  ShieldCheck,
  Zap,
  Sparkles,
  Search,
  Compass,
  Wrench,
  TrendingUp,
  Headphones,
} from "lucide-react";

export const Route = createFileRoute("/services/ai-iot")({
  head: () => ({
    meta: [
      {
        title:
          "AI & IoT Solutions | Real-Time Monitoring & Predictive Intelligence | Accorto Technologies",
      },
      {
        name: "description",
        content:
          "Connect sensors, IoT dashboards, real-time alerts, and AI-powered predictive intelligence for physical assets, facilities, and environmental operations.",
      },
      { property: "og:title", content: "AI & IoT Solutions — Accorto Technologies" },
      {
        property: "og:description",
        content:
          "Connect sensors, IoT dashboards, real-time alerts, and AI-powered predictive intelligence.",
      },
      { property: "og:url", content: "https://accorto.tech/services/ai-iot" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/services/ai-iot" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI & IoT Operational Intelligence Solutions",
          provider: {
            "@type": "Organization",
            name: "Accorto Technologies",
            url: "https://accorto.tech",
          },
          description:
            "Real-time IoT dashboards, sensor telemetry, and AI-powered anomaly alerting for industrial and environmental assets.",
          url: "https://accorto.tech/services/ai-iot",
        }),
      },
    ],
  }),
  component: ServiceAiIot,
});

const DELIVERED_MONITORS = [
  {
    icon: Wind,
    name: "O2 Monitors",
    desc: "Oxygen level tracking and depletion detection for confined spaces, plant pits, and safety-critical operations.",
    badge: "Life Safety",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    points: ["Continuous ppm telemetry", "Audible & push alarms", "Confined space compliance"],
  },
  {
    icon: Flame,
    name: "H2 Monitors",
    desc: "Ultra-sensitive hydrogen leak detection and fugitive emissions tracking for energy and chemical processing facilities.",
    badge: "Hazard Prevention",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    points: ["Sub-second leak flags", "ATEX/IECEx compliant edge", "Automated valve shutoff trigger"],
  },
  {
    icon: Gauge,
    name: "Dust Monitors",
    desc: "Particulate matter (PM2.5 / PM10) monitoring for manufacturing air quality, mine shafts, and regulatory reporting.",
    badge: "Air Quality",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    points: ["Real-time dust dispersion", "Environmental EPA compliance", "Exhaust filter health"],
  },
  {
    icon: Activity,
    name: "Gas Analysers",
    desc: "Multi-gas composition monitoring (CO, CO2, SOx, NOx, CH4) with live stack and ambient air dispersion models.",
    badge: "Emissions",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    points: ["Multi-gas spectrometry", "Continuous emissions reporting", "Spike anomaly alerts"],
  },
  {
    icon: Droplets,
    name: "Water Analysers",
    desc: "Water quality, pH, turbidity, dissolved oxygen, and industrial effluent monitoring for utility grids and treatment plants.",
    badge: "Effluent & Water",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    points: ["Contamination early warning", "Discharge permit compliance", "Supply pipeline telemetry"],
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    desc: "Audit existing physical sensors, networking infrastructure, industrial protocol compatibility, and on-site data gaps.",
  },
  {
    step: "02",
    title: "Plan",
    icon: Compass,
    desc: "Design the edge architecture: gateway specifications, Modbus/MQTT pipelines, secure private network topology, and dashboard UX.",
  },
  {
    step: "03",
    title: "Implement",
    icon: Wrench,
    desc: "Deploy physical edge gateways, configure telemetry streams, build live dashboards, and set custom multi-channel threshold alerts.",
  },
  {
    step: "04",
    title: "Optimize",
    icon: TrendingUp,
    desc: "Train machine learning models on time-series telemetry to detect multi-variable anomalies and predict sensor degradation.",
  },
  {
    step: "05",
    title: "Support",
    icon: Headphones,
    desc: "24/7 telemetry monitoring, sensor health diagnostics, firmware security updates, and SLA-backed incident response.",
  },
];

const FUTURE_VISION_PILLARS = [
  {
    icon: Sparkles,
    tag: "Future Vision · In Development",
    title: "Sustainability & ESG",
    headline: "Sustainability you can measure, not just report.",
    desc: "IoT-driven ESG monitoring turns emissions, water usage, and energy consumption into continuous, auditable data — replacing annual spreadsheet estimates with verifiable operational truth.",
    items: [
      "Real-time emissions and effluent tracking",
      "Energy and water consumption optimization",
      "Automated ESG compliance reporting pipelines",
      "Carbon footprint tracking at facility and asset level",
    ],
  },
  {
    icon: Layers,
    tag: "Future Vision · In Development",
    title: "Asset Management",
    headline: "Know where every asset is, what state it's in, and what it's costing you.",
    desc: "AI-powered asset visibility across facilities — from real-time physical equipment positioning to active utilization cycles and total lifecycle cost management.",
    items: [
      "IoT-based asset positioning and inventory tracking",
      "Asset utilization analytics (idle vs. active uptime)",
      "Lifecycle cost tracking & replacement forecasting",
      "Direct synchronization with Oracle & SAP asset registers",
    ],
  },
  {
    icon: Cpu,
    tag: "Future Vision · In Development",
    title: "Predictive Maintenance",
    headline: "Predict failures before they happen.",
    desc: "Move from rigid calendar-based schedules to condition-based and predictive maintenance, powered by the time-series sensor data already flowing through your IoT dashboards.",
    items: [
      "Vibration, temperature, and pressure anomaly modeling",
      "Automated work order creation in SAP PM & Oracle Maintenance",
      "Component wear forecasting and MTBF optimization",
      "Unplanned equipment downtime reduction analytics",
    ],
  },
];

function ServiceAiIot() {
  return (
    <>
      {/* Hero */}
      <PageHero
        tag="Flagship AI & IoT Offering"
        title={
          <>
            Connect. Monitor. <span className="text-gradient">Predict. Act.</span>
          </>
        }
        subtitle="Real-time IoT dashboards and AI-powered alerting for the physical assets and environments your business depends on — from gas safety to water quality to industrial emissions."
      />

      {/* Action Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-8 mb-16 relative z-20">
        <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
          <SpecularButton
            to="/contact"
            size="lg"
            variant="brand"
            className="font-bold shadow-brand"
          >
            Book Free Consultation
          </SpecularButton>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-bold text-slate-800 dark:text-white hover:border-brand transition-colors"
          >
            See Client Results <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Delivered Capability Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <SectionHeading
          tag="Delivered Capabilities"
          title={
            <>
              Sensor Telemetry &amp; <span className="text-gradient">Real-Time Dashboards</span>
            </>
          }
          subtitle="Each sensor array connects into a unified dashboard layer with configurable thresholds, real-time multi-channel alerts (SMS/email/webhook), and historical trend reporting."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERED_MONITORS.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 0.05}>
              <PremiumCard className="p-6 sm:p-8 h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl ${m.bg} ${m.color}`}>
                      <m.icon className="h-6 w-6" />
                    </div>
                    <PremiumBadge className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {m.badge}
                    </PremiumBadge>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                    {m.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 space-y-2">
                  {m.points.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </PremiumCard>
            </Reveal>
          ))}

          {/* Unified Dashboard Highlights Card */}
          <Reveal delay={0.3}>
            <PremiumCard className="p-6 sm:p-8 h-full flex flex-col justify-between rounded-3xl bg-linear-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/20 text-white shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-emerald-500/20 text-[#70FF4A]">
                    <Radio className="h-6 w-6 animate-pulse" />
                  </div>
                  <PremiumBadge className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-[#70FF4A] border-emerald-500/30">
                    Live Dispatch Layer
                  </PremiumBadge>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  Unified Operational Control
                </h3>
                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed font-medium">
                  Real-time multi-channel notification engine dispatching critical threshold alerts to control room monitors, engineer mobile devices, and automated plant shutoff valves.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Dispatch Engine</div>
                  <div className="text-sm font-bold text-white mt-0.5">Real-Time</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Architecture</div>
                  <div className="text-sm font-bold text-white mt-0.5">High Availability</div>
                </div>
              </div>
            </PremiumCard>
          </Reveal>
        </div>
      </section>

      {/* How It Works Methodology */}
      <section className="bg-slate-50/50 dark:bg-white/2 border-y border-slate-200/60 dark:border-white/5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            tag="Implementation Playbook"
            title={
              <>
                How we take IoT from <span className="text-gradient">sensor to production</span>
              </>
            }
            subtitle="A proven 5-stage engineering process ensuring zero data loss, reliable edge connectivity, and continuous SLA support."
            center
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {METHODOLOGY_STEPS.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.05}>
                <div className="bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 rounded-3xl p-5 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-brand">{s.step}</span>
                      <s.icon className="h-4 w-4 text-slate-400 dark:text-zinc-400" />
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* From Monitoring to Intelligence (Cross-Linking Section) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-slate-900 via-[#031224] to-slate-950 border border-slate-800 p-8 sm:p-12 md:p-16 text-white shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#70FF4A] block mb-3">
                Architectural Continuity
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                From Monitoring to Intelligence
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                Raw sensor data is the input, not the output. Every dashboard we build feeds directly into the same AI and data infrastructure covered in our{" "}
                <strong className="text-white">AI for Enterprise Data</strong> practice — so gas, water, and dust readings aren't just displayed, they're modeled, forecast, and correlated against operational ERP and compliance data.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services/ai-enterprise-data"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-[#70FF4A] transition-colors"
                >
                  Explore AI for Enterprise Data <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services/ai-enterprise-structure"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Explore Enterprise Structure
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Where We're Headed (Future Vision) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20 border-t border-slate-200/60 dark:border-white/5">
        <SectionHeading
          tag="Where We're Headed"
          title={
            <>
              Next-generation capabilities <span className="text-gradient">in development</span>
            </>
          }
          subtitle="Expanding our physical telemetry platform into automated ESG accounting, holistic asset visibility, and condition-based predictive maintenance."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {FUTURE_VISION_PILLARS.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.08}>
              <PremiumCard className="p-6 sm:p-8 h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-card border border-slate-200/80 dark:border-white/5 shadow-md hover:border-brand/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-brand/10 text-brand">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <h4 className="mt-2 text-sm font-semibold text-brand dark:text-brand-3">
                    {p.headline}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 space-y-2">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Planned Capabilities
                  </div>
                  {p.items.map((it) => (
                    <div key={it} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
