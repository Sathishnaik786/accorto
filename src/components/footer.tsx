import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32">
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-brand to-transparent opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-5">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-white font-display font-bold">
                  A
                </div>
                <div>
                  <div className="font-display font-semibold">Accorto Technologies</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Private Limited
                  </div>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm">
                A global enterprise technology partner accelerating digital transformation with
                Oracle, SAP, AI, and cloud excellence.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand" /> Bengaluru · Dubai · New York
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand" /> hello@accorto.tech
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand" /> +91 80 0000 0000
                </p>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { Icon: Linkedin, name: "LinkedIn" },
                  { Icon: Twitter, name: "Twitter" },
                  { Icon: Github, name: "GitHub" },
                  { Icon: Youtube, name: "YouTube" },
                ].map(({ Icon, name }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={`Follow Accorto on ${name}`}
                    className="glass grid h-9 w-9 place-items-center rounded-full hover:scale-110 transition-transform"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
              <FooterCol
                title="Company"
                links={[
                  ["About", "/about"],
                  ["Careers", "/careers"],
                  ["Insights", "/insights"],
                  ["Contact", "/contact"],
                ]}
              />
              <FooterCol
                title="Services"
                links={[
                  ["Oracle ERP", "/services"],
                  ["SAP Solutions", "/services"],
                  ["AI & ML", "/services"],
                  ["Cloud Consulting", "/services"],
                  ["Digital Transformation", "/services"],
                  ["Digital Marketing", "/services"],
                ]}
              />
              <FooterCol
                title="Industries"
                links={[
                  ["Healthcare", "/industries"],
                  ["Finance", "/industries"],
                  ["Retail", "/industries"],
                  ["Manufacturing", "/industries"],
                  ["Education", "/industries"],
                ]}
              />
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-semibold">Stay ahead</h4>
              <p className="text-sm text-muted-foreground">
                Quarterly insights on enterprise AI, ERP, and cloud.
              </p>
              <form
                className="glass flex items-center rounded-full p-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <div className="text-xs text-muted-foreground">
                ISO 27001 · SOC 2 Type II · GDPR Ready
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Trust & Compliance Statement
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Accorto Technologies Private Limited is committed to enterprise-grade security and compliance. 
                We are ISO 27001 certified and SOC 2 Type II audited, ensuring industry-standard security 
                safeguards across all digital consulting engagements.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-2 md:justify-end">
              {["Oracle Certified", "SAP Expertise", "Cloud Consulting", "AI Solutions", "ISO 27001", "SOC 2 Type II"].map((cert) => (
                <span key={cert} className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Accorto Technologies Private Limited. All rights
              reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
              <a href="#" className="hover:text-foreground">
                Cookies
              </a>
              <a href="#" className="hover:text-foreground">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
