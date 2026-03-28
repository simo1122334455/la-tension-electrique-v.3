"use client";

import { InlineMath } from "react-katex";
import { formulas } from "../lib/formulas";

export default function UMaxEffFrequencySchema() {
  return (
    <div
      style={{
        marginTop: 18,
        background: "var(--color-surface-2)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: 18,
      }}
    >
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 900, letterSpacing: "0.04em" }}>
        U_max, U_eff et fréquence : synthèse visuelle
      </div>

      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {/* Umax panel */}
        <div
          style={{
            borderRadius: 12,
            border: "1px solid var(--color-border)",
            background: "rgba(0,188,212,0.04)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "10px 12px", color: "var(--color-text-sub)", fontSize: 12, letterSpacing: "0.08em", fontWeight: 800 }}>
            Tension maximale
          </div>
          <svg width="100%" viewBox="0 0 360 120" role="img" aria-label="Umax">
            <line x1="20" y1="60" x2="340" y2="60" stroke="#2A5080" strokeWidth="2" />
            <path
              d="M40 60 C 70 10, 110 10, 140 60 C 170 110, 210 110, 240 60 C 270 10, 310 10, 330 60"
              fill="none"
              stroke="var(--color-green)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Umax arrow */}
            <line x1="110" y1="30" x2="110" y2="60" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
            <path d="M102 38 L110 24 L118 38" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M102 52 L110 66 L118 52" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="110" y="20" textAnchor="middle" fill="var(--color-accent)" fontSize="14" fontFamily="var(--font-body)" fontWeight="900">
              U_max
            </text>
          </svg>
        </div>

        {/* Ueff panel */}
        <div
          style={{
            borderRadius: 12,
            border: "1px solid var(--color-border)",
            background: "rgba(255,179,0,0.03)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "10px 12px", color: "var(--color-text-sub)", fontSize: 12, letterSpacing: "0.08em", fontWeight: 800 }}>
            Tension efficace
          </div>
          <svg width="100%" viewBox="0 0 360 120" role="img" aria-label="Ueff">
            <line x1="20" y1="60" x2="340" y2="60" stroke="#2A5080" strokeWidth="2" />
            <path
              d="M40 60 C 70 10, 110 10, 140 60 C 170 110, 210 110, 240 60 C 270 10, 310 10, 330 60"
              fill="none"
              stroke="var(--color-green)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* dashed Ueff line */}
            <line x1="40" y1="48" x2="330" y2="48" stroke="rgba(102,187,106,0.9)" strokeWidth="3" strokeDasharray="6 6" />
            <text x="290" y="44" fill="rgba(102,187,106,0.95)" fontSize="14" fontFamily="var(--font-body)" fontWeight="900">
              U_eff
            </text>
          </svg>
        </div>
      </div>

      <div style={{ marginTop: 12, color: "var(--color-text-muted)", fontSize: 14, lineHeight: 1.8 }}>
        <div>
          <InlineMath math={formulas.Ueff} />
        </div>
        <div style={{ marginTop: 8 }}>
          <InlineMath math={formulas.f} />
        </div>
      </div>
    </div>
  );
}

