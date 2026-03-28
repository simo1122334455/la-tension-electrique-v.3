"use client";

export default function PotentialDifferenceSchema() {
  return (
    <div
      style={{
        marginTop: 20,
        background: "var(--color-surface-2)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: 18,
      }}
    >
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 900, letterSpacing: "0.04em" }}>
        Origine : Une différence de potentiel
      </div>

      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 140px 1fr", gap: 14, alignItems: "center" }}>
        <div
          style={{
            borderRadius: 14,
            border: "2px solid rgba(21,136,229,0.35)",
            background: "rgba(21,136,229,0.10)",
            padding: 14,
            minHeight: 120,
          }}
        >
          <div style={{ color: "var(--color-blue-lt)", fontWeight: 900, letterSpacing: "0.06em" }}>Etat Électrique A</div>
          <div style={{ marginTop: 10, color: "var(--color-text-muted)", fontSize: 13, lineHeight: 1.7 }}>
            Point A : potentiel de référence
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="Tension ddp">
            {/* arrow */}
            <line x1="60" y1="20" x2="60" y2="100" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 30 L60 20 L70 30" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50 90 L60 100 L70 90" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="60" y="14" textAnchor="middle" fill="var(--color-text-sub)" fontFamily="var(--font-body)" fontWeight={900} fontSize="12">
              ddp
            </text>
          </svg>
          <div style={{ color: "var(--color-text-muted)", fontSize: 13, letterSpacing: "0.04em", fontWeight: 800 }}>Tension (ddp)</div>
        </div>

        <div
          style={{
            borderRadius: 14,
            border: "2px solid rgba(102,187,106,0.35)",
            background: "rgba(102,187,106,0.08)",
            padding: 14,
            minHeight: 120,
          }}
        >
          <div style={{ color: "var(--color-green)", fontWeight: 900, letterSpacing: "0.06em" }}>Etat Électrique B</div>
          <div style={{ marginTop: 10, color: "var(--color-text-muted)", fontSize: 13, lineHeight: 1.7 }}>
            Point B : potentiel à comparer
          </div>
        </div>
      </div>
    </div>
  );
}

