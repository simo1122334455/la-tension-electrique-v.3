"use client";

import FormulaBox from "../../components/FormulaBox";
import { formulas } from "../../lib/formulas";
import { authorsBlock } from "../../lib/content";

export default function ResumePage() {
  const onPrint = () => window.print();

  return (
    <div style={{ background: "var(--color-bg)", paddingBottom: 80 }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <div style={{ paddingTop: 36 }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 42, fontWeight: 700, letterSpacing: "0.02em" }}>
                Fiche de Révision
              </h1>
              <p style={{ marginTop: 10, color: "var(--color-text-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 560 }}>
                Résumé structuré : formules essentielles et définitions à retenir
                pour maîtriser la tension électrique.
              </p>
            </div>

            <button
              type="button"
              onClick={onPrint}
              style={{
                background: "var(--color-accent)",
                color: "var(--color-navy-dark)",
                borderRadius: 10,
                padding: "12px 18px",
                fontWeight: 800,
                letterSpacing: "0.06em",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                flexShrink: 0,
                marginTop: 6,
              }}
            >
              Télécharger PDF
            </button>
          </div>

          {/* Formulas grid */}
          <section style={{ marginTop: 28 }} className="print-no-break">
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 14 }}>
              Formules clés
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              <FormulaBox formula={formulas.UAB_VA_VB} label="Tension algébrique" />
              <FormulaBox formula={formulas.UAB_neg_UBA} label="Propriété de symétrie" />
              <FormulaBox formula={formulas.U_C_n_n0} label="Lecture voltmètre" />
              <FormulaBox formula={formulas.DeltaU} label="Incertitude" />
              <FormulaBox formula={formulas.U_SV_Y} label="Oscilloscope — tension" />
              <FormulaBox formula={formulas.Umax} label="Tension maximale" />
              <FormulaBox formula={formulas.Ueff} label="Tension efficace" />
              <FormulaBox formula={formulas.T} label="Période" />
              <FormulaBox formula={formulas.f} label="Fréquence" />
            </div>
          </section>

          {/* Definitions */}
          <section style={{ marginTop: 32 }} className="print-no-break">
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 12 }}>
              Définitions à retenir
            </div>
            <ul
              style={{
                color: "var(--color-text-muted)", fontSize: 15, lineHeight: 2,
                paddingLeft: 20, display: "flex", flexDirection: "column", gap: 2,
              }}
            >
              <li>
                <strong style={{ color: "var(--color-text)" }}>Potentiel électrique</strong> : référence d&rsquo;énergie électrique par unité de charge en un point.
              </li>
              <li>
                <strong style={{ color: "var(--color-text)" }}>Tension U<sub>AB</sub></strong> : différence de potentiel entre les points A et B. Grandeur algébrique.
              </li>
              <li>
                <strong style={{ color: "var(--color-text)" }}>Voltmètre</strong> : appareil branché <em>en dérivation</em> pour mesurer une tension.
              </li>
              <li>
                <strong style={{ color: "var(--color-text)" }}>Incertitude</strong> : marge d&rsquo;erreur liée à la classe et au calibre de l&rsquo;appareil.
              </li>
              <li>
                <strong style={{ color: "var(--color-text)" }}>Loi des tensions en série</strong> : la tension totale est la <em>somme</em> des tensions des dipôles.
              </li>
              <li>
                <strong style={{ color: "var(--color-text)" }}>Loi des tensions en dérivation</strong> : la tension est <em>identique</em> aux bornes de chaque branche.
              </li>
              <li>
                <strong style={{ color: "var(--color-text)" }}>Oscilloscope</strong> : lecture via U = S<sub>V</sub> × Y (sensibilité verticale × divisions).
              </li>
              <li>
                <strong style={{ color: "var(--color-text)" }}>Tension alternative périodique</strong> : signal qui change de signe et se répète avec une période T.
              </li>
            </ul>
          </section>

          {/* Credits — fixed: iterate authorsBlock correctly, no hardcoded duplicate */}
          <section style={{ marginTop: 32 }} className="print-no-break">
            <div
              style={{
                padding: "20px 22px",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                background: "var(--color-surface-2)",
              }}
            >
              {authorsBlock.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: i === 0
                      ? "var(--color-text)"
                      : i === authorsBlock.length - 1
                      ? "var(--color-text-sub)"
                      : "var(--color-text-muted)",
                    fontFamily: i === 0 ? "var(--font-heading)" : undefined,
                    fontWeight: i === 0 ? 700 : 400,
                    fontSize: i === 0 ? 15 : 14,
                    marginTop: i === 0 ? 0 : 4,
                    letterSpacing: i === 0 ? "0.04em" : undefined,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
