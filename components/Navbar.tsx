"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CSSProperties } from "react";
import { navLinks } from "../lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const barStyle: CSSProperties = {
    height: 64,
    background: scrolled ? "rgba(8,18,30,0.92)" : "var(--color-blue)",
    backdropFilter: scrolled ? "blur(14px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
    borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
    position: "sticky",
    top: 0,
    zIndex: 50,
    transition: "background 300ms ease, border-color 300ms ease",
  };

  return (
    <>
      <style>{`
        .nav-link {
          transition: color 180ms ease;
        }
        .nav-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>

      <header className="app-navbar" style={barStyle}>
        <div className="mx-auto h-full max-w-[1200px] px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
            style={{
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.06em",
              fontWeight: 700,
              color: "var(--color-accent)",
              fontSize: 15,
            }}
            onClick={() => setOpen(false)}
          >
            <span aria-hidden style={{ fontSize: 18 }}>⚡</span>
            <span>Tension Électrique</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="nav-link text-[14px] font-[500]"
                  style={{
                    letterSpacing: "0.08em",
                    paddingBottom: 6,
                    borderBottom: active
                      ? "2px solid var(--color-accent)"
                      : "2px solid transparent",
                    color: active ? "var(--color-accent)" : "var(--color-text)",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 42, height: 42,
              display: "grid", placeItems: "center",
              color: "var(--color-text)",
              background: "transparent",
              border: "1px solid var(--color-border)",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -15 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 15 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: -15 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 15 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile full-screen menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed", inset: 0,
                background: "var(--color-bg)",
                zIndex: 60,
              }}
              aria-label="Menu mobile"
            >
              <div className="mx-auto max-w-[1200px] px-6 pt-24 flex flex-col gap-4">
                {navLinks.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      style={{
                        fontSize: 24, fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: active ? "var(--color-accent)" : "var(--color-text)",
                        padding: "10px 0",
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      {l.label}
                    </Link>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  style={{
                    marginTop: 16, alignSelf: "flex-start",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                    padding: "10px 16px",
                    borderRadius: 10,
                    cursor: "pointer",
                  }}
                >
                  Fermer ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
