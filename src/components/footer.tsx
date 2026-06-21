import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logoImg from "../../logo.png";
import { useMotionSystem, EASING } from "../lib/motion-presets";

export function Footer() {
  const {
    shouldReduceMotion,
    staggerContainer,
    footerFadeUp,
    footerDelays,
    socialIconHover,
    easing,
  } = useMotionSystem();

  return (
    <footer className="relative mt-32">
      {/* Flagship top gradient divider */}
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-brand/35 to-transparent dark:via-brand-3/20" />
      <div className="absolute inset-x-0 top-[-2px] h-[3px] bg-linear-to-r from-transparent via-brand/10 to-transparent blur-xs pointer-events-none" />
      <motion.div
        variants={staggerContainer(0.08)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10"
      >
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Brand Column */}
            <motion.div variants={footerFadeUp(footerDelays.brand)} className="lg:col-span-4 space-y-5">
              <Link to="/" className="flex items-center gap-3 group/logo relative">
                {/* Logo Backdrop Glow */}
                <div className="absolute -left-2 -top-2 w-16 h-16 rounded-full bg-brand/10 dark:bg-brand-3/10 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Glass Backdrop Logo Wrapper */}
                <div className="relative h-12 w-12 rounded-2xl overflow-hidden border border-slate-200/30 dark:border-white/10 shadow-lg bg-white/20 dark:bg-white/5 backdrop-blur-md flex items-center justify-center p-1.5 transition-all duration-300 group-hover/logo:border-brand-2/40">
                  <img
                    src={logoImg}
                    alt="Accorto Technologies Logo"
                    className="h-full w-full object-cover rounded-lg transition-transform duration-500 group-hover/logo:scale-105"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover/logo:text-brand dark:group-hover/logo:text-brand-3">Accorto Technologies</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 font-semibold">
                    Private Limited
                  </div>
                </div>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                A global enterprise technology partner accelerating digital transformation with
                Oracle, SAP, AI, and cloud excellence.
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 font-semibold">
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
                    className="relative grid h-10 w-10 place-items-center rounded-full border border-slate-200/40 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand-3 hover:border-brand-2/40 transition-all duration-300 group/social shadow-sm hover:shadow-[0_0_20px_rgba(66,132,117,0.2)] dark:hover:shadow-[0_0_20px_rgba(137,215,183,0.15)]"
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
                    ["Academy", "/academy"],
                    ["Insights", "/insights"],
                    ["Contact", "/contact"],
                  ]}
                />
              </motion.div>
              <motion.div variants={footerFadeUp(footerDelays.services)}>
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
              </motion.div>
              <motion.div variants={footerFadeUp(footerDelays.industries)}>
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
              </motion.div>
            </div>

            {/* Newsletter Column */}
            <motion.div variants={footerFadeUp(footerDelays.contact)} className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-slate-900 dark:text-white">Stay ahead</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
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
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white"
                />
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: EASING }}
                  className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                ISO 27001 · SOC 2 Type II · GDPR Ready
              </div>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-2">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Trust & Compliance Statement
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Accorto Technologies Private Limited is committed to enterprise-grade security and compliance. 
                We are ISO 27001 certified and SOC 2 Type II audited, ensuring industry-standard security 
                safeguards across all digital consulting engagements.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-2 md:justify-end">
              {["Oracle Certified", "SAP Expertise", "Cloud Consulting", "AI Solutions", "ISO 27001", "SOC 2 Type II"].map((cert) => (
                <span key={cert} className="inline-flex items-center rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 pt-6 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <p>
              © {new Date().getFullYear()} Accorto Technologies Private Limited. All rights
              reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-brand transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-brand transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-brand transition-colors">
                Cookies
              </a>
              <a href="#" className="hover:text-brand transition-colors">
                Security
              </a>
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
              activeOptions={{ exact: true }}
              className="relative text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-white [&.active]:text-brand dark:[&.active]:text-brand-3 [&.active]:pl-3 transition-all duration-300 font-medium group/footlink flex items-center"
            >
              <span className="absolute left-0 w-1 h-1 rounded-full bg-brand dark:bg-brand-3 opacity-0 group-[.active]/footlink:opacity-100 transition-opacity duration-300" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
