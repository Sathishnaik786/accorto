import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import {
  ClientLogos,
  ServicesShowcase,
  Industries,
  Journey,
  Metrics,
  CaseStudiesPreview,
  Testimonials,
  Certifications,
  FinalCTA,
} from "@/components/home-sections";
import { EcosystemSection } from "@/components/ecosystem/EcosystemSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accorto Technologies — Oracle ERP, SAP & AI Consulting" },
      {
        name: "description",
        content:
          "Accorto Technologies is a global consulting partner specializing in Oracle ERP, SAP, AI/ML, and cloud transformation for fortune 500 enterprise clients.",
      },
      { property: "og:title", content: "Accorto Technologies — Enterprise Consulting" },
      {
        property: "og:description",
        content: "Oracle ERP, SAP, AI/ML, Cloud, Digital Transformation for global enterprises.",
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
      <Certifications />
      <FinalCTA />
    </>
  );
}

