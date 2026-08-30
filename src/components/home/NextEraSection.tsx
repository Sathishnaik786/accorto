import { ScrollExpand } from "../animations/ScrollExpand";
import { SpecularButton } from "../animations/SpecularButton";
import { ArrowRight } from "lucide-react";

export function NextEraSection() {
  return (
    <section className="relative w-full overflow-visible z-10">
      <ScrollExpand
        src="/card_1.jpg"
        alt="Accorto enterprise cloud architecture and production AI engineering"
        title="Ready to Ship."
        scrollHint="Scroll to enter next era"
        useWindowScroll
        startWidth={42}
        startHeight={56}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.25}
        scrollDistance={1.1}
        holdDistance={0.35}
        smoothing={0.1}
        overlayScrim={0.55}
        className="w-full"
      >
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 border border-brand/40 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-[#70FF4A] uppercase backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#70FF4A] animate-pulse" />
            Next Era Enterprise
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Built for what comes next.
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            From modern cloud ERP architectures to autonomous multi-agent systems, Accorto turns enterprise vision into production-ready reality.
          </p>
          <div className="pt-2 flex justify-center">
            <SpecularButton
              to="/contact"
              variant="brand"
              size="md"
              className="shadow-brand hover:shadow-brand-lg"
            >
              Start Your Transformation <ArrowRight className="h-4 w-4" />
            </SpecularButton>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}
