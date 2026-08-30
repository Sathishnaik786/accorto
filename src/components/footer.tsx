import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logoImg from "../../logo_1.png";
import { useMotionSystem, EASING } from "../lib/motion-presets";
import { LOCATIONS } from "@/data/locations";

export function Footer() {
  const {
    shouldReduceMotion,
    staggerContainer,
    footerFadeUp,
    footerDelays,
    socialIconHover,
  } = useMotionSystem();

  return (
    <footer className="relative mt-6 sm:mt-10 bg-[#F8FAFB] dark:bg-transparent">
      {/* Flagship top gradient divider */}
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-slate-200 dark:via-brand-3/20 to-transparent" />
      <div className="absolute inset-x-0 -top-0.5 h-0.75 bg-linear-to-r from-transparent via-slate-200/40 to-transparent blur-xs pointer-events-none" />
      <motion.div
        variants={staggerContainer(0.08)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-8 pb-10"
      >
        <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-white/5 rounded-3xl p-5 sm:p-8 md:p-12 shadow-xs dark:shadow-none">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <motion.div
              variants={footerFadeUp(footerDelays.brand)}
              className="lg:col-span-4 space-y-5"
            >
              <Link to="/" className="flex flex-col items-start gap-2.5 group/logo relative">
                {/* Logo Backdrop Glow */}
                <div className="absolute -left-2 -top-2 w-36 h-20 rounded-full bg-brand/10 dark:bg-brand-3/10 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <img
                  src={logoImg}
                  alt="Accorto Logo"
                  className="h-24 w-auto object-contain transition-transform duration-500 group-hover/logo:scale-105"
                />
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 font-semibold pl-1">
                  Private Limited
                </div>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                A global enterprise technology partner accelerating digital transformation with
                Oracle, SAP, AI, and cloud excellence.
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 font-semibold">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand shrink-0" /> info@accortotech.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand shrink-0" /> +1 (408) 338-8935
                </p>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { Icon: Linkedin, name: "LinkedIn" },
                  { Icon: Twitter, name: "Twitter" },
                  { Icon: Github, name: "GitHub" },
                  { Icon: Youtube, name: "YouTube" },
                ].map(({ Icon, name }, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    aria-label={`Follow Accorto on ${name}`}
                    custom={i}
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      animate: (idx: number) => ({
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: footerDelays.brand + idx * 0.08,
                          duration: 0.4,
                          ease: EASING,
                        },
                      }),
                    }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    whileHover={socialIconHover}
                    whileTap={{ scale: 0.95 }}
                    className="relative grid h-10 w-10 place-items-center rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand-3 transition-all duration-300 group/social shadow-xs dark:shadow-none hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Hover indicator glow backdrop */}
                    <div className="absolute inset-0 rounded-full bg-brand/5 dark:bg-brand-3/5 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                    <Icon className="h-4.5 w-4.5 z-10 transition-transform duration-300 group-hover/social:scale-110" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns Wrapper */}
            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div variants={footerFadeUp(footerDelays.company)}>
                <FooterCol
                  title="Company"
                  links={[
                    ["About", "/about"],
                    ["Careers", "/careers"],
                    ["AI Career Development", "/academy/ai-career-development"],
                    ["Insights", "/insights"],
                    ["Contact", "/contact"],
                  ]}
                />
              </motion.div>
              <motion.div variants={footerFadeUp(footerDelays.services)}>
                <FooterCol
                  title="Services"
                  links={[
                    ["AI & IoT", "/services/ai-iot"],
                    ["Enterprise Structure", "/services/ai-enterprise-structure"],
                    ["Enterprise Data", "/services/ai-enterprise-data"],
                    ["Oracle ERP", "/services#oracle"],
                    ["SAP Solutions", "/services#sap"],
                    ["Cloud Consulting", "/services#cloud"],
                  ]}
                />
              </motion.div>
              <motion.div variants={footerFadeUp(footerDelays.industries)}>
                <FooterCol
                  title="Industries"
                  links={[
                    ["Utilities & Environmental", "/services/ai-iot"],
                    ["Manufacturing", "/industries"],
                    ["Healthcare", "/industries"],
                    ["Finance", "/industries"],
                    ["Retail", "/industries"],
                  ]}
                />
              </motion.div>
            </div>

            {/* Newsletter Column */}
            <motion.div
              variants={footerFadeUp(footerDelays.contact)}
              className="lg:col-span-3 space-y-4"
            >
              <h4 className="font-display font-bold text-slate-900 dark:text-white">Stay ahead</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Quarterly insights on enterprise AI, ERP, and cloud.
              </p>
              <form
                className="flex items-center rounded-full p-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xs dark:shadow-none focus-within:border-brand transition-all"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  aria-label="Work email address for quarterly insights newsletter"
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white"
                />
                <motion.button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: EASING }}
                  className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white transition-colors cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Enterprise Grade · Global Delivery
              </div>
            </motion.div>
          </div>

          {/* Offices Section */}
          <div className="mt-10 border-t border-slate-200/60 dark:border-white/10 pt-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
              Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                    <h5 className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                      {loc.name}
                    </h5>
                  </div>
                  <address className="not-italic text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed pl-6">
                    {loc.addressLines.map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 pt-6 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <p>
              © {new Date().getFullYear()} Accorto Technologies Private Limited. All rights
              reserved.
            </p>
            <div className="flex items-center gap-5">
              <span className="text-slate-500 dark:text-slate-400">Privacy</span>
              <span className="text-slate-500 dark:text-slate-400">Terms</span>
              <span className="text-slate-500 dark:text-slate-400">Cookies</span>
              <span className="text-slate-500 dark:text-slate-400">Security</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-slate-900 dark:text-white mb-3">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="relative text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-white transition-all duration-300 font-medium group/footlink flex items-center"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
