import { Reveal } from "../section";

export function ClientLogos() {
  const logos = ["Oracle", "SAP", "AWS", "Azure", "Google Cloud", "OpenAI"];
  const doubled = [...logos, ...logos, ...logos, ...logos];
  return (
    <section className="py-8 md:py-12 border-y border-border/50">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Trusted by industry leaders worldwide
        </p>
      </Reveal>
      <div className="relative overflow-hidden no-scrollbar">
        <div className="flex gap-16 animate-marquee w-max">
          {doubled.map((l, i) => (
            <div
              key={i}
              className="font-display text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {l}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
