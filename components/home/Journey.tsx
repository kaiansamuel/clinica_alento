import {
  CareLineHorizontal,
  CareLineVertical,
  CareNode,
} from "@/components/shared/CareLine";
import Reveal, { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { jornada } from "@/lib/content";

/**
 * A jornada do paciente — seção-assinatura (PRD §5.1, seção 4).
 * A linha do cuidado conecta as 4 etapas na horizontal; no mobile a
 * linha desce na vertical (PRD §6). `JourneySteps` é reutilizada em
 * /atendimentos na versão compacta (layout sempre vertical).
 */

type JourneyStepsProps = {
  /** "responsive": horizontal no desktop, vertical no mobile. "vertical": sempre trilho vertical. */
  layout?: "responsive" | "vertical";
};

export function JourneySteps({ layout = "responsive" }: JourneyStepsProps) {
  const responsive = layout === "responsive";

  return (
    <>
      {/* Linha horizontal com nós pousando em cada etapa (só no layout responsivo) */}
      {responsive && (
        <div className="relative hidden h-6 md:block" aria-hidden>
          <CareLineHorizontal className="absolute inset-0 size-full" />
          <div className="grid h-full grid-cols-4">
            {jornada.map((etapa) => (
              <div key={etapa.passo} className="flex items-center justify-center">
                <CareNode />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trilho vertical à esquerda */}
      <div className={`relative ${responsive ? "mt-10 md:mt-6" : ""}`}>
        <CareLineVertical
          className={`absolute top-0 left-0 h-full ${responsive ? "md:hidden" : ""}`}
        />

        <RevealGroup
          className={`grid gap-5 pl-10 ${responsive ? "md:grid-cols-4 md:gap-6 md:pl-0" : ""}`}
        >
          {jornada.map((etapa) => {
            const Icone = etapa.icone;
            return (
              <RevealItem key={etapa.passo} className="relative">
                {/* nó do trilho vertical, alinhado ao centro da linha (12px) */}
                <span
                  className={`absolute top-8 -left-10 w-6 justify-center ${responsive ? "md:hidden" : ""}`}
                >
                  <CareNode size="sm" className="flex" />
                </span>
                <article className="h-full rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(35,48,41,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(35,48,41,0.1)]">
                  <p className="font-mono text-xs tracking-[0.2em] text-sage-700">
                    {etapa.passo}
                  </p>
                  <span className="mt-4 flex size-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <Icone className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{etapa.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{etapa.frase}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </>
  );
}

export default function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">
          A JORNADA DO PACIENTE
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
          Do primeiro oi ao resultado, <em className="text-sage-700">sem espera</em>.
        </h2>
      </Reveal>

      <div className="mt-12">
        <JourneySteps />
      </div>
    </section>
  );
}
