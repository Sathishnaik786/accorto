import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import { Search, Award } from "lucide-react";

export const Route = createFileRoute("/academy/rag")({
  head: () => ({
    meta: [
      { title: "RAG Systems & Vector Database Course — Accorto Academy" },
      {
        name: "description",
        content: "Master Retrieval-Augmented Generation (RAG). Learn document loaders, vector caching, and query optimization pipelines.",
      },
      { property: "og:title", content: "RAG Systems Course — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/rag" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/rag" }],
  }),
  component: RAGSystemsCourse,
});

function RAGSystemsCourse() {
  return (
    <>
      <PageHero
        tag="Academy Course"
        title={
          <>
            Retrieval-Augmented <span className="text-gradient">Generation (RAG)</span>
          </>
        }
        subtitle="Build production RAG networks. Study indexing, vector databases, chunking strategies, semantic caching, and evaluation."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Search className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Syllabus 1: Document Pipelines", desc: "Loading PDF, HTML, JSON, parsing strategies, markdown chunking, and overlapping tokens." },
                { title: "Syllabus 2: Embeddings & Vector Stores", desc: "OpenAI embeddings, local HuggingFace embeddings, Pinecone, Qdrant, PGVector, indexing and similarity metrics." },
                { title: "Syllabus 3: Retrieval Optimization", desc: "Hybrid search, keyword sparse + dense dense, re-ranking with Cohere, and query expansion." },
                { title: "Syllabus 4: Architecture & Evaluation", desc: "Prompt templates, system guidance, context stuffing control, and evaluation frameworks." },
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-5">
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-border/50 pt-6">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Duration: 6 Weeks · Level: Intermediate
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                Enroll Now <Award className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}
