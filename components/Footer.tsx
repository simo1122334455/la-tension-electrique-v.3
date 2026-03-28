import Link from "next/link";
import { navLinks, authorsBlock } from "../lib/content";

export default function Footer() {
  return (
    <footer className="app-footer" style={{ background: "var(--color-navy-dark)" }}>
      <div className="mx-auto max-w-[1200px]" style={{ padding: "48px 24px" }}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)", fontWeight: 700,
                fontSize: 15, letterSpacing: "0.04em",
                color: "var(--color-accent)",
              }}
            >
              ⚡ La Tension Électrique
            </div>
            <div style={{ marginTop: 6, fontSize: 13, color: "var(--color-text-sub)" }}>
              Physique — Classe de 3ème · 2025
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Liens du pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 13, fontWeight: 500, letterSpacing: "0.08em",
                  color: "var(--color-text-muted)",
                  transition: "color 180ms ease",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Credits — uses authorsBlock correctly (no duplicates) */}
          <div style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.8 }}>
            {authorsBlock.map((line, i) => (
              <div key={i} style={{ color: i === authorsBlock.length - 1 ? "var(--color-text-sub)" : undefined }}>
                {line}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28, borderTop: "1px solid var(--color-border)" }} />

        <div style={{ marginTop: 18, fontSize: 11, color: "var(--color-text-sub)", letterSpacing: "0.04em" }}>
          © 2025 — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
