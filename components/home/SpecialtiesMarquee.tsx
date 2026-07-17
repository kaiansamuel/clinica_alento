import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { especialidades, type Especialidade } from "@/lib/content";

/**
 * Marquee de especialidades — PRD §5.1 (seção 3).
 * Duas linhas de chips em direções opostas (~40s/ciclo, pausa on-hover);
 * keyframes e reduced-motion no globals.css. Clique leva a /atendimentos.
 */

function Chip({ esp, decorative = false }: { esp: Especialidade; decorative?: boolean }) {
  const Icone = esp.icone;
  const classes =
    "mx-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-sage-600 hover:text-sage-700";

  if (decorative) {
    return (
      <span aria-hidden className={classes}>
        <Icone className="size-4 text-sage-600" aria-hidden />
        {esp.nome}
      </span>
    );
  }
  return (
    <Link href={`/atendimentos#${esp.slug}`} className={classes}>
      <Icone className="size-4 text-sage-600" aria-hidden />
      {esp.nome}
    </Link>
  );
}

function Row({ items, reverse = false }: { items: Especialidade[]; reverse?: boolean }) {
  return (
    <div className="marquee overflow-hidden">
      <div
        className={`marquee-track flex w-max py-1.5 ${reverse ? "marquee-track--reverse" : ""}`}
      >
        {items.map((esp) => (
          <Chip key={esp.slug} esp={esp} />
        ))}
        {/* cópia para o loop contínuo — só decorativa */}
        {items.map((esp) => (
          <Chip key={`${esp.slug}-copia`} esp={esp} decorative />
        ))}
      </div>
    </div>
  );
}

export default function SpecialtiesMarquee() {
  const metade = Math.ceil(especialidades.length / 2);

  return (
    <section aria-label="Especialidades" className="py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">14 ESPECIALIDADES</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
          Do check-up ao especialista, <em className="text-sage-700">num só lugar</em>.
        </h2>
      </Reveal>
      <div className="mt-9 space-y-3">
        <Row items={especialidades.slice(0, metade)} />
        <Row items={especialidades.slice(metade)} reverse />
      </div>
    </section>
  );
}
