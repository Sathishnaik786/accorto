import React from "react";

export function SectionBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Layered radial glows + center spotlight */}
      <div
        className="absolute inset-0 z-0 blur-[120px] animate-radial-drift"
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 10%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Center spotlight gradient to increase vertical contrast */}
      <div 
        className="absolute inset-0 z-10 opacity-30" 
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.04), transparent 70%)"
        }}
      />

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 z-20 opacity-[0.012] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.75%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />
    </div>
  );
}
