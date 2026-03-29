"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = { id: string; label: string };

export default function TableOfContents() {
  const items = useMemo<TocItem[]>(
    () => [
      { id: "section-i",   label: "I · Potentiel" },
      { id: "section-ii",  label: "II · Représentation" },
      { id: "section-iii", label: "III · Voltmètre" },
      { id: "section-iv",  label: "IV · Lois" },
      { id: "section-v",   label: "V · Oscilloscope" },
      { id: "section-vi",  label: "VI · Variables" },
      { id: "section-vii", label: "VII · Alternative" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [scrollProgress, setScrollProgress] = useState(0);

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
      { root: null, threshold: [0.15, 0.35, 0.55] }
    );

    sectionEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = items.findIndex((it) => it.id === activeId);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block" style={{ position: "sticky", top: 96, alignSelf: "flex-start" }}>
        <div style={{ width: 300, border: "1px solid var(--color-border)", background: "var(--color-surface-2)", borderRadius: 12, overflow: "hidden" }}>

          {/* Header with scroll progress bar */}
          <div style={{ padding: "16px 20px 0", fontFamily: "var(--font-heading)", letterSpacing: "0.08em", fontSize: 14 }}>
            Table des matières
          </div>
          <div style={{ margin: "10px 20px 0", height: 3, background: "var(--color-border)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${scrollProgress.toFixed(1)}%`, background: "var(--color-accent)", borderRadius: 99, transition: "width 100ms ease" }} />
          </div>

          <div style={{ borderTop: "1px solid var(--color-border)", marginTop: 12 }}>
            {items.map((it, idx) => {
              const active = it.id === activeId;
              const done = idx < activeIndex;
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => scrollTo(it.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "13px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: active ? "var(--color-accent)" : done ? "var(--color-text-muted)" : "var(--color-text-sub)",
                    background: active ? "rgba(0,200,224,0.08)" : "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(30,58,110,0.5)",
                    cursor: "pointer",
                    letterSpacing: "0.06em",
                    fontWeight: active ? 700 : 400,
                    fontSize: 13,
                    transition: "background 180ms ease, color 180ms ease",
                  }}
                >
                  {/* Status dot */}
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                    background: active ? "var(--color-accent)" : done ? "rgba(0,200,224,0.35)" : "var(--color-border)",
                    transition: "background 300ms ease",
                  }} />
                  {it.label}
                  {active && (
                    <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--color-accent)", opacity: 0.7 }}>◀</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Progress text */}
          <div style={{ padding: "10px 20px", borderTop: "1px solid var(--color-border)", fontSize: 11, color: "var(--color-text-sub)", display: "flex", justifyContent: "space-between" }}>
            <span>Progression</span>
            <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>{Math.round(scrollProgress)} %</span>
          </div>
        </div>
      </aside>

      {/* Tablet: horizontal tabs */}
      <div className="md:flex lg:hidden" style={{ gap: 8, overflowX: "auto", paddingBottom: 14 }}>
        {items.map((it) => {
          const active = it.id === activeId;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => scrollTo(it.id)}
              style={{
                flex: "0 0 auto",
                padding: "9px 13px",
                borderRadius: 999,
                border: `1px solid ${active ? "rgba(0,200,224,0.65)" : "var(--color-border)"}`,
                background: active ? "rgba(0,200,224,0.10)" : "var(--color-surface-2)",
                color: active ? "var(--color-accent)" : "var(--color-text-muted)",
                cursor: "pointer",
                letterSpacing: "0.06em",
                fontWeight: active ? 700 : 400,
                fontSize: 12,
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
