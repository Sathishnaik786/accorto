export interface NavTabItem {
  name: string;
  desc: string;
  link: string;
  badge?: string;
}

export interface NavTabData {
  title: string;
  desc: string;
  exploreLink: string;
  exploreText: string;
  items: NavTabItem[];
  gradient: string;
  imageGlow: string;
  imageTitle: string;
  imageSubtitle: string;
  image?: string;
  imageAlt?: string;
}

export interface MainNavItem {
  label: string;
  href: string;
  menuKey?: "services" | "industries" | "resources";
  exact?: boolean;
}

export interface MobileNavItem {
  label: string;
  href: string;
  badge?: string;
}

/* ───────────────────────────── Services Mega Menu ───────────────────────────── */
export const servicesTabs: Record<"ai" | "erp" | "cloud", NavTabData> = {
  ai: {
    title: "AI & Operational Intelligence",
    desc: "Connecting enterprise systems, governed data, and physical IoT edge operations.",
    exploreLink: "/services/ai-iot",
    exploreText: "Explore AI & IoT Flagship",
    items: [
      {
        name: "AI & IoT",
        desc: "Physical-world sensors, edge dashboards, and real-time anomaly alerts.",
        link: "/services/ai-iot",
        badge: "Flagship",
      },
      {
        name: "AI for Enterprise Structure",
        desc: "AI embedded natively into SAP, Oracle, Salesforce, and PeopleSoft.",
        link: "/services/ai-enterprise-structure",
      },
      {
        name: "AI for Enterprise Data",
        desc: "Lakehouse, GenAI, RAG, and MLOps on Snowflake and Databricks.",
        link: "/services/ai-enterprise-data",
      },
    ],
    gradient: "from-emerald-500/20 via-brand-2/10 to-transparent",
    imageGlow: "bg-emerald-500/20",
    imageTitle: "Flagship AI & IoT",
    imageSubtitle: "Sensors to core enterprise intelligence",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    imageAlt: "Industrial AI and IoT intelligence with edge sensors",
  },
  erp: {
    title: "Enterprise ERP & Systems",
    desc: "Robust, scalable core solutions for modern enterprise management.",
    exploreLink: "/services",
    exploreText: "Explore ERP Solutions",
    items: [
      {
        name: "Oracle ERP",
        desc: "End-to-end Oracle Cloud ERP, EBS, and Fusion HCM transformation.",
        link: "/services#oracle",
      },
      {
        name: "SAP Solutions",
        desc: "S/4HANA conversion, Fiori, and SAP BTP innovation.",
        link: "/services#sap",
      },
      {
        name: "Cloud Consulting",
        desc: "Multi-cloud migration and FinOps across AWS, Azure, and GCP.",
        link: "/services#cloud",
      },
    ],
    gradient: "from-brand/20 via-brand-3/10 to-transparent",
    imageGlow: "bg-brand/20",
    imageTitle: "Core ERP Platforms",
    imageSubtitle: "Streamline global operations",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    imageAlt: "Enterprise ERP operations and corporate systems",
  },
  cloud: {
    title: "Transformation & Growth",
    desc: "Reimagine business operations, digital experiences, and pipeline growth.",
    exploreLink: "/services",
    exploreText: "Explore Growth Services",
    items: [
      {
        name: "Digital Transformation",
        desc: "Operating model redesign, process mining, and automation.",
        link: "/services#dx",
      },
      {
        name: "Digital Marketing",
        desc: "Data-driven martech engineering and performance growth.",
        link: "/services#dm",
      },
      {
        name: "Managed Cloud Services",
        desc: "24/7 proactive monitoring, SLA management, and support.",
        link: "/services#cloud",
      },
    ],
    gradient: "from-brand-3/20 via-brand/10 to-transparent",
    imageGlow: "bg-brand-3/20",
    imageTitle: "Enterprise Growth",
    imageSubtitle: "Modern digital workflows",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    imageAlt: "Enterprise cloud transformation and modern digital architecture",
  },
};

