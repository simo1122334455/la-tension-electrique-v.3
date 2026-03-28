"use client";

import { ReactNode, useMemo } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  accentColor?: string;
  id?: string;
};

export default function SectionCard({ children, className, accentColor, id }: Props) {
  const style = useMemo(
    () => ({
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: 12,
      boxShadow: "0 4px 28px rgba(0,0,0,0.45)",
      padding: "28px 32px",
      position: "relative" as const,
      overflow: "hidden",
      /* Hover lift handled by the .section-card CSS class below */
    }),
    []
  );

  return (
    <>
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`section-card${className ? ` ${className}` : ""}`}
        style={style}
      >
        {accentColor && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 4,
              background: accentColor,
              borderRadius: "12px 0 0 12px",
            }}
          />
        )}

        <div style={{ paddingLeft: accentColor ? 24 : 0 }}>
          {children}
        </div>
      </motion.section>

      {/*
        Scoped global: inject once per component tree.
        This is the correct App Router pattern — no styled-jsx needed.
      */}
      <style>{`
        .section-card {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .section-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 38px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0,200,224,0.12);
        }
      `}</style>
    </>
  );
}
