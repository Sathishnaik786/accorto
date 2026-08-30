import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { Send, ChevronDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { FadeContent } from "@/components/animations/FadeContent";
import { GhostFibers } from "@/components/animations/GhostFibers";
import { AnimatedContent } from "@/components/animations/AnimatedContent";
import { CinematicSection } from "@/components/animations/CinematicSection";



export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact an Enterprise Architect — Accorto Technologies" },
      {
        name: "description",
        content:
          "Speak directly with our enterprise consulting architects. Fill out our contact form to kick off your program today.",
      },
      { property: "og:title", content: "Contact Accorto" },
      { property: "og:description", content: "Get in touch with our consulting team." },
      { property: "og:url", content: "https://accorto.tech/contact" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
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
                name: "Contact",
                item: "https://accorto.tech/contact",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How quickly can we kick off a program?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Discovery can begin within a week. Most clients see a roadmap within 3 weeks.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work on fixed-price or T&M?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Both. We default to outcome-based contracts where possible — clients prefer it.",
                },
              },
              {
                "@type": "Question",
                name: "What's the smallest engagement you take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "From 6-week strategic sprints to multi-year programs. We size around the problem.",
                },
              },
              {
                "@type": "Question",
                name: "Where are your teams based?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Global delivery hubs in Hyderabad, India; London, UK; and San Francisco, USA. Follow-the-sun coverage.",
                },
              },
            ],
          },
        ]),
      },
    ],
  }),
  component: Contact,
});

