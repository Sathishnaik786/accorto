import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { BookOpen, Award } from "lucide-react";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { BorderGlow } from "@/components/animations/BorderGlow";

export const Route = createFileRoute("/academy/python-for-ai")({
  head: () => ({
    meta: [
      { title: "Python for AI & Data Analysis Course — Accorto Academy" },
      {
        name: "description",
        content:
          "Learn Python for AI development. Master variables, arrays, OOP, and libraries like NumPy and Pandas from scratch.",
      },
      { property: "og:title", content: "Python for AI Course — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/python-for-ai" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/python-for-ai" }],
  }),
  component: PythonForAICourse,
});

function PythonForAICourse() {
  return (
    <>
      <PageHero
        tag="Academy Course"
        title={
          <>
            Python for <span className="text-gradient">Artificial Intelligence</span>
          </>
        }
        subtitle="A foundational path designed for beginners. Master Python programming, object-oriented concepts, NumPy arrays, and Pandas dataframes."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-8 md:pb-12">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Syllabus 1: Python Basics",
                  desc: "Data types, operators, dynamic allocations, list structures, dictionary models, and syntax formats.",
                },
                {
                  title: "Syllabus 2: Code Structures",
                  desc: "Functions definitions, parameter scopes, error handing logs, and module imports.",
                },
                {
                  title: "Syllabus 3: Object-Oriented (OOP)",
                  desc: "Classes, inheritances, encapsulation strategies, and data decorators.",
                },
                {
                  title: "Syllabus 4: Data Engineering",
                  desc: "NumPy matrix arrays, Pandas data tables, loading CSVs, filtering records, and plotting.",
                },
              ].map((item, idx) => (
                <BorderGlow key={idx} borderRadius={16} className="h-full">
                  <div className="glass rounded-2xl p-5 h-full">
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </BorderGlow>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-border/50 pt-6">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Duration: 4 Weeks · Level: Beginner
              </div>
              <SpecularButton
                to="/contact"
                size="sm"
                variant="brand"
                className="shadow-brand hover:shadow-brand-lg"
              >
                Enroll Now <Award className="h-4 w-4" />
              </SpecularButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
