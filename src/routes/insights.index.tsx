import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FEATURED, ARTICLES, CATEGORIES } from "@/data/insights";

export const Route = createFileRoute("/insights/")({
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
  component: InsightsIndex,
});

function InsightsIndex() {
  const [selectedCategory, setSelectedCategory] = useState("View All");

  // Grid displays everything except the top featured post
  const displayArticles = ARTICLES.filter((a) => a.slug !== FEATURED.slug).filter(
    (a) => {
      if (selectedCategory === "View All") return true;
      // Handle "AI Strategy" category match with "AI" filter
      if (selectedCategory === "AI" && a.cat === "AI Strategy") return true;
      return a.cat.toLowerCase() === selectedCategory.toLowerCase();
    }
  );

  return (
    <section className="relative min-h-screen w-full bg-[#001c18] text-white pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient premium radial glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-3/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Featured Section Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Large Featured Article */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Reveal>
              <Link to="/insights/$slug" params={{ slug: FEATURED.slug }} className="group block">
                <PremiumCard
                  hover={true}
                  className="p-0 border border-white/10 hover:border-brand/35 bg-[#061a15]/40 backdrop-blur-md rounded-[32px] overflow-hidden transition-all duration-500"
                >
                  {/* Image Container with rounded top corners */}
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-[32px]">
                    <img
                      src={FEATURED.img}
                      alt={FEATURED.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-103 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#061a15] via-[#061a15]/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Card Body */}
                  <div className="p-8 space-y-4 text-left">
                    <span className="inline-block text-xs font-semibold text-brand dark:text-brand-3 uppercase tracking-wider">
                      {FEATURED.cat}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight group-hover:text-brand dark:group-hover:text-brand-3 transition-colors duration-300">
                      {FEATURED.title}
                    </h2>
                    <p className="text-sm font-semibold text-zinc-400">
                      {FEATURED.author} • {FEATURED.date}
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm sm:text-base font-normal max-w-3xl">
                      {FEATURED.excerpt}
                    </p>
                  </div>
                </PremiumCard>
              </Link>
            </Reveal>
          </div>

          {/* Right: Featured Stack (3 list items) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Reveal>
              <h2 className="font-display text-5xl font-semibold tracking-tight text-white mb-8">
                Featured
              </h2>
            </Reveal>

            <div className="w-full divide-y divide-white/10">
              {ARTICLES.slice(0, 3).map((a, idx) => (
                <Reveal key={idx} delay={idx * 0.08}>
                  <Link to="/insights/$slug" params={{ slug: a.slug }} className="group block py-5 first:pt-0 last:pb-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="font-display text-sm font-semibold text-white group-hover:text-brand dark:group-hover:text-brand-3 transition-colors duration-200 line-clamp-2 leading-snug">
                          {a.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                          {a.author}
                        </p>
                      </div>
                      <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-white/5 shadow-md">
                        <img
                          src={a.img}
                          alt={a.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Category Scroll Menu */}
        <div className="border-b border-white/10 mt-16 mb-10">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-3 scroll-smooth">
            {CATEGORIES.map((cat: string) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "relative pb-3 text-sm font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer",
                    active ? "text-white" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {cat}
                  {active && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-3"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Latest Articles Grid */}
        {displayArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArticles.map((a, idx) => (
              <Reveal key={a.title} delay={idx * 0.05}>
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="group block h-full">
                  <PremiumCard
                    hover={true}
                    className="h-full flex flex-col border border-white/10 hover:border-brand/35 bg-[#061a15]/40 backdrop-blur-md rounded-[32px] overflow-hidden transition-all duration-500"
                  >
                    {/* Image at top */}
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-[32px]">
                      <img
                        src={a.img}
                        alt={a.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#061a15] via-[#061a15]/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col grow text-left">
                      <div className="space-y-0.5 mb-3">
                        <p className="text-[13px] font-medium text-white/90">{a.author}</p>
                        <p className="text-[12px] text-zinc-400">{a.date}</p>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white group-hover:text-brand dark:group-hover:text-brand-3 transition-colors duration-300 leading-snug mb-3">
                        {a.title}
                      </h3>

                      <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-3 mb-6 font-normal">
                        {a.excerpt}
                      </p>

                      <div className="mt-auto">
                        <span className="inline-flex items-center text-xs font-semibold text-white/80 group-hover:text-brand-3 transition-colors">
                          Read post <span className="ml-1 text-[10px] font-sans">↗</span>
                        </span>
                      </div>
                    </div>
                  </PremiumCard>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-zinc-400">
            No articles found in this category.
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#061a15]/40 backdrop-blur-md p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-brand opacity-[0.06] dark:opacity-[0.08]" />
            <div className="relative max-w-2xl mx-auto">
              <Reveal>
                <span className="inline-block text-xs font-semibold text-brand dark:text-brand-3 uppercase tracking-wider mb-3">
                  Newsletter
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Get our <span className="text-gradient">quarterly briefing</span>.
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
                  Curated research on enterprise AI, ERP and cloud — written by our partners. No fluff.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <form
                  className="bg-white/5 border border-white/10 flex items-center rounded-full p-1 max-w-md mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    required
                    placeholder="Work email"
                    className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-zinc-500 text-white"
                  />
                  <input type="hidden" name="form-name" value="newsletter" />
                  <button className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
