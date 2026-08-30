import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { backdropVariants, getStandardModalVariants } from "@/config/animations";

export interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

export function AnimatedModal({
  isOpen,
  onClose,
  children,
  className = "",
  overlayClassName = "",
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: AnimatedModalProps) {
  const shouldReduceMotion = !!useReducedMotion();
  const modalVariants = getStandardModalVariants(shouldReduceMotion);

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEsc, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs ${overlayClassName}`}
          onClick={closeOnOverlayClick ? onClose : undefined}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className={className}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnimatedModal;
