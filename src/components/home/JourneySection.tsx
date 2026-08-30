import { Reveal, SectionHeading } from "../section";
import { Search, FileCheck2, Hammer, LineChart, LifeBuoy } from "lucide-react";

export function JourneySection() {
  const steps = [
    {
      icon: Search,
      name: "Discover",
      desc: "Stakeholder interviews, current-state assessment, value mapping.",
    },
    {
      icon: FileCheck2,
      name: "Plan",
      desc: "Roadmap, architecture blueprints, governance, and KPIs.",
    },
    {
      icon: Hammer,
      name: "Implement",
      desc: "Agile delivery pods, accelerators, integration & data migration.",
    },
    {
      icon: LineChart,
      name: "Optimize",
      desc: "Performance tuning, AI augmentation, adoption analytics.",
    },
    {
      icon: LifeBuoy,
      name: "Support",
      desc: "24/7 managed services, SLA monitoring, continuous innovation.",
    },
  ];

  return (
    <section className="py-12 md:py-16 relative bg-radial-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="Our Methodology"
          title={
            <>
              The Accorto <span className="text-gradient">Transformation Journey</span>
            </>
          }
          subtitle="A proven five-stage playbook used across 100+ enterprise programs."
          center
        />
        <div className="relative mt-10 md:mt-12">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-linear-to-r from-transparent via-brand to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="text-center group">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-[0.06] blur-xl group-hover:opacity-10 transition-opacity" />
                    <div className="relative h-24 w-24 grid place-items-center rounded-full bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md">
                      <s.icon className="h-9 w-9 text-brand" />
                    </div>
                    <div className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-white text-xs font-bold shadow-sm">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B] dark:text-slate-300 font-medium">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
