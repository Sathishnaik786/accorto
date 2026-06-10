import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github, ChevronDown, ShieldCheck, Sparkles, LifeBuoy } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact an Enterprise Architect — Accorto Technologies" },
      {
        name: "description",
        content:
          "Speak directly with our enterprise consulting architects. Contact our global offices in Bengaluru, Dubai, and New York to kick off your program today.",
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
                  text: "Global delivery hubs in Bengaluru, Dubai, and New York. Follow-the-sun coverage.",
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
    a: "Global delivery hubs in Bengaluru, Dubai, and New York. Follow-the-sun coverage.",
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <form
            className="glass-strong rounded-3xl p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div aria-live="polite" role="status">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white">
                    <Send className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold">Message received.</h2>
                  <p className="mt-2 text-muted-foreground">
                    An enterprise architect will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4 justify-between border-b border-white/10 pb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg">Send a Message</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Average response time: &lt; 2 hours</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Architects Online
                      </div>
                      <div className="text-xs text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
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
                    <div className="sm:col-span-2 space-y-4 border-t border-white/10 pt-5 mt-2">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                        <p>
                          <strong>Secure Transmission:</strong> Your request is encrypted with TLS 1.3. 
                          We respect your privacy and will sign a mutual NDA before reviewing system details or architecture logs.
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
                        <p className="text-xs text-muted-foreground">
                          By submitting you agree to our privacy policy.
                        </p>
                        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand/30 hover:scale-105 transition-transform">
                          Send message <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-lg font-semibold">Talk to us</h2>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" /> hello@accorto.tech
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" /> +91 80 0000 0000
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand" /> 24/7 enterprise support
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Linkedin, name: "LinkedIn" },
                { Icon: Twitter, name: "Twitter" },
                { Icon: Github, name: "GitHub" },
              ].map(({ Icon, name }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Follow Accorto on ${name}`}
                  className="glass grid h-9 w-9 place-items-center rounded-full"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-7 space-y-4 border border-white/5">
            <h2 className="font-display text-lg font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand" /> What to expect next
            </h2>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">1</span>
                <div>
                  <div className="font-medium">Discovery Session (30 mins)</div>
                  <div className="text-xs text-muted-foreground mt-0.5">We discuss your technical challenges, systems landscape, and target timeline.</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">2</span>
                <div>
                  <div className="font-medium">Solution Architect Assignment</div>
                  <div className="text-xs text-muted-foreground mt-0.5">We assign a dedicated Principal Architect specialized in your specific ERP/AI stack.</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">3</span>
                <div>
                  <div className="font-medium">Preliminary Roadmap & Proposal</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Receive a tailored high-level program map, resource sizing, and commercial model.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl glass p-7 border border-brand/20">
            <div className="absolute top-0 right-0 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl border-l border-b border-brand/20">
              Active SLA
            </div>
            <h2 className="font-display text-lg font-semibold flex items-center gap-2">
              <LifeBuoy className="h-5 w-5 text-brand" /> Enterprise Support
            </h2>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Existing customer with an active service agreement? Access your dedicated support portal or contact the escalation desk directly.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href="mailto:support@accorto.tech"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-brand" /> Email Support Desk
              </a>
              <a
                href="tel:+918000000000"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-brand" /> Escalation Hotline
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-7 space-y-5">
            <h2 className="font-display text-lg font-semibold">Our offices</h2>
            {[
              {
                city: "Bengaluru",
                addr: "Prestige Tech Park, Outer Ring Rd, IN",
                phone: "+91 80 0000 0000",
              },
              {
                city: "Dubai",
                addr: "Sheikh Zayed Rd, Business Bay, AE",
                phone: "+971 4 000 0000",
              },
              { city: "New York", addr: "350 5th Ave, Manhattan, NY", phone: "+1 212 000 0000" },
            ].map((o) => (
              <div key={o.city} className="text-sm">
                <div className="font-semibold">{o.city}</div>
                <div className="text-muted-foreground">{o.addr}</div>
                <div className="text-muted-foreground">{o.phone}</div>
              </div>
            ))}
          </div>

          <div className="relative aspect-16/10 overflow-hidden rounded-3xl glass">
            <div className="absolute inset-0 bg-linear-to-br from-brand/30 via-brand-2/20 to-brand-3/30" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {[
              ["18%", "32%"],
              ["54%", "48%"],
              ["78%", "60%"],
            ].map(([l, t], i) => (
              <div key={i} className="absolute" style={{ left: l, top: t }}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md animate-ping" />
                  <div className="relative h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-white/20" />
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-4 glass-strong rounded-xl px-3 py-2 text-xs">
              Global presence · 14 countries
            </div>
          </div>
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
            <details key={f.q} className="group glass rounded-2xl px-6 py-5">
              <summary className="flex cursor-pointer items-center justify-between font-display text-base font-semibold list-none">
                {f.q}
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <style>{`
        .input { width: 100%; background: transparent; border: 1px solid rgb(255 255 255 / 0.12); padding: 0.7rem 0.9rem; border-radius: 0.85rem; font-size: 0.875rem; color: inherit; }
        .input::placeholder { color: var(--muted-foreground); }
        .input:focus { outline: none; border-color: var(--brand); box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand) 20%, transparent); }
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
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground block mb-1.5">
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
        <p id={`${id}-desc`} className="text-[11px] text-muted-foreground/85 mt-1 leading-normal">
          {description}
        </p>
      )}
    </div>
  );
}
