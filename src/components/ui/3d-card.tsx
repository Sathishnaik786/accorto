import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
}

export function CardContainer({
  children,
  className,
  containerClassName,
  disabled = false,
  ...props
}: CardContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || disabled) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    // Clamp subtle rotation to maximum ±7 degrees for restrained enterprise feel
    const clampedX = Math.max(-7, Math.min(7, x));
    const clampedY = Math.max(-7, Math.min(7, y));

    containerRef.current.style.transform = `rotateY(${clampedX}deg) rotateX(${-clampedY}deg)`;
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current || disabled) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("w-full flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative w-full transition-transform duration-200 ease-out transform-3d",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div
      className={cn(
        "w-full rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md hover:shadow-xl transition-shadow duration-300 transform-3d *:transform-3d",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type CardItemProps<T extends React.ElementType = "div"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function CardItem<T extends React.ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(MouseEnterContext);
  const isMouseEntered = context ? context[0] : false;

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current.style.transform = "none";
      return;
    }

    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  const Component = (as || "div") as React.ElementType;

  return (
    <Component
      ref={ref}
      className={cn("w-fit transition-transform duration-200 ease-out", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a CardContainer");
  }
  return context;
}
