"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

/**
 * A linha do cuidado — elemento-assinatura da marca (PRD §2.6).
 * Anima apenas pathLength (stroke-dashoffset) / transform / opacity.
 * Fallback: sem JS ou prefers-reduced-motion → linha estática completa
 * (o SSR renderiza o path completo; a animação só entra na hidratação).
 */

/* ── Nó da linha ─────────────────────────────────────────── */

type CareNodeProps = {
  /** Cor do nó — apricot para marcos de destaque (ex.: 2024 na timeline) */
  tone?: "sage" | "apricot";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function CareNode({ tone = "sage", size = "md", className }: CareNodeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const color = tone === "sage" ? "var(--color-sage-600)" : "var(--color-apricot)";
  const dot = { sm: "size-2.5", md: "size-3.5", lg: "size-5" }[size];

  return (
    <span
      ref={ref}
      aria-hidden
      className={`relative inline-flex items-center justify-center ${className ?? ""}`}
    >
      {/* anel de pulso — dispara ao entrar no viewport */}
      {!reduced && inView && (
        <motion.span
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`absolute rounded-full ${dot}`}
          style={{ backgroundColor: color }}
        />
      )}
      <motion.span
        initial={reduced ? false : { scale: 0 }}
        animate={inView ? { scale: 1 } : undefined}
        transition={{ duration: 0.4, ease: "backOut" }}
        className={`rounded-full ${dot}`}
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

/* ── Variante vertical (lateral da home) ─────────────────── */

type CareLineVerticalProps = {
  /** Posições dos nós como frações da altura (0–1) */
  nodes?: number[];
  className?: string;
};

/**
 * Linha vertical desenhada pelo scroll. Posicionar dentro de um
 * container `relative`; a linha ocupa a altura toda.
 */
export function CareLineVertical({ nodes = [], className }: CareLineVerticalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none ${className ?? ""}`}>
      <svg
        viewBox="0 0 24 100"
        preserveAspectRatio="none"
        className="h-full w-6"
      >
        {/* trilho */}
        <path
          d="M12 0 V100"
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {/* traço vivo */}
        <motion.path
          d="M12 0 V100"
          fill="none"
          stroke="var(--color-sage-600)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={reduced ? undefined : { pathLength }}
        />
      </svg>
      {nodes.map((pos) => (
        <span
          key={pos}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${pos * 100}%` }}
        >
          <CareNode />
        </span>
      ))}
    </div>
  );
}

/* ── Variante horizontal (jornada do paciente) ───────────── */

type CareLineHorizontalProps = {
  className?: string;
};

/**
 * Linha horizontal que conecta cards de etapas — desenha ao entrar
 * no viewport. Posicionar atrás dos cards (absolute).
 */
export function CareLineHorizontal({ className }: CareLineHorizontalProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className ?? ""}`}
    >
      <path
        d="M0 12 H100"
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d="M0 12 H100"
        fill="none"
        stroke="var(--color-sage-600)"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={reduced ? false : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
