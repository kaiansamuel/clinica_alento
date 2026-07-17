"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_CARE } from "@/components/shared/Reveal";
import { fluxoContato } from "@/lib/content";

/**
 * Animação de fluxo pós-envio — a assinatura do case (PRD §5.5).
 * A linha do cuidado percorre 3 nós em sequência: Recebido →
 * Triagem automática → Na fila da equipe. Com prefers-reduced-motion,
 * tudo aparece completo e estático.
 */

const STEP_S = 0.6; // intervalo entre nós

export default function FlowAnimation() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-live="polite"
      className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(35,48,41,0.06)] md:p-9"
    >
      <p className="font-mono text-xs tracking-[0.3em] text-sage-700">MENSAGEM ENVIADA ✓</p>

      <ol className="relative mt-8 space-y-8">
        {/* trilho vertical atrás dos nós */}
        <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-line" />
        {/* traço vivo desenhado em sequência */}
        <motion.span
          aria-hidden
          initial={reduced ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: STEP_S * 3, ease: "easeInOut" }}
          className="absolute top-2 bottom-2 left-[7px] w-0.5 origin-top bg-sage-600"
        />

        {fluxoContato.map((etapa, i) => (
          <motion.li
            key={etapa.label}
            initial={reduced ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE_CARE, delay: reduced ? 0 : i * STEP_S }}
            className="relative flex gap-5 pl-8"
          >
            {/* nó da linha */}
            <motion.span
              aria-hidden
              initial={reduced ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: "backOut", delay: reduced ? 0 : i * STEP_S }}
              className="absolute top-1 left-0 size-4 rounded-full border-[3px] border-sage-600 bg-white"
            />
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-ink uppercase">
                {etapa.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{etapa.descricao}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <motion.p
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_CARE, delay: reduced ? 0 : 3 * STEP_S + 0.2 }}
        className="mt-9 border-t border-line pt-6 font-display text-xl leading-snug text-ink"
      >
        Respondemos em até <em className="text-sage-700">2h</em> dentro do horário de
        atendimento.
      </motion.p>
    </div>
  );
}
