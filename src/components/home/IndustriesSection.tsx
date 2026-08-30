import React from "react";
import { Link } from "@tanstack/react-router";
import { CardCarousel } from "../ui/card-carousel";
import { ImageCard } from "../ui/ImageCard";
import {
  Activity,
  GraduationCap,
  Stethoscope,
  Factory,
  ShoppingBag,
  Landmark,
  Building2,
  Truck,
  ArrowRight,
} from "lucide-react";
import { INDUSTRIES } from "@/data/industries";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "utilities-environmental": Activity,
  education: GraduationCap,
  healthcare: Stethoscope,
  manufacturing: Factory,
  retail: ShoppingBag,
  finance: Landmark,
  government: Building2,
  logistics: Truck,
};

export function IndustriesSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <CardCarousel
          items={INDUSTRIES}
          tag="Industries"
          title={
            <>
              Domain depth across <span className="text-gradient">regulated &amp; industrial sectors</span>
            </>
          }
          subtitle="From environmental telemetry and smart utilities to healthcare HIPAA clouds and manufacturing digital twins."
          headerAction={
            <Link
              to="/industries"
              className="hidden sm:inline-flex text-sm font-medium items-center gap-1 hover:text-brand transition-colors mr-2"
            >
              View all industries <ArrowRight className="h-4 w-4" />
            </Link>
          }
          ariaLabel="Industries Carousel"
          renderItem={(it) => {
            const Icon = INDUSTRY_ICONS[it.id] || Factory;
            return (
              <ImageCard
                id={it.id}
                image={it.image}
                imageAlt={it.imageAlt}
                category={it.category}
                categoryIcon={Icon}
                title={it.name}
                description={it.shortDesc}
                link={it.link}
                linkText={it.linkText}
              />
            );
          }}
        />
      </div>
    </section>
  );
}
