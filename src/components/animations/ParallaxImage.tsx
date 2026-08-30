import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  scaleAmount?: number;
  translateAmount?: number;
}

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = "aspect-16/10",
  priority = false,
  scaleAmount = 1.08,
  translateAmount = 28,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-translateAmount, translateAmount]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleAmount, 1.02, 1]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden select-none", aspectRatio, className)}
    >
      <motion.img
        style={{ y, scale }}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "w-full h-full object-cover will-change-transform brightness-[0.96] contrast-[1.04]",
          imageClassName,
        )}
      />
    </div>
  );
}
