import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { EASING } from "@/config/animations";
import { cn } from "@/lib/utils";

export interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  isLoading?: boolean;
  loadingText?: string;
  variant?: "default" | "brand" | "outline" | "ghost" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      isLoading = false,
      loadingText,
      disabled,
      className = "",
      children,
      variant = "brand",
      size = "default",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = !!useReducedMotion();

    const variantStyles = {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      brand: "bg-gradient-brand text-[#031224] font-bold shadow-brand hover:shadow-brand-lg",
      outline:
        "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
    };

    const sizeStyles = {
      default: "h-11 px-6 py-2 text-sm",
      sm: "h-9 px-3.5 text-xs",
      lg: "h-13 px-8 text-base",
      icon: "h-10 w-10 p-0",
    };

    const baseClass = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[16px] font-semibold cursor-pointer select-none transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        whileHover={
          shouldReduceMotion || disabled || isLoading
            ? undefined
            : {
                scale: 1.02,
                transition: { duration: 0.2, ease: EASING },
              }
        }
        whileTap={
          shouldReduceMotion || disabled || isLoading
            ? undefined
            : {
                scale: 0.98,
                transition: { duration: 0.1, ease: EASING },
              }
        }
        className={baseClass}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-current shrink-0" />
            {loadingText || children}
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  },
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
