export interface ContentBlock {
  type: "p" | "h2" | "h3" | "ul";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  cat: string;
  title: string;
  author: string;
  date: string;
  read: string;
  img: string;
  excerpt: string;
  blocks: ContentBlock[];
}

export const FEATURED: Article = {
  slug: "the-post-pilot-era",
  cat: "AI Strategy",
  title: "The post-pilot era: how enterprise AI finally ships to production",
  author: "Bhavya vatrapu",
  date: "December 23, 2025",
  read: "12 min read",
  img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
  excerpt:
    "Most enterprise AI gets stuck in pilot purgatory. We unpack the operating model that helps teams move from prototype to platform — and what changes when GenAI enters the room.",
  blocks: [
    {
      type: "p",
      text: "In the last 24 months, enterprises have launched thousands of generative AI pilots. Yet, according to recent industry benchmarks, less than 10% of those pilots make it into production. The reason isn't the underlying model technology; it is the lack of a standardized enterprise operating model.",
    },
    {
      type: "p",
      text: "Moving from a simple playground prompt to a production-grade multi-agent pipeline requires a structured approach to telemetry, latency, data privacy, and evaluations. Let's explore the key pillars of scaling enterprise AI operations.",
    },
    {
      type: "h2",
      text: "The Pilot Purgatory Trap",
    },
    {
      type: "p",
      text: "A pilot is typically built on standard APIs with hardcoded system prompts. When users start interacting with it, they find edge cases. Without an automated evaluation framework, debugging prompts becomes whack-a-mole: fixing one prompt breaks three others. Enterprises must move past basic prompt hacking.",
    },
    {
      type: "p",
      text: "To succeed, we need continuous automated validation. Every prompt adjustment must be regression-tested against hundreds of real-world user interaction logs to verify quality.",
    },
    {
      type: "h2",
      text: "The Three Pillars of Production AI",
    },
    {
      type: "p",
      text: "To ship reliable AI, organizations must solve for three critical variables:",
    },
    {
      type: "ul",
      items: [
        "Hybrid Context Routing: Seamlessly routing queries between cheap small models (SLMs) and expensive foundational models (LLMs) based on complexity.",
        "Guaranteed Guardrails: Sandboxing user sessions with strict input/output filter layers to block prompt injections and toxic outputs.",
        "Semantic Caching: Storing and matching embeddings of historical prompts to serve common queries in under 50ms at near-zero token cost.",
      ],
    },
    {
      type: "h2",
      text: "The Accorto MLOps Blueprint",
    },
    {
      type: "p",
      text: "At Accorto, we help enterprise clients build custom control planes that sit between applications and models. These systems manage data token limits, handle secure encryption, and run continuous prompt checks. In the post-pilot era, the software engineering surrounding the model is what defines success.",
    },
  ],
};

