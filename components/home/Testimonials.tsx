import Reveal, { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { depoimentos } from "@/lib/content";

/** Depoimentos — PRD §5.1 (seção 6). Um deles cita agendamento às 23h. */
export default function Testimonials() {
  return (
    <section className="bg-linen">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">QUEM JÁ SENTIU</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            O que muda quando a resposta <em className="text-sage-700">chega rápido</em>.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {depoimentos.map((dep) => (
            <RevealItem key={dep.nome}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(35,48,41,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(35,48,41,0.1)]">
                <span aria-hidden className="font-display text-5xl leading-none text-apricot">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 leading-relaxed text-ink">
                  {dep.citacao}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-medium text-ink">
                    {dep.nome}, {dep.idade}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-ink-muted">{dep.tempo}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
