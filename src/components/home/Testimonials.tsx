import { Reveal, SectionHeading } from "../section";
import { PremiumCard } from "../ui/PremiumCard";
import { Star } from "lucide-react";

export function Testimonials() {
  const items = [
    {
      quote:
        "Accorto's Oracle Cloud rollout was the cleanest enterprise program we have ever run — on time and 18% under budget.",
      name: "Anita R.",
      role: "CFO, Global Manufacturing",
    },
    {
      quote:
        "Their AI team replaced three of our forecasting tools with a single platform. Forecast accuracy jumped 22 points.",
      name: "Marcus L.",
      role: "VP Data, Retail",
    },
    {
      quote:
        "From strategy to hypercare, the team operated like an extension of ours. Truly world-class consulting.",
      name: "Priya N.",
      role: "CIO, Financial Services",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFB] dark:bg-[#061B33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag="Client Voices"
          title={
            <>
              Trusted by leaders who <span className="text-gradient">demand more</span>
            </>
          }
          center
        />
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <PremiumCard
                hover={true}
                className="h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1"
              >
                <div className="space-y-4 text-left">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed italic font-medium">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-zinc-500 mt-0.5 font-medium">
                      {t.role}
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
