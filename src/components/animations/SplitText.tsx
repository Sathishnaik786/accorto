import React from "react";
import { motion, useReducedMotion, Variants, type Transition } from "framer-motion";
import { EASING, ANIMATION_DURATIONS } from "@/config/animations";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  splitBy?: "characters" | "words";
  easing?: Transition["ease"];
  threshold?: number;
  textAlign?: "left" | "center" | "right" | "justify";
  onAnimationComplete?: () => void;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.025,
  splitBy = "characters",
  easing = EASING,
  threshold = 0.1,
  textAlign = "left",
  onAnimationComplete,
}: SplitTextProps) {
  const shouldReduceMotion = !!useReducedMotion();

  // If reduced motion is requested, render clean text without splitting animation
  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATIONS.normal,
        ease: easing,
      },
    },
  };

  if (splitBy === "words") {
    const words = text.split(" ");
    return (
      <motion.span
        className={`inline-block ${className}`}
        style={{ textAlign }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: threshold }}
        onAnimationComplete={onAnimationComplete}
        aria-label={text}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={itemVariants}
            className="inline-block whitespace-nowrap"
            aria-hidden="true"
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Split by characters while preserving word groups for wrapping
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{ textAlign }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      onAnimationComplete={onAnimationComplete}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              variants={itemVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}

export default SplitText;
