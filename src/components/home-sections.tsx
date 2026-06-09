import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./section";
import {
  Database, Layers3, Cpu, Cloud, Rocket, Megaphone, ShieldCheck, Brain, Workflow,
  Building2, Stethoscope, Factory, ShoppingBag, Landmark, Truck, GraduationCap,
  Search, FileCheck2, Hammer, LineChart, LifeBuoy, Quote, Star, Award,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Counter } from "./counter";

/* ---------- Client logos marquee ---------- */
export function ClientLogos() {
  const logos = ["TATA", "RELIANCE", "INFOSYS", "WIPRO", "HCL", "MAHINDRA", "BIRLA", "ADANI", "GODREJ", "BAJAJ"];
  const doubled = [...logos, ...logos];
  return (
    <section className="py-16 border-y border-border/50">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by industry leaders worldwide
        </p>
      </Reveal>
      <div className="relative overflow-hidden no-scrollbar">
        <div className="flex gap-16 animate-marquee w-max">
          {doubled.map((l, i) => (
            <div key={i} className="font-display text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap">
              {l}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

/* ---------- Technology Ecosystem ---------- */
export function TechEcosystem() {
  const techs = [
    { name: "Oracle", angle: 0 }, { name: "SAP", angle: 51 },
    { name: "AWS", angle: 102 }, { name: "Azure", angle: 153 },
    { name: "Google Cloud", angle: 204 }, { name: "OpenAI", angle: 255 },
    { name: "Power BI", angle: 306 },
  ];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="Technology Ecosystem"
          title={<>One partner. <span className="text-gradient">Every platform.</span></>}
          subtitle="We orchestrate the world's most powerful enterprise platforms into a single, intelligent operating fabric for your business."
          center
        />
        <div className="relative mt-20 mx-auto h-[440px] md:h-[520px] max-w-3xl">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 500">
            <defs>
              <radialGradient id="g1"><stop offset="0%" stopColor="#7C3AED" stopOpacity=".5" /><stop offset="100%" stopColor="#7C3AED" stopOpacity="0" /></radialGradient>
            </defs>
            {[140, 200, 240].map((r) => (
              <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="currentColor" strokeOpacity=".15" strokeDasharray="4 6" className="text-foreground" />
            ))}
            {techs.map((t, i) => {
              const rad = (t.angle * Math.PI) / 180;
              const x = 250 + Math.cos(rad) * 220;
              const y = 250 + Math.sin(rad) * 220;
              return (
                <motion.line key={i} x1="250" y1="250" x2={x} y2={y}
                  stroke="url(#g1)" strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.1 }}
                />
              );
            })}
          </svg>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-brand blur-2xl opacity-70" />
              <div className="relative grid h-32 w-32 place-items-center rounded-full bg-gradient-brand text-white text-center">
                <div>
                  <div className="font-display font-bold text-lg">ACCORTO</div>
                  <div className="text-[10px] opacity-90">Intelligence Layer</div>
                </div>
              </div>
            </div>
          </motion.div>
          {techs.map((t, i) => {
            const rad = (t.angle * Math.PI) / 180;
            return (
              <motion.div key={t.name}
                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, type: "spring" }}
                className="absolute"
                style={{
                  left: `calc(50% + ${Math.cos(rad) * 44}%)`,
                  top: `calc(50% + ${Math.sin(rad) * 44}%)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="glass-strong rounded-2xl px-4 py-2.5 font-display font-semibold whitespace-nowrap text-sm shadow-lg">
                  {t.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services showcase (featured layout, not repetitive) ---------- */
const SERVICES = [
  { icon: Database, name: "Oracle ERP", color: "from-red-500 to-orange-500", desc: "Oracle Cloud ERP, EBS, Fusion HCM, and PeopleSoft — implementation, migration, and managed services.", points: ["Cloud ERP migration", "EBS R12 upgrades", "Fusion HCM", "Oracle Analytics"] },
  { icon: Layers3, name: "SAP Solutions", color: "from-blue-500 to-sky-500", desc: "S/4HANA transformations, BTP innovations, SAP Fiori UX, and end-to-end module rollouts.", points: ["S/4HANA RISE", "SAP BTP", "Fiori & UI5", "SuccessFactors"] },
  { icon: Brain, name: "AI & Machine Learning", color: "from-violet-500 to-fuchsia-500", desc: "Generative AI, predictive analytics, computer vision, and enterprise MLOps platforms.", points: ["GenAI copilots", "Forecasting", "Computer vision", "MLOps"] },
  { icon: Rocket, name: "Digital Transformation", color: "from-emerald-500 to-cyan-500", desc: "Reimagine operations, products, and customer experiences end-to-end.", points: ["Operating models", "CX redesign", "Process mining", "Change mgmt"] },
  { icon: Cloud, name: "Cloud Consulting", color: "from-cyan-500 to-blue-500", desc: "Multi-cloud strategy and FinOps across AWS, Azure, GCP, and Oracle Cloud.", points: ["Landing zones", "Migration", "Kubernetes", "FinOps"] },
  { icon: Megaphone, name: "Digital Marketing", color: "from-pink-500 to-rose-500", desc: "Performance marketing, SEO, marketing automation, and brand experience at scale.", points: ["SEO & content", "Paid media", "MarTech stack", "Analytics"] },
];

export function ServicesShowcase() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="What we do"
          title={<>Services engineered for <span className="text-gradient">enterprise outcomes</span></>}
          subtitle="From core ERP to applied AI, our practices are built around measurable business results, not slideware."
        />
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl glass-strong p-8 md:p-10 group">
              <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-brand opacity-30 blur-3xl group-hover:opacity-50 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs"><Star className="h-3 w-3 text-amber-400" /> Featured Practice</div>
                <h3 className="mt-5 font-display text-3xl md:text-4xl font-semibold">Oracle ERP Cloud, end-to-end</h3>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  From discovery through hypercare, our certified Oracle practice has delivered 60+ ERP programs across Finance, SCM, HCM and EPM. We accelerate value with reusable accelerators, prebuilt analytics, and a global delivery pod.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {["Oracle Cloud ERP", "Fusion HCM", "EPM Cloud", "SCM Cloud", "Oracle Analytics", "Integration Cloud"].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {p}</div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                  <Stat label="ERP go-lives" value={<><Counter to={60} suffix="+" /></>} />
                  <Stat label="Avg ROI" value={<><Counter to={312} suffix="%" /></>} />
                  <Stat label="Faster close" value={<><Counter to={47} suffix="%" /></>} />
                </div>
                <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand transition-colors">
                  Explore Oracle practice <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {SERVICES.slice(1, 5).map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05} className="lg:col-span-5 lg:[&:nth-child(2)]:col-span-5">
              <ServiceCard {...s} />
            </Reveal>
          ))}

          <Reveal className="lg:col-span-12">
            <ServiceCard {...SERVICES[5]} wide />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-gradient">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
function ServiceCard({ icon: Icon, name, color, desc, points, wide = false }: any) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl glass p-6 md:p-7 h-full hover:bg-white/[0.04] transition-colors ${wide ? "md:flex md:items-center md:gap-10" : ""}`}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${color} mix-blend-overlay`} style={{ filter: "blur(40px)" }} />
      <div className={wide ? "md:flex-1" : ""}>
        <div className={`inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${color} text-white`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
      <div className={`mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground ${wide ? "md:mt-0 md:flex-1" : ""}`}>
        {points.map((p: string) => (
          <div key={p} className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-brand" /> {p}</div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Industries ---------- */
export function Industries() {
  const items = [
    { icon: GraduationCap, name: "Education", desc: "Smart campus, SIS modernization, online learning platforms." },
    { icon: Stethoscope, name: "Healthcare", desc: "HIS, telehealth, claims AI, and HIPAA-grade cloud." },
    { icon: Factory, name: "Manufacturing", desc: "Smart factory, MES, predictive maintenance and IoT." },
    { icon: ShoppingBag, name: "Retail", desc: "Unified commerce, demand forecasting, in-store AI." },
    { icon: Landmark, name: "Finance", desc: "Core banking modernization, risk, and AI fraud detection." },
    { icon: Truck, name: "Logistics", desc: "Control towers, route optimization, warehouse robotics." },
  ];
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading tag="Industries" title={<>Domain depth across <span className="text-gradient">regulated industries</span></>} subtitle="Tailored solutions built on years of operating inside the world's most complex industries." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 hover:bg-white/[0.05] transition-colors">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity blur-2xl" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand-soft text-brand"><it.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-xl font-semibold">{it.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                <Link to="/industries" className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-foreground/80 hover:text-brand">
                  Explore solutions <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
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
    { icon: Search, name: "Discover", desc: "Stakeholder interviews, current-state assessment, value mapping." },
    { icon: FileCheck2, name: "Plan", desc: "Roadmap, architecture blueprints, governance, and KPIs." },
    { icon: Hammer, name: "Implement", desc: "Agile delivery pods, accelerators, integration & data migration." },
    { icon: LineChart, name: "Optimize", desc: "Performance tuning, AI augmentation, adoption analytics." },
    { icon: LifeBuoy, name: "Support", desc: "24/7 managed services, SLA monitoring, continuous innovation." },
  ];
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading tag="Our Methodology" title={<>The Accorto <span className="text-gradient">Transformation Journey</span></>} subtitle="A proven five-stage playbook used across 100+ enterprise programs." center />
        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="text-center group">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-xl group-hover:opacity-50 transition-opacity" />
                    <div className="relative h-24 w-24 grid place-items-center rounded-full glass-strong">
                      <s.icon className="h-9 w-9 text-brand" />
                    </div>
                    <div className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-white text-xs font-bold">{i + 1}</div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
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
    { v: 100, s: "+", l: "Projects delivered", sub: "Across 14 countries" },
    { v: 50, s: "+", l: "Enterprise clients", sub: "Fortune 500 included" },
    { v: 312, s: "%", l: "Average client ROI", sub: "Within 18 months" },
    { v: 24, s: "/7", l: "Global support", sub: "Three follow-the-sun hubs" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 text-white">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.4), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.3), transparent 50%)" }} />
          <div className="relative grid md:grid-cols-4 gap-10">
            {items.map((m, i) => (
              <Reveal key={m.l} delay={i * 0.08}>
                <div>
                  <div className="font-display text-5xl md:text-6xl font-semibold"><Counter to={m.v} suffix={m.s} /></div>
                  <div className="mt-2 text-sm font-medium opacity-95">{m.l}</div>
                  <div className="text-xs opacity-80">{m.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Case Studies Preview ---------- */
export function CaseStudiesPreview() {
  const cases = [
    { tag: "Oracle ERP", title: "Global manufacturer cuts financial close by 47%", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80", metric: "47% faster close" },
    { tag: "SAP S/4HANA", title: "Retail conglomerate unifies 9 ERPs into one", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80", metric: "$28M savings" },
    { tag: "AI & ML", title: "Bank deploys real-time fraud AI at scale", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80", metric: "92% fraud caught" },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading tag="Case Studies" title={<>Outcomes that <span className="text-gradient">moved markets</span></>} subtitle="A glimpse at the enterprise programs that defined the last few quarters." />
          <Link to="/case-studies" className="text-sm font-medium inline-flex items-center gap-1 hover:text-brand">View all case studies <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Link to="/case-studies" className="group block overflow-hidden rounded-3xl glass">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-xs font-medium">{c.tag}</div>
                  <div className="absolute bottom-4 right-4 glass-strong rounded-full px-3 py-1 text-xs font-semibold">{c.metric}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold group-hover:text-brand transition-colors">{c.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">Read case study <ArrowRight className="h-3 w-3" /></div>
                </div>
              </Link>
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
    { quote: "Accorto's Oracle Cloud rollout was the cleanest enterprise program we have ever run — on time and 18% under budget.", name: "Anita R.", role: "CFO, Global Manufacturing" },
    { quote: "Their AI team replaced three of our forecasting tools with a single platform. Forecast accuracy jumped 22 points.", name: "Marcus L.", role: "VP Data, Retail" },
    { quote: "From strategy to hypercare, the team operated like an extension of ours. Truly world-class consulting.", name: "Priya N.", role: "CIO, Financial Services" },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading tag="Client Voices" title={<>Trusted by leaders who <span className="text-gradient">demand more</span></>} center />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-3xl glass p-7">
                <Quote className="h-7 w-7 text-brand" />
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3 w-3 fill-amber-400 text-amber-400" />)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
export function Certifications() {
  const items = [
    { icon: Award, name: "Oracle Partner Network", lvl: "Gold" },
    { icon: Award, name: "SAP Service Partner", lvl: "Certified" },
    { icon: ShieldCheck, name: "ISO 27001", lvl: "Information Security" },
    { icon: ShieldCheck, name: "SOC 2 Type II", lvl: "Audited" },
    { icon: Workflow, name: "AWS Advanced", lvl: "Consulting" },
    { icon: Building2, name: "Microsoft Solutions", lvl: "Partner" },
  ];
  return (
    <section className="py-20 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Certifications & Partnerships</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.05}>
              <div className="glass rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:bg-white/5 transition-colors">
                <i.icon className="h-6 w-6 text-brand" />
                <div className="text-sm font-semibold">{i.name}</div>
                <div className="text-xs text-muted-foreground">{i.lvl}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-brand opacity-20" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-gradient-brand opacity-40 blur-3xl" />
            <div className="relative">
              <SectionHeading tag="Let's build" title={<>Ready to ship the next era of <span className="text-gradient">your enterprise?</span></>} subtitle="Talk to an enterprise architect. 30 minutes, zero obligation, immediate value." center />
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand/30">
                  Book a consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/case-studies" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
                  See client results
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
