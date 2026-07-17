import type { Metadata } from "next";
import SpecialtiesGrid from "@/components/atendimentos/SpecialtiesGrid";
import { JourneySteps } from "@/components/home/Journey";
import BotWidget from "@/components/shared/BotWidget";
import FAQ from "@/components/shared/FAQ";
import Reveal from "@/components/shared/Reveal";
import SectionCTA from "@/components/shared/SectionCTA";
import { convenios, faqAtendimentos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Atendimentos",
  description:
    "14 especialidades em um só lugar: da clínica geral aos exames de imagem. Agende pelo WhatsApp em menos de um minuto.",
};

/* Wordmarks fictícios dos convênios — PRD §5.3 (seção 4) */
const estilosWordmark = [
  "font-display text-xl",
  "font-mono text-sm tracking-[0.25em] uppercase",
  "text-lg font-semibold tracking-tight",
  "font-display text-xl italic",
  "text-sm font-medium tracking-[0.3em] uppercase",
  "font-display text-xl font-semibold",
  "font-mono text-base",
  "text-lg font-semibold uppercase tracking-wide",
];

export default function AtendimentosPage() {
  return (
    <>
      {/* 1. Hero curto — PRD §5.3 */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-12 md:px-8 md:pt-20 md:pb-16">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">ATENDIMENTOS</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            14 especialidades. <em className="text-sage-700">Um jeito só</em> de cuidar.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Adulto, infantil, saúde mental e exames de imagem — com agendamento
            que responde em até 40 segundos, a qualquer hora.
          </p>
        </Reveal>
      </section>

      {/* 2. Grid de especialidades com filtro */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SpecialtiesGrid />
        </Reveal>
      </section>

      {/* 3. Como funciona o agendamento — jornada compacta + bot */}
      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">
              COMO FUNCIONA O AGENDAMENTO
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
              Quatro passos, <em className="text-sage-700">nenhuma ligação</em>.
            </h2>
          </Reveal>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-xl">
              <JourneySteps layout="vertical" />
            </div>
            <Reveal delay={0.1} className="flex justify-center lg:sticky lg:top-28">
              <BotWidget />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Convênios — faixa de wordmarks fictícios */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="text-center font-mono text-xs tracking-[0.3em] text-ink-muted">
            CONVÊNIOS ACEITOS
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-ink-muted/70 grayscale">
            {convenios.map((nome, i) => (
              <li key={nome} className={estilosWordmark[i % estilosWordmark.length]}>
                {nome}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-ink-muted">e atendimento particular</p>
        </Reveal>
      </section>

      {/* 5. FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">DÚVIDAS FREQUENTES</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            O que mais <em className="text-sage-700">perguntam</em> pra gente.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <FAQ items={faqAtendimentos} />
        </Reveal>
      </section>

      {/* 6. CTA final padrão */}
      <SectionCTA />
    </>
  );
}
