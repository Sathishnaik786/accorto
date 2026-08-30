import { Link, useRouterState } from "@tanstack/react-router";
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
import { SpecularButton } from "./animations/SpecularButton";
import {
  servicesTabs,
  industriesTabs,
  resourcesTabs,
  MAIN_NAV_ITEMS,
  MOBILE_NAV_ITEMS,
  NAV_CTA,
  type NavTabData,
} from "@/config/navigation";

function getTabIcon(tabKey: string) {
  switch (tabKey) {
    case "erp":
      return <Cpu className="h-4 w-4 text-brand" />;
    case "cloud":
      return <Cloud className="h-4 w-4 text-brand-3" />;
    case "ai":
      return <Brain className="h-4 w-4 text-brand-2" />;
    case "core":
      return <Building2 className="h-4 w-4 text-brand-2" />;
    case "growth":
      return <TrendingUp className="h-4 w-4 text-brand" />;
    case "insights":
      return <BookOpen className="h-4 w-4 text-highlight" />;
    case "careers":
      return <Users className="h-4 w-4 text-brand-3" />;
    default:
      return <Sparkles className="h-4 w-4" />;
  }
}

/* ───────────────────── reusable mega-menu panel ───────────────────────── */
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
  tabDefs: Record<T, NavTabData>;
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
      className="absolute left-0 right-0 top-full z-50 pt-2"
    >
      <div
        id={menuId}
        role="menu"
        aria-labelledby={triggerId}
        className="relative rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
      >
        {/* =========================================================================
            LAYER 0: DENSE OCCLUSION BACKDROP (Completely suppresses underlying hero text & dots)
            ========================================================================= */}
        <div
          className="absolute inset-0 bg-[#031224] dark:bg-[#020B16] opacity-[0.985] pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* =========================================================================
            LAYER 1: GLASS FROSTING & SPECULAR REFLECTION
            ========================================================================= */}
        <div
          className="absolute inset-0 backdrop-blur-3xl pointer-events-none z-0"
          aria-hidden="true"
        />
        {/* Top reflection specular highlight line — matches navbar */}
        <div
          className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-cyan-400/30 dark:via-white/25 to-transparent pointer-events-none z-1"
          aria-hidden="true"
        />

        {/* =========================================================================
            LAYER 2: FOREGROUND CRISP MEGA-MENU CONTENT GRID
            ========================================================================= */}
        <div className="relative z-10 grid grid-cols-12">
          {/* ── Left: category tabs (3 cols) ── */}
          <div className="col-span-3 border-r border-slate-200/50 dark:border-white/10 p-3.5 flex flex-col gap-1 bg-slate-50/40 dark:bg-white/[0.02]">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-1.5 px-3">
              Categories
            </span>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onMouseEnter={() => setActiveTab(tab.key)}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-150 font-semibold text-xs flex items-center justify-between group/tab cursor-pointer ${
                    isActive
                      ? "bg-slate-200/70 dark:bg-white/12 border border-slate-300/60 dark:border-white/15 text-slate-900 dark:text-white shadow-2xs"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5"
                  }`}
                >
                  <span className="truncate">{tab.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* ── Middle: items + title (6 cols) ── */}
          <div className="col-span-6 p-4 sm:p-5 flex flex-col justify-between gap-3">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                {current.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-1 leading-snug max-w-md font-medium">
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
                  className="group/item flex flex-col rounded-lg px-3 py-1.5 hover:bg-slate-100/80 dark:hover:bg-white/8 transition-all duration-150"
                >
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {item.name}
                    {item.badge && (
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.25 rounded-full bg-brand/15 text-brand border border-brand/25 ml-1">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150 text-brand ml-auto shrink-0" />
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight font-normal">
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to={current.exploreLink}
              role="menuitem"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:opacity-80 transition-opacity pt-1.5 border-t border-slate-200/50 dark:border-white/10"
            >
              {current.exploreText}
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* ── Right: visual card with contextual imagery (3 cols) ── */}
          <div className="col-span-3 p-3.5 flex items-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="relative w-full h-full min-h-[220px] rounded-xl overflow-hidden border border-slate-800/60 dark:border-white/10 shadow-md group/card bg-slate-950 flex flex-col justify-end"
              >
                {/* Full Background Contextual Image */}
                {current.image ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={current.image}
                      alt={current.imageAlt || current.imageTitle}
                      loading="lazy"
                      className="w-full h-full object-cover object-center brightness-[0.92] contrast-[1.04] transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                    />
                    <div
                      className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${current.imageGlow} blur-2xl opacity-25 pointer-events-none`}
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[14px_14px] opacity-30 z-0" />
                )}

                {/* ── Bottom Glass Caption Overlay (covers lower ~45-50% of the image) ── */}
                <div className="relative z-10 w-full p-4 sm:p-5 pt-8 bg-linear-to-t from-[#02070D]/95 via-[#030A14]/85 to-transparent backdrop-blur-xl border-t border-white/10 flex flex-col justify-end text-left select-none transition-all duration-300">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 border border-white/15 shadow-2xs mb-2 backdrop-blur-md">
                    {getTabIcon(activeTab)}
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-white tracking-tight leading-snug text-sm sm:text-base lg:text-lg">
                      {current.imageTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 mt-1 font-medium leading-snug">
                      {current.imageSubtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────── Navbar ──────────────────────────────── */
export function Navbar() {
  const { navbarEntrance, mobileMenu } = useMotionSystem();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [activeServicesTab, setActiveServicesTab] = useState<"ai" | "erp" | "cloud">("ai");
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
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobile(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobile]);

  // Route-aware active link helper
  const isItemActive = (itemHref: string, exact?: boolean) => {
    if (exact || itemHref === "/") {
      return currentPath === "/";
    }
    return currentPath === itemHref || currentPath.startsWith(`${itemHref}/`);
  };

  return (
    <motion.header
      variants={navbarEntrance}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 opacity-95" : "py-5 opacity-100"}`}
    >
      {/* ── Desktop mega-menu backdrop occlusion overlay ── */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            className="fixed inset-0 top-0 bg-[#020B16]/65 dark:bg-[#010812]/75 backdrop-blur-sm -z-10 hidden lg:block"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <nav
          className={cn(
            "relative flex items-center justify-between transition-all duration-500 rounded-2xl border",
            scrolled
              ? "px-4 py-2 bg-white/75 dark:bg-[#031224]/65 border-slate-200/60 dark:border-white/6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-[20px] dark:backdrop-blur-[30px]"
              : "px-6 py-3 bg-white/40 dark:bg-[#061B33]/75 border-slate-200/20 dark:border-white/5 shadow-xs dark:shadow-sm backdrop-blur-xl",
          )}
          onMouseLeave={closeMenu}
        >
          {/* Top reflection highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-200/40 dark:via-white/20 to-transparent pointer-events-none" />

          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0 relative z-10 py-1">
            {/* Logo Backdrop Glow */}
            <div className="absolute -inset-y-2.5 -inset-x-3.75 bg-gradient-brand blur-md opacity-0 group-hover:opacity-25 transition-opacity rounded-lg pointer-events-none" />

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
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item.href, item.exact);

              if (item.menuKey === "services") {
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setOpenMenu("services")}
                    onBlur={handleBlur}
                  >
                    <button
                      id="services-trigger"
                      aria-haspopup="true"
                      aria-expanded={openMenu === "services"}
                      aria-controls="services-menu"
                      onKeyDown={(e) => handleKeyDown(e, "services")}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm transition-colors cursor-pointer ${
                        openMenu === "services" || isActive
                          ? "text-brand font-semibold"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      Services{" "}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          openMenu === "services" ? "rotate-180 text-brand" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand" />
                      )}
                    </button>
                  </div>
                );
              }

              if (item.menuKey === "industries") {
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setOpenMenu("industries")}
                    onBlur={handleBlur}
                  >
                    <button
                      id="industries-trigger"
                      aria-haspopup="true"
                      aria-expanded={openMenu === "industries"}
                      aria-controls="industries-menu"
                      onKeyDown={(e) => handleKeyDown(e, "industries")}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm transition-colors cursor-pointer ${
                        openMenu === "industries" || isActive
                          ? "text-brand font-semibold"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      Industries{" "}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          openMenu === "industries" ? "rotate-180 text-brand" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand" />
                      )}
                    </button>
                  </div>
                );
              }

              if (item.menuKey === "resources") {
                const isResourcesActive =
                  currentPath.startsWith("/insights") ||
                  currentPath.startsWith("/case-studies") ||
                  currentPath.startsWith("/careers");
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setOpenMenu("resources")}
                    onBlur={handleBlur}
                  >
                    <button
                      id="resources-trigger"
                      aria-haspopup="true"
                      aria-expanded={openMenu === "resources"}
                      aria-controls="resources-menu"
                      onKeyDown={(e) => handleKeyDown(e, "resources")}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm transition-colors cursor-pointer ${
                        openMenu === "resources" || isResourcesActive
                          ? "text-brand font-semibold"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      Resources{" "}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          openMenu === "resources" ? "rotate-180 text-brand" : ""
                        }`}
                      />
                      {isResourcesActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand" />
                      )}
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm transition-all group/link ${
                    isActive
                      ? "text-brand font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover/link:opacity-40"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                const ev = new KeyboardEvent("keydown", { key: "k", ctrlKey: true });
                window.dispatchEvent(ev);
              }}
              className="hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 font-semibold hover:text-slate-900 dark:hover:text-white hover:-translate-y-0.5 transition-all duration-300 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs dark:shadow-none hover:shadow-md cursor-pointer"
              aria-label="Search navigation and content"
            >
              <Search className="h-3.5 w-3.5 text-brand" /> Search
              <kbd className="ml-1 rounded border border-slate-200 dark:border-white/10 px-1 text-[10px] bg-slate-50 dark:bg-white/5">
                ⌘K
              </kbd>
            </button>
            <ThemeToggle />
            <SpecularButton
              to={NAV_CTA.href}
              size="sm"
              variant="brand"
              className="hidden md:inline-flex shadow-brand hover:shadow-brand-lg"
            >
              {NAV_CTA.label}{" "}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </SpecularButton>
            <button
              onClick={() => setMobile(true)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-full transition-all duration-300 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs dark:shadow-none hover:bg-slate-50 dark:hover:bg-white/10 hover:shadow-sm cursor-pointer"
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
                  { key: "ai" as const, label: "AI & Support" },
                  { key: "erp" as const, label: "ERP & Applications" },
                  { key: "cloud" as const, label: "Cloud & Transformation" },
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
              <span className="font-display font-semibold text-white">Menu</span>
              <button
                onClick={() => setMobile(false)}
                className="glass grid h-9 w-9 place-items-center rounded-full cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-10 space-y-1 text-lg">
              {MOBILE_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobile(false)}
                  className={`block rounded-xl px-4 py-3 transition-colors ${
                    isItemActive(item.href)
                      ? "text-brand font-semibold bg-white/5"
                      : "text-foreground hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to={NAV_CTA.href}
                onClick={() => setMobile(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-white font-medium"
              >
                {NAV_CTA.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
