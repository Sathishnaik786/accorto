import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Clean video playing with smooth entrance fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-meeting.mp4" type="video/mp4" />
          <source
            src="https://cdn.coverr.co/videos/coverr-an-overhead-view-of-a-busy-business-meeting-9079/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    </section>
  );
}
