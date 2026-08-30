import { ScrollWordReveal } from "../animations/ScrollWordReveal";

export function IntroStatement() {
  return (
    <section className="py-20 md:py-28 lg:py-36 border-b border-border/40 bg-radial-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-left">
        <ScrollWordReveal
          text="We engineer mission-critical enterprise systems that unite Core ERP, Governed Data, AI, and IoT Edge Telemetry into real-world operational intelligence."
          highlightWords={["Core", "ERP,", "Governed", "Data,", "AI,", "IoT", "Edge", "Telemetry", "operational", "intelligence."]}
          className="max-w-5xl"
        />
      </div>
    </section>
  );
}
