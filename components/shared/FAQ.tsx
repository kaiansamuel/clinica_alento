"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { EASE_CARE } from "./Reveal";
import type { FaqItem } from "@/lib/content";

/**
 * Accordion de FAQ — PRD §5.3 (seção 5). Abertura suave (height + fade),
 * navegável por teclado, reduced-motion instantâneo. Reutilizado no Contato.
 */
export default function FAQ({ items }: { items: FaqItem[] }) {
  const reduced = useReducedMotion();
  const baseId = useId();
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = aberto === i;
        const botaoId = `${baseId}-faq-botao-${i}`;
        const painelId = `${baseId}-faq-painel-${i}`;
        return (
          <div key={item.pergunta}>
            <h3>
              <button
                type="button"
                id={botaoId}
                aria-expanded={isOpen}
                aria-controls={painelId}
                onClick={() => setAberto(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-ink transition-colors hover:text-sage-700"
              >
                {item.pergunta}
                <ChevronDown
                  aria-hidden
                  className={`size-4.5 shrink-0 text-sage-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={painelId}
                  role="region"
                  aria-labelledby={botaoId}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE_CARE }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                    {item.resposta}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
