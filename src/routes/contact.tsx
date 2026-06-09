import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeading } from "@/components/section";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Accorto Technologies" },
      { name: "description", content: "Talk to an enterprise architect. Offices in Bengaluru, Dubai and New York." },
      { property: "og:title", content: "Contact Accorto" },
      { property: "og:description", content: "Get in touch with our consulting team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const FAQS = [
  { q: "How quickly can we kick off a program?", a: "Discovery can begin within a week. Most clients see a roadmap within 3 weeks." },
  { q: "Do you work on fixed-price or T&M?", a: "Both. We default to outcome-based contracts where possible — clients prefer it." },
  { q: "What's the smallest engagement you take?", a: "From 6-week strategic sprints to multi-year programs. We size around the problem." },
  { q: "Where are your teams based?", a: "Global delivery hubs in Bengaluru, Dubai, and New York. Follow-the-sun coverage." },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        tag="Contact"
        title={<>Let's build <span className="text-gradient">your next program</span>.</>}
        subtitle="Tell us about your business, and we'll match you with the right enterprise architect within 24 hours."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <form
            className="glass-strong rounded-3xl p-8"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white"><Send className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Message received.</h3>
                <p className="mt-2 text-muted-foreground">An enterprise architect will reach out within 24 hours.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" required><input required className="input" placeholder="Jane Doe" /></Field>
                <Field label="Work email" required><input required type="email" className="input" placeholder="jane@company.com" /></Field>
                <Field label="Company" required><input required className="input" placeholder="Acme Corp" /></Field>
                <Field label="Phone"><input className="input" placeholder="+1 555 000 0000" /></Field>
                <Field label="Interest" className="sm:col-span-2">
                  <select className="input" required>
                    <option>Oracle ERP</option><option>SAP</option><option>AI & ML</option>
                    <option>Cloud</option><option>Digital Transformation</option><option>Digital Marketing</option>
                  </select>
                </Field>
                <Field label="What can we help with?" required className="sm:col-span-2">
                  <textarea required rows={5} className="input resize-none" placeholder="Tell us about your goals, timeline, and what success looks like..." />
                </Field>
                <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-muted-foreground">By submitting you agree to our privacy policy.</p>
                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand/30">
                    Send message <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-semibold">Talk to us</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand" /> hello@accorto.tech</p>
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand" /> +91 80 0000 0000</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand" /> 24/7 enterprise support</p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {[Linkedin, Twitter, Github].map((I, i) => <a key={i} href="#" className="glass grid h-9 w-9 place-items-center rounded-full"><I className="h-4 w-4" /></a>)}
            </div>
          </div>

          <div className="glass rounded-3xl p-7 space-y-5">
            <h3 className="font-display text-lg font-semibold">Our offices</h3>
            {[
              { city: "Bengaluru", addr: "Prestige Tech Park, Outer Ring Rd, IN", phone: "+91 80 0000 0000" },
              { city: "Dubai", addr: "Sheikh Zayed Rd, Business Bay, AE", phone: "+971 4 000 0000" },
              { city: "New York", addr: "350 5th Ave, Manhattan, NY", phone: "+1 212 000 0000" },
            ].map((o) => (
              <div key={o.city} className="text-sm">
                <div className="font-semibold">{o.city}</div>
                <div className="text-muted-foreground">{o.addr}</div>
                <div className="text-muted-foreground">{o.phone}</div>
              </div>
            ))}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl glass">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-brand-2/20 to-brand-3/30" />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            {[["18%","32%"],["54%","48%"],["78%","60%"]].map(([l, t], i) => (
              <div key={i} className="absolute" style={{ left: l, top: t }}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md animate-ping" />
                  <div className="relative h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-white/20" />
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-4 glass-strong rounded-xl px-3 py-2 text-xs">Global presence · 14 countries</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-28">
        <SectionHeading tag="FAQ" title={<>Frequently <span className="text-gradient">asked</span></>} center />
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

function Field({ label, children, required, className = "" }: any) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium text-muted-foreground">{label}{required && <span className="text-brand">*</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
