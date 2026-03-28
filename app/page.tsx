"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function CircuitSvg() {
  return (
    <svg
      width="680"
      height="420"
      viewBox="0 0 680 420"
      fill="none"
      aria-hidden
      style={{ opacity: 0.32 }}
    >
      <defs>
        <linearGradient id="circuit-grad" x1="60" y1="40" x2="620" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-accent)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--color-blue-lt)" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <path
        d="M120 120 H260 C280 120 296 136 296 156 V156 C296 176 312 192 332 192 H520"
        stroke="url(#circuit-grad)" strokeWidth="2.5" strokeLinecap="round"
      />
      <path
        d="M520 192 C560 192 590 222 590 262 V300"
        stroke="url(#circuit-grad)" strokeWidth="2.5" strokeLinecap="round"
      />
      <path
        d="M120 260 H230 C255 260 276 281 276 306 V330"
        stroke="url(#circuit-grad)" strokeWidth="2.5" strokeLinecap="round"
      />
      {/* Extra lines for depth */}
      <path
        d="M590 300 H480 C460 300 444 316 444 336 V360"
        stroke="url(#circuit-grad)" strokeWidth="2" strokeLinecap="round" opacity="0.5"
      />
      <path
        d="M276 330 H380 C400 330 416 346 416 366"
        stroke="url(#circuit-grad)" strokeWidth="2" strokeLinecap="round" opacity="0.5"
      />

      {/* Nodes */}
      {([
        [120, 120], [296, 156], [332, 192], [520, 192],
        [590, 262], [120, 260], [276, 306], [480, 300], [416, 366],
      ] as [number, number][]).map(([x, y], i) => (
        <g key={i} filter="url(#glow)">
          <circle cx={x} cy={y} r={9} fill="var(--color-blue-lt)" fillOpacity={0.15} />
          <circle cx={x} cy={y} r={4} fill="var(--color-accent)" />
        </g>
      ))}

      {/* Capacitor / component hints */}
      <path d="M410 150 H455" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      <path d="M465 150 H490" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      <line x1="455" y1="138" x2="455" y2="162" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      <line x1="465" y1="138" x2="465" y2="162" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        .cta-primary {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .cta-primary:hover {
          transform: scale(1.045);
          box-shadow: 0 0 22px rgba(0, 200, 224, 0.55);
        }
        .hero-badge {
          animation: badge-pulse 3.5s ease-in-out infinite;
        }
        @keyframes badge-pulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
      `}</style>

      <div style={{ background: "var(--color-bg)" }}>
        <section
          className="relative overflow-hidden"
          style={{ minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center" }}
        >
          {/* Radial glow blobs */}
          <div
            aria-hidden
            style={{
              position: "absolute", top: -180, right: -240,
              width: 560, height: 560,
              background: "radial-gradient(circle, rgba(21,86,168,0.22) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute", top: -80, right: -110,
              width: 340, height: 340,
              background: "radial-gradient(circle, rgba(0,200,224,0.18) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          {/* Bottom-left accent */}
          <div
            aria-hidden
            style={{
              position: "absolute", bottom: -100, left: -80,
              width: 420, height: 420,
              background: "radial-gradient(circle, rgba(21,86,168,0.12) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          {/* Floating circuit illustration */}
          <div
            aria-hidden
            style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              display: "flex", justifyContent: "flex-end", alignItems: "center",
              paddingRight: 32, opacity: 0.9,
            }}
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <CircuitSvg />
              </motion.div>
            </motion.div>
          </div>

          {/* Main content */}
          <div
            className="mx-auto w-full max-w-[1200px] px-6"
            style={{ paddingTop: 72, paddingBottom: 56, position: "relative" }}
          >
            <div style={{ maxWidth: 680 }}>
              {/* Subject badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hero-badge"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "6px 14px", borderRadius: 999,
                  border: "1px solid rgba(0,200,224,0.35)",
                  background: "rgba(0,200,224,0.08)",
                  color: "var(--color-accent)",
                  fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
                  marginBottom: 22,
                }}
              >
                <span aria-hidden style={{ fontSize: 14 }}>⚡</span>
                PHYSIQUE · CLASSE DE 3ÈME
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(42px, 6vw, 68px)",
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  lineHeight: 1.05,
                  color: "var(--color-text)",
                }}
              >
                La Tension
                <br />
                <span style={{ color: "var(--color-accent)" }}>Électrique</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                style={{
                  marginTop: 20,
                  color: "var(--color-text-muted)",
                  fontSize: 16,
                  maxWidth: 580,
                  lineHeight: 1.85,
                }}
              >
                La tension électrique décrit la &ldquo;différence d&rsquo;énergie&rdquo; disponible entre deux
                points d&rsquo;un circuit. Elle explique pourquoi un courant circule et comment
                l&rsquo;énergie est transférée à travers les composants.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
                style={{ marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}
              >
                {[
                  { value: "7", label: "Sections" },
                  { value: "3", label: "Exercices" },
                  { value: "14", label: "Formules" },
                ].map(({ value, label }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, color: "var(--color-accent)", lineHeight: 1 }}>
                      {value}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--color-text-sub)", letterSpacing: "0.06em" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36, ease: "easeOut" }}
                style={{ marginTop: 34, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}
              >
                <Link
                  href="/cours"
                  className="cta-primary"
                  style={{
                    background: "var(--color-accent)",
                    color: "var(--color-navy-dark)",
                    padding: "14px 24px",
                    borderRadius: 10,
                    fontWeight: 800,
                    fontSize: 15,
                    letterSpacing: "0.05em",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Commencer le cours
                  <span aria-hidden>→</span>
                </Link>

                <Link
                  href="/resume"
                  style={{
                    color: "var(--color-text-muted)",
                    padding: "14px 20px",
                    borderRadius: 10,
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: "0.04em",
                    border: "1px solid var(--color-border)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "border-color 200ms ease, color 200ms ease",
                  }}
                >
                  Fiche de révision
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom rule + credits */}
          <div
            style={{
              position: "absolute", left: 0, right: 0, bottom: 0,
              borderTop: "1px solid rgba(26,52,96,0.7)",
              padding: "14px 0",
            }}
          >
            <div
              className="mx-auto max-w-[1200px] px-6"
              style={{ color: "var(--color-text-sub)", fontSize: 11, letterSpacing: "0.04em" }}
            >
              Réalisé par Otmani Essakali Mohamed Rayane &amp; Anas Askour
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
