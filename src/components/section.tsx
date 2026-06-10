import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-medium text-foreground/90">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </div>
  );
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
}: {
  tag?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {tag && (
        <Reveal>
          <SectionTag>{tag}</SectionTag>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
