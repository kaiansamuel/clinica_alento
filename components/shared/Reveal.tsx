"use client";

import { motion, useReducedMotion } from "motion/react";

export const EASE_CARE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  /** Atraso adicional em segundos (para stagger manual entre irmãos) */
  delay?: number;
  className?: string;
  /** Elemento wrapper (default: div) */
  as?: "div" | "section" | "li" | "span";
};

/**
 * Reveal de seção — PRD §2.7: fade + translateY(24px), 500ms,
 * easing cubic-bezier(0.22, 1, 0.36, 1). Respeita prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE_CARE, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Grupo com stagger de 80ms entre filhos — PRD §2.7.
 * Use com <RevealItem> como filhos diretos.
 */
export function RevealGroup({ children, className }: RevealGroupProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: RevealGroupProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_CARE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
