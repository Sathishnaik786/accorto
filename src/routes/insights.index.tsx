import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FEATURED, ARTICLES, CATEGORIES } from "@/data/insights";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { DotGrid } from "@/components/animations/DotGrid";

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
  const displayArticles = ARTICLES.filter((a) => a.slug !== FEATURED.slug).filter((a) => {
    if (selectedCategory === "View All") return true;
    // Handle "AI Strategy" category match with "AI" filter
    if (selectedCategory === "AI" && a.cat === "AI Strategy") return true;
    return a.cat.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section className="relative min-h-screen w-full bg-background text-foreground pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Interactive Full-Bleed DotGrid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none h-full w-full"
        aria-hidden="true"
      >
        <DotGrid
          dotSize={4}
          gap={26}
          baseColor="#1A3155"
          activeColor="#38BDF8"
          proximity={110}
          speedTrigger={140}
          shockRadius={180}
          shockStrength={3}
          resistance={850}
          returnDuration={1.2}
        />
      </div>

      {/* Ambient premium radial glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand/5 dark:bg-brand/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-3/3 dark:bg-brand-3/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Featured Section Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Large Featured Article */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Reveal>
              <CardContainer className="w-full">
                <CardBody className="p-0 bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md hover:shadow-xl rounded-4xl overflow-hidden">
                  <Link
                    to="/insights/$slug"
                    params={{ slug: FEATURED.slug }}
                    aria-label={`${FEATURED.title} — Read featured story`}
                    className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-4xl"
                  >
                    {/* Image Container with 3D Depth */}
                    <CardItem translateZ={30} className="w-full">
                      <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-4xl border-b border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-white/5">
                        <img
                          src={FEATURED.img}
                          alt={FEATURED.title}
                          loading="lazy"
                          className="h-full w-full object-cover brightness-[0.96] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                      </div>
                    </CardItem>

                    {/* Card Body with 3D Layers */}
                    <div className="p-6 sm:p-8 space-y-4 text-left">
                      <CardItem translateZ={15} className="w-fit">
                        <span className="inline-block text-[11px] font-mono font-bold text-brand dark:text-brand-2 uppercase tracking-wider">
                          {FEATURED.cat}
                        </span>
                      </CardItem>

                      <CardItem translateZ={25} className="w-full">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight group-hover:text-brand transition-colors duration-300">
                          {FEATURED.title}
                        </h2>
                      </CardItem>

                      <CardItem translateZ={15} className="w-fit">
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-zinc-400">
                          {FEATURED.author} • {FEATURED.date}
                        </p>
                      </CardItem>

                      <CardItem translateZ={20} className="w-full">
                        <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed font-medium max-w-3xl">
                          {FEATURED.excerpt}
                        </p>
                      </CardItem>

                      <CardItem translateZ={15} className="w-fit pt-2">
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                          <span>Read featured story</span>
                          <span className="text-brand text-xs font-bold" aria-hidden="true">→</span>
                        </div>
                      </CardItem>
                    </div>
                  </Link>
                </CardBody>
              </CardContainer>
            </Reveal>
          </div>

            {/* Right: Featured Stack (3 list items) */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                  Featured
                </h2>
              </Reveal>

              <div className="w-full divide-y divide-slate-200 dark:divide-white/10">
                {ARTICLES.slice(0, 3).map((a, idx) => (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <Link
                      to="/insights/$slug"
                      params={{ slug: a.slug }}
                      className="group block py-5 first:pt-0 last:pb-0 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-2 flex-1">
                          <h3 className="font-display text-sm font-bold text-slate-800 dark:text-white group-hover:text-brand transition-colors duration-200 line-clamp-2 leading-snug">
                            {a.title}
                          </h3>
                          <p className="text-[11px] font-mono font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-wider">
                            {a.author}
                          </p>
                        </div>
                        <div className="h-16 w-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-white/5 shadow-xs bg-slate-100 dark:bg-white/5">
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
          <div className="border-b border-slate-200 dark:border-white/10 mt-16 mb-10">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-3 scroll-smooth" role="tablist" aria-label="Insight categories">
              {CATEGORIES.map((cat: string) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "relative pb-3 text-sm font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm",
                      active
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white",
                    )}
                  >
                    {cat}
                    {active && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
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
                  <Link to="/insights/$slug" params={{ slug: a.slug }} className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-4xl">
                    <PremiumCard
                      hover={true}
                      className="h-full flex flex-col bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 rounded-4xl overflow-hidden transition-all duration-300 motion-reduce:hover:translate-y-0"
                    >
                      {/* Image at top */}
                      <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-4xl border-b border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-white/5">
                        <img
                          src={a.img}
                          alt={a.title}
                          loading="lazy"
                          className="h-full w-full object-cover brightness-[0.96] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100 motion-reduce:transition-none"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex flex-col grow text-left justify-between gap-4">
                        <div>
                          <div className="space-y-0.5 mb-2">
                            <span className="text-[11px] font-mono font-bold text-brand dark:text-brand-2 uppercase tracking-wider block">
                              {a.cat}
                            </span>
                            <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                              {a.author} • {a.date}
                            </p>
                          </div>

                          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors duration-300 leading-snug mb-2">
                            {a.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed line-clamp-3 font-medium">
                            {a.excerpt}
                          </p>
                        </div>

                        <div className="inline-flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors mt-auto pt-3 border-t border-slate-100 dark:border-white/5">
                          <span>Read article</span>
                          <span className="text-brand text-xs font-bold" aria-hidden="true">→</span>
                        </div>
                      </div>
                    </PremiumCard>
                  </Link>
                </Reveal>
              ))}
            </div>
        ) : (
          <div className="py-20 text-center text-slate-500 dark:text-zinc-400 font-normal">
            No articles found in this category.
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-4xl bg-white dark:bg-[#0C223D]/40 border border-slate-200/60 dark:border-white/10 p-10 md:p-14 text-center shadow-md dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-brand opacity-[0.06] dark:opacity-[0.08]" />
            <div className="relative max-w-2xl mx-auto">
              <Reveal>
                <span className="inline-block text-xs font-semibold text-brand dark:text-brand-3 uppercase tracking-wider mb-3">
                  Newsletter
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                  Get our <span className="text-gradient">quarterly briefing</span>.
                </h2>
                <p className="text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8 font-normal">
                  Curated research on enterprise AI, ERP and cloud — written by our partners. No
                  fluff.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <form
                  className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl sm:rounded-full p-2 sm:p-1 max-w-md mx-auto gap-2 sm:gap-0 shadow-xs dark:shadow-none focus-within:border-brand transition-all"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    required
                    placeholder="Work email"
                    className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-slate-400 dark:placeholder:text-zinc-500 text-slate-900 dark:text-white font-normal"
                  />
                  <input type="hidden" name="form-name" value="newsletter" />
                  <SpecularButton
                    type="submit"
                    size="sm"
                    variant="brand"
                    className="shadow-brand hover:shadow-brand-lg"
                  >
                    Subscribe
                  </SpecularButton>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
