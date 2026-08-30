import { ScrollVelocity } from "../animations/ScrollVelocity";

export function ActionMarquee() {
  return (
    <div className="py-6 sm:py-10 border-y border-border/30 overflow-hidden bg-slate-50/50 dark:bg-card/30 backdrop-blur-xs">
      <ScrollVelocity
        items={[
          "BUILD FOR TOMORROW",
          "MODERNIZE AT SCALE",
          "TRANSFORM WITH PURPOSE",
          "SHIP ENTERPRISE EXCELLENCE",
        ]}
        direction="right"
        defaultVelocity={1.6}
      />
    </div>
  );
}
