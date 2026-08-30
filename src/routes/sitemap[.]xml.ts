import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTICLES } from "@/data/insights";

const BASE_URL = "https://accorto.tech";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/about",
          "/services",
          "/services/ai-iot",
          "/services/ai-enterprise-structure",
          "/services/ai-enterprise-data",
          "/industries",
          "/academy",
          "/academy/ai-career-development",
          "/academy/ai-training",
          "/academy/ai-agents",
          "/academy/generative-ai",
          "/academy/prompt-engineering",
          "/academy/rag",
          "/academy/mcp",
          "/academy/python-for-ai",
          "/academy/deep-learning",
          "/academy/corporate-training",
          "/case-studies",
          "/careers",
          "/insights",
          "/contact",
        ];

        const articlePaths = ARTICLES.map((a) => `/insights/${a.slug}`);
        const allPaths = [...staticPaths, ...articlePaths];

        const urls = allPaths.map((p) => {
          const priority =
            p === "/"
              ? "1.0"
              : p === "/services/ai-iot"
                ? "0.95"
                : p.startsWith("/services") || p.startsWith("/academy")
                  ? "0.9"
                  : "0.8";
          return `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
