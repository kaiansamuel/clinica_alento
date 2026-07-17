"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_CARE } from "@/components/shared/Reveal";
import { especialidades, type Area } from "@/lib/content";

/**
 * Grid de especialidades com filtro por área — PRD §5.3 (seção 2).
 * Filtragem client-side com layout animation; reduced-motion desliga
 * as transições. Cada card tem id={slug} para as âncoras do site.
 */

const filtros: { valor: "todas" | Area; rotulo: string }[] = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "adulto", rotulo: "Adulto" },
  { valor: "infantil", rotulo: "Infantil" },
  { valor: "saude-mental", rotulo: "Saúde mental" },
  { valor: "exames", rotulo: "Exames" },
];

export default function SpecialtiesGrid() {
  const reduced = useReducedMotion();
  const [area, setArea] = useState<"todas" | Area>("todas");

  const filtradas =
    area === "todas" ? especialidades : especialidades.filter((esp) => esp.area === area);

  return (
    <div>
      {/* Filtros */}
      <div role="group" aria-label="Filtrar especialidades por área" className="flex flex-wrap gap-2">
        {filtros.map((filtro) => {
          const ativo = area === filtro.valor;
          return (
            <button
              key={filtro.valor}
              type="button"
              aria-pressed={ativo}
              onClick={() => setArea(filtro.valor)}
              className={`rounded-full px-4.5 py-2 text-sm font-medium transition-colors ${
                ativo
                  ? "bg-sage-600 text-white"
                  : "border border-line bg-white text-ink hover:border-sage-600 hover:text-sage-700"
              }`}
            >
              {filtro.rotulo}
            </button>
          );
        })}
      </div>

      {/* Grid com layout animation */}
      <motion.ul layout={!reduced} className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtradas.map((esp) => {
            const Icone = esp.icone;
            return (
              <motion.li
                key={esp.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE_CARE }}
              >
                <article
                  id={esp.slug}
                  className="h-full scroll-mt-24 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(35,48,41,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(35,48,41,0.1)]"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <Icone className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{esp.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{esp.descricao}</p>
                  <ul aria-label="Convênios aceitos" className="mt-4 flex flex-wrap gap-1.5">
                    {esp.convenios.map((conv) => (
                      <li
                        key={conv}
                        className="rounded-full bg-linen px-2.5 py-1 font-mono text-[10px] tracking-wide text-ink-muted"
                      >
                        {conv}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
