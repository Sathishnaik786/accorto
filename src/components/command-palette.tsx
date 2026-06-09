import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Command } from "cmdk";
import { Search, Home, Building2, Briefcase, Layers, FileText, Users, Mail, Sparkles } from "lucide-react";

const items = [
  { label: "Home", to: "/", icon: Home },
  { label: "About", to: "/about", icon: Building2 },
  { label: "Services", to: "/services", icon: Briefcase },
  { label: "Industries", to: "/industries", icon: Layers },
  { label: "Case Studies", to: "/case-studies", icon: Sparkles },
  { label: "Careers", to: "/careers", icon: Users },
  { label: "Insights", to: "/insights", icon: FileText },
  { label: "Contact", to: "/contact", icon: Mail },
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] grid place-items-start pt-[15vh] bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <Command
        onClick={(e) => e.stopPropagation()}
        className="glass-strong w-[92vw] max-w-xl rounded-2xl shadow-2xl overflow-hidden mx-auto"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Command.Input
            autoFocus
            placeholder="Search pages, services, insights…"
            className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden md:inline text-[10px] text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
        </div>
        <Command.List className="max-h-[50vh] overflow-y-auto p-2">
          <Command.Empty className="px-4 py-8 text-center text-sm text-muted-foreground">No results.</Command.Empty>
          <Command.Group heading="Navigate" className="text-xs text-muted-foreground px-2 py-1">
            {items.map((i) => (
              <Command.Item
                key={i.to}
                onSelect={() => { navigate({ to: i.to }); setOpen(false); }}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground aria-selected:bg-white/10"
              >
                <i.icon className="h-4 w-4 text-brand" /> {i.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