export const ARTICLES: Article[] = [
  {
    slug: "the-post-pilot-era",
    cat: "AI Strategy",
    title: "The post-pilot era: how enterprise AI finally ships to production",
    author: "Bhavya vatrapu",
    date: "December 23, 2025",
    read: "12 min read",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    excerpt:
      "Most enterprise AI gets stuck in pilot purgatory. We unpack the operating model that helps teams move from prototype to platform — and what changes when GenAI enters the room.",
    blocks: FEATURED.blocks,
  },
  {
    slug: "brownfield-to-cloud-erp",
    cat: "Oracle",
    title: "Brownfield to Cloud ERP in 9 months: a delivery playbook",
    author: "Bhavya vatrapu",
    date: "December 23, 2025",
    read: "8 min read",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    excerpt:
      "How to de-risk your cloud ERP journey with structured transition sprints and proven delivery frameworks.",
    blocks: [
      {
        type: "p",
        text: "Migrating core business processes from legacy on-premise platforms to Oracle Cloud ERP is often perceived as a multi-year, high-risk endeavor. However, with a brownfield transition playbook, it is possible to achieve complete cutover in under 9 months.",
      },
      {
        type: "p",
        text: "The core philosophy is simple: clean your ledger records and drop legacy customization code before migrating, allowing you to build a clean operating model in the cloud.",
      },
      {
        type: "h2",
        text: "The Three Sprints of Brownfield Delivery",
      },
      {
        type: "ul",
        items: [
          "Discover & Cleanse: Extracting and sanitizing legacy schemas, pruning stale records, and removing unused ledger configurations.",
          "Core Mobilization: Setting up standard Oracle Cloud modules (Finance, Procurement, SCM) using automated setup scripts.",
          "Transition Sprints: Running parallel payroll/financial closes and transitioning business units in staggered phases.",
        ],
      },
      {
        type: "h2",
        text: "Eliminating Technical Debt",
      },
      {
        type: "p",
        text: "The primary bottleneck in legacy systems is custom extension code. A brownfield model drops custom PL/SQL scripts in favor of Oracle Standard APIs. Any unique logic is decoupled and hosted on standard cloud middleware, keeping the ERP core upgradeable.",
      },
    ],
  },
  {
    slug: "why-selective-s4hana-conversion",
    cat: "SAP",
    title: "Why selective S/4HANA conversion beats greenfield 80% of the time",
    author: "Bhavya vatrapu",
    date: "December 23, 2025",
    read: "10 min read",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80",
    excerpt:
      "Why selective data migration keeps your historical custom modules and compliance records intact.",
    blocks: [
      {
        type: "p",
        text: "As the deadline to migrate to SAP S/4HANA approaches, enterprise CIOs are faced with a challenging choice: start fresh with Greenfield, or convert the entire system with Brownfield. Yet, selective data conversion (the shell creation method) offers a superior compromise.",
      },
      {
        type: "p",
        text: "Selective transition allows you to migrate only active business data and historical balances, excluding decades of archived transactions while keeping compliance ledger entries intact.",
      },
      {
        type: "h2",
        text: "Benefits of Selective Conversion",
      },
      {
        type: "ul",
        items: [
          "Preserve Custom IP: Keep unique SAP custom developments and configurations that represent competitive advantages.",
          "Drastically Reduce Downtime: Only active ledger records are converted, speeding up system offline times from days to hours.",
          "Clean Master Data: Filter out duplicate vendors, obsolete materials, and archived assets during the migration pipeline.",
        ],
      },
      {
        type: "h2",
        text: "A Smarter Road Ahead",
      },
      {
        type: "p",
        text: "Selective conversions allow organizations to modernize their business suite without the disruption of Greenfield re-training. It preserves structural processes while adopting the speed, analytics, and UX improvements of S/4HANA.",
      },
    ],
  },
  {
    slug: "finops-in-2026",
    cat: "Cloud",
    title: "FinOps in 2026: the four signals every CFO wants to see",
    author: "Bhavya vatrapu",
    date: "December 23, 2025",
    read: "6 min read",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
    excerpt:
      "Practical telemetry patterns for managing dynamic multi-cloud server budgets and cloud architectures.",
    blocks: [
      {
        type: "p",
        text: "With cloud deployment volumes hitting record levels, modern financial teams are moving past static monthly statements. CFOs now expect real-time transparency and cost intelligence built directly into the engineering dashboard.",
      },
      {
        type: "p",
        text: "FinOps has transitioned from basic tagging audits to automated cloud resource scheduling and cost metrics dashboards.",
      },
      {
        type: "h2",
        text: "The Four Key Signals",
      },
      {
        type: "ul",
        items: [
          "Idle Resource Telemetry: Real-time checks on underutilized compute cores and storage volumes that should be shut down or resized.",
          "Cost Per Transaction: Dynamic metrics mapping infrastructure costs directly to business drivers (e.g. cost per active checkout).",
          "Anomalous Spend Spikes: Automated alerts capturing runtime cost increases within 30 minutes of a developer's deployment.",
          "Commitment Coverage: Visualizing savings and tracking targets for Reserved Instances and Savings Plans across all clouds.",
        ],
      },
      {
        type: "p",
        text: "By establishing cost feedback loops directly inside the developer dashboard, organizations empower engineers to optimize cloud architectures in real-time, reducing waste by up to 30%.",
      },
    ],
  },
  {
    slug: "beyond-chatbots",
    cat: "AI",
    title: "Beyond chatbots: GenAI patterns for operational excellence",
    author: "Bhavya vatrapu",
    date: "December 23, 2025",
    read: "9 min read",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
    excerpt:
      "Move past prompt templates to production workflows, multi-agent coordination, and custom evaluation.",
    blocks: [
      {
        type: "p",
        text: "The first wave of enterprise generative AI was dominated by simple retrieval chatbots. The next wave focuses on orchestrating autonomous, specialized agent networks to complete complex end-to-end operational tasks.",
      },
      {
        type: "p",
        text: "Operational excellence requires transitioning from standalone prompts to multi-agent state machines that execute database queries, validate code, and call external APIs.",
      },
      {
        type: "h2",
        text: "Agentic Patterns in Production",
      },
      {
        type: "ul",
        items: [
          "Human-in-the-Loop Approval: Decoupled steps requiring explicit user verification before running high-risk actions.",
          "Self-Correction & Reflection: Agents checking their own outputs using automated quality parsers and retrying if errors occur.",
          "Multi-Agent Staging: Dividing tasks among separate, specialized agents (e.g. researcher, editor, coder) instead of using a single generalist.",
        ],
      },
      {
        type: "p",
        text: "By treating LLM nodes as functional components inside a larger deterministic workflow framework, we can build reliable enterprise AI systems that deliver predictable business outcomes.",
      },
    ],
  },
  {
    slug: "process-mining-ai",
    cat: "DX",
    title: "Process mining + AI: the new operating system for enterprises",
    author: "Bhavya vatrapu",
    date: "December 23, 2025",
    read: "7 min read",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    excerpt:
      "Unlocking operational data vectors and bottleneck intelligence using graph-based telemetry systems.",
    blocks: [
      {
        type: "p",
        text: "Many digital transformations fail because organizations design new systems based on what they *think* their workflows are, rather than reality. Process mining extracts event logs from ERP and CRM systems to map actual business operations.",
      },
      {
        type: "p",
        text: "When paired with machine learning, process mining transitions from retrospective reporting to real-time process monitoring and predictive recommendations.",
      },
      {
        type: "h2",
        text: "Key Capabilities of Process Intelligence",
      },
      {
        type: "ul",
        items: [
          "Visual Conformance Checking: Instantly identifying workflow deviations or compliance violations in order-to-cash or purchase-to-pay pipelines.",
          "Predictive Bottleneck Modeling: Machine learning models flagging potential delivery delays hours before they affect customers.",
          "Prescriptive Automation: Recommending RPA (Robotic Process Automation) scripts for repetitive, error-prone tasks.",
        ],
      },
      {
        type: "p",
        text: "Establishing a real-time process data pipeline allows businesses to optimize operations continuously, significantly improving efficiency and customer satisfaction.",
      },
    ],
  },
  {
    slug: "composable-martech",
    cat: "Marketing",
    title: "Composable martech: stop buying suites you don't ship",
    author: "Bhavya vatrapu",
    date: "December 23, 2025",
    read: "5 min read",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    excerpt:
      "Why custom composable micro-frontends yield higher marketing automation ROI than all-in-one suite systems.",
    blocks: [
      {
        type: "p",
        text: "Traditional marketing cloud suites promise a unified, all-in-one marketing hub but often deliver complex integrations and vendor lock-in. Composable martech architectures offer a modular alternative.",
      },
      {
        type: "p",
        text: "By decoupling content delivery, user analytics, and database layers using standard API contracts, marketing teams can connect best-of-breed components without rebuilding configurations.",
      },
      {
        type: "h2",
        text: "Why Composable Beats the Suite",
      },
      {
        type: "ul",
        items: [
          "Higher ROI: Pay only for the tools you use, dropping high-tier licensing fees for unused suite components.",
          "Rapid Feature Delivery: Marketing teams can swap or launch new tools in days without waiting for major IT sprints.",
          "Zero Data Duplication: Centralizing user records inside standard databases (like Snowflake or BigQuery) rather than duplicating them across tools.",
        ],
      },
      {
        type: "p",
        text: "Embracing a composable approach enables marketing teams to adapt quickly to trends, optimize user experiences, and boost marketing automation ROI.",
      },
    ],
  },
];

export const CATEGORIES = ["View All", "Oracle", "SAP", "AI", "Cloud", "DX", "Marketing"];
