import React from "react";
import { GlassPanel } from "../ui/GlassPanel";
import { cn } from "@/lib/utils";
import { Cpu, Database, Eye, GitBranch, LineChart, Terminal } from "lucide-react";

interface Node {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
}

export function ArchitectureDiagram({ className }: { className?: string }) {
  const nodes: Node[] = [
    {
      icon: Database,
      label: "Business Problem",
      desc: "Identify operational bottlenecks & metrics.",
    },
    {
      icon: GitBranch,
      label: "Data Pipeline",
      desc: "Unify ERP, CRM, and cloud ledger structures.",
    },
    { icon: Cpu, label: "AI Models", desc: "Fine-tuned LLMs & neural prediction networks." },
    { icon: Terminal, label: "Automation Layer", desc: "Orchestrate agentic workflows & APIs." },
    { icon: LineChart, label: "Deployment", desc: "Hardened MLOps server pipelines." },
    { icon: Eye, label: "Continuous Monitoring", desc: "Verify ROI, accuracy, and compliance." },
  ];

  return (
    <div className={cn("w-full py-6 relative select-none", className)}>
      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center mb-10">
        Enterprise AI Pipelines
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
        {nodes.map((n, idx) => {
          const Icon = n.icon;
          return (
            <div key={idx} className="flex flex-col items-center text-center relative group">
              {/* Connector line for large screens */}
              {idx < nodes.length - 1 && (
                <div className="hidden lg:block absolute left-[calc(50%+45px)] top-6.5 w-[calc(100%-90px)] h-0.5 z-0 overflow-hidden">
                  <div className="w-full h-full bg-white/10 dark:bg-white/5 relative">
                    {/* Running light indicator */}
                    <div
                      className="absolute top-0 bottom-0 left-0 w-8 bg-linear-to-r from-transparent via-brand to-transparent animate-border-shine"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                </div>
              )}
              {/* Connector line for small screens */}
              {idx > 0 && (
                <div className="lg:hidden w-0.5 h-8 bg-white/10 dark:bg-white/5 my-2" />
              )}
              {/* Node Card */}
              <GlassPanel className="p-5 flex flex-col items-center gap-3 relative z-10 w-full">
                <div className="h-12 w-12 rounded-[18px] bg-white/5 border border-white/10 flex items-center justify-center text-brand dark:text-brand-3 shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
                    {n.label}
                  </span>
                  <p className="text-[10px] text-zinc-500 mt-1 leading-normal font-medium">
                    {n.desc}
                  </p>
                </div>
              </GlassPanel>
            </div>
          );
        })}
      </div>
    </div>
  );
}
