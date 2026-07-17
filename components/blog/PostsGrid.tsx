"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_CARE } from "@/components/shared/Reveal";
import type { CategoriaPost, Post } from "@/lib/content";
import PostCard from "@/components/blog/PostCard";

/**
 * Grid de posts com filtro por categoria — PRD §5.4.
 * Filtragem client-side com layout animation; reduced-motion desliga
 * as transições. O post em destaque fica fora deste grid e não filtra.
 */

const filtros: { valor: "todas" | CategoriaPost; rotulo: string }[] = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "Saúde no dia a dia", rotulo: "Saúde no dia a dia" },
  { valor: "Prevenção", rotulo: "Prevenção" },
  { valor: "Bastidores", rotulo: "Bastidores" },
];

export default function PostsGrid({ posts }: { posts: Post[] }) {
  const reduced = useReducedMotion();
  const [categoria, setCategoria] = useState<"todas" | CategoriaPost>("todas");

  const filtrados =
    categoria === "todas" ? posts : posts.filter((post) => post.categoria === categoria);

  return (
    <div>
      {/* Filtros */}
      <div role="group" aria-label="Filtrar artigos por categoria" className="flex flex-wrap gap-2">
        {filtros.map((filtro) => {
          const ativo = categoria === filtro.valor;
          return (
            <button
              key={filtro.valor}
              type="button"
              aria-pressed={ativo}
              onClick={() => setCategoria(filtro.valor)}
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
      <motion.ul layout={!reduced} className="mt-8 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtrados.map((post) => (
            <motion.li
              key={post.slug}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE_CARE }}
            >
              <PostCard post={post} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
