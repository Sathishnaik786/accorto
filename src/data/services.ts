export interface ServicePractice {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  shortDesc: string;
  color: string;
  benefits: string[];
  features: string[];
  process: string[];
  stack: string[];
  results: [string, string][];
  image: string;
  badge?: string;
}

export const PRACTICES: ServicePractice[] = [
  {
    id: "ai-iot",
    name: "AI & IoT",
    tagline: "Connect. Monitor. Predict. Act in real time.",
    overview:
      "Accorto connects physical operational environments to intelligent edge systems. We deploy O2, H2, dust, gas, and water telemetry sensors with unified dashboards, custom threshold alerting, and predictive anomaly models.",
    shortDesc:
      "Physical-world intelligence — sensors, edge telemetry, operational dashboards, and predictive alerting for industrial facilities.",
    color: "from-emerald-400 via-teal-500 to-cyan-500",
    badge: "Flagship AI Offering",
    benefits: [
      "Sub-second anomaly alert dispatch",
      "Real-time safety & compliance reporting",
      "Predictive equipment failure detection",
      "Unified facility operational visibility",
    ],
    features: [
      "O2 & H2 safety monitors",
      "Particulate dust monitors",
      "Multi-gas composition analysers",
      "Water quality & supply analysers",
      "Edge telemetry gateways",
      "Live operational dashboards",
    ],
    process: [
      "Sensor & site audit",
      "Edge architecture blueprint",
      "Gateway & sensor deployment",
      "Threshold & alert configuration",
      "Anomaly AI model tuning",
      "24/7 SLA & telemetry support",
    ],
    stack: [
      "Edge Gateways",
      "MQTT / Modbus",
      "InfluxDB",
      "Time-Series AI",
      "Grafana Live",
      "Webhook / SMS Dispatch",
    ],
    results: [
      ["100%", "Telemetry visibility"],
      ["Real-time", "Alert dispatch"],
      ["24/7", "Autonomous monitoring"],
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  },
  {
    id: "ai-enterprise-structure",
    name: "AI for Enterprise Structure",
    tagline: "AI embedded into the systems that run your business.",
    overview:
      "We embed generative copilots, predictive engines, and intelligent automation directly into SAP S/4HANA, Oracle Cloud, Salesforce, and PeopleSoft workflows — right where your teams already work.",
    shortDesc:
      "AI embedded directly into SAP, Oracle, Salesforce, and PeopleSoft systems of record without brittle bolt-on tools.",
    color: "from-blue-500 via-indigo-500 to-violet-500",
    badge: "Enterprise Systems",
    benefits: [
      "Zero context switching for workers",
      "Automated multi-system approvals",
      "Predictive ERP ledger reconciliation",
      "Native enterprise role-based security",
    ],
    features: [
      "SAP S/4HANA & BTP AI copilots",
      "Oracle Fusion HCM & EPM AI",
      "Salesforce agentic workflows",
      "PeopleSoft automated compliance",
      "Cross-platform orchestration",
      "Enterprise guardrails & audit logs",
    ],
    process: [
      "Workflow discovery",
      "High-ROI insertion roadmap",
      "Native adapter integration",
      "Agentic pipeline testing",
      "User adoption rollout",
      "Continuous model alignment",
    ],
    stack: [
      "SAP BTP",
      "Oracle OIC / VBCS",
      "Salesforce Agentforce",
      "PeopleSoft Integration Broker",
      "LangChain",
      "Private VPC Models",
    ],
    results: [
      ["4", "Core platforms supported"],
      ["100%", "Native workflow integration"],
      ["SOC 2", "Compliant architecture"],
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
  {
    id: "ai-enterprise-data",
    name: "AI for Enterprise Data",
    tagline: "Your data platform is the foundation. We make it intelligent.",
    overview:
      "AI/ML pipelines, automated governance, and generative applications built natively on Snowflake and Databricks. We transform raw corporate data stores into governed, intelligent decision engines.",
    shortDesc:
      "Modern data engineering, Lakehouse architectures, RAG pipelines, and MLOps built natively on Snowflake and Databricks.",
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    badge: "Data & Lakehouse",
    benefits: [
      "Governed data access across units",
      "Sub-100ms vector semantic search",
      "Automated data pipeline quality checks",
      "Predictive modeling at scale",
    ],
    features: [
      "Snowflake Cortex & Snowpipe",
      "Databricks Lakehouse & Unity Catalog",
      "Enterprise RAG architectures",
      "Production MLOps pipelines",
      "Data lineage & quality guardrails",
      "Vector search & embeddings",
    ],
    process: [
      "Data maturity audit",
      "Lakehouse target blueprint",
      "Streaming pipeline ingestion",
      "Model & RAG deployment",
      "Cost & query optimization",
      "Managed MLOps governance",
    ],
    stack: [
      "Snowflake",
      "Databricks",
      "dbt",
      "Apache Spark",
      "Delta Lake",
      "MLflow",
      "Pinecone / Qdrant",
    ],
    results: [
      ["2", "Primary Lakehouse targets"],
      ["100%", "Governed data lineage"],
      ["Continuous", "MLOps evaluation"],
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  },
  {
    id: "oracle",
    name: "Oracle ERP",
    tagline: "From discovery to hypercare on Oracle Cloud and EBS.",
    overview:
      "Accorto's Oracle practice runs end-to-end Cloud ERP, EBS, Fusion HCM, EPM and Analytics programs with a delivery model honed across 60+ go-lives.",
    shortDesc:
      "Oracle Cloud ERP, EBS, Fusion HCM, and PeopleSoft — implementation, migration, and managed services.",
    color: "from-red-500 to-orange-500",
    benefits: [
      "47% faster financial close",
      "30% lower TCO post-migration",
      "Single source of operational truth",
      "Audit-ready compliance by design",
    ],
    features: [
      "Cloud ERP migration",
      "EBS R12.2 upgrades",
      "Fusion HCM rollouts",
      "EPM & analytics",
      "Integration Cloud",
      "Managed services",
    ],
    process: [
      "Discovery",
      "Design & blueprint",
      "Build & integrate",
      "Test & UAT",
      "Cutover",
      "Hypercare & optimize",
    ],
    stack: ["Oracle Cloud ERP", "EBS R12", "Fusion HCM", "OAC", "OIC", "VBCS"],
    results: [
      ["60+", "ERP go-lives"],
      ["312%", "Avg ROI"],
      ["98%", "On-time delivery"],
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
  {
    id: "sap",
    name: "SAP Solutions",
    tagline: "S/4HANA, BTP and Fiori built for the intelligent enterprise.",
    overview:
      "We deliver greenfield, brownfield and selective S/4HANA conversions with reusable accelerators, plus innovation programs on SAP BTP.",
    shortDesc:
      "S/4HANA transformations, BTP innovations, SAP Fiori UX, and end-to-end module rollouts.",
    color: "from-blue-500 to-sky-500",
    benefits: [
      "Real-time analytics",
      "Unified business model",
      "Lower carbon-to-compute footprint",
      "Composable extensions on BTP",
    ],
    features: [
      "S/4HANA RISE",
      "Brownfield conversion",
      "SAP BTP innovation",
      "Fiori UX redesign",
      "SuccessFactors",
      "Ariba & Concur",
    ],
    process: ["Assessment", "Roadmap", "Conversion", "Extension on BTP", "Adoption", "AMS"],
    stack: ["S/4HANA", "BTP", "Fiori/UI5", "SAP CAPM", "SuccessFactors", "BW/4HANA"],
    results: [
      ["40+", "SAP programs"],
      ["28%", "Avg cost saving"],
      ["6mo", "Faster to value"],
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
  },
  {
    id: "cloud",
    name: "Cloud Consulting",
    tagline: "Multi-cloud strategy and FinOps for the long term.",
    overview:
      "Landing zones, migrations, Kubernetes platforms and FinOps governance across AWS, Azure, GCP and Oracle Cloud.",
    shortDesc:
      "Multi-cloud strategy and FinOps across AWS, Azure, GCP, and Oracle Cloud.",
    color: "from-cyan-500 to-blue-500",
    benefits: [
      "35% infra cost reduction",
      "Zero-trust security baseline",
      "Faster developer velocity",
      "Carbon-aware workloads",
    ],
    features: [
      "Landing zones",
      "Migration factory",
      "Kubernetes platform",
      "FinOps",
      "Site reliability",
      "Cloud security",
    ],
    process: ["Discover", "Design", "Migrate", "Modernize", "Operate", "Optimize"],
    stack: ["AWS", "Azure", "GCP", "Oracle Cloud", "Kubernetes", "Terraform"],
    results: [
      ["200+", "Workloads migrated"],
      ["35%", "Cost reduction"],
      ["99.99%", "Uptime"],
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  },
  {
    id: "dx",
    name: "Digital Transformation",
    tagline: "Reimagining operations, products, and experiences.",
    overview:
      "We pair strategy consultants with engineers and designers to redesign business models and ship the systems that deliver them.",
    shortDesc:
      "Reimagine operations, products, and customer experiences end-to-end.",
    color: "from-emerald-500 to-cyan-500",
    benefits: [
      "Faster speed-to-market",
      "Higher NPS and CSAT",
      "Operational resilience",
      "Talent & change readiness",
    ],
    features: [
      "Operating model design",
      "CX & service design",
      "Process mining",
      "Automation factory",
      "Change management",
      "Product engineering",
    ],
    process: ["Diagnose", "Co-create", "Pilot", "Scale", "Operate", "Renew"],
    stack: ["Figma", "Celonis", "UiPath", "Power Platform", "ServiceNow", "Mendix"],
    results: [
      ["80+", "Programs"],
      ["3.4x", "Avg productivity"],
      ["+38%", "Revenue uplift"],
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    id: "dm",
    name: "Digital Marketing",
    tagline: "Performance + brand, engineered together.",
    overview:
      "From SEO and paid media to martech engineering and lifecycle automation, our growth team scales pipelines for B2B and B2C.",
    shortDesc:
      "Performance marketing, SEO, marketing automation, and brand experience at scale.",
    color: "from-pink-500 to-rose-500",
    benefits: [
      "Pipeline acceleration",
      "Lower CAC",
      "First-party data fluency",
      "Unified martech stack",
    ],
    features: [
      "SEO & content",
      "Paid media",
      "Marketing automation",
      "CDP & analytics",
      "Brand systems",
      "Web experience",
    ],
    process: ["Audit", "Strategy", "Build", "Launch", "Measure", "Iterate"],
    stack: ["GA4", "HubSpot", "Marketo", "Segment", "Adobe Experience", "Looker"],
    results: [
      ["4.1x", "Avg pipeline"],
      ["-32%", "CAC reduction"],
      ["220%", "MQL growth"],
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
];
