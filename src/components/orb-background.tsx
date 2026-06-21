export function OrbBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-brand opacity-[0.07] dark:opacity-[0.05] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-brand-2 opacity-[0.06] dark:opacity-[0.04] blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-brand-3 opacity-[0.06] dark:opacity-[0.04] blur-3xl animate-blob animation-delay-4000" />
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
    </div>
  );
}
