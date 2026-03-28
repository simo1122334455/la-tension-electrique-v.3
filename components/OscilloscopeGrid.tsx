"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SignalType = "dc" | "sine" | "square" | "triangle";

type Props = {
  signalType: SignalType;
  amplitude: number; // in vertical divisions (Y)
  period: number; // in horizontal divisions (nb_div_horiz)
};

export default function OscilloscopeGrid({ signalType, amplitude, period }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (signalType === "dc") return;
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
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [signalType]);

  const svg = useMemo(() => {
    const width = 680;
    const height = 340;
    const left = 46;
    const top = 38;
    const gridW = 588;
    const gridH = 264;
    const hDiv = 10;
    const vDiv = 8;

    const dx = gridW / hDiv;
    const dy = gridH / vDiv;
    const centerX = left + gridW / 2;
    const centerY = top + gridH / 2;

    const ampPx = amplitude * dy;

    const points: Array<[number, number]> = [];
    const steps = 180;
    const periodPx = Math.max(0.1, period * dx);

    for (let i = 0; i <= steps; i++) {
      const x = left + (gridW * i) / steps;
      const t = (x - left) / periodPx;

      if (signalType === "dc") continue;

      const phase = 2 * Math.PI * t;
      let y = centerY;
      if (signalType === "sine") {
        y = centerY - ampPx * Math.sin(phase);
      } else if (signalType === "square") {
        y = centerY - ampPx * (Math.sin(phase) >= 0 ? 1 : -1);
      } else {
        // triangle
        // Convert sine sign to triangle wave from phase.
        const frac = (t % 1 + 1) % 1; // [0..1]
        const tri = frac < 0.5 ? 4 * frac - 1 : -4 * frac + 3; // [-1..1]
        y = centerY - ampPx * tri;
      }

      points.push([x, y]);
    }

    const waveD =
      signalType === "dc"
        ? ""
        : points
            .map(([x, y], idx) => `${idx === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`)
            .join(" ");

    const dcY = centerY - ampPx;

    return { width, height, left, top, gridW, gridH, hDiv, vDiv, dx, dy, centerX, centerY, waveD, dcY, ampPx };
  }, [signalType, amplitude, period]);

  const dashOffset = signalType === "dc" ? 0 : inView ? 0 : 1200;

  return (
    <div
      ref={ref}
      style={{
        borderRadius: 14,
        border: "1px solid var(--color-border)",
        overflow: "hidden",
        background: "var(--color-navy-dark)",
      }}
    >
      <svg width="100%" viewBox={`0 0 ${svg.width} ${svg.height}`} role="img" aria-label="Oscilloscope">
        {/* Grid */}
        {Array.from({ length: svg.hDiv + 1 }).map((_, i) => {
          const x = svg.left + i * svg.dx;
          return <line key={`vx-${i}`} x1={x} y1={svg.top} x2={x} y2={svg.top + svg.gridH} stroke="#1A3A5C" strokeWidth="0.5" />;
        })}
        {Array.from({ length: svg.vDiv + 1 }).map((_, i) => {
          const y = svg.top + i * svg.dy;
          return <line key={`hy-${i}`} x1={svg.left} y1={y} x2={svg.left + svg.gridW} y2={y} stroke="#1A3A5C" strokeWidth="0.5" />;
        })}

        {/* Center axis (horizontal) */}
        <line x1={svg.left} y1={svg.centerY} x2={svg.left + svg.gridW} y2={svg.centerY} stroke="#2A5080" strokeWidth={1} />
        {/* Center axis (vertical) */}
        <line x1={svg.centerX} y1={svg.top} x2={svg.centerX} y2={svg.top + svg.gridH} stroke="#2A5080" strokeWidth={1} />
        {/* Axis labels */}
        <text x={svg.left + 6} y={svg.centerY - 6} fill="#7FB3D5" fontSize="12" fontFamily="var(--font-body)" fontWeight={700}>
          Y
        </text>
        <text x={svg.left + svg.gridW - 8} y={svg.centerY + 18} fill="#7FB3D5" fontSize="12" fontFamily="var(--font-body)" fontWeight={700} textAnchor="end">
          X
        </text>

        {signalType === "dc" ? (
          <line x1={svg.left} y1={svg.dcY} x2={svg.left + svg.gridW} y2={svg.dcY} stroke="var(--color-accent)" strokeWidth={3} />
        ) : (
          <path
            d={svg.waveD}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={3}
            strokeLinecap="round"
            style={{
              strokeDasharray: 1200,
              strokeDashoffset: dashOffset,
              transition: inView ? "stroke-dashoffset 1.2s ease-out" : "none",
            }}
          />
        )}
      </svg>
    </div>
  );
}

