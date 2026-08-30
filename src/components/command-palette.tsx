import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Command } from "cmdk";
import {
  Search,
  Home,
  Building2,
  Briefcase,
  Layers,
  FileText,
  Users,
  Mail,
  Sparkles,
  GraduationCap,
  Activity,
  Cpu,
  Database,
  Award,
} from "lucide-react";
import { backdropVariants, getStandardModalVariants } from "@/config/animations";

const items = [
  { label: "Home", to: "/", icon: Home },
  { label: "AI & IoT (Flagship Offering)", to: "/services/ai-iot", icon: Activity },
  { label: "AI for Enterprise Structure", to: "/services/ai-enterprise-structure", icon: Cpu },
  { label: "AI for Enterprise Data", to: "/services/ai-enterprise-data", icon: Database },
  { label: "Services & Practices", to: "/services", icon: Briefcase },
  { label: "Industries & Sectors", to: "/industries", icon: Layers },
  { label: "Academy — AI Career Development", to: "/academy/ai-career-development", icon: Award },
  { label: "Academy — All Courses", to: "/academy", icon: GraduationCap },
  { label: "Case Studies & Client Results", to: "/case-studies", icon: Sparkles },
  { label: "Careers & Open Roles", to: "/careers", icon: Users },
  { label: "Insights & Research", to: "/insights", icon: FileText },
  { label: "Contact & Consultations", to: "/contact", icon: Mail },
  { label: "About Accorto", to: "/about", icon: Building2 },
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const shouldReduceMotion = !useReducedMotion();
  const modalVariants = getStandardModalVariants(shouldReduceMotion);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-90 grid place-items-start pt-[15vh] bg-black/60 backdrop-blur-xs"
          onClick={() => setOpen(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-[92vw] max-w-xl mx-auto"
          >
            <Command className="glass-strong rounded-2xl shadow-2xl overflow-hidden border border-white/10 dark:border-white/10">
              <div className="flex items-center gap-2 border-b border-white/10 px-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Command.Input
                  autoFocus
                  placeholder="Search AI services, ERP, academy tracks, insights…"
                  className="flex-1 bg-transparent py-4 text-sm outline-hidden placeholder:text-muted-foreground"
                />
                <kbd className="hidden md:inline text-[10px] text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No results.
                </Command.Empty>
                <Command.Group
                  heading="Navigate"
                  className="text-xs text-muted-foreground px-2 py-1"
                >
                  {items.map((i) => (
                    <Command.Item
                      key={i.to}
                      onSelect={() => {
                        navigate({ to: i.to });
                        setOpen(false);
                      }}
                      className="group/cmd flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-foreground aria-selected:bg-white/10 dark:aria-selected:bg-white/5 transition-colors duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <i.icon className="h-4 w-4 text-brand transition-transform duration-200 group-hover/cmd:scale-110" />
                        <span>{i.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground opacity-0 group-hover/cmd:opacity-100 transition-opacity">
                        Go →
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
