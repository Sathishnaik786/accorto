import React from "react";
import { SectionHeading } from "../section";
import { CenterFlow } from "../animations/CenterFlow";

const ECOSYSTEM_NODES = [
  { id: "openai", name: "OpenAI & LLMs", glowColor: "#10A37F", icon: "/logos/Open-AI.png" },
  { id: "salesforce", name: "Salesforce & PeopleSoft", glowColor: "#00A1E0" },
  { id: "aws", name: "AWS", glowColor: "#FF9900", icon: "/logos/amazon.png" },
  { id: "snowflake-databricks", name: "Snowflake & Databricks", glowColor: "#29B5E8" },
  { id: "sap", name: "SAP", glowColor: "#0FAAFF", icon: "/logos/sap.png" },
  { id: "gcp", name: "GCP", glowColor: "#4285F4", icon: "/logos/google_cloud.png" },
  { id: "azure", name: "Azure", glowColor: "#0078D4", icon: "/logos/Azure.png" },
  { id: "iot-sensors", name: "IoT & Sensors", glowColor: "#70FF4A" },
];

export function EcosystemSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-eco-bg border-y border-border/10 transition-colors duration-300">
      {/* Background radial atmosphere highlight */}
      <div className="absolute inset-0 bg-radial-subtle pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <SectionHeading
          tag="Technology Ecosystem"
          title={
            <>
              Enterprise Systems to the Field Floor. <span className="text-gradient">One Intelligence Layer.</span>
            </>
          }
          subtitle="Accorto orchestrates core ERP systems, governed Lakehouse data platforms, and real-world edge IoT sensor streams into a single connected operational fabric."
          center
        />

        {/* Center Flow Component (React Bits Pro) */}
        <div className="w-full mt-4 md:mt-6 flex justify-center">
          <CenterFlow
            centerTitle="ACCORTO"
            centerSubtitle="INTELLIGENCE LAYER"
            nodes={ECOSYSTEM_NODES}
            pulseColor="#00D9FF"
            lineWidth={1.85}
            pulseWidth={5.5}
            pulseDuration={4.2}
            enableMouseParallax={true}
            enableScrollParallax={true}
          />
        </div>
      </div>
    </section>
  );
}

export default EcosystemSection;
