export interface IndustrySector {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  highlight: string;
  image: string;
  imageAlt: string;
  link: string;
  linkText: string;
}

export const INDUSTRIES: IndustrySector[] = [
  {
    id: "utilities-environmental",
    name: "Utilities & Environmental",
    category: "Utilities & Environmental",
    shortDesc: "Real-time emissions, water quality, gas safety, and IoT telemetry compliance.",
    challenges: [
      "Unmonitored environmental leaks",
      "Delayed regulatory compliance reports",
      "Manual site inspection latency",
    ],
    solutions: [
      "Real-time sensor arrays (O2, H2, dust, gas, water)",
      "Automated compliance reporting pipelines",
      "Predictive anomaly alert dispatch",
    ],
    benefits: ["Continuous compliance audit readiness", "Sub-second incident alerting", "Single facility dashboard"],
    highlight: "Regional power & water authority deployed real-time gas and effluent monitoring across 40+ facilities.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80",
    imageAlt: "Environmental monitoring utilities smart sensors and real-time dashboard telemetry",
    link: "/services/ai-iot",
    linkText: "Explore AI & IoT Solutions",
  },
  {
    id: "education",
    name: "Education",
    category: "Education",
    shortDesc: "Smart campus, SIS modernization, online learning platforms.",
    challenges: [
      "Fragmented student systems",
      "Hybrid learning at scale",
      "Outdated campus operations",
    ],
    solutions: ["Modern SIS on cloud", "Smart campus platforms", "AI-driven student success"],
    benefits: ["+18% retention", "Lower IT TCO", "Faster admissions"],
    highlight: "Top-100 university unified 9 systems into one student platform in 7 months.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",
    imageAlt: "Education smart campus and student information systems",
    link: "/industries",
    linkText: "Explore solutions",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    category: "Healthcare",
    shortDesc: "HIS, telehealth, claims AI, and HIPAA-grade cloud.",
    challenges: ["Siloed clinical data", "Claims leakage", "Compliance burden"],
    solutions: ["Interoperable HIS", "AI claims integrity", "HIPAA-grade cloud"],
    benefits: ["-32% claim denials", "Faster discharge", "Audit-ready"],
    highlight: "Multi-hospital network deployed AI claims engine across 12 facilities.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
    imageAlt: "Healthcare interoperable systems and clinical data cloud",
    link: "/industries",
    linkText: "Explore solutions",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    category: "Manufacturing",
    shortDesc: "Smart factory, MES, predictive maintenance and IoT.",
    challenges: ["Unplanned downtime", "Supply chain shocks", "Quality variability"],
    solutions: ["Predictive maintenance", "Control tower", "Digital twin"],
    benefits: ["-41% downtime", "Inventory -22%", "Yield +9pt"],
    highlight: "Global OEM cut maintenance cost by 41% with predictive AI across 22 plants.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    imageAlt: "Smart manufacturing, digital twin, and predictive maintenance",
    link: "/industries",
    linkText: "Explore solutions",
  },
  {
    id: "retail",
    name: "Retail",
    category: "Retail",
    shortDesc: "Unified commerce, demand forecasting, in-store AI.",
    challenges: ["Channel fragmentation", "Stockouts", "Personalization at scale"],
    solutions: ["Unified commerce", "Demand forecasting", "In-store AI"],
    benefits: ["+24% conversion", "Faster fulfillment", "Higher AOV"],
    highlight: "Retail conglomerate unified 9 ERPs and 4 commerce stacks in 11 months.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
    imageAlt: "Unified retail commerce and AI demand forecasting",
    link: "/industries",
    linkText: "Explore solutions",
  },
  {
    id: "finance",
    name: "Finance",
    category: "Finance",
    shortDesc: "Core banking modernization, risk, and AI fraud detection.",
    challenges: ["Legacy core", "Fraud at scale", "Regulatory burden"],
    solutions: ["Core modernization", "Real-time fraud AI", "RegTech automation"],
    benefits: ["92% fraud caught", "Lower cost-to-serve", "Faster product launches"],
    highlight: "Tier-1 bank deployed real-time fraud AI scoring 1.2M txns/day.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&q=80",
    imageAlt: "Banking core modernization and real-time fraud prevention",
    link: "/industries",
    linkText: "Explore solutions",
  },
  {
    id: "government",
    name: "Government",
    category: "Government",
    shortDesc: "Citizen portals, open data platforms, secure cloud.",
    challenges: ["Citizen experience gaps", "Data silos", "Long procurement cycles"],
    solutions: ["Citizen portals", "Open data platforms", "Secure cloud"],
    benefits: ["Higher satisfaction", "Operational savings", "Transparency"],
    highlight: "State agency launched citizen portal with 2.4M monthly users.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    imageAlt: "Government public sector digital portals and cloud transformation",
    link: "/industries",
    linkText: "Explore solutions",
  },
  {
    id: "logistics",
    name: "Logistics",
    category: "Logistics",
    shortDesc: "Control towers, route optimization, warehouse robotics.",
    challenges: ["Visibility gaps", "Route inefficiency", "Warehouse labor"],
    solutions: ["Control towers", "Route optimization", "Warehouse robotics"],
    benefits: ["-19% fuel", "OTIF +12pt", "Higher throughput"],
    highlight: "3PL operator improved OTIF by 12 points using control tower AI.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    imageAlt: "Logistics supply chain control towers and route optimization",
    link: "/industries",
    linkText: "Explore solutions",
  },
];
