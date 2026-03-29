"use client";

import { useState } from "react";

function SerieCircuit({ ug, u1, u2, ok }: { ug: number; u1: number; u2: number; ok: boolean }) {
  return (
    <svg viewBox="0 0 680 240" width="100%" role="img" aria-label="Circuit série">
      <defs>
        <marker id="arr-s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* Outer loop */}
      <path d="M90 115 H50 V40 H640 V115 H610" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <path d="M90 165 H50 V200 H640 V165 H610" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      {/* Between G and R1 */}
      <line x1="250" y1="115" x2="300" y2="115" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <line x1="250" y1="165" x2="300" y2="165" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      {/* Between R1 and R2 */}
      <line x1="460" y1="115" x2="510" y2="115" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <line x1="460" y1="165" x2="510" y2="165" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>

      {/* Current arrow */}
      <line x1="360" y1="40" x2="410" y2="40" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-s)"/>
      <text x="385" y="33" textAnchor="middle" fontSize="11" fill="#60A0E0" fontFamily="monospace" fontWeight="700">I</text>

      {/* G */}
      <circle cx="170" cy="140" r="46" fill="rgba(14,40,80,0.55)" stroke="#378ADD" strokeWidth="2"/>
      <text x="170" y="133" textAnchor="middle" fontSize="20" fill="#60A0E0" fontFamily="monospace" fontWeight="700">G</text>
      <text x="170" y="112" textAnchor="middle" fontSize="13" fill="#EF9F27" fontFamily="monospace">+</text>
      <text x="170" y="181" textAnchor="middle" fontSize="13" fill="#888" fontFamily="monospace">−</text>

      {/* U_G arrow */}
      <line x1="20" y1="165" x2="20" y2="115" stroke="#EF9F27" strokeWidth="2" markerEnd="url(#arr-s)"/>
      <text x="12" y="141" textAnchor="middle" fontSize="12" fill="#EF9F27" fontFamily="monospace" fontWeight="700">U</text>
      <text x="12" y="152" textAnchor="middle" fontSize="9" fill="#EF9F27" fontFamily="monospace">G</text>
      <text x="32" y="152" textAnchor="middle" fontSize="10" fill="#EF9F27" fontFamily="monospace">{ug.toFixed(1)}V</text>

      {/* R1 */}
      <rect x="300" y="105" width="160" height="60" rx="8" fill="rgba(10,30,50,0.6)" stroke="#1D9E75" strokeWidth="2"/>
      <polyline points="318,135 330,118 344,152 358,118 372,152 386,118 400,152 414,118 428,135 442,135" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="380" y="158" textAnchor="middle" fontSize="11" fill="#9FE1CB" fontFamily="monospace" fontWeight="700">R1</text>
      {/* U1 arrow */}
      <line x1="310" y1="92" x2="450" y2="92" fill="none" stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#arr-s)"/>
      <text x="380" y="86" textAnchor="middle" fontSize="10" fill="#EF9F27" fontFamily="monospace" fontWeight="700">U₁ = {u1.toFixed(1)}V</text>

      {/* R2 */}
      <rect x="510" y="105" width="160" height="60" rx="8" fill="rgba(10,30,50,0.6)" stroke="#1D9E75" strokeWidth="2"/>
      <polyline points="528,135 540,118 554,152 568,118 582,152 596,118 610,152 624,118 638,135 652,135" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="590" y="158" textAnchor="middle" fontSize="11" fill="#9FE1CB" fontFamily="monospace" fontWeight="700">R2</text>
      {/* U2 arrow */}
      <line x1="520" y1="92" x2="660" y2="92" fill="none" stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#arr-s)"/>
      <text x="590" y="86" textAnchor="middle" fontSize="10" fill="#EF9F27" fontFamily="monospace" fontWeight="700">U₂ = {u2.toFixed(1)}V</text>

      {/* Status */}
      <text x="340" y="222" textAnchor="middle" fontSize="12" fill={ok ? "#4CAF82" : "#E85350"} fontFamily="monospace" fontWeight="700">
        {ok ? `U₁ + U₂ = ${(u1+u2).toFixed(1)}V = U_G ✓` : `U₁ + U₂ = ${(u1+u2).toFixed(1)}V ≠ U_G (${ug.toFixed(1)}V)`}
      </text>
    </svg>
  );
}

