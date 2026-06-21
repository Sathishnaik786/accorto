import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../../logo_1.png";
import { useMotionSystem } from "../lib/motion-presets";
import { cn } from "../lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Sparkles,
  ArrowRight,
  Cpu,
  Cloud,
  Brain,
  Building2,
  TrendingUp,
  BookOpen,
  Users,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

/* ───────────────────────────────── data ───────────────────────────────── */
const servicesTabs = {
  erp: {
    title: "Enterprise ERP & Applications",
    desc: "Robust, scalable core solutions for modern enterprise management.",
    exploreLink: "/services",
    exploreText: "Explore ERP & Applications",
    items: [
      { name: "Oracle ERP", desc: "End-to-end Oracle Cloud & EBS transformation.", link: "/services" },
      { name: "SAP Solutions", desc: "S/4HANA migration, Fiori, and BTP integration.", link: "/services" },
      { name: "Enterprise Applications", desc: "Custom-built, mission-critical systems at scale.", link: "/services" },
    ],
    gradient: "from-brand/20 via-brand-3/10 to-transparent",
    imageGlow: "bg-brand/20",
    imageTitle: "Core ERP Systems",
    imageSubtitle: "Streamline global operations",
  },
  cloud: {
    title: "Cloud Consulting & Growth",
    desc: "Reimagine business operations with next-generation cloud infrastructure.",
    exploreLink: "/services",
    exploreText: "Explore Cloud & Growth",
    items: [
      { name: "Cloud Consulting", desc: "AWS, Azure, GCP, and Oracle Cloud strategy.", link: "/services" },
      { name: "Digital Transformation", desc: "Aligning architecture with cloud frameworks.", link: "/services" },
      { name: "Digital Marketing", desc: "Data-driven systems powering enterprise growth.", link: "/services" },
    ],
    gradient: "from-brand-3/20 via-brand/10 to-transparent",
    imageGlow: "bg-brand-3/20",
    imageTitle: "Cloud Architecture",
    imageSubtitle: "Secure & scalable multi-cloud",
  },
  ai: {
    title: "Artificial Intelligence & Managed Services",
    desc: "Powering business logic with custom AI models and 24/7 support.",
    exploreLink: "/services",
    exploreText: "Explore AI & Support",
    items: [
      { name: "AI & Machine Learning", desc: "Predictive analytics, Generative AI, and MLOps.", link: "/services" },
      { name: "Technology Consulting", desc: "Strategic advisory and architectural design.", link: "/services" },
      { name: "Managed Services", desc: "24/7 proactive monitoring and support.", link: "/services" },
    ],
    gradient: "from-brand-2/20 via-brand/10 to-transparent",
    imageGlow: "bg-brand-2/20",
    imageTitle: "Intelligent AI",
    imageSubtitle: "Cognitive workflows at scale",
  },
};

const industriesTabs = {
  core: {
    title: "Core Sectors",
    desc: "Tailored enterprise systems for complex industrial and financial structures.",
    exploreLink: "/industries",
    exploreText: "Explore Core Sectors",
    items: [
      { name: "Finance", desc: "Secure ledger systems, automated accounting, and compliance.", link: "/industries" },
      { name: "Logistics", desc: "Supply chain tracking, warehouse systems, and route optimization.", link: "/industries" },
      { name: "Manufacturing", desc: "Smart factories, IoT integration, and predictive maintenance.", link: "/industries" },
    ],
    gradient: "from-brand-2/20 via-brand-3/10 to-transparent",
    imageGlow: "bg-brand-2/20",
    imageTitle: "Industrial Core",
    imageSubtitle: "Enterprise sector logistics",
  },
  growth: {
    title: "Specialized Verticals",
    desc: "Connecting consumers, educators, and patients with secure platforms.",
    exploreLink: "/industries",
    exploreText: "Explore Specialized Verticals",
    items: [
      { name: "Retail", desc: "E-commerce sync, omni-channel experiences, and inventory AI.", link: "/industries" },
      { name: "Healthcare", desc: "Secure patient data management, compliance, and workflows.", link: "/industries" },
      { name: "Education", desc: "Learning platforms, administrative software, and analytics.", link: "/industries" },
    ],
    gradient: "from-brand/20 via-brand-2/10 to-transparent",
    imageGlow: "bg-brand/20",
    imageTitle: "Digital Verticals",
    imageSubtitle: "Modern consumer workflows",
  },
};

