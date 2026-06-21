import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useMotionSystem, useMouseParallax } from "../lib/motion-presets";
import { PremiumCard } from "./ui/PremiumCard";
import { GlassPanel } from "./ui/GlassPanel";
import { GlassMetricCard } from "./premium/GlassMetricCard";
import { Counter } from "./counter";

export function Hero() {
  const {
    heroReveal,
    buttonTap,
    buttonTransition,
    slowFloat,
  } = useMotionSystem();

  const { parallaxProps, handleMouseMove, handleMouseLeave } = useMouseParallax(5);

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80",
  ];

  const firstLineWords = "Build and Scale with".split(" ");
  const secondLineWords = "the Right Systems".split(" ");

  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-start overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24 bg-[#002624]"
      style={{
        background: "#002624",
      }}
    >
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        
        {/* Left Column - 45% (scaled to 5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left space-y-10">
          {/* Headline */}
          <motion.h1
            initial="initial"
            animate="animate"
            className="font-display font-bold tracking-tight text-white leading-[0.95] flex flex-col items-start"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 4.6rem)",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="block sm:whitespace-nowrap">
              {firstLineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={heroReveal(0.1 + idx * 0.05)}
                  className={`inline-block mr-[0.25em] ${idx === 0 ? "pl-2 -ml-2" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block sm:whitespace-nowrap">
              {secondLineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={heroReveal(0.3 + idx * 0.05)}
                  className={`inline-block mr-[0.25em] text-gradient ${idx === 0 ? "pl-2 -ml-2" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroReveal(0.5)}
            initial="initial"
            animate="animate"
            className="text-base sm:text-lg text-zinc-400 leading-8 max-w-[500px]"
          >
            We design scalable systems that streamline operations, improve efficiency, and support sustainable business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroReveal(0.6)}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-sm text-[#002624] bg-[#FCE76C] transition-all duration-200 hover:scale-105 shadow-[0_10px_30px_rgba(252,231,108,0.15)]"
              style={{
                borderRadius: "18px",
                height: "48px",
                paddingInline: "28px",
              }}
            >
              Get in touch
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-sm text-white hover:text-[#FCE76C] transition-all duration-200 hover:translate-x-1"
              style={{
                height: "48px",
                paddingInline: "20px",
              }}
            >
              Explore Services <span className="ml-1.5 font-sans">→</span>
            </Link>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            variants={heroReveal(0.8)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-start gap-4 pt-4"
          >
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Client Profile"
                  className="h-9 w-9 rounded-full border-2 border-[#002624] object-cover shadow-md brightness-[0.95] contrast-[1.05]"
                  loading="lazy"
                />
              ))}
              <div className="h-9 w-9 rounded-full border-2 border-[#002624] bg-[#FCE76C] text-[#002624] font-display font-bold text-xs flex items-center justify-center shadow-md">
                <Counter to={10} suffix="k+" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-semibold text-left">
              Trusted by <Counter to={100} suffix="+" /> growing businesses worldwide
            </p>
          </motion.div>
        </div>

        {/* Right Column - 55% (scaled to 7 cols) */}
        <div 
          className="lg:col-span-7 flex items-center justify-center relative w-full mt-10 lg:mt-0 px-4 sm:px-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Large ambient blur behind visuals */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand/10 opacity-30 blur-[120px] pointer-events-none z-0" />
          
          <motion.div {...parallaxProps} className="relative z-10 inline-block">
            {/* Center Architecture/Dashboard Card */}
            <PremiumCard hover={false} className="w-[280px] min-[360px]:w-[320px] min-[400px]:w-[360px] sm:w-[420px] h-auto sm:aspect-4/3 p-4 sm:p-6 text-left relative z-20">
              <div className="flex items-center gap-1.5 pb-4 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] text-zinc-500 font-mono ml-3">accorto-control-plane</span>
              </div>
              <div className="mt-4 space-y-4 font-mono text-[10px]">
                <div className="flex justify-between items-center text-slate-300">
                  <span>$ accorto run core-pipeline</span>
                  <span className="text-emerald-400">● LIVE</span>
                </div>
                <div className="inner-card p-3.5 space-y-2">
                  <div className="flex justify-between text-zinc-400">
                    <span>Oracle Cloud sync</span>
                    <span className="text-emerald-400">99.9%</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>SAP HANA ledger</span>
                    <span className="text-emerald-400">14ms latency</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>MLOps optimization</span>
                    <span className="text-[#FCE76C]">Active</span>
                  </div>
                </div>
                <div className="text-zinc-500 leading-normal">
                  [system] core agents deployed successfully.<br />
                  [system] optimization score: 9.4/10.
                </div>
              </div>
            </PremiumCard>
 
            {/* Top Right Floating Metric Card */}
            <div className="absolute right-[0px] xs:right-[-20px] sm:right-[-40px] top-[-30px] sm:top-[-40px] z-30">
              <GlassMetricCard label="Model Accuracy" value={98} suffix="%" trend="+12% YoY" className="w-[130px] sm:w-[150px]" />
            </div>
 
            {/* Right small AI pipeline card */}
            <div className="absolute right-[-30px] top-[120px] sm:right-[-50px] z-30 hidden sm:block">
              <GlassPanel className="p-4 flex flex-col gap-2 w-[150px] sm:w-[160px]">
                <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Core MLOps</span>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>AI Pipeline</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-brand w-[85%] rounded-full animate-border-shine" />
                </div>
              </GlassPanel>
            </div>
 
            {/* Bottom Left Floating Performance Card */}
            <div className="absolute left-[0px] xs:left-[-20px] sm:left-[-50px] bottom-[-30px] sm:bottom-[-40px] z-30">
              <motion.div variants={slowFloat} animate="animate">
                <PremiumCard
                  hover={false}
                  className="text-white p-4 sm:p-5 w-[200px] sm:w-[250px] flex flex-col gap-4 select-none"
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Performance</span>
                    <span className="text-[8px] font-bold bg-white/10 text-emerald-400 rounded-full px-2 py-0.5">+18%</span>
                  </div>
                  
                  {/* SVG Performance Chart */}
                  <div className="relative h-[55px] w-full flex items-end">
                    <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 200 80">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        d="M 15 65 C 40 50, 60 30, 85 55 C 105 75, 125 50, 145 65 C 165 75, 180 50, 195 40"
                        fill="none"
                        stroke="#89D7B7"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="120" cy="57" r="5" fill="#89D7B7" />
                    </svg>
                  </div>
                </PremiumCard>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
