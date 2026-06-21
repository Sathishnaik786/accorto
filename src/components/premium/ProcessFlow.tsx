import React from "react";
import { GlassPanel } from "../ui/GlassPanel";
import { cn } from "@/lib/utils";
import { HelpCircle, Layers, Settings, ShieldAlert, Sparkles } from "lucide-react";

interface Step {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
}

export function ProcessFlow({ className }: { className?: string }) {
  const steps: Step[] = [
    { icon: HelpCircle, label: "Consultation", desc: "Discover bottlenecks and align operational outcomes." },
    { icon: Layers, label: "Solution Architecture", desc: "Design future states, integrations, and schemas." },
    { icon: Settings, label: "Implementation", desc: "Deploy certified solutions and migrate core ledgers." },
    { icon: ShieldAlert, label: "Optimization", desc: "Refine pipeline parameters and lower FinOps footprint." },
    { icon: Sparkles, label: "Continuous Growth", desc: "Unleash AI agents and scale cross-org pipelines." },
  ];

  const paddings = [
    "p-5 md:p-6 lg:-translate-y-4", // Consultation
    "p-6 md:p-8 lg:translate-y-4",  // Solution Architecture
    "p-5 md:p-6 lg:-translate-y-2", // Implementation
    "p-6 md:p-8 lg:translate-y-6",  // Optimization
    "p-5 md:p-6 lg:-translate-y-6", // Continuous Growth
  ];

  return (
    <div className={cn("w-full py-16 relative select-none", className)}>
      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center mb-16">
        Delivery Lifecycle
      </h4>
      
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-6 min-h-0">
        {/* Desktop horizontal connector line */}
        <div className="hidden lg:block absolute left-[5%] right-[5%] top-[50%] -translate-y-1/2 h-[2px] bg-white/[0.05] z-0 overflow-hidden">
          <div className="w-full h-full relative">
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-linear-to-r from-transparent via-brand to-transparent animate-border-shine" style={{ animationDuration: "4s" }} />
          </div>
        </div>

        {/* Mobile vertical connector line */}
        <div className="sm:hidden absolute left-[19px] top-6 bottom-6 w-[2px] bg-white/[0.05] z-0 overflow-hidden">
          <div className="h-full w-full relative">
            <div className="absolute left-0 right-0 top-0 h-24 bg-linear-to-b from-transparent via-brand to-transparent animate-border-shine" style={{ animationDuration: "3s" }} />
          </div>
        </div>

        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="flex-1 flex flex-col items-stretch relative z-10 group">
              {/* Timeline indicator node */}
              {/* Desktop node dot */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#002624] border-2 border-brand-2 z-20 shadow-md group-hover:scale-125 transition-transform duration-300" />
              
              {/* Mobile node dot */}
              <div className="sm:hidden absolute left-4 top-6 w-2.5 h-2.5 rounded-full bg-brand-2 z-20 shadow-sm" />

              {/* Step Card */}
              <div className="pl-10 sm:pl-0 flex flex-col items-stretch h-full">
                <GlassPanel className={cn("flex flex-col items-center md:items-center text-left md:text-center gap-3 w-full hover:border-brand-2/40 transition-all duration-300 shadow-md", paddings[idx])}>
                  <div className="h-9 w-9 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-center text-brand dark:text-brand-3 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{s.label}</span>
                    <p className="text-[10px] text-zinc-500 mt-1.5 leading-relaxed font-medium">{s.desc}</p>
                  </div>
                </GlassPanel>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
