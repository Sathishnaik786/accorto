import React from "react";
import { PremiumCard } from "../ui/PremiumCard";
import { Counter } from "../counter";
import { cn } from "@/lib/utils";
import { useMotionSystem } from "@/lib/motion-presets";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  desc?: string;
}

export function StatsCluster({ className }: { className?: string }) {
  const { shouldReduceMotion } = useMotionSystem();

  const stats: StatItem[] = [
    {
      value: 10,
      suffix: "+",
      label: "Industries Served",
      desc: "Healthcare, Finance, Retail & more",
    },
    {
      value: 100,
      suffix: "+",
      label: "Enterprise Projects",
      desc: "Core transformations shipped globally",
    },
    {
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Validated via post-launch surveys",
    },
    { value: 24, suffix: "×7", label: "Global Support", desc: "Follow-the-sun managed operations" },
  ];

  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-6 select-none", className)}>
      {stats.map((s, idx) => {
        const floatAnim = shouldReduceMotion
          ? {}
          : {
              y: [0, -6 - (idx % 2) * 4, 0],
              transition: {
                duration: 5 + idx * 0.8,
                repeat: Infinity,
                ease: "easeInOut" as const,
              },
            };

        return (
          <motion.div key={idx} animate={floatAnim} className="h-full">
            <PremiumCard
              className="p-6 flex flex-col justify-between gap-4 h-full border border-slate-200/60 dark:border-white/10 rounded-4xl shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                  {s.label}
                </span>
                <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-brand mt-1 leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
              </div>
              {s.desc && (
                <p className="text-[10px] text-zinc-500 leading-normal font-medium mt-2">
                  {s.desc}
                </p>
              )}
            </PremiumCard>
          </motion.div>
        );
      })}
    </div>
  );
}
