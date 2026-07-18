import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MiniLogo } from "./LogoScene";


const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/community", label: "Community" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
        <nav className={`glass-strong flex items-center justify-between rounded-full pl-3 pr-2 ${scrolled ? "py-1.5" : "py-2"} transition-all`}>
          <Link to="/" className="flex items-center gap-2 group">
            <MiniLogo />
            <span className="font-display font-bold tracking-tight text-lg">
              Cod<span className="text-gradient">rithm</span>
            </span>
          </Link>
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {n.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{
                          background: "linear-gradient(120deg, color-mix(in oklab, #87FFBC 25%, transparent), color-mix(in oklab, #0066FF 25%, transparent))",
                          boxShadow: "0 0 20px color-mix(in oklab, #87FFBC 40%, transparent)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="btn-neon btn-neon-hover hidden sm:inline-flex">Start a project</Link>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden btn-ghost-neon !px-3 !py-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </nav>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-3xl p-3 flex flex-col"
          >
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium">
                  {n.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.header>
  );
}
