import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Accorto Technologies" },
      { name: "description", content: "Explore real client outcomes across Oracle ERP, SAP, AI and Cloud programs." },
      { property: "og:title", content: "Case studies" },
      { property: "og:description", content: "Enterprise programs that moved markets." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

const CASES = [
  { cat: "Oracle", title: "Global manufacturer cuts financial close by 47%", client: "Aurora Manufacturing", img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1000&q=80", metric: "47% faster close", desc: "Migrated 12 legal entities to Oracle Cloud ERP in 9 months." },
  { cat: "SAP", title: "Retail conglomerate unifies 9 ERPs into one", client: "Northwind Retail", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80", metric: "$28M savings", desc: "S/4HANA RISE program across 14 brands." },
  { cat: "AI", title: "Bank deploys real-time fraud AI at scale", client: "Meridian Bank", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1000&q=80", metric: "92% fraud caught", desc: "Real-time scoring on 1.2M transactions/day." },
  { cat: "Cloud", title: "Insurer modernizes core to AWS landing zone", client: "Sentinel Insurance", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80", metric: "35% infra savings", desc: "200+ workloads migrated with zero downtime." },
  { cat: "Oracle", title: "Hospital network rolls out Fusion HCM", client: "Caremount Health", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&q=80", metric: "60k employees onboarded", desc: "12-month HCM transformation across 18 hospitals." },
  { cat: "AI", title: "Telco predicts churn 6 weeks earlier", client: "Vantage Telecom", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80", metric: "+22pt accuracy", desc: "GenAI copilot for retention agents." },
  { cat: "SAP", title: "FMCG launches integrated planning on BTP", client: "Northstar FMCG", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80", metric: "Inventory -22%", desc: "IBP + BTP extensions live in 5 months." },
  { cat: "Cloud", title: "Logistics control tower on Azure", client: "GlobalRoute Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80", metric: "OTIF +12pt", desc: "Real-time visibility across 40+ DCs." },
];
const CATS = ["All", "Oracle", "SAP", "AI", "Cloud"];

function CaseStudies() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => cat === "All" ? CASES : CASES.filter((c) => c.cat === cat), [cat]);
  return (
    <>
      <PageHero
        tag="Case Studies"
        title={<>Programs that <span className="text-gradient">moved markets</span>.</>}
        subtitle="Real client outcomes from the last few quarters across our Oracle, SAP, AI and Cloud practices."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm transition-all ${cat === c ? "bg-gradient-brand text-white shadow-lg shadow-brand/30" : "glass hover:bg-white/10"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <div className="group h-full overflow-hidden rounded-3xl glass">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-xs font-medium">{c.cat}</div>
                  <div className="absolute bottom-4 right-4 glass-strong rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1"><TrendingUp className="h-3 w-3 text-emerald-400" /> {c.metric}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground">{c.client}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold group-hover:text-brand transition-colors">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-xs font-medium">Read full story <ArrowRight className="h-3 w-3" /></Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
