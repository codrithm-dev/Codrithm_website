import { useEffect, useRef, useState } from "react";
import SplashCursor from "./SplashCursor";

/**
 * Mounts the fluid SplashCursor globally, but fades it out whenever a section
 * marked with [data-hero-3d] is in view.
 * Defers mounting until the browser is idle to avoid blocking initial render.
 */
export function SplashCursorController() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const handle = requestIdleCallback(
        () => {
          if (!cancelled) setReady(true);
        },
        { timeout: 3000 },
      );
      return () => {
        cancelled = true;
        cancelIdleCallback(handle);
      };
    }

    rafId = requestAnimationFrame(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const setHidden = (hidden: boolean) => {
      const el = wrapRef.current?.querySelector<HTMLElement>("[data-splash-cursor]");
      if (!el) return;
      el.style.opacity = hidden ? "0" : "1";
    };

    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) visible.add(e.target);
          else visible.delete(e.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    const attach = () => {
      document.querySelectorAll("[data-hero-3d]").forEach((n) => io.observe(n));
    };
    attach();

    const mo = new MutationObserver(() => {
      io.disconnect();
      attach();
    });
    mo.observe(document.getElementById("main-content") || document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <div ref={wrapRef}>
      <SplashCursor />
    </div>
  );
}
