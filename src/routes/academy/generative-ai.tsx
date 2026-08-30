import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { Sparkles, Brain, Award } from "lucide-react";
import { SpecularButton } from "@/components/animations/SpecularButton";
import { BorderGlow } from "@/components/animations/BorderGlow";

export const Route = createFileRoute("/academy/generative-ai")({
  head: () => ({
    meta: [
      { title: "Generative AI Course & LLM Architectures — Accorto Academy" },
      {
        name: "description",
        content:
          "Master Large Language Models, embeddings, and fine-tuning configurations. Hands-on Generative AI course led by industry consultants.",
      },
      { property: "og:title", content: "Generative AI Course — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/generative-ai" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/generative-ai" }],
  }),
  component: GenerativeAICourse,
});

function GenerativeAICourse() {
  return (
    <>
      <PageHero
        tag="Academy Course"
        title={
          <>
            Generative AI & <span className="text-gradient">LLM Architectures</span>
          </>
        }
        subtitle="Master Transformers from the ground up. Fine-tune local open-weight models (Llama 3, Mistral), deploy embedding vectors, and scale GPU inference endpoints."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-8 md:pb-12">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Syllabus 1: LLM Core",
                  desc: "Transformers architecture, tokenizers, self-attention mechanisms, and parameters scaling.",
                },
                {
                  title: "Syllabus 2: Fine-Tuning",
                  desc: "Supervised Fine-Tuning (SFT), LoRA, QLoRA, and optimization loops on GPUs.",
                },
                {
                  title: "Syllabus 3: Embeddings",
                  desc: "Generating vector representations, cosine similarity metrics, and dimensional reductions.",
                },
                {
                  title: "Syllabus 4: LLMOps",
                  desc: "Model serving endpoints, Docker containerization, cloud resource management, and model quantizations.",
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
                Duration: 6 Weeks · Level: Intermediate
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
