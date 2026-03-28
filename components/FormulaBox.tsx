"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { motion } from "framer-motion";

type Props = {
  formula: string;
  label?: string;
};

export default function FormulaBox({ formula, label }: Props) {
  return (
    <motion.div
      initial={{ boxShadow: "0 0 0 rgba(0,200,224,0)" }}
      whileInView={{
        boxShadow: [
          "0 0 0px rgba(0,200,224,0)",
          "0 0 20px rgba(0,200,224,0.42)",
          "0 0 0px rgba(0,200,224,0)",
        ],
      }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      style={{
        background: "var(--color-surface-2)",
        border: "1px solid var(--color-accent)",
        borderRadius: 10,
        padding: "16px 20px",
        textAlign: "center",
      }}
      className="w-full"
    >
      {label && (
        <div
          style={{
            fontSize: 11, color: "var(--color-text-sub)",
            marginBottom: 8, letterSpacing: "0.08em",
            textTransform: "uppercase", fontWeight: 700,
          }}
        >
          {label}
        </div>
      )}
      <div style={{ color: "var(--color-gold)", fontSize: "1.2rem", fontFamily: "var(--font-heading)" }}>
        <BlockMath math={formula} />
      </div>
    </motion.div>
  );
}
