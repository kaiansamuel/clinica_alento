"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type CounterProps = {
  /** Valor final da contagem */
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const DURATION = 1200; // ~1.2s — PRD §2.7
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Formata no padrão pt-BR (4.800) */
const format = (n: number) => n.toLocaleString("pt-BR");

/**
 * Contador 0→alvo ao entrar no viewport, em IBM Plex Mono.
 * Reduced-motion: mostra o valor final direto.
 */
export default function Counter({ value, prefix = "", suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Reduced-motion: o render já mostra o valor final direto
    if (!inView || reduced) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setDisplay(Math.round(easeOut(progress) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className={`font-mono tabular-nums ${className ?? ""}`}>
      {prefix}
      {format(reduced ? value : display)}
      {suffix}
    </span>
  );
}