/* ──────────────────────────── Industries Mega Menu ──────────────────────────── */
export const industriesTabs: Record<"core" | "growth", NavTabData> = {
  core: {
    title: "Industrial & Infrastructure",
    desc: "Tailored enterprise systems for complex industrial, utility, and supply chain sectors.",
    exploreLink: "/industries",
    exploreText: "Explore Core Sectors",
    items: [
      {
        name: "Manufacturing",
        desc: "Smart factories, IoT integration, and predictive maintenance.",
        link: "/industries",
      },
      {
        name: "Logistics",
        desc: "Supply chain tracking, control towers, and route optimization.",
        link: "/industries",
      },
      {
        name: "Utilities & Environmental",
        desc: "Real-time gas, water, and emissions IoT telemetry.",
        link: "/services/ai-iot",
        badge: "New",
      },
    ],
    gradient: "from-brand-2/20 via-brand-3/10 to-transparent",
    imageGlow: "bg-brand-2/20",
    imageTitle: "Industrial Core",
    imageSubtitle: "Sensors & sector logistics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    imageAlt: "Industrial core operations and utilities telemetry",
  },
  growth: {
    title: "Commercial & Regulated Verticals",
    desc: "Connecting finance, retail, healthcare, education, and public sector platforms.",
    exploreLink: "/industries",
    exploreText: "Explore Regulated Verticals",
    items: [
      {
        name: "Finance",
        desc: "Secure ledger systems, automated accounting, and real-time fraud AI.",
        link: "/industries",
      },
      {
        name: "Retail",
        desc: "Unified commerce, omnichannel synchronization, and inventory AI.",
        link: "/industries",
      },
      {
        name: "Healthcare",
        desc: "Secure patient data management, compliance, and clinical workflows.",
        link: "/industries",
      },
      {
        name: "Education",
        desc: "Smart campus, SIS modernization, and student success platforms.",
        link: "/industries",
      },
      {
        name: "Government",
        desc: "Citizen portals, open data platforms, and secure government cloud.",
        link: "/industries",
      },
    ],
    gradient: "from-brand/20 via-brand-2/10 to-transparent",
    imageGlow: "bg-brand/20",
    imageTitle: "Regulated Verticals",
    imageSubtitle: "Compliant enterprise workflows",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    imageAlt: "Commercial and regulated enterprise verticals",
  },
};

/* ──────────────────────────── Resources Mega Menu ───────────────────────────── */
export const resourcesTabs: Record<"insights" | "careers", NavTabData> = {
  insights: {
    title: "Enterprise Knowledge & Academy",
    desc: "Stay ahead with industry research, client case studies, and career certification.",
    exploreLink: "/insights",
    exploreText: "Read Enterprise Insights",
    items: [
      {
        name: "AI Career Development",
        desc: "Certification pathways and career tracks for consultants and engineers.",
        link: "/academy/ai-career-development",
        badge: "Academy",
      },
      {
        name: "Insights & Research",
        desc: "Read the latest on cloud architecture, generative AI, and ERP.",
        link: "/insights",
      },
      {
        name: "Case Studies",
        desc: "Deep dives into how we saved 40%+ costs for Fortune 500 clients.",
        link: "/case-studies",
      },
    ],
    gradient: "from-brand/20 via-brand-3/10 to-transparent",
    imageGlow: "bg-brand/20",
    imageTitle: "Knowledge & Skills",
    imageSubtitle: "Research & AI training",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    imageAlt: "Enterprise research and AI training",
  },
  careers: {
    title: "Join Accorto Technologies",
    desc: "Accelerate your career in digital transformation and enterprise software.",
    exploreLink: "/careers",
    exploreText: "View Open Roles",
    items: [
      {
        name: "Careers",
        desc: "Open roles in consulting, cloud architecture, IoT, and AI.",
        link: "/careers",
      },
      {
        name: "About Us",
        desc: "Learn about our mission, leadership, and global offices.",
        link: "/about",
      },
      {
        name: "Contact an Architect",
        desc: "Reach out directly to a partner from our practices.",
        link: "/contact",
      },
    ],
    gradient: "from-brand-3/20 via-brand-2/10 to-transparent",
    imageGlow: "bg-brand-3/20",
    imageTitle: "Careers & Team",
    imageSubtitle: "Innovate with global leaders",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    imageAlt: "Careers and enterprise consulting team",
  },
};

/* ────────────────────────────── Main Navigation ─────────────────────────────── */
export const MAIN_NAV_ITEMS: MainNavItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", menuKey: "services" },
  { label: "Industries", href: "/industries", menuKey: "industries" },
  { label: "Academy", href: "/academy" },
  { label: "Resources", href: "/insights", menuKey: "resources" },
  { label: "Contact", href: "/contact" },
];

/* ───────────────────────────── Mobile Navigation ────────────────────────────── */
export const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AI & IoT (Flagship)", href: "/services/ai-iot", badge: "Flagship" },
  { label: "AI for Enterprise Structure", href: "/services/ai-enterprise-structure" },
  { label: "AI for Enterprise Data", href: "/services/ai-enterprise-data" },
  { label: "Enterprise Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Academy & Career Tracks", href: "/academy/ai-career-development" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const NAV_CTA = {
  label: "Get Started",
  href: "/contact",
};
