import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import {
  ClientLogos, TechEcosystem, ServicesShowcase, Industries,
  Journey, Metrics, CaseStudiesPreview, Testimonials, Certifications, FinalCTA,
} from "@/components/home-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accorto Technologies — Oracle ERP, SAP, AI & Cloud Consulting" },
      { name: "description", content: "Enterprise consulting in Oracle ERP, SAP, AI, Cloud and Digital Transformation. Trusted by 50+ enterprise clients across 14 countries." },
      { property: "og:title", content: "Accorto Technologies — Enterprise Consulting" },
      { property: "og:description", content: "Oracle ERP, SAP, AI/ML, Cloud, Digital Transformation for global enterprises." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <TechEcosystem />
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
