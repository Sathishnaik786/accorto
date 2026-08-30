import { Reveal } from "../section";
import { Counter } from "../counter";
import { COMPANY_METRICS } from "@/data/metrics";

export function MetricsSection() {
  return (
    <section className="relative py-10 md:py-14 bg-[#F8FAFB] dark:bg-[#031224]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
          {COMPANY_METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3">
                <div className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight leading-[0.95]">
                  <Counter to={typeof m.value === "number" ? m.value : parseInt(m.value, 10)} suffix={m.suffix} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 font-bold mt-2">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
