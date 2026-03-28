"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type WaveType = "sine" | "square" | "triangle";

type Props = {
  type: WaveType;
  color: string;
  animated?: boolean;
};

export default function WaveformSVG({ type, color, animated = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!animated) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [animated]);

  const { pathD, width, height, midY } = useMemo(() => {
    const width = 520;
    const height = 160;
    const midY = height / 2;
    const amp = 55;

    const points: Array<[number, number]> = [];

    const addPoint = (x: number, y: number) => points.push([x, y]);
    const steps = 120;

    for (let i = 0; i <= steps; i++) {
      const x = (width * i) / steps;
      const t = i / steps;

      if (type === "sine") {
        const y = midY - amp * Math.sin(2 * Math.PI * t);
        addPoint(x, y);
      } else if (type === "square") {
        const y = t < 0.5 ? midY - amp : midY + amp;
        addPoint(x, y);
      } else {
        // triangle
        const y = t < 0.5 ? midY - amp + (2 * amp * t) : midY + amp - (2 * amp * (t - 0.5));
        addPoint(x, y);
      }
    }

    const pathD = points
      .map(([x, y], idx) => {
        const cmd = idx === 0 ? "M" : "L";
        return `${cmd}${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ");

    return { pathD, width, height, midY };
  }, [type]);

  const dashOffset = animated ? (inView ? 0 : 1000) : 0;

  return (
    <div ref={ref} style={{ borderRadius: 12, overflow: "hidden" }}>
      <svg
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Onde ${type}`}
        style={{ background: "var(--color-navy-dark)", display: "block" }}
      >
        {/* Subtle grid */}
        {Array.from({ length: 11 }).map((_, i) => {
          const x = (width * i) / 10;
          return <line key={`vx-${i}`} x1={x} y1={0} x2={x} y2={height} stroke="#1A3A5C" strokeWidth="0.5" />;
        })}
        {Array.from({ length: 5 }).map((_, i) => {
          const y = (height * i) / 4;
          return <line key={`hy-${i}`} x1={0} y1={y} x2={width} y2={y} stroke="#1A3A5C" strokeWidth="0.5" />;
        })}

        <line x1={0} y1={midY} x2={width} y2={midY} stroke="#2A5080" strokeWidth={1} />

        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: dashOffset,
            transition: animated ? "stroke-dashoffset 1.2s ease-out" : undefined,
          }}
        />
      </svg>
    </div>
  );
}