const FAQS = [
  {
    q: "How quickly can we kick off a program?",
    a: "Discovery can begin within a week of agreement. Most clients see an architectural roadmap within 3 weeks.",
  },
  {
    q: "Do you work on fixed-price or T&M?",
    a: "Both. We default to outcome-based contracts where possible — clients prefer predictability.",
  },
  {
    q: "What's the smallest engagement you take?",
    a: "From 6-week strategic sprints to multi-year programs. We size teams around the problem.",
  },
  {
    q: "Where are your teams based?",
    a: "Global delivery hubs in Hyderabad, India; London, UK; and San Francisco, USA. Follow-the-sun coverage.",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    phone: "",
    interest: "Oracle ERP Cloud / EBS Modernization",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Smooth, immediate professional submission transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };


  return (
    <>
      <PageHero
        tag="Contact"
        title={
          <>
            Let's build <span className="text-gradient">your next program</span>.
          </>
        }
        subtitle="Tell us about your business, and we'll match you with the right enterprise architect within 24 hours."
        background={
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <GhostFibers
              lineColor="#0B1736"
              glowColor="#2563EB"
              speed={0.12}
              scale={2.2}
              rotation={0}
              rotationSpeed={0.08}
              layers={4}
              waveAmplitude={0.012}
              waveFrequency={3}
              waveSpeed={0.1}
              layerSpeed={0.05}
              twist={0.08}
              twistFrequency={5}
              twistSpeed={0.8}
              lineFrequency={5}
              lineSpacing={2}
              lineSharpness={16}
              glowFalloff={10}
              glowIntensity={1.15}
              brightness={1.4}
              blueBoost={1.15}
              vignette={0.9}
              grain={0.025}
              dpr={1}
              fps={30}
              className="absolute inset-0 h-full w-full"
            />
            {/* Subtle atmospheric vignette and brand glow scrim for maximum text legibility */}
            <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/10 to-background pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-background,#031224)_95%)] opacity-80 pointer-events-none" />
          </div>
        }
      />

      <CinematicSection intensity="low" className="mx-auto max-w-4xl px-4 sm:px-6 pb-16 sm:pb-20 space-y-6">
        <form className="glass rounded-3xl p-5 sm:p-8 shadow-xl" onSubmit={handleSubmit}>
          <div aria-live="polite" role="status">
            {submitted ? (
              <FadeContent delay={0} distance={10}>
                <div className="text-center py-12">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white shadow-lg">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Message received.
                  </h2>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 font-medium">
                    An enterprise architect will reach out within 24 hours.
                  </p>
                </div>
              </FadeContent>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                      Average response time: &lt; 2 hours
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Architects Online
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" id="fullname" required>
                    <input
                      id="fullname"
                      required
                      placeholder="e.g. Elena Rostova"
                      className="input"
                      value={form.fullname}
                      onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                    />
                  </Field>
                  <Field label="Work email" id="email" required>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="elena@enterprise.com"
                      className="input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company / Organization" id="company" required>
                    <input
                      id="company"
                      required
                      placeholder="e.g. Acme Global Logistics"
                      className="input"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </Field>
                  <Field label="Phone number" id="phone">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="input"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </Field>
                </div>

                <Field label="Primary area of interest" id="interest">
                  <div className="relative">
                    <select
                      id="interest"
                      className="input appearance-none pr-10 cursor-pointer text-slate-700 dark:text-slate-200 font-medium"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    >
                      <option>Oracle ERP Cloud / EBS Modernization</option>
                      <option>SAP Solutions & S/4HANA</option>
                      <option>Cloud Infrastructure & FinOps</option>
                      <option>Data Engineering & Lakehouse Platforms</option>
                      <option>AI / Machine Learning & Agents</option>
                      <option>Corporate Training (Accorto Academy)</option>
                      <option>General Inquiry</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </Field>

                <Field label="Project details" id="message" required>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="input resize-none"
                    placeholder="Tell us about your objectives, timeline, or current technical stack..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </Field>

                <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                    <p>
                      NDAs respected. We never share or sell enterprise contact data.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap pt-2">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      By submitting you agree to our privacy policy.
                    </p>
                    <SpecularButton
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      variant="brand"
                      size="md"
                      className="w-full sm:w-auto text-white shadow-brand hover:scale-105 hover:shadow-brand-lg"
                    >
                      Send message <Send className="h-4 w-4 ml-1" />
                    </SpecularButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>

        <div className="glass rounded-3xl overflow-hidden shadow-xl aspect-video w-full border border-slate-200 dark:border-white/10 p-2">
          <iframe
            src="https://maps.google.com/maps?q=Asian%20Sun%20City%20Hyderabad&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "1.25rem" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Accorto Technologies Office Location"
            className="w-full h-full transition-all duration-300"
          />
        </div>
      </CinematicSection>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-28">
        <SectionHeading
          tag="FAQ"
          title={
            <>
              Frequently <span className="text-gradient">asked</span>
            </>
          }
          center
        />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, idx) => (
            <AnimatedContent
              key={f.q}
              distance={20}
              direction="vertical"
              delay={idx * 0.05}
              threshold={0.08}
              duration={0.4}
              scale={0.99}
            >
              <details className="group glass rounded-2xl px-6 py-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between font-display text-base font-bold text-slate-900 dark:text-white list-none">
                  {f.q}
                  <ChevronDown className="h-4 w-4 text-brand transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  {f.a}
                </p>
              </details>
            </AnimatedContent>
          ))}
        </div>
      </section>
      <style>{`
        .input {
          width: 100%;
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: 0.875rem;
          font-weight: 400;
          background: rgba(15, 23, 42, 0.015);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          border-radius: 0.85rem;
          color: inherit;
          transition: all 0.2s ease-in-out;
        }
        .dark .input {
          background: rgba(255, 255, 255, 0.015);
        }
        .input::placeholder { color: var(--color-muted-foreground); opacity: 0.6; }
        .input:focus {
          outline: none;
          border-color: var(--color-brand);
          box-shadow: 0 0 0 4px rgba(var(--brand-rgb), 0.1);
          background: transparent;
        }
        select.input { appearance: none; background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%); background-position: calc(100% - 18px) center, calc(100% - 13px) center; background-size: 5px 5px; background-repeat: no-repeat; }
      `}</style>
    </>
  );
}

interface FieldProps {
  label: string;
  id?: string;
  description?: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

function Field({ label, id, description, children, required, className = "" }: FieldProps) {
  return (
    <div className={`block ${className}`}>
      <label
        htmlFor={id}
        className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5"
      >
        {label}
        {required && (
          <span className="text-brand" aria-hidden="true">
            {" "}
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {description && (
        <p
          id={`${id}-desc`}
          className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal font-medium"
        >
          {description}
        </p>
      )}
    </div>
  );
}
