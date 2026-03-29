"use client";

import { useState } from "react";

export default function TensionLawsInteractive() {
  const [mode, setMode] = useState<"serie" | "derivation">("serie");
  const [ug, setUg] = useState(12);
  const [u1, setU1] = useState(4.5);
  const [u2, setU2] = useState(7.5);

  const serieSum = parseFloat((u1 + u2).toFixed(3));
  const serieOk = Math.abs(serieSum - ug) < 0.02;
  const derivOk = Math.abs(u1 - ug) < 0.02 && Math.abs(u2 - ug) < 0.02;
  const ok = mode === "serie" ? serieOk : derivOk;

  const statusColor = ok ? "var(--color-green)" : "var(--color-red)";
  const statusBg = ok ? "rgba(76,175,130,0.12)" : "rgba(239,83,80,0.10)";
  const statusBorder = ok ? "rgba(76,175,130,0.3)" : "rgba(239,83,80,0.3)";

  const sliderStyle = { accentColor: "var(--color-accent)", width: "100%" };
  const labelSt: React.CSSProperties = { fontSize: 13, color: "var(--color-text-muted)", width: 80, flexShrink: 0 };
  const valSt: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "var(--color-text)", minWidth: 52, textAlign: "right" };

  return (
    <div style={{ borderRadius: 14, border: "1px solid var(--color-border)", overflow: "hidden", background: "var(--color-surface-2)", marginTop: 18 }}>

      {/* Tabs + hint */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border)", display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 8 }}>
          {([["serie", "En série"], ["derivation", "En dérivation"]] as const).map(([key, label]) => (
            <button key={key} onClick={() => setMode(key)} style={{
              fontSize: 12, padding: "5px 14px", borderRadius: 999, cursor: "pointer",
              border: `1px solid ${mode === key ? "rgba(0,200,224,0.5)" : "var(--color-border)"}`,
              background: mode === key ? "rgba(0,200,224,0.1)" : "transparent",
              color: mode === key ? "var(--color-accent)" : "var(--color-text-muted)",
              fontWeight: mode === key ? 700 : 400,
            }}>{label}</button>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "var(--color-text-sub)" }}>
          {mode === "serie" ? "Objectif : U₁ + U₂ = U_G" : "Objectif : U₁ = U₂ = U_G"}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

        {/* Diagram */}
        <div style={{ padding: 16, borderRight: "1px solid var(--color-border)" }}>
          {mode === "serie" ? (
            <svg viewBox="0 0 320 170" width="100%" role="img" aria-label="Circuit série">
              <path d="M20 85 H60" stroke="rgba(0,200,224,0.5)" strokeWidth="3" strokeLinecap="round" />
              <path d="M140 85 H180" stroke="rgba(0,200,224,0.5)" strokeWidth="3" strokeLinecap="round" />
              <path d="M260 85 H300" stroke="rgba(0,200,224,0.5)" strokeWidth="3" strokeLinecap="round" />
              {[
                { x: 20, label: "G", val: ug, fill: "rgba(21,86,168,0.2)", stroke: "rgba(21,86,168,0.5)", tc: "var(--color-blue-lt)" },
                { x: 140, label: "R1", val: u1, fill: "rgba(0,200,224,0.08)", stroke: "rgba(0,200,224,0.4)", tc: "var(--color-accent)" },
                { x: 260, label: "R2", val: u2, fill: "rgba(0,200,224,0.08)", stroke: "rgba(0,200,224,0.4)", tc: "var(--color-accent)" },
              ].map(({ x, label, val, fill, stroke, tc }) => (
                <g key={label}>
                  <rect x={x} y="55" width="80" height="60" rx="10" fill={fill} stroke={stroke} strokeWidth="2" />
                  <text x={x + 40} y="89" textAnchor="middle" fill={tc} fontSize="14" fontWeight="700" fontFamily="var(--font-heading)">{label}</text>
                  <text x={x + 40} y="40" textAnchor="middle" fill="var(--color-gold)" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">{val.toFixed(1)}V</text>
                  <line x1={x + 40} y1="50" x2={x + 40} y2="57" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <path d={`M${x+33} 50 L${x+40} 44 L${x+47} 50`} fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              ))}
              <text x="160" y="152" textAnchor="middle" fill={serieOk ? "var(--color-green)" : "var(--color-red)"} fontSize="12" fontFamily="var(--font-mono)" fontWeight="700">
                {serieSum.toFixed(1)} V {serieOk ? `= U_G ✓` : `≠ ${ug.toFixed(1)} V`}
              </text>
            </svg>
          ) : (
            <svg viewBox="0 0 320 190" width="100%" role="img" aria-label="Circuit dérivation">
              <rect x="10" y="70" width="60" height="60" rx="10" fill="rgba(21,86,168,0.2)" stroke="rgba(21,86,168,0.5)" strokeWidth="2" />
              <text x="40" y="104" textAnchor="middle" fill="var(--color-blue-lt)" fontSize="13" fontWeight="700" fontFamily="var(--font-heading)">G</text>
              <text x="40" y="58" textAnchor="middle" fill="var(--color-gold)" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">{ug.toFixed(1)}V</text>
              <path d="M70 85 H100" stroke="rgba(0,200,224,0.4)" strokeWidth="3" strokeLinecap="round" />
              <path d="M70 115 H100" stroke="rgba(0,200,224,0.4)" strokeWidth="3" strokeLinecap="round" />
              <path d="M100 85 V30" stroke="rgba(0,200,224,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M100 115 V160" stroke="rgba(0,200,224,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M260 85 V30" stroke="rgba(0,200,224,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M260 115 V160" stroke="rgba(0,200,224,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M100 30 H260" stroke="rgba(0,200,224,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M100 160 H260" stroke="rgba(0,200,224,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M260 100 H300" stroke="rgba(0,200,224,0.4)" strokeWidth="3" strokeLinecap="round" />
              <rect x="120" y="42" width="60" height="46" rx="8" fill="rgba(0,200,224,0.08)"
                stroke={Math.abs(u1-ug)<0.02 ? "rgba(76,175,130,0.7)" : "rgba(0,200,224,0.4)"} strokeWidth="2" />
              <text x="150" y="69" textAnchor="middle" fill="var(--color-accent)" fontSize="11" fontWeight="700" fontFamily="var(--font-heading)">R1 — {u1.toFixed(1)}V</text>
              <rect x="120" y="110" width="60" height="46" rx="8" fill="rgba(0,200,224,0.08)"
                stroke={Math.abs(u2-ug)<0.02 ? "rgba(76,175,130,0.7)" : "rgba(0,200,224,0.4)"} strokeWidth="2" />
              <text x="150" y="137" textAnchor="middle" fill="var(--color-accent)" fontSize="11" fontWeight="700" fontFamily="var(--font-heading)">R2 — {u2.toFixed(1)}V</text>
              <text x="160" y="182" textAnchor="middle" fill={derivOk ? "var(--color-green)" : "var(--color-text-sub)"} fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                {derivOk ? `U_G = U₁ = U₂ = ${ug.toFixed(1)}V ✓` : `Cible : ${ug.toFixed(1)}V pour R1 et R2`}
              </text>
            </svg>
          )}
        </div>

        {/* Sliders */}
        <div style={{ padding: "14px 16px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text-sub)", marginBottom: 12 }}>TENSIONS</div>
          {[
            { label: "U_G (V)", min: 1, max: 24, step: 0.5, val: ug, set: setUg },
            { label: "U₁ (V)", min: 0, max: 24, step: 0.5, val: u1, set: setU1 },
            { label: "U₂ (V)", min: 0, max: 24, step: 0.5, val: u2, set: setU2 },
          ].map(({ label, min, max, step, val, set }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={labelSt}>{label}</span>
              <input type="range" min={min} max={max} step={step} value={val}
                onChange={e => set(parseFloat(e.target.value))} style={sliderStyle} />
              <span style={valSt}>{val.toFixed(1)} V</span>
            </div>
          ))}

          {/* Snap button — only in dérivation when not verified */}
          {mode === "derivation" && !derivOk && (
            <button onClick={() => { setU1(ug); setU2(ug); }} style={{
              width: "100%", marginBottom: 10, padding: "8px 12px", borderRadius: 8, cursor: "pointer",
              background: "rgba(0,200,224,0.08)", border: "1px solid rgba(0,200,224,0.3)",
              color: "var(--color-accent)", fontSize: 12, fontWeight: 700,
            }}>
              Régler U₁ = U₂ = {ug.toFixed(1)} V →
            </button>
          )}

          {/* Status */}
          <div style={{ padding: "10px 12px", borderRadius: 8, background: statusBg, border: `1px solid ${statusBorder}`, fontSize: 13, fontWeight: 700, color: statusColor, lineHeight: 1.6 }}>
            {mode === "serie"
              ? (serieOk
                  ? `✓ U₁ + U₂ = ${serieSum.toFixed(1)} V = U_G`
                  : `U₁ + U₂ = ${serieSum.toFixed(1)} V — écart : ${Math.abs(serieSum - ug).toFixed(2)} V`)
              : (derivOk
                  ? `✓ U_G = U₁ = U₂ = ${ug.toFixed(1)} V`
                  : `U₁=${u1.toFixed(1)}V, U₂=${u2.toFixed(1)}V → tous doivent valoir ${ug.toFixed(1)}V`)}
          </div>

          <div style={{ marginTop: 8, fontSize: 11, color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>
            {mode === "serie" ? "U_G = U₁ + U₂ + … + Uₙ" : "U_G = U₁ = U₂ = … = Uₙ"}
          </div>
        </div>
      </div>
    </div>
  );
}
