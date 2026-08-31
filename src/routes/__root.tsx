import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SITE_URL } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="text-7xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost in the neural mesh</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has drifted into another dimension.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-neon btn-neon-hover">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-neon btn-neon-hover"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost-neon">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Codrithm — Where Coders Make History" },
      {
        name: "description",
        content:
          "Codrithm is a technology company and developer community. We build software, run practical sessions, and help aspiring developers gain experience.",
      },
      { name: "author", content: "Codrithm" },
      { property: "og:title", content: "Codrithm — Where Coders Make History" },
      {
        property: "og:description",
        content:
          "Codrithm is a technology company and developer community. We build software, run practical sessions, and help aspiring developers gain experience.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@codrithm" },
      { name: "twitter:title", content: "Codrithm — Where Coders Make History" },
      {
        name: "twitter:description",
        content:
          "Codrithm is a technology company and developer community. We build software, run practical sessions, and help aspiring developers gain experience.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon-round.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon-180.png" },
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
      <body className="overflow-x-hidden">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[color:var(--neon-green)] focus:text-[color:var(--primary-foreground)] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--neon-green)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
