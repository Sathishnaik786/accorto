import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useMotionSystem } from "../lib/motion-presets";
import { Counter } from "./counter";

export function Hero() {
  const {
    heroReveal,
  } = useMotionSystem();

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80",
  ];

  return (
    <section
      className="relative w-full min-h-0 flex flex-col lg:h-screen lg:justify-end overflow-hidden pt-20 pb-8 lg:pt-24 lg:pb-10 bg-background dark:bg-[#031224]"
    >
      {/* Light mode radial green glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(112,255,74,0.04)_0%,transparent_70%)] dark:hidden pointer-events-none z-0" />

      {/* Background Video — mobile card with gap/corners/animations, absolute full-screen on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full px-4 sm:px-6 mt-10 lg:absolute lg:inset-0 lg:w-full lg:h-full lg:px-0 lg:mt-0 z-0"
      >
        <div className="relative w-full aspect-video lg:absolute lg:inset-0 lg:w-full lg:h-full lg:aspect-auto rounded-3xl lg:rounded-none overflow-hidden border border-slate-200/80 dark:border-white/10 lg:border-none shadow-[0_25px_60px_rgba(15,23,42,0.06)] dark:shadow-[0_25px_60px_rgba(0,162,255,0.15)] lg:shadow-none animate-float-slow-oscillation lg:animate-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover lg:max-w-none! rounded-3xl lg:rounded-none"
          >
            <source src="/videos/Hero_video.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Main Container - Flow-positioned below video on mobile, mt-auto on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 mt-6 lg:mt-auto">
        
        <div className="flex flex-col items-start text-left space-y-4 sm:space-y-6">
          {/* CTA Buttons */}
          <motion.div
            variants={heroReveal(0.6)}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-sm text-[#031224] bg-gradient-brand transition-all duration-200 hover:scale-105 shadow-brand hover:shadow-brand-lg"
              style={{
                borderRadius: "var(--button-radius, 16px)",
                height: "48px",
                paddingInline: "28px",
              }}
            >
              Get in touch
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-sm text-slate-700 dark:text-white lg:text-white hover:text-brand dark:hover:text-[#FCE76C] lg:hover:text-[#FCE76C] transition-all duration-200 hover:translate-x-1"
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
            className="flex flex-col items-start gap-4 pt-1"
          >
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Client Profile"
                  className="h-9 w-9 rounded-full border-2 border-white dark:border-[#031224] lg:border-[#031224] object-cover shadow-md brightness-[0.95] contrast-[1.05]"
                  loading="lazy"
                />
              ))}
              <div className="h-9 w-9 rounded-full border-2 border-white dark:border-[#031224] lg:border-[#031224] bg-gradient-brand text-[#031224] font-display font-bold text-xs flex items-center justify-center shadow-md">
                <Counter to={10} suffix="k+" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 lg:text-white/70 font-semibold text-left">
              Trusted by <Counter to={100} suffix="+" /> growing businesses worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