const resourcesTabs = {
  insights: {
    title: "Enterprise Knowledge",
    desc: "Stay ahead of industry trends with research, reports, and expert guides.",
    exploreLink: "/insights",
    exploreText: "Read Enterprise Insights",
    items: [
      { name: "Insights", desc: "Read the latest on cloud architecture, AI, and ERP.", link: "/insights" },
      { name: "Case Studies", desc: "Deep dives into how we saved 40%+ costs for Fortune 500s.", link: "/case-studies" },
      { name: "FAQs", desc: "Answers about client engagements, timelines, and SLAs.", link: "/contact" },
    ],
    gradient: "from-brand/20 via-brand-3/10 to-transparent",
    imageGlow: "bg-brand/20",
    imageTitle: "Insights & Reports",
    imageSubtitle: "Data-driven research",
  },
  careers: {
    title: "Join Accorto Technologies",
    desc: "Accelerate your career in digital transformation and enterprise software.",
    exploreLink: "/careers",
    exploreText: "View Open Roles",
    items: [
      { name: "Careers", desc: "Open roles in consulting, cloud architecture, and AI.", link: "/careers" },
      { name: "About", desc: "Learn about our mission, leadership, and global offices.", link: "/about" },
      { name: "Contact", desc: "Reach out directly to a partner from our practices.", link: "/contact" },
    ],
    gradient: "from-brand-3/20 via-brand-2/10 to-transparent",
    imageGlow: "bg-brand-3/20",
    imageTitle: "Careers & Team",
    imageSubtitle: "Innovate with global leaders",
  },
};

function getTabIcon(tabKey: string) {
  switch (tabKey) {
    case "erp":     return <Cpu       className="h-5 w-5 text-brand" />;
    case "cloud":   return <Cloud     className="h-5 w-5 text-brand-3" />;
    case "ai":      return <Brain     className="h-5 w-5 text-brand-2" />;
    case "core":    return <Building2 className="h-5 w-5 text-brand-2" />;
    case "growth":  return <TrendingUp className="h-5 w-5 text-brand" />;
    case "insights":return <BookOpen  className="h-5 w-5 text-highlight" />;
    case "careers": return <Users     className="h-5 w-5 text-brand-3" />;
    default:        return <Sparkles  className="h-5 w-5" />;
  }
}

/* ───────────────────── reusable mega-menu panel ───────────────────────── */
type TabItem = { name: string; desc: string; link: string };
type TabData = {
  title: string;
  desc: string;
  exploreLink: string;
  exploreText: string;
  items: TabItem[];
  gradient: string;
  imageGlow: string;
  imageTitle: string;
  imageSubtitle: string;
};

