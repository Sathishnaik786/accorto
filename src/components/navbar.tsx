import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Sparkles, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const services = {
  col1: [
    { name: "Oracle ERP", desc: "End-to-end Oracle Cloud & EBS" },
    { name: "SAP Solutions", desc: "S/4HANA, Fiori, BTP" },
    { name: "AI & Machine Learning", desc: "Predictive, GenAI, MLOps" },
  ],
  col2: [
    { name: "Digital Transformation", desc: "Reimagine business operations" },
    { name: "Cloud Consulting", desc: "AWS, Azure, GCP, Oracle Cloud" },
    { name: "Digital Marketing", desc: "Data-driven growth engines" },
  ],
  col3: [
    { name: "Managed Services", desc: "24/7 enterprise support" },
    { name: "Technology Consulting", desc: "Strategy → execution" },
    { name: "Enterprise Applications", desc: "Custom-built at scale" },
  ],
};
const industries = ["Education", "Healthcare", "Manufacturing", "Retail", "Finance", "Logistics"];
const resources = ["Case Studies", "Insights", "FAQs", "Careers"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "shadow-2xl" : ""}`}>
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand blur-md opacity-60 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white font-display font-bold">A</div>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-semibold text-foreground">Accorto</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Technologies</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)}>
            <Link to="/" className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">Home</Link>

            <div className="relative" onMouseEnter={() => setOpenMenu("services")}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground">
                Services <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {openMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                  >
                    <div className="glass-strong rounded-2xl p-6 shadow-2xl w-[860px] grid grid-cols-4 gap-6">
                      {[services.col1, services.col2, services.col3].map((col, i) => (
                        <div key={i} className="space-y-1">
                          {col.map((s) => (
                            <Link key={s.name} to="/services" className="block rounded-lg p-3 hover:bg-white/5 transition-colors">
                              <div className="text-sm font-medium text-foreground">{s.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div className="relative overflow-hidden rounded-xl bg-gradient-brand p-5 text-white flex flex-col justify-between">
                        <Sparkles className="h-5 w-5" />
                        <div>
                          <div className="font-display font-semibold leading-tight">Schedule Free Consultation</div>
                          <p className="text-xs opacity-90 mt-1">Talk to our enterprise architects.</p>
                          <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-medium">
                            Book a call <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setOpenMenu("industries")}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground">
                Industries <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {openMenu === "industries" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="glass-strong rounded-2xl p-3 shadow-2xl w-56">
                      {industries.map((i) => (
                        <Link key={i} to="/industries" className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-white/5">{i}</Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setOpenMenu("resources")}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground">
                Resources <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {openMenu === "resources" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="glass-strong rounded-2xl p-3 shadow-2xl w-48">
                      {resources.map((r) => {
                        const map: Record<string, string> = { "Case Studies": "/case-studies", Insights: "/insights", FAQs: "/contact", Careers: "/careers" };
                        return <Link key={r} to={map[r]} className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-white/5">{r}</Link>;
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground">About</Link>
            <Link to="/contact" className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground">Contact</Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { const ev = new KeyboardEvent("keydown", { key: "k", ctrlKey: true }); window.dispatchEvent(ev); }}
              className="glass hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
              aria-label="Search"
            >
              <Search className="h-3.5 w-3.5" /> Search
              <kbd className="ml-1 rounded border border-white/10 px-1 text-[10px]">⌘K</kbd>
            </button>
            <ThemeToggle />
            <Link to="/contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand/30 hover:scale-105 transition-transform">
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button onClick={() => setMobile(true)} className="glass lg:hidden grid h-9 w-9 place-items-center rounded-full" aria-label="Open menu">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between p-5">
              <span className="font-display font-semibold">Menu</span>
              <button onClick={() => setMobile(false)} className="glass grid h-9 w-9 place-items-center rounded-full" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="px-6 pb-10 space-y-1 text-lg">
              {[
                ["Home", "/"], ["Services", "/services"], ["Industries", "/industries"],
                ["Case Studies", "/case-studies"], ["Insights", "/insights"], ["Careers", "/careers"],
                ["About", "/about"], ["Contact", "/contact"],
              ].map(([l, p]) => (
                <Link key={p} to={p} onClick={() => setMobile(false)} className="block rounded-xl px-4 py-3 text-foreground hover:bg-white/5">{l}</Link>
              ))}
              <Link to="/contact" onClick={() => setMobile(false)} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-white font-medium">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
