import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Enterprise Insights & Research — Accorto Technologies" },
      {
        name: "description",
        content:
          "Read our field notes, research, and expert points of view on enterprise generative AI, cloud migration, ERP optimizations, and digital strategy trends.",
      },
      { property: "og:title", content: "Accorto Insights" },
      { property: "og:description", content: "Field notes on enterprise transformation." },
      { property: "og:url", content: "https://accorto.tech/insights" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://accorto.tech",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Insights",
              item: "https://accorto.tech/insights",
            },
          ],
        }),
      },
    ],
  }),
  component: Insights,
});

const FEATURED = {
  cat: "AI Strategy",
  title: "The post-pilot era: how enterprise AI finally ships to production",
  excerpt:
    "Most enterprise AI gets stuck in pilot purgatory. We unpack the operating model that helps teams move from prototype to platform — and what changes when GenAI enters the room.",
  read: "12 min read",
  img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
};
const ARTICLES = [
  {
    cat: "Oracle",
    title: "Brownfield to Cloud ERP in 9 months: a delivery playbook",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    cat: "SAP",
    title: "Why selective S/4HANA conversion beats greenfield 80% of the time",
    read: "10 min",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80",
  },
  {
    cat: "Cloud",
    title: "FinOps in 2026: the four signals every CFO wants to see",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  },
  {
    cat: "AI",
    title: "Beyond chatbots: GenAI patterns for operational excellence",
    read: "9 min",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
  },
  {
    cat: "DX",
    title: "Process mining + AI: the new operating system for enterprises",
    read: "7 min",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
  },
  {
    cat: "Marketing",
    title: "Composable martech: stop buying suites you don't ship",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  },
];

function Insights() {
  return (
    <>
      <PageHero
        tag="Insights"
        title={
          <>
            Field notes from the{" "}
            <span className="text-gradient">front lines of enterprise tech</span>.
          </>
        }
        subtitle="Research, opinion, and case-tested playbooks from our partners and senior engineers."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <h2 className="sr-only">Featured Article</h2>
        <Reveal>
          <Link
            to="/insights"
            className="group grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl glass-strong"
          >
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden">
              <img
                src={FEATURED.img}
                alt={FEATURED.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-brand/30 via-transparent to-brand-2/30 mix-blend-overlay" />
            </div>
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs text-brand uppercase tracking-widest">
                {FEATURED.cat} · Featured
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight group-hover:text-brand transition-colors">
                {FEATURED.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{FEATURED.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {FEATURED.read}
                </span>
                <span className="inline-flex items-center gap-1 font-medium">
                  Read article{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <SectionHeading
          tag="Latest"
          title={
            <>
              Recent <span className="text-gradient">articles</span>
            </>
          }
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <Link to="/insights" className="group h-full block overflow-hidden rounded-2xl glass">
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 glass-strong rounded-full px-3 py-1 text-[11px] font-medium">
                    {a.cat}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold leading-snug group-hover:text-brand transition-colors">
                    {a.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {a.read}
                    </span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-brand opacity-20" />
          <div className="relative max-w-2xl mx-auto">
            <SectionHeading
              tag="Newsletter"
              title={
                <>
                  Get our <span className="text-gradient">quarterly briefing</span>.
                </>
              }
              subtitle="Curated research on enterprise AI, ERP and cloud — written by our partners. No fluff."
              center
            />
            <form
              className="glass mt-8 flex items-center rounded-full p-1 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Work email"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