function MegaMenuPanel<T extends string>({
  menuId,
  triggerId,
  tabs,
  tabDefs,
  activeTab,
  setActiveTab,
  onClose,
}: {
  menuId: string;
  triggerId: string;
  tabs: { key: T; label: string }[];
  tabDefs: Record<T, TabData>;
  activeTab: T;
  setActiveTab: (k: T) => void;
  onClose: () => void;
}) {
  const current = tabDefs[activeTab];
  const { navbarDropdown } = useMotionSystem();
  return (
    <motion.div
      variants={navbarDropdown}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute left-0 right-0 top-full z-50 pt-3"
    >
      <div
        id={menuId}
        role="menu"
        aria-labelledby={triggerId}
        className="bg-white/90 dark:bg-[#0C223D]/95 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden grid grid-cols-12 backdrop-blur-3xl relative"
      >
        {/* Top reflection line */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        
        {/* ── Left: category tabs ── */}
        <div className="col-span-3 border-r border-slate-200 dark:border-white/10 p-6 flex flex-col gap-1.5">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-3 px-3">
            Categories
          </span>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onMouseEnter={() => setActiveTab(tab.key)}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 font-semibold text-sm flex items-center justify-between group/tab ${
                  isActive
                    ? "bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-gradient-brand shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Middle: items + title ── */}
        <div className="col-span-6 p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              {current.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed max-w-md font-medium">
              {current.desc}
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            {current.items.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                role="menuitem"
                onClick={onClose}
                className="group/item flex flex-col rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-150"
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  {item.name}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150 text-brand" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed font-medium">
                  {item.desc}
                </div>
              </Link>
            ))}
          </div>

          <Link
            to={current.exploreLink}
            role="menuitem"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:opacity-80 transition-opacity mt-auto"
          >
            {current.exploreText}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* ── Right: visual card ── */}
        <div className="col-span-3 p-6 flex items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className={`relative w-full rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-950/80 border border-slate-800 dark:border-white/10 p-6 flex flex-col justify-between min-h-[220px] shadow-lg`}
            >
              {/* grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[18px_18px] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-30" />
              {/* glow orb */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${current.imageGlow} blur-3xl opacity-50 dark:opacity-100`} />

              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-lg">
                {getTabIcon(activeTab)}
              </div>

              <div className="relative z-10">
                <h4 className="font-display font-semibold text-white tracking-tight leading-snug text-base">
                  {current.imageTitle}
                </h4>
                <p className="text-xs text-white/50 mt-1.5 font-medium">{current.imageSubtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────── Navbar ──────────────────────────────── */
export function Navbar() {
  const { navbarEntrance, mobileMenu } = useMotionSystem();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [activeServicesTab, setActiveServicesTab] = useState<"erp" | "cloud" | "ai">("erp");
  const [activeIndustriesTab, setActiveIndustriesTab] = useState<"core" | "growth">("core");
  const [activeResourcesTab, setActiveResourcesTab] = useState<"insights" | "careers">("insights");

  const closeMenu = () => setOpenMenu(null);

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) closeMenu();
  };

  const handleKeyDown = (e: React.KeyboardEvent, menu: string) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setOpenMenu(menu);
    } else if (e.key === "Escape") {
      closeMenu();
      document.getElementById(`${menu}-trigger`)?.focus();
    }
  };

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!mobile) return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMobile(false); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobile]);

  return (
    <motion.header
      variants={navbarEntrance}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 opacity-95" : "py-5 opacity-100"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            "relative flex items-center justify-between transition-all duration-500 rounded-2xl border",
            scrolled
              ? "px-4 py-2 bg-white/85 dark:bg-[#031224]/65 border-slate-200/80 dark:border-white/6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-[30px]"
              : "px-6 py-3 bg-white/50 dark:bg-[#061B33]/75 border-white/5 shadow-sm backdrop-blur-xl"
          )}
          onMouseLeave={closeMenu}
        >
          {/* Top reflection highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0 relative z-10 py-1">
            {/* Logo Backdrop Glow */}
            <div className="absolute inset-y-[-10px] inset-x-[-15px] bg-gradient-brand blur-md opacity-0 group-hover:opacity-25 transition-opacity rounded-lg pointer-events-none" />
            
            {/* Height-constrained wrapper to prevent stretching navbar */}
            <div className="relative h-9 flex items-center overflow-visible">
              <img
                src={logoImg}
                alt="Accorto Logo"
                className="h-22 w-auto max-w-none object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              activeOptions={{ exact: true }}
              className="relative px-3 py-2 text-sm text-foreground/80 hover:text-foreground [&.active]:text-brand [&.active]:font-semibold transition-all group/link"
            >
              Home
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover/link:opacity-40 group-[.active]/link:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Services */}
            <div onMouseEnter={() => setOpenMenu("services")} onBlur={handleBlur}>
              <button
                id="services-trigger"
                aria-haspopup="true"
                aria-expanded={openMenu === "services"}
                aria-controls="services-menu"
                onKeyDown={(e) => handleKeyDown(e, "services")}
                className={`flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors ${openMenu === "services" ? "text-brand" : ""}`}
              >
                Services <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openMenu === "services" ? "rotate-180 text-brand" : ""}`} />
              </button>
            </div>

            {/* Industries */}
            <div onMouseEnter={() => setOpenMenu("industries")} onBlur={handleBlur}>
              <button
                id="industries-trigger"
                aria-haspopup="true"
                aria-expanded={openMenu === "industries"}
                aria-controls="industries-menu"
                onKeyDown={(e) => handleKeyDown(e, "industries")}
                className={`flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors ${openMenu === "industries" ? "text-brand" : ""}`}
              >
                Industries <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openMenu === "industries" ? "rotate-180 text-brand" : ""}`} />
              </button>
            </div>

            {/* Academy */}
            <Link 
              to="/academy" 
              className="relative px-3 py-2 text-sm text-foreground/80 hover:text-foreground [&.active]:text-brand [&.active]:font-semibold transition-all group/link"
            >
              Academy
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover/link:opacity-40 group-[.active]/link:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Resources */}
            <div onMouseEnter={() => setOpenMenu("resources")} onBlur={handleBlur}>
              <button
                id="resources-trigger"
                aria-haspopup="true"
                aria-expanded={openMenu === "resources"}
                aria-controls="resources-menu"
                onKeyDown={(e) => handleKeyDown(e, "resources")}
                className={`flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors ${openMenu === "resources" ? "text-brand" : ""}`}
              >
                Resources <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openMenu === "resources" ? "rotate-180 text-brand" : ""}`} />
              </button>
            </div>

            <Link 
              to="/about" 
              className="relative px-3 py-2 text-sm text-foreground/80 hover:text-foreground [&.active]:text-brand [&.active]:font-semibold transition-all group/link"
            >
              About
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover/link:opacity-40 group-[.active]/link:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link 
              to="/contact" 
              className="relative px-3 py-2 text-sm text-foreground/80 hover:text-foreground [&.active]:text-brand [&.active]:font-semibold transition-all group/link"
            >
              Contact
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover/link:opacity-40 group-[.active]/link:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                const ev = new KeyboardEvent("keydown", { key: "k", ctrlKey: true });
                window.dispatchEvent(ev);
              }}
              className="glass hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 font-semibold hover:text-slate-900 dark:hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              aria-label="Search"
            >
              <Search className="h-3.5 w-3.5 text-brand" /> Search
              <kbd className="ml-1 rounded border border-slate-200 dark:border-white/10 px-1 text-[10px] bg-slate-100 dark:bg-white/5">⌘K</kbd>
            </button>
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-brand hover:scale-105 hover:shadow-brand-lg transition-all duration-300"
            >
              Get Started <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => setMobile(true)}
              className="glass lg:hidden grid h-9 w-9 place-items-center rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Open menu"
              aria-expanded={mobile}
              aria-controls="mobile-menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>

          {/* ── Mega menu panels (anchored inside nav → correct width) ── */}
          <AnimatePresence>
            {openMenu === "services" && (
              <MegaMenuPanel
                menuId="services-menu"
                triggerId="services-trigger"
                tabs={[
                  { key: "erp" as const, label: "ERP & Applications" },
                  { key: "cloud" as const, label: "Cloud & Transformation" },
                  { key: "ai" as const, label: "AI & Support" },
                ]}
                tabDefs={servicesTabs}
                activeTab={activeServicesTab}
                setActiveTab={setActiveServicesTab}
                onClose={closeMenu}
              />
            )}
            {openMenu === "industries" && (
              <MegaMenuPanel
                menuId="industries-menu"
                triggerId="industries-trigger"
                tabs={[
                  { key: "core" as const, label: "Core Sectors" },
                  { key: "growth" as const, label: "Specialized Verticals" },
                ]}
                tabDefs={industriesTabs}
                activeTab={activeIndustriesTab}
                setActiveTab={setActiveIndustriesTab}
                onClose={closeMenu}
              />
            )}
            {openMenu === "resources" && (
              <MegaMenuPanel
                menuId="resources-menu"
                triggerId="resources-trigger"
                tabs={[
                  { key: "insights" as const, label: "Insights & Reports" },
                  { key: "careers" as const, label: "Careers & Team" },
                ]}
                tabDefs={resourcesTabs}
                activeTab={activeResourcesTab}
                setActiveTab={setActiveResourcesTab}
                onClose={closeMenu}
              />
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            variants={mobileMenu}
            initial="initial"
            animate="animate"
            exit="exit"
            onKeyDown={(e) => e.key === "Escape" && setMobile(false)}
            className="fixed inset-0 z-80 bg-[#031224]/95 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-5 shrink-0">
              <span className="font-display font-semibold">Menu</span>
              <button
                onClick={() => setMobile(false)}
                className="glass grid h-9 w-9 place-items-center rounded-full"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-10 space-y-1 text-lg">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Industries", "/industries"],
                ["Academy", "/academy"],
                ["Case Studies", "/case-studies"],
                ["Insights", "/insights"],
                ["Careers", "/careers"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([l, p]) => (
                <Link
                  key={p}
                  to={p}
                  onClick={() => setMobile(false)}
                  className="block rounded-xl px-4 py-3 text-foreground hover:bg-white/5 transition-colors"
                >
                  {l}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobile(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-white font-medium"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
