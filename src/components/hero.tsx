import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles, TrendingUp, Cloud, Cpu, BarChart3, Database } from "lucide-react";
import { OrbBackground } from "./orb-background";
import { Counter } from "./counter";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <OrbBackground />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-6 space-y-7">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              Trusted by Enterprise Clients across 14 countries
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight"
          >
            Transforming Businesses Through{" "}
            <span className="text-gradient">Oracle ERP, SAP, AI</span> & Digital Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Helping organizations accelerate growth through enterprise technology, cloud transformation, intelligent automation, and strategic consulting.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap items-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-xl shadow-brand/30 hover:scale-[1.03] transition-transform">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:scale-[1.03] transition-transform">
              <Play className="h-4 w-4" /> Explore Services
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {[
              { v: 100, s: "+", l: "Projects Delivered" },
              { v: 50, s: "+", l: "Enterprise Clients" },
              { v: 98, s: "%", l: "Client Satisfaction" },
              { v: 24, s: "/7", l: "Support" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-display text-3xl font-semibold text-gradient"><Counter to={m.v} suffix={m.s} /></div>
                <div className="text-xs text-muted-foreground mt-1">{m.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden glass-strong shadow-2xl"
          >
            <video
              autoPlay loop muted playsInline preload="metadata"
              poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="https://cdn.coverr.co/videos/coverr-an-overhead-view-of-a-busy-business-meeting-9079/1080p.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 via-transparent to-brand-2/30 mix-blend-overlay" />

            <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
              <div className="glass-strong rounded-2xl px-3 py-2 text-[11px] font-mono text-white/90 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> LIVE · Enterprise Cloud
              </div>
              <div className="glass-strong rounded-2xl px-3 py-2 text-[11px] text-white/90">v4.2 · Q4</div>
            </div>
          </motion.div>

          <FloatingCard className="absolute -left-4 top-10 hidden md:flex" delay={0.6} icon={<TrendingUp className="h-4 w-4 text-emerald-400" />} label="Revenue Growth" value="+38.4%" sub="YoY uplift" />
          <FloatingCard className="absolute -right-6 top-40 hidden md:flex" delay={0.8} icon={<BarChart3 className="h-4 w-4 text-cyan-400" />} label="ROI" value="312%" sub="Average client ROI" />
          <FloatingCard className="absolute -left-8 bottom-44 hidden md:flex" delay={1.0} icon={<Cloud className="h-4 w-4 text-blue-400" />} label="Cloud Adoption" value="98%" sub="Workloads migrated" />
          <FloatingCard className="absolute -right-4 bottom-24 hidden md:flex" delay={1.2} icon={<Cpu className="h-4 w-4 text-violet-400" />} label="AI Automation" value="1.2M" sub="Decisions / day" />
          <FloatingCard className="absolute left-10 -bottom-4 hidden md:flex" delay={1.4} icon={<Database className="h-4 w-4 text-pink-400" />} label="ERP Progress" value="92%" sub="Go-live readiness" />

          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#06B6D4] opacity-30 blur-3xl" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground">
        <Sparkles className="h-3 w-3" /> Scroll to explore
      </div>
    </section>
  );
}

function FloatingCard({ icon, label, value, sub, className = "", delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      className={`glass-strong rounded-2xl p-3 pr-5 w-[200px] shadow-xl ${className} animate-float-slow`}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">{icon}</div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-white/60">{label}</div>
          <div className="font-display font-semibold text-white">{value}</div>
          <div className="text-[10px] text-white/50">{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}
