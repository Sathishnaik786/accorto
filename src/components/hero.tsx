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
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-end overflow-hidden pt-20 pb-6 lg:pt-24 lg:pb-10 bg-[#031224]"
      style={{
        background: "#031224",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain lg:object-cover z-0 pointer-events-none"
      >
        <source src="/videos/Hero_video.mp4" type="video/mp4" />
      </video>

      {/* Main Container - Aligned to bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 mt-auto">
        
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
            className="flex flex-col items-start gap-4 pt-1"
          >
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Client Profile"
                  className="h-9 w-9 rounded-full border-2 border-[#031224] object-cover shadow-md brightness-[0.95] contrast-[1.05]"
                  loading="lazy"
                />
              ))}
              <div className="h-9 w-9 rounded-full border-2 border-[#031224] bg-gradient-brand text-[#031224] font-display font-bold text-xs flex items-center justify-center shadow-md">
                <Counter to={10} suffix="k+" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-semibold text-left">
              Trusted by <Counter to={100} suffix="+" /> growing businesses worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
