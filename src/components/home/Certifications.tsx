import { motion } from "framer-motion";
import { Reveal } from "../section";
import { useMotionSystem } from "../../lib/motion-presets";
import { Award, Workflow, Cpu, ShieldCheck } from "lucide-react";

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
    <section className="py-10 md:py-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Certifications & Partnerships
          </p>
        </Reveal>
        <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.08}>
              <motion.div
                whileHover={cardHover}
                transition={cardHoverTransition}
                className="bg-white dark:bg-card border border-slate-100 dark:border-white/5 rounded-3xl p-5 flex flex-col items-center text-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <i.icon className="h-6 w-6 text-brand" />
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{i.name}</div>
                <div className="text-xs text-[#64748B] dark:text-slate-400 font-medium">
                  {i.lvl}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
