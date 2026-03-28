"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = { id: string; label: string };

export default function TableOfContents() {
  const items = useMemo<TocItem[]>(
    () => [
      { id: "section-i", label: "I · Potentiel" },
      { id: "section-ii", label: "II · Représentation" },
      { id: "section-iii", label: "III · Voltmètre" },
      { id: "section-iv", label: "IV · Lois" },
      { id: "section-v", label: "V · Oscilloscope" },
      { id: "section-vi", label: "VI · Variables" },
      { id: "section-vii", label: "VII · Alternative" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sectionEls = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[];
    if (sectionEls.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target) setActiveId((visible.target as HTMLElement).id);
      },
      { root: null, threshold: [0.25, 0.4, 0.55] }
    );

    sectionEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  return (
    <>
      {/* Desktop: vertical sticky sidebar */}
      <aside className="hidden lg:block" style={{ position: "sticky", top: 96, alignSelf: "flex-start" }}>
        <div
          style={{
            width: 320,
            border: "1px solid var(--color-border)",
            background: "var(--color-surface-2)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "18px 20px", fontFamily: "var(--font-heading)", letterSpacing: "0.08em" }}>
            Table des matières
          </div>
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {items.map((it) => {
              const active = it.id === activeId;
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => {
                    document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "14px 16px",
                    color: active ? "var(--color-accent)" : "var(--color-text-muted)",
                    background: active ? "rgba(0,188,212,0.08)" : "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(30,58,110,0.5)",
                    cursor: "pointer",
                    letterSpacing: "0.08em",
                    fontWeight: active ? 700 : 500,
                    transition: "background 180ms ease, color 180ms ease",
                  }}
                >
                  {it.label}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Tablet: horizontal tabs */}
      <div className="md:flex lg:hidden" style={{ gap: 10, overflowX: "auto", paddingBottom: 14 }}>
        {items.map((it) => {
          const active = it.id === activeId;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              style={{
                flex: "0 0 auto",
                padding: "10px 14px",
                borderRadius: 999,
                border: `1px solid ${active ? "rgba(0,188,212,0.65)" : "var(--color-border)"}`,
                background: active ? "rgba(0,188,212,0.10)" : "var(--color-surface-2)",
                color: active ? "var(--color-accent)" : "var(--color-text-muted)",
                cursor: "pointer",
                letterSpacing: "0.08em",
                fontWeight: active ? 700 : 500,
              }}
            >
              {it.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

