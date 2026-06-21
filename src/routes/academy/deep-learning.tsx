import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/section";
import { FinalCTA } from "@/components/home-sections";
import { GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/academy/deep-learning")({
  head: () => ({
    meta: [
      { title: "Deep Learning & Neural Networks Course — Accorto Academy" },
      {
        name: "description",
        content: "Master deep neural networks. Build CNNs, RNNs, and Transformers using PyTorch and TensorFlow with active researchers.",
      },
      { property: "og:title", content: "Deep Learning Course — Accorto Academy" },
      { property: "og:url", content: "https://accorto.tech/academy/deep-learning" },
    ],
    links: [{ rel: "canonical", href: "https://accorto.tech/academy/deep-learning" }],
  }),
  component: DeepLearningCourse,
});

function DeepLearningCourse() {
  return (
    <>
      <PageHero
        tag="Academy Course"
        title={
          <>
            Deep Learning & <span className="text-gradient">Neural Networks</span>
          </>
        }
        subtitle="Learn neural networks. Master backpropagation, MLPs, convolutional grids, sequence processing models, and Transformer scaling."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-brand" /> Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Syllabus 1: Neural Nets Core", desc: "Perceptrons, backpropagations, activations (ReLU, Sigmoid), loss functions, and weights optimization." },
                { title: "Syllabus 2: Computer Vision", desc: "CNN layers, pooling, spatial filters, image classification, and object detection grids." },
                { title: "Syllabus 3: NLP & RNNs", desc: "Sequence processing models, LSTM, Gated Recurrent Units (GRU), and embeddings layers." },
                { title: "Syllabus 4: Transformers", desc: "Self-attention matrix calculations, multi-head configurations, pos encoding, and GPT models." },
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-5">
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-border/50 pt-6">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Duration: 8 Weeks · Level: Advanced
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
