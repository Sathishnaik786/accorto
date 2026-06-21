import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/section";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { ARTICLES } from "@/data/insights";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    return {
      meta: [
        { title: `${article?.title || "Insight"} — Accorto Technologies` },
        {
          name: "description",
          content: article?.excerpt || "Read our latest enterprise consulting field notes.",
        },
      ],
      links: [{ rel: "canonical", href: `https://accorto.tech/insights/${params.slug}` }],
    };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const { slug } = Route.useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="relative min-h-screen w-full bg-[#031224] text-white pt-36 pb-20 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-display text-4xl font-bold">Insight Not Found</h1>
          <p className="text-zinc-400">The article you are looking for does not exist.</p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-2.5 text-sm font-semibold text-white hover:scale-105 transition-all duration-300"
          >
            Back to Insights
          </Link>
        </div>
      </section>
    );
  }

  // Get 2 related articles (excluding the current one)
  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <section className="relative min-h-screen w-full bg-[#031224] text-white pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient premium radial glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-3/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Back Link */}
        <div className="text-left mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand dark:text-brand-3 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            ← Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <div className="text-left space-y-4 mb-10">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-brand dark:text-brand-3 uppercase tracking-wider">
              {article.cat}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400 font-medium pt-2">
              <span className="text-white">{article.author}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span>{article.date}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span>{article.read}</span>
            </div>
          </Reveal>
        </div>

        {/* Hero Image */}
        <Reveal delay={0.15}>
          <div className="relative w-full aspect-video sm:aspect-21/9 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl mb-12">
            <img
              src={article.img}
              alt={article.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#031224]/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none mb-20">
          {article.blocks.map((block, idx) => {
            if (block.type === "p") {
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <p className="text-zinc-300 leading-8 text-base md:text-lg mb-6 font-normal text-left">
                    {block.text}
                  </p>
                </Reveal>
              );
            }
            if (block.type === "h2") {
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mt-12 mb-6 text-left">
                    {block.text}
                  </h2>
                </Reveal>
              );
            }
            if (block.type === "ul" && block.items) {
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <ul className="list-disc pl-6 space-y-3 mb-6 text-left text-zinc-300 leading-8">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              );
            }
            return null;
          })}
        </div>

        {/* Related Articles Divider */}
        <div className="border-t border-white/10 pt-16 mb-10 text-left">
          <h2 className="font-display text-2xl font-bold text-white">Related Insights</h2>
        </div>

        {/* Related Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {relatedArticles.map((a, idx) => (
            <Reveal key={a.title} delay={idx * 0.08}>
              <Link to="/insights/$slug" params={{ slug: a.slug }} className="group block h-full">
                <PremiumCard
                  hover={true}
                  className="h-full flex flex-col border border-white/10 hover:border-brand/35 bg-[#0C223D]/40 backdrop-blur-md rounded-[32px] overflow-hidden transition-all duration-500"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-[32px]">
                    <img
                      src={a.img}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#031224] via-[#031224]/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-6 flex flex-col grow text-left">
                    <div className="space-y-0.5 mb-3">
                      <p className="text-[13px] font-medium text-white/90">{a.author}</p>
                      <p className="text-[12px] text-zinc-400">{a.date}</p>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-brand dark:group-hover:text-brand-3 transition-colors duration-300 leading-snug mb-3">
                      {a.title}
                    </h3>

                    <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-2 mb-6 font-normal">
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

      </div>
    </section>
  );
}
