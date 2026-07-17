"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, HeartPulse } from "lucide-react";
import { botScript } from "@/lib/content";
import { EASE_CARE } from "./Reveal";

const TYPING_MS = 900; // indicador "digitando..." antes das respostas do bot
const GAP_MS = 700; // 600–900ms entre balões — PRD §2.7
const LOOP_PAUSE_MS = 6000; // pausa antes de reiniciar — PRD §5.1.a

/**
 * Widget do bot — simulação de conversa no WhatsApp (PRD §5.1.a).
 * Componente-chave do case: mostra o bot agendando às 22:47.
 * Reduced-motion: conversa completa, estática.
 */
export default function BotWidget({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduced) return;

    // fim do ciclo: pausa e reinicia
    if (visible === botScript.length) {
      const t = setTimeout(() => setVisible(0), LOOP_PAUSE_MS);
      return () => clearTimeout(t);
    }

    const next = botScript[visible];
    if (next.autor === "alento") {
      const show = setTimeout(() => setTyping(true), 0);
      const t = setTimeout(() => {
        setTyping(false);
        setVisible((v) => v + 1);
      }, TYPING_MS + GAP_MS);
      return () => {
        clearTimeout(show);
        clearTimeout(t);
      };
    }

    const t = setTimeout(() => setVisible((v) => v + 1), GAP_MS);
    return () => clearTimeout(t);
  }, [visible, reduced]);

  const messages = reduced ? botScript : botScript.slice(0, visible);

  return (
    <div
      className={`w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-[0_16px_50px_rgba(35,48,41,0.14)] ${className ?? ""}`}
    >
      {/* Cabeçalho da conversa */}
      <div className="flex items-center gap-3 border-b border-line bg-porcelain px-4 py-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-sage-600 text-white">
          <HeartPulse className="size-4.5" aria-hidden />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">Clínica Alento</p>
          <p className="flex items-center gap-1 text-xs text-sage-700">
            <span className="size-1.5 rounded-full bg-sage-600" aria-hidden />
            online agora
          </p>
        </div>
        <span className="ml-auto font-mono text-[10px] tracking-widest text-ink-muted">
          BOT · 24H
        </span>
      </div>

      {/* Mensagens */}
      <div
        aria-live="polite"
        className="flex min-h-64 flex-col justify-end gap-2.5 bg-linen/60 px-4 py-4"
      >
        {messages.map((msg, i) => {
          const isBot = msg.autor === "alento";
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE_CARE }}
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug shadow-sm ${
                isBot
                  ? "self-start rounded-bl-sm bg-white text-ink"
                  : "self-end rounded-br-sm bg-sage-100 text-ink"
              }`}
            >
              <p>{msg.texto}</p>
              <p className="mt-1 flex items-center justify-end gap-1 font-mono text-[10px] text-ink-muted">
                {msg.hora}
                {isBot && <Check className="size-3 text-sage-600" aria-hidden />}
              </p>
            </motion.div>
          );
        })}

        {/* Indicador "digitando..." */}
        {typing && !reduced && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm"
            aria-label="Alento está digitando"
          >
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: dot * 0.18 }}
                className="size-1.5 rounded-full bg-ink-muted"
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
