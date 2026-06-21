import React from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-6", className)}>
      {children}
    </div>
  );
}

export function BentoGridItem({
  children,
  className,
  colSpan = "md:col-span-4",
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
}) {
  return (
    <div className={cn("col-span-1 h-full", colSpan, className)}>
      {children}
    </div>
  );
}
