"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  difficulty: "Débutant" | "Intermédiaire";
  prompt: React.ReactNode;
  solution: React.ReactNode;
};

export default function ExerciseCard({ title, difficulty, prompt, solution }: Props) {
  const [open, setOpen] = useState(false);

  const badgeColor = useMemo(() => {
    return difficulty === "Débutant" ? "var(--color-green)" : "var(--color-gold)";
  }, [difficulty]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          background: "var(--color-surface-2)",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.08em" }}>{title}</div>
          <div style={{ marginTop: 6, color: "var(--color-text-sub)", fontSize: 12 }}>Niveau : {difficulty}</div>
        </div>

        <div
          style={{
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            color: badgeColor,
            fontWeight: 800,
            letterSpacing: "0.08em",
            fontSize: 12,
            whiteSpace: "nowrap",
          }}
        >
          {difficulty}
        </div>
      </div>

      <div style={{ padding: "18px 20px" }}>
        <div style={{ color: "var(--color-text-muted)", lineHeight: 1.8, fontSize: 15 }}>{prompt}</div>

        <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            style={{
              border: "1px solid var(--color-border)",
              background: "var(--color-surface-2)",
              color: "var(--color-text)",
              padding: "10px 14px",
              borderRadius: 10,
              cursor: "pointer",
              letterSpacing: "0.04em",
              fontWeight: 600,
              display: "inline-flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            {open ? "Masquer la solution" : "Voir la solution"}
          </button>
        </div>

        <div
          style={{
            maxHeight: open ? 600 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s ease",
          }}
        >
          <div style={{ marginTop: 16 }}>{solution}</div>
        </div>
      </div>
    </motion.section>
  );
}

