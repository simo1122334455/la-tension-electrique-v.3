"use client";

import { useState, useMemo } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import FormulaBox from "../../components/FormulaBox";
import { formulas } from "../../lib/formulas";

function OscilloscopeCalculator() {
  const [sv, setSv] = useState(2);
  const [y, setY] = useState(3);
  const [sh, setSh] = useState(5);
  const [x, setX] = useState(4);
  const umax = sv * y;
  const T = sh * x;
  const f = T > 0 ? (1000 / T) : 0;
  const ueff = umax / Math.sqrt(2);
  const sl = { accentColor: "var(--color-accent)", width: "100%" };
  const lb: React.CSSProperties = { fontSize: 13, color: "var(--color-text-muted)", width: 100, flexShrink: 0 };
  const vl: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "var(--color-accent)", minWidth: 72, textAlign: "right" };
  return (
    <div style={{ borderRadius: 12, border: "1px solid var(--color-border)", overflow: "hidden", background: "var(--color-surface-2)", marginTop: 14 }}>
      <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--color-border)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text-sub)" }}>
        CALCULATEUR OSCILLOSCOPE
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "14px 16px", borderRight: "1px solid var(--color-border)" }}>
          <div style={{ fontSize: 11, color: "var(--color-text-sub)", marginBottom: 10, fontWeight: 700 }}>VERTICAL</div>
          {[
            { label: "Sensib. Sᵥ", min: 0.5, max: 10, step: 0.5, val: sv, set: setSv, unit: "V/div" },
            { label: "Divisions Y", min: 0.5, max: 6, step: 0.5, val: y, set: setY, unit: "div" },
          ].map(({ label, min, max, step, val, set, unit }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={lb}>{label}</span>
              <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(parseFloat(e.target.value))} style={sl} />
              <span style={vl}>{val.toFixed(1)} {unit}</span>
            </div>
          ))}
          <div style={{ fontSize: 11, color: "var(--color-text-sub)", marginBottom: 10, fontWeight: 700, marginTop: 12 }}>HORIZONTAL</div>
          {[
            { label: "Sensib. Sₕ", min: 1, max: 20, step: 1, val: sh, set: setSh, unit: "ms/div" },
            { label: "Divisions X", min: 1, max: 8, step: 0.5, val: x, set: setX, unit: "div" },
          ].map(({ label, min, max, step, val, set, unit }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={lb}>{label}</span>
              <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(parseFloat(e.target.value))} style={sl} />
              <span style={vl}>{val.toFixed(1)} {unit}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px 16px" }}>
          <div style={{ fontSize: 11, color: "var(--color-text-sub)", marginBottom: 12, fontWeight: 700 }}>RÉSULTATS</div>
          {[
            { label: "U_max = Sᵥ × Y", val: `${umax.toFixed(2)} V`, sub: `${sv.toFixed(1)} × ${y.toFixed(1)}` },
            { label: "U_eff = U_max / √2", val: `${ueff.toFixed(2)} V`, sub: `${umax.toFixed(2)} / 1.414` },
            { label: "T = Sₕ × X", val: `${T.toFixed(1)} ms`, sub: `${sh} × ${x.toFixed(1)}` },
            { label: "f = 1000 / T", val: `${f.toFixed(2)} Hz`, sub: `1000 / ${T.toFixed(1)}` },
          ].map(({ label, val, sub }) => (
            <div key={label} style={{ marginBottom: 13 }}>
              <div style={{ fontSize: 11, color: "var(--color-text-sub)", marginBottom: 2 }}>{label}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 12, color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{sub}</span>
                <span style={{ fontSize: 17, fontWeight: 700, color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>{val}</span>
              </div>
              <div style={{ marginTop: 3, height: 2, background: "rgba(0,200,224,0.15)", borderRadius: 99 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExercicesPage() {
  return (
    <div style={{ background: "var(--color-bg)", paddingBottom: 80 }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <div style={{ paddingTop: 36 }}>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 42, fontWeight: 700, letterSpacing: "0.02em" }}>
            Exercices
          </h1>
          <p style={{ marginTop: 10, color: "var(--color-text-muted)", fontSize: 15, lineHeight: 1.85, maxWidth: 640 }}>
            Entraîne-toi avec des exercices guidés : calcule, vérifie les lois, puis relie
            la lecture de l&rsquo;oscilloscope aux grandeurs du cours.
          </p>
          <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>

            <ExerciseCard
              title="Exercice 1 — Voltmètre à aiguille"
              difficulty="Débutant"
              prompt={<>Données : <span style={{ fontFamily: "var(--font-mono)" }}>C = 10 V</span>, <span style={{ fontFamily: "var(--font-mono)" }}>n = 75</span>, <span style={{ fontFamily: "var(--font-mono)" }}>n₀ = 150</span>, <span style={{ fontFamily: "var(--font-mono)" }}>classe = 2</span>. Calculer <span style={{ fontFamily: "var(--font-mono)" }}>U</span> et <span style={{ fontFamily: "var(--font-mono)" }}>ΔU</span>.</>}
              solution={
                <div style={{ color: "var(--color-text-muted)", lineHeight: 1.85, fontSize: 15 }}>
                  <FormulaBox formula={formulas.U_C_n_n0} label="Calcul de la tension" />
                  <div style={{ marginTop: 10 }}>U = 10 × (75/150) = <span style={{ color: "var(--color-text)", fontWeight: 700 }}>5 V</span></div>
                  <div style={{ marginTop: 14 }}><FormulaBox formula={formulas.DeltaU} label="Incertitude" /></div>
                  <div style={{ marginTop: 10 }}>ΔU = (10 × 2) / 100 = <span style={{ color: "var(--color-text)", fontWeight: 700 }}>0,2 V</span></div>
                  <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 8, background: "rgba(0,200,224,0.08)", border: "1px solid rgba(0,200,224,0.2)", color: "var(--color-text)", fontWeight: 700 }}>
                    Résultat : U = 5,0 V ± 0,2 V
                  </div>
                </div>
              }
            />

            <ExerciseCard
              title="Exercice 2 — Loi des tensions en série"
              difficulty="Débutant"
              prompt={<>Données : <span style={{ fontFamily: "var(--font-mono)" }}>U_G = 12 V</span>, <span style={{ fontFamily: "var(--font-mono)" }}>U₁ = 4,5 V</span>, <span style={{ fontFamily: "var(--font-mono)" }}>U₂ = 7,5 V</span>. Vérifier la loi.</>}
              solution={
                <div style={{ color: "var(--color-text-muted)", lineHeight: 1.85, fontSize: 15 }}>
                  <FormulaBox formula={formulas.UG_sum} label="Loi des tensions en série" />
                  <div style={{ marginTop: 10 }}>U₁ + U₂ = 4,5 + 7,5 = <span style={{ color: "var(--color-text)", fontWeight: 700 }}>12 V</span></div>
                  <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 8, background: "rgba(0,200,224,0.08)", border: "1px solid rgba(0,200,224,0.2)", color: "var(--color-text)", fontWeight: 700 }}>
                    Donc : U_G = U₁ + U₂ ✓
                  </div>
                </div>
              }
            />

            <ExerciseCard
              title="Exercice 3 — Oscilloscope"
              difficulty="Intermédiaire"
              prompt={
                <>
                  Données : <span style={{ fontFamily: "var(--font-mono)" }}>S_v = 2 V/div</span>, <span style={{ fontFamily: "var(--font-mono)" }}>Y = 3 div</span>, <span style={{ fontFamily: "var(--font-mono)" }}>S_H = 5 ms/div</span>, <span style={{ fontFamily: "var(--font-mono)" }}>X = 4 div</span>. Trouver <span style={{ fontFamily: "var(--font-mono)" }}>U_max</span>, <span style={{ fontFamily: "var(--font-mono)" }}>T</span>, <span style={{ fontFamily: "var(--font-mono)" }}>f</span> et <span style={{ fontFamily: "var(--font-mono)" }}>U_eff</span>.
                  <div style={{ marginTop: 8, fontSize: 13, color: "var(--color-text-sub)" }}>Utilise le calculateur pour vérifier tes résultats avant de voir la solution.</div>
                  <OscilloscopeCalculator />
                </>
              }
              solution={
                <div style={{ color: "var(--color-text-muted)", lineHeight: 1.85, fontSize: 15 }}>
                  <div><FormulaBox formula={formulas.Umax} label="Tension maximale" /><div style={{ marginTop: 10 }}>U_max = 3 × 2 = <span style={{ color: "var(--color-text)", fontWeight: 700 }}>6 V</span></div></div>
                  <div style={{ marginTop: 14 }}><FormulaBox formula={formulas.T} label="Période T" /><div style={{ marginTop: 10 }}>T = 4 × 5 ms = <span style={{ color: "var(--color-text)", fontWeight: 700 }}>20 ms</span></div></div>
                  <div style={{ marginTop: 14 }}><FormulaBox formula={formulas.f} label="Fréquence f" /><div style={{ marginTop: 10 }}>f = 1000/20 = <span style={{ color: "var(--color-text)", fontWeight: 700 }}>50 Hz</span></div></div>
                  <div style={{ marginTop: 14 }}><FormulaBox formula={formulas.Ueff} label="Tension efficace U_eff" /><div style={{ marginTop: 10 }}>U_eff ≈ 0,707 × 6 ≈ <span style={{ color: "var(--color-text)", fontWeight: 700 }}>4,24 V</span></div></div>
                  <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 8, background: "rgba(0,200,224,0.08)", border: "1px solid rgba(0,200,224,0.2)", color: "var(--color-text)", fontWeight: 700 }}>
                    U_max = 6 V · T = 20 ms · f = 50 Hz · U_eff ≈ 4,24 V
                  </div>
                </div>
              }
            />

          </div>
        </div>
      </div>
    </div>
  );
}
