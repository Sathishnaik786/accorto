import { Link } from "@tanstack/react-router";
import { CardCarousel } from "../ui/card-carousel";
import { ImageCard } from "../ui/ImageCard";
import { TrendingUp, ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";

export function CaseStudiesPreview() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <CardCarousel
          items={CASE_STUDIES}
          tag="Case Studies"
          title={
            <>
              Outcomes that <span className="text-gradient">moved markets</span>
            </>
          }
          subtitle="A glimpse at the enterprise programs that defined the last few quarters."
          headerAction={
            <Link
              to="/case-studies"
              className="hidden sm:inline-flex text-sm font-medium items-center gap-1 hover:text-brand transition-colors mr-2"
            >
              View all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          }
          ariaLabel="Case Studies Carousel"
          renderItem={(c) => (
            <ImageCard
              id={c.id}
              image={c.img}
              imageAlt={c.imageAlt}
              category={c.cat}
              title={c.title}
              description={c.desc}
              metric={c.metric}
              metricIcon={TrendingUp}
              link="/case-studies"
              linkText="Read case study"
            />
          )}
        />
      </div>
    </section>
  );
}
