import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import {
  ClientLogos,
  ServicesShowcase,
  IndustriesSection as Industries,
  JourneySection as Journey,
  MetricsSection as Metrics,
  CaseStudiesPreview,
  Testimonials,
  FinalCTA,
} from "@/components/home";
import { EcosystemSection } from "@/components/ecosystem/EcosystemSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Accorto Technologies — Enterprise Systems, Governed Data & AI/IoT Consulting",
      },
      {
        name: "description",
        content:
          "Accorto Technologies connects core Oracle, SAP, and Salesforce systems with governed Lakehouse data and real-time edge IoT sensors into operational intelligence.",
      },
      {
        property: "og:title",
        content: "Accorto Technologies — Enterprise Systems & AI/IoT",
      },
      {
        property: "og:description",
        content:
          "Oracle, SAP, and Salesforce at the core. Real-time IoT monitoring at the edge. Accorto connects both ends with AI.",
      },
      { property: "og:url", content: "https://accorto.tech/" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Accorto Technologies",
          url: "https://accorto.tech/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <EcosystemSection />
      <ServicesShowcase />
      <Industries />
      <Journey />
      <Metrics />
      <CaseStudiesPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
