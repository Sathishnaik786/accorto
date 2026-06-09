import { ReactNode } from "react";
import { OrbBackground } from "@/components/orb-background";
import { Reveal } from "@/components/section";

export function PageHero({ tag, title, subtitle, children }: { tag: string; title: ReactNode; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <OrbBackground />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            {tag}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
          </Reveal>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
