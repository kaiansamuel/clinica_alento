import Counter from "@/components/shared/Counter";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { numeros } from "@/lib/content";

/** Barra de confiança — 4 contadores animados sobre linen (PRD §5.1, seção 2). */
export default function TrustBar() {
  return (
    <section aria-label="Números da clínica" className="bg-linen">
      <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-4">
        {numeros.map((n) => (
          <RevealItem key={n.rotulo} className="text-center">
            <p className="text-4xl font-medium text-sage-700 md:text-5xl">
              <Counter value={n.valor} prefix={n.prefixo} suffix={n.sufixo} />
            </p>
            <p className="mx-auto mt-2 max-w-40 text-sm leading-snug text-ink-muted">
              {n.rotulo}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