function DerivationCircuit({ ug, u1, u2, ok }: { ug: number; u1: number; u2: number; ok: boolean }) {
  return (
    <svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Circuit dérivation">
      <defs>
        <marker id="arr-d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* Rails */}
      <path d="M130 55 H620" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <path d="M130 255 H620" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <path d="M620 55 V255" fill="none" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      {/* G wires */}
      <line x1="80" y1="55"  x2="130" y2="55"  stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="255" x2="130" y2="255" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="106" x2="80" y2="55"   stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="204" x2="80" y2="255"  stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>

      {/* G */}
      <circle cx="80" cy="155" r="50" fill="rgba(14,40,80,0.55)" stroke="#378ADD" strokeWidth="2"/>
      <text x="80" y="148" textAnchor="middle" fontSize="20" fill="#60A0E0" fontFamily="monospace" fontWeight="700">G</text>
      <text x="80" y="121" textAnchor="middle" fontSize="13" fill="#EF9F27" fontFamily="monospace">+</text>
      <text x="80" y="196" textAnchor="middle" fontSize="13" fill="#888" fontFamily="monospace">−</text>

      {/* U_G */}
      <line x1="18" y1="250" x2="18" y2="60" stroke="#EF9F27" strokeWidth="2" markerEnd="url(#arr-d)"/>
      <text x="10" y="156" textAnchor="middle" fontSize="12" fill="#EF9F27" fontFamily="monospace" fontWeight="700">U</text>
      <text x="10" y="168" textAnchor="middle" fontSize="9"  fill="#EF9F27" fontFamily="monospace">G</text>
      <text x="30" y="168" textAnchor="middle" fontSize="10" fill="#EF9F27" fontFamily="monospace">{ug.toFixed(1)}V</text>

      {/* Junction dots */}
      <circle cx="270" cy="55"  r="5" fill="#378ADD"/>
      <circle cx="270" cy="255" r="5" fill="#378ADD"/>
      <circle cx="470" cy="55"  r="5" fill="#378ADD"/>
      <circle cx="470" cy="255" r="5" fill="#378ADD"/>

      {/* R1 branch — upper */}
      <line x1="270" y1="55"  x2="270" y2="95"  stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <line x1="470" y1="55"  x2="470" y2="95"  stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <rect x="270" y="95" width="200" height="60" rx="8" fill="rgba(10,30,50,0.6)" stroke={Math.abs(u1-ug)<0.02 ? "#4CAF82" : "#1D9E75"} strokeWidth="2"/>
      <polyline points="290,125 304,108 318,142 332,108 346,142 360,108 374,142 388,108 402,142 416,125 450,125" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="370" y="148" textAnchor="middle" fontSize="11" fill="#9FE1CB" fontFamily="monospace" fontWeight="700">R1</text>
      {/* U1 */}
      <line x1="280" y1="82" x2="460" y2="82" fill="none" stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#arr-d)"/>
      <text x="370" y="76" textAnchor="middle" fontSize="10" fill="#EF9F27" fontFamily="monospace" fontWeight="700">U₁ = {u1.toFixed(1)}V</text>

      {/* R2 branch — lower */}
      <line x1="270" y1="255" x2="270" y2="215" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <line x1="470" y1="255" x2="470" y2="215" stroke="#378ADD" strokeWidth="2" strokeLinecap="round"/>
      <rect x="270" y="155" width="200" height="60" rx="8" fill="rgba(10,30,50,0.6)" stroke={Math.abs(u2-ug)<0.02 ? "#4CAF82" : "#1D9E75"} strokeWidth="2"/>
      <polyline points="290,185 304,168 318,202 332,168 346,202 360,168 374,202 388,168 402,202 416,185 450,185" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="370" y="208" textAnchor="middle" fontSize="11" fill="#9FE1CB" fontFamily="monospace" fontWeight="700">R2</text>
      {/* U2 */}
      <line x1="280" y1="228" x2="460" y2="228" fill="none" stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#arr-d)"/>
      <text x="370" y="242" textAnchor="middle" fontSize="10" fill="#EF9F27" fontFamily="monospace" fontWeight="700">U₂ = {u2.toFixed(1)}V</text>

      {/* Status */}
      <text x="370" y="278" textAnchor="middle" fontSize="12" fill={ok ? "#4CAF82" : "#E85350"} fontFamily="monospace" fontWeight="700">
        {ok ? `U_G = U₁ = U₂ = ${ug.toFixed(1)}V ✓` : `Cible : ${ug.toFixed(1)}V pour les deux branches`}
      </text>
    </svg>
  );
}

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
  const statusBg    = ok ? "rgba(76,175,130,0.12)" : "rgba(239,83,80,0.10)";
  const statusBorder = ok ? "rgba(76,175,130,0.3)" : "rgba(239,83,80,0.3)";

  const sliderStyle = { accentColor: "var(--color-accent)", width: "100%" };
  const labelSt: React.CSSProperties = { fontSize: 13, color: "var(--color-text-muted)", width: 80, flexShrink: 0 };
  const valSt: React.CSSProperties   = { fontSize: 13, fontWeight: 600, color: "var(--color-text)", minWidth: 52, textAlign: "right" };

  return (
    <div style={{ borderRadius: 14, border: "1px solid var(--color-border)", overflow: "hidden", background: "var(--color-surface-2)", marginTop: 18 }}>

      {/* Tabs */}
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

        {/* Circuit */}
        <div style={{ padding: 16, borderRight: "1px solid var(--color-border)", background: "rgba(6,12,24,0.6)" }}>
          {mode === "serie"
            ? <SerieCircuit ug={ug} u1={u1} u2={u2} ok={serieOk} />
            : <DerivationCircuit ug={ug} u1={u1} u2={u2} ok={derivOk} />}
        </div>

        {/* Controls */}
        <div style={{ padding: "14px 16px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text-sub)", marginBottom: 12 }}>TENSIONS</div>
          {[
            { label: "U_G (V)", min: 1, max: 24, step: 0.5, val: ug, set: setUg },
            { label: "U₁ (V)",  min: 0, max: 24, step: 0.5, val: u1, set: setU1 },
            { label: "U₂ (V)",  min: 0, max: 24, step: 0.5, val: u2, set: setU2 },
          ].map(({ label, min, max, step, val, set }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={labelSt}>{label}</span>
              <input type="range" min={min} max={max} step={step} value={val}
                onChange={e => set(parseFloat(e.target.value))} style={sliderStyle} />
              <span style={valSt}>{val.toFixed(1)} V</span>
            </div>
          ))}

          {mode === "derivation" && !derivOk && (
            <button onClick={() => { setU1(ug); setU2(ug); }} style={{
              width: "100%", marginBottom: 10, padding: "8px 12px", borderRadius: 8, cursor: "pointer",
              background: "rgba(0,200,224,0.08)", border: "1px solid rgba(0,200,224,0.3)",
              color: "var(--color-accent)", fontSize: 12, fontWeight: 700,
            }}>
              Régler U₁ = U₂ = {ug.toFixed(1)} V →
            </button>
          )}

          <div style={{ padding: "10px 12px", borderRadius: 8, background: statusBg, border: `1px solid ${statusBorder}`, fontSize: 13, fontWeight: 700, color: statusColor, lineHeight: 1.6 }}>
            {mode === "serie"
              ? (serieOk
                  ? `✓ U₁ + U₂ = ${serieSum.toFixed(1)} V = U_G`
                  : `U₁ + U₂ = ${serieSum.toFixed(1)} V — écart : ${Math.abs(serieSum - ug).toFixed(2)} V`)
              : (derivOk
                  ? `✓ U_G = U₁ = U₂ = ${ug.toFixed(1)} V`
                  : `U₁=${u1.toFixed(1)}V, U₂=${u2.toFixed(1)}V → doivent valoir ${ug.toFixed(1)}V`)}
          </div>

          <div style={{ marginTop: 8, fontSize: 11, color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>
            {mode === "serie" ? "U_G = U₁ + U₂ + … + Uₙ" : "U_G = U₁ = U₂ = … = Uₙ"}
          </div>
        </div>
      </div>
    </div>
  );
}
