"use client";

import { InlineMath } from "react-katex";
import { formulas } from "../lib/formulas";

export default function WaveAnatomySchema() {
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
      <div style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap", alignItems: "baseline" }}>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.04em" }}>
          Anatomie d&rsquo;une onde périodique
        </div>
        <div style={{ color: "var(--color-text-sub)", fontSize: 12 }}>
          T : période · U<sub>max</sub> : amplitude
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <svg width="100%" viewBox="0 0 780 240" role="img" aria-label="Anatomie onde périodique">
          <rect x="0" y="0" width="780" height="240" fill="rgba(0,0,0,0)" />

          {/* Axis */}
          <line x1="40" y1="140" x2="740" y2="140" stroke="#2A5080" strokeWidth="2" />

          {/* Sine wave */}
          <path
            d="M60 140 C 95 40, 145 40, 180 140 C 215 240, 265 240, 300 140 C 335 40, 385 40, 420 140 C 455 240, 505 240, 540 140 C 575 40, 625 40, 660 140"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Umax amplitude arrow */}
          <line x1="170" y1="90" x2="170" y2="140" stroke="var(--color-gold)" strokeWidth="4" strokeLinecap="round" />
          <path d="M160 98 L170 80 L180 98" fill="none" stroke="var(--color-gold)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M160 132 L170 150 L180 132" fill="none" stroke="var(--color-gold)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Fixed: use tspan for subscript so it renders as U_max not "U_max" */}
          <text x="170" y="65" textAnchor="middle" fill="var(--color-gold)" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">
            U<tspan baselineShift="sub" fontSize="12">max</tspan>
          </text>

          {/* Period arrow */}
          <line x1="360" y1="52" x2="600" y2="52" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
          <path d="M370 40 L360 52 L370 64" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M590 40 L600 52 L590 64" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <text x="480" y="32" textAnchor="middle" fill="var(--color-text-sub)" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">
            T
          </text>
        </svg>
      </div>

      <div style={{ marginTop: 14, color: "var(--color-text-muted)", fontSize: 14, lineHeight: 1.8 }}>
        La fréquence se calcule avec <InlineMath math={formulas.f} /> et la période avec <InlineMath math={formulas.T} />.
      </div>
    </div>
  );
}
