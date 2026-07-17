"use client";

import { useActionState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { enviarContato, type ContatoState } from "@/app/contato/actions";
import { EASE_CARE } from "@/components/shared/Reveal";
import FlowAnimation from "@/components/contato/FlowAnimation";
import { assuntosContato } from "@/lib/content";

const initialState: ContatoState = { ok: false };

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(enviarContato, initialState);
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {state.ok ? (
          <motion.div
            key="fluxo"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_CARE }}
          >
            <FlowAnimation />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action={formAction}
            exit={reduced ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE_CARE }}
            className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(35,48,41,0.06)] md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="text-sm font-medium text-ink">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="telefone" className="text-sm font-medium text-ink">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(62) 90000-0000"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="assunto" className="text-sm font-medium text-ink">
                Assunto
              </label>
              <select id="assunto" name="assunto" required className={fieldClass}>
                {assuntosContato.map((assunto) => (
                  <option key={assunto.value} value={assunto.value}>
                    {assunto.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="mensagem" className="text-sm font-medium text-ink">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                placeholder="Conte em poucas palavras o que você precisa."
                className={`${fieldClass} resize-none`}
              />
            </div>

            {state.erro && (
              <p role="alert" className="mt-4 text-sm text-ink">
                {state.erro}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="mt-6 w-full rounded-full bg-sage-600 px-8 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-sage-700 disabled:cursor-wait disabled:opacity-70"
            >
              {pending ? "Enviando…" : "Enviar mensagem"}
            </button>

            <p className="mt-4 text-center font-mono text-xs text-ink-muted">
              Respondemos em até 2h no horário de atendimento.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
