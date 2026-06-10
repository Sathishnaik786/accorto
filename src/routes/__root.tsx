import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ScrollProgress } from "../components/scroll-progress";
import { BackToTop } from "../components/back-to-top";
import { CursorGlow } from "../components/cursor-glow";
import { CommandPalette } from "../components/command-palette";
import { LoadingScreen } from "../components/loading-screen";
import { StickyCTA } from "../components/sticky-cta";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-4 py-2 text-sm">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Accorto Technologies — Enterprise Consulting & AI Solutions" },
      {
        name: "description",
        content:
          "Accorto Technologies is a global enterprise consulting partner delivering Oracle ERP, SAP, generative AI, cloud, and digital transformation solutions.",
      },
      { name: "author", content: "Accorto Technologies Private Limited" },
      { property: "og:title", content: "Accorto Technologies — Enterprise Consulting" },
      {
        property: "og:description",
        content:
          "Oracle ERP, SAP, AI/ML, Cloud, and Digital Transformation for global enterprises.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://accorto.tech" },
      { property: "og:site_name", content: "Accorto Technologies" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@accortotech" },
      { name: "twitter:title", content: "Accorto Technologies — Enterprise Consulting" },
      {
        name: "twitter:description",
        content:
          "Oracle ERP, SAP, AI/ML, Cloud, and Digital Transformation for global enterprises.",
      },
      { name: "theme-color", content: "#050816" },
      { property: "og:image", content: "https://accorto.tech/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:image", content: "https://accorto.tech/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        href: "/fonts/inter-regular.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/space-grotesk-semibold.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Accorto Technologies Private Limited",
          url: "https://accorto.tech",
          logo: "https://accorto.tech/og-image.png",
          description:
            "Enterprise consulting in Oracle ERP, SAP, AI, Cloud, and Digital Transformation.",
          sameAs: ["https://www.linkedin.com/company/accorto-technologies"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LoadingScreen />
        <ScrollProgress />
        <CursorGlow />
        <CommandPalette />
        <Navbar />
        <main className="pt-0">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
        <StickyCTA />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
