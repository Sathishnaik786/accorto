import React from "react";
import { SectionHeading } from "../section";
import { CenterFlow, TechGroupNode } from "../animations/CenterFlow";

export const ECOSYSTEM_GROUPS: TechGroupNode[] = [
  {
    id: "ai-iot",
    title: "AI & IoT",
    angle: -Math.PI / 2, // -90 deg (12 o'clock / Top)
    glowColor: "#10A37F",
    accentColor: "#00E5A3",
    ariaLabel: "AI & IoT: AI, OpenAI & LLMs, IoT & Sensors",
    items: [
      { name: "AI" },
      { name: "OpenAI & LLMs", icon: "/logos/Open-AI.png" },
      { name: "IoT & Sensors" },
    ],
  },
  {
    id: "data-platforms",
    title: "Data Platforms",
    angle: -Math.PI / 2 + (2 * Math.PI) / 5, // -18 deg (Upper-Right)
    glowColor: "#00D9FF",
    accentColor: "#29B5E8",
    ariaLabel: "Data Platforms: Snowflake, Databricks",
    items: [
      { name: "Snowflake" },
      { name: "Databricks" },
    ],
  },
  {
    id: "career-development",
    title: "Career & Development",
    angle: -Math.PI / 2 + 2 * ((2 * Math.PI) / 5), // +54 deg (Lower-Right)
    glowColor: "#38BDF8",
    accentColor: "#60A5FA",
    ariaLabel: "Career & Development: Career, Development, Academy",
    items: [
      { name: "Career" },
      { name: "Development" },
      { name: "Academy" },
    ],
  },
  {
    id: "enterprise-platforms",
    title: "Enterprise Platforms",
    angle: -Math.PI / 2 + 3 * ((2 * Math.PI) / 5), // +126 deg (Lower-Left)
    glowColor: "#0FAAFF",
    accentColor: "#00A1E0",
    ariaLabel: "Enterprise Platforms: Oracle, SAP, Salesforce",
    items: [
      { name: "Oracle", icon: "/logos/oracle.png" },
      { name: "SAP", icon: "/logos/sap.png" },
      { name: "Salesforce" },
    ],
  },
  {
    id: "cloud-platforms",
    title: "Cloud Platforms",
    angle: -Math.PI / 2 + 4 * ((2 * Math.PI) / 5), // +198 deg (Upper-Left)
    glowColor: "#168CFF",
    accentColor: "#4285F4",
    ariaLabel: "Cloud Platforms: AWS, Azure, GCP",
    items: [
      { name: "AWS", icon: "/logos/amazon.png" },
      { name: "Azure", icon: "/logos/Azure.png" },
      { name: "GCP", icon: "/logos/google_cloud.png" },
    ],
  },
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

        {/* 5-Group Intelligence Layer Radial Map */}
        <div className="w-full mt-4 md:mt-6 flex justify-center">
          <CenterFlow
            centerTitle="ACCORTO"
            centerSubtitle="INTELLIGENCE LAYER"
            groups={ECOSYSTEM_GROUPS}
            pulseColor="#00D9FF"
            lineWidth={1.85}
            pulseWidth={5.0}
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
