import React, { createContext, useContext } from "react";
import { cn } from "@/lib/utils";

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => {},
]);

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
  disabled,
  ...props
}: CardContainerProps) {
  return (
    <div
      className={cn("w-full flex items-center justify-center", containerClassName)}
    >
      <div
        className={cn(
          "relative w-full",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
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
        "w-full rounded-4xl bg-white dark:bg-card border border-slate-100 dark:border-white/5 shadow-md",
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
  translateX,
  translateY,
  translateZ,
  rotateX,
  rotateY,
  rotateZ,
  ...rest
}: CardItemProps<T>) {
  const Component = (as || "div") as React.ElementType;

  return (
    <Component
      className={cn("w-fit", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function useMouseEnter() {
  return useContext(MouseEnterContext);
}
