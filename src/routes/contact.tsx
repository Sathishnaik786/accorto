import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { Send, ChevronDown, ShieldCheck } from "lucide-react";

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
                  text: "Global delivery hubs in Hyderabad, India, Hyderabad, India, and Hyderabad, India. Follow-the-sun coverage.",
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
    a: "Discovery can begin within a week. Most clients see a roadmap within 3 weeks.",
  },
  {
    q: "Do you work on fixed-price or T&M?",
    a: "Both. We default to outcome-based contracts where possible — clients prefer it.",
  },
  {
    q: "What's the smallest engagement you take?",
    a: "From 6-week strategic sprints to multi-year programs. We size around the problem.",
  },
  {
    q: "Where are your teams based?",
    a: "Global delivery hubs in Hyderabad, India, Hyderabad, India, and Hyderabad, India. Follow-the-sun coverage.",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
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
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-16 sm:pb-20 space-y-6">
        <form
          className="glass rounded-3xl p-5 sm:p-8 shadow-xl"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div aria-live="polite" role="status">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white shadow-lg">
                  <Send className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-slate-900 dark:text-white">Message received.</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300 font-medium">
                  An enterprise architect will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Send a Message</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Average response time: &lt; 2 hours</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Architects Online
                    </div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10">
                      SOC 2 · ISO 27001
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" id="fullname" required>
                    <input
                      id="fullname"
                      required
                      className="input"
                      placeholder="Jane Doe"
                      aria-required="true"
                    />
                  </Field>
                  <Field
                    label="Work email"
                    id="email"
                    required
                    description="We will only use this to send you details about your inquiry."
                  >
                    <input
                      id="email"
                      required
                      type="email"
                      className="input"
                      placeholder="jane@company.com"
                      aria-required="true"
                      aria-describedby="email-desc"
                    />
                  </Field>
                  <Field label="Company" id="company" required>
                    <input
                      id="company"
                      required
                      className="input"
                      placeholder="Acme Corp"
                      aria-required="true"
                    />
                  </Field>
                  <Field label="Phone" id="phone">
                    <input id="phone" className="input" placeholder="+1 555 000 0000" />
                  </Field>
                  <Field label="Interest" id="interest" className="sm:col-span-2">
                    <select id="interest" className="input" required aria-required="true">
                      <option>Oracle ERP</option>
                      <option>SAP</option>
                      <option>AI & ML</option>
                      <option>Cloud</option>
                      <option>Digital Transformation</option>
                      <option>Digital Marketing</option>
                    </select>
                  </Field>
                  <Field
                    label="What can we help with?"
                    id="message"
                    required
                    className="sm:col-span-2"
                    description="Please share key details such as timeline, budget, and scope."
                  >
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="input resize-none"
                      placeholder="Tell us about your goals, timeline, and what success looks like..."
                      aria-required="true"
                      aria-describedby="message-desc"
                    />
                  </Field>
                  <div className="sm:col-span-2 space-y-4 border-t border-slate-200 dark:border-white/10 pt-5 mt-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                      <ShieldCheck className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <strong className="font-semibold text-slate-900 dark:text-white">Secure Transmission:</strong> Your request is encrypted with TLS 1.3.
                        We respect your privacy and will sign a mutual NDA before reviewing system details or architecture logs.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap pt-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        By submitting you agree to our privacy policy.
                      </p>
                      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-brand hover:scale-105 hover:shadow-brand-lg transition-all duration-300">
                        Send message <Send className="h-4 w-4" />
                      </button>
                    </div>
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
      </section>

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
          {FAQS.map((f) => (
            <details key={f.q} className="group glass rounded-2xl px-6 py-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <summary className="flex cursor-pointer items-center justify-between font-display text-base font-bold text-slate-900 dark:text-white list-none">
                {f.q}
                <ChevronDown className="h-4 w-4 text-brand transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <style>{`
        .input {
          width: 100%;
          background: rgba(15, 23, 42, 0.015);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          border-radius: 0.85rem;
          font-size: 0.875rem;
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
      <label htmlFor={id} className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
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
        <p id={`${id}-desc`} className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal font-medium">
          {description}
        </p>
      )}
    </div>
  );
}
