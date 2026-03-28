"use client";

import { InlineMath } from "react-katex";
import { formulas } from "../lib/formulas";

export default function VoltageConventionsSchema() {
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
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "baseline" }}>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 900, letterSpacing: "0.04em" }}>
          Langage visuel : générateur / récepteur
        </div>
        <div style={{ color: "var(--color-text-sub)", fontSize: 12 }}>
          Schéma de conventions (sens de I et U)
        </div>
      </div>

      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {/* Générateur */}
        <div
          style={{
            borderRadius: 12,
            border: "1px solid var(--color-border)",
            background: "rgba(21,101,192,0.08)",
            padding: 14,
          }}
        >
          <div style={{ color: "var(--color-blue-lt)", fontWeight: 900, letterSpacing: "0.04em" }}>Convention Générateur</div>
          <svg width="100%" viewBox="0 0 320 120" role="img" aria-label="Convention générateur">
            {/* Circuit box */}
            <rect x="70" y="35" width="180" height="50" rx="10" fill="rgba(6,15,30,0)" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
            {/* I arrow */}
            <path d="M28 60 H70" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
            <path d="M56 48 L70 60 L56 72" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="20" y="80" fill="var(--color-text-sub)" fontSize="14" fontWeight="800" fontFamily="var(--font-body)">
              I
            </text>
            {/* U arrow */}
            <path d="M70 78 H250" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
            <path d="M234 66 L250 78 L234 90" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            <text x="160" y="104" textAnchor="middle" fill="var(--color-gold)" fontSize="16" fontWeight="900" fontFamily="var(--font-body)">
              U
            </text>

            {/* Receptor symbol */}
            <circle cx="160" cy="60" r="16" fill="rgba(255,179,0,0.10)" stroke="rgba(255,179,0,0.40)" strokeWidth="3" />
            <text x="160" y="66" textAnchor="middle" fill="var(--color-gold)" fontSize="14" fontWeight="900" fontFamily="var(--font-body)">
              +
            </text>
          </svg>

          <div style={{ marginTop: 10, color: "var(--color-text-muted)", fontSize: 13, lineHeight: 1.7 }}>
            La tension est algébrique : <InlineMath math={formulas.UAB_neg_UBA} />
          </div>
        </div>

        {/* Récepteur */}
        <div
          style={{
            borderRadius: 12,
            border: "1px solid var(--color-border)",
            background: "rgba(0,188,212,0.06)",
            padding: 14,
          }}
        >
          <div style={{ color: "var(--color-gold)", fontWeight: 900, letterSpacing: "0.04em" }}>Convention Récepteur</div>
          <svg width="100%" viewBox="0 0 320 120" role="img" aria-label="Convention récepteur">
            <rect x="70" y="35" width="180" height="50" rx="10" fill="rgba(6,15,30,0)" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
            {/* I arrow */}
            <path d="M28 60 H70" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
            <path d="M56 48 L70 60 L56 72" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="20" y="80" fill="var(--color-text-sub)" fontSize="14" fontWeight="800" fontFamily="var(--font-body)">
              I
            </text>
            {/* U arrow (opposé) */}
            <path d="M250 78 H70" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
            <path d="M86 66 L70 78 L86 90" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            <text x="160" y="104" textAnchor="middle" fill="var(--color-accent)" fontSize="16" fontWeight="900" fontFamily="var(--font-body)">
              U
            </text>

            {/* Receptor symbol */}
            <circle cx="160" cy="60" r="16" fill="rgba(255,179,0,0.08)" stroke="rgba(102,187,106,0.4)" strokeWidth="3" />
            <text x="160" y="66" textAnchor="middle" fill="var(--color-accent)" fontSize="14" fontWeight="900" fontFamily="var(--font-body)">
              −
            </text>
          </svg>

          <div style={{ marginTop: 10, color: "var(--color-text-muted)", fontSize: 13, lineHeight: 1.7 }}>
            En inversant le sens AB/BA, on change le signe de{" "}
            <InlineMath math={formulas.UAB_neg_UBA} />
          </div>
        </div>
      </div>
    </div>
  );
}

