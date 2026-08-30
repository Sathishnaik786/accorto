import { ScrollVelocity } from "../animations/ScrollVelocity";

export function EnterpriseMarquee() {
  return (
    <div className="py-6 sm:py-10 border-y border-border/30 overflow-hidden bg-slate-50/50 dark:bg-card/30 backdrop-blur-xs">
      <ScrollVelocity
        items={[
          "Real-Time IoT & Sensors",
          "Oracle & SAP Systems",
          "AI for Enterprise Structure",
          "Snowflake & Databricks AI",
          "Sub-Second Anomaly Alerts",
          "Autonomous Data Systems",
        ]}
        direction="left"
        defaultVelocity={1.6}
      />
    </div>
  );
}
