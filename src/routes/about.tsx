import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { Counter } from "@/components/counter";
import { Certifications, FinalCTA } from "@/components/home-sections";
import { Compass, Telescope, Heart, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Accorto — Enterprise Oracle, SAP & AI Consulting" },
      {
        name: "description",
        content:
          "Discover our story, leadership, and global footprint. We help fortune 500 companies modernize operations with Oracle, SAP, AI, and cloud technology.",
      },
      { property: "og:title", content: "About Accorto Technologies" },
      {
        property: "og:description",
        content: "Story, mission, vision, leadership, certifications.",
      },
      { property: "og:url", content: "https://accorto.tech/about" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/about" }],
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
              name: "About",
              item: "https://accorto.tech/about",
            },
          ],
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        tag="About Accorto"
        title={
          <>
            Engineering the <span className="text-gradient">enterprise of tomorrow</span>.
          </>
        }
        subtitle="We are a global team of strategists, engineers, and designers helping enterprises modernize with Oracle, SAP, AI, and cloud — without slowing the business down."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <SectionHeading
            tag="Our story"
            title={
              <>
                From a small <span className="text-gradient">ERP atelier</span> to a global
                consulting firm.
              </>
            }
          />
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Accorto Technologies was founded by a circle of Oracle and SAP veterans who believed
              enterprise transformation deserved better — faster delivery, sharper design, and
              measurable outcomes.
            </p>
            <p>
              What started as a five-person ERP atelier in Bengaluru is today a 600-person
              consulting firm running mission-critical programs across 14 countries.
            </p>
            <p>
              Our north star has not changed: ship transformation programs that the business
              actually adopts, and that finance can quantify.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden glass-strong">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="Accorto Technologies consulting team collaborating in a modern office space"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-brand/30 via-transparent to-brand-2/30 mix-blend-overlay" />
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
              {[
                { v: 12, s: "+", l: "Years" },
                { v: 600, s: "+", l: "Experts" },
                { v: 14, s: "", l: "Countries" },
              ].map((m) => (
                <div key={m.l} className="glass-strong rounded-2xl p-3 text-white">
                  <div className="font-display text-xl font-semibold">
                    <Counter to={m.v} suffix={m.s} />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider opacity-80">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="sr-only">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Compass,
              title: "Mission",
              desc: "Help enterprises unlock measurable value from technology — every quarter, not every decade.",
            },
            {
              icon: Telescope,
              title: "Vision",
              desc: "Be the most trusted intelligence layer in enterprise technology by 2030.",
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl glass-strong p-8">
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
                <b.icon className="h-8 w-8 text-brand" />
                <h3 className="mt-5 font-display text-2xl font-semibold">{b.title}</h3>
                <p className="mt-3 text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHeading
          tag="Core values"
          title={
            <>
              The principles we <span className="text-gradient">refuse to ship without</span>.
            </>
          }
          center
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              name: "Outcomes, not output",
              desc: "Everything we deliver maps to a board-level metric.",
            },
            {
              name: "Engineering rigor",
              desc: "Senior engineers in every pod. No juniors fronting clients.",
            },
            {
              name: "Quiet operators",
              desc: "We let our programs speak louder than our pitch decks.",
            },
            {
              name: "Long-game partnership",
              desc: "Most of our clients have been with us 5+ years.",
            },
          ].map((v, i) => (
            <Reveal key={v.name} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full">
                <Heart className="h-5 w-5 text-brand" />
                <h3 className="mt-4 font-display text-lg font-semibold">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHeading
          tag="Leadership"
          title={
            <>
              Operators who have <span className="text-gradient">shipped at scale</span>.
            </>
          }
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              name: "Rohan Mehta",
              role: "Founder & CEO",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
            },
            {
              name: "Sara Khan",
              role: "President, Oracle Practice",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
            },
            {
              name: "David Park",
              role: "Chief AI Officer",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
            },
            {
              name: "Anika Rao",
              role: "MD, Global Delivery",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="group rounded-3xl glass overflow-hidden">
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base">{p.name}</h3>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHeading
          tag="Timeline"
          title={
            <>
              A <span className="text-gradient">decade in motion</span>.
            </>
          }
        />
        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-brand to-transparent" />
          {[
            { y: "2013", t: "Founded in Bengaluru", d: "Five Oracle veterans, one bold idea." },
            {
              y: "2016",
              t: "First Fortune 500 client",
              d: "Oracle Cloud ERP for a global manufacturer.",
            },
            { y: "2019", t: "Launched SAP & AI practices", d: "Expanded to 150 consultants." },
            { y: "2022", t: "Offices in Dubai & New York", d: "Global delivery model online." },
            {
              y: "2025",
              t: "600+ experts, 14 countries",
              d: "Recognized in Gartner mid-market consulting.",
            },
          ].map((e, i) => (
            <Reveal key={e.y} delay={i * 0.05}>
              <div
                className={`relative mb-10 md:mb-14 flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} items-start md:items-center gap-6`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-10">
                  <div className="glass rounded-2xl p-5">
                    <div className="text-xs font-mono text-brand">{e.y}</div>
                    <div className="font-display text-lg font-semibold mt-1">{e.t}</div>
                    <p className="text-sm text-muted-foreground mt-1">{e.d}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 grid h-3 w-3 place-items-center rounded-full bg-gradient-brand ring-4 ring-background" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10">
          <Globe2 className="h-8 w-8 text-brand" />
          <SectionHeading
            tag="Global presence"
            title={
              <>
                One firm, <span className="text-gradient">three continents</span>.
              </>
            }
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { city: "Bengaluru, IN", role: "Global HQ & Delivery" },
              { city: "Dubai, UAE", role: "Middle East & Africa Hub" },
              { city: "New York, US", role: "Americas Hub" },
            ].map((o) => (
              <div key={o.city} className="glass rounded-2xl p-5">
                <div className="font-display font-semibold">{o.city}</div>
                <div className="text-xs text-muted-foreground mt-1">{o.role}</div>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand"
                >
                  Visit office <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />
      <FinalCTA />
    </>
  );
}
