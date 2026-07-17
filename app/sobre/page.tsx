import type { Metadata } from "next";
import Image from "next/image";
import TrustBar from "@/components/home/TrustBar";
import { CareLineVertical, CareNode } from "@/components/shared/CareLine";
import Reveal, { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import SectionCTA from "@/components/shared/SectionCTA";
import { equipe, marcos, valores } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Uma clínica que escuta — e responde. Conheça a história da Clínica Alento, de 2012 até a automação da jornada do paciente.",
};

export default function SobrePage() {
  return (
    <>
      {/* 1. Hero curto — PRD §5.2 */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">SOBRE NÓS</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
                Uma clínica que escuta — <em className="text-sage-700">e responde</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
                Desde 2012 no St. Bueno, em Goiânia. Hoje com 14 especialidades
                e uma promessa que não muda: ninguém fica sem resposta.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Image
              src="/images/sobre-fachada.jpg"
              alt="Fachada da Clínica Alento com luz da manhã"
              width={880}
              height={620}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_24px_60px_rgba(35,48,41,0.12)]"
            />
          </Reveal>
        </div>
      </section>

      {/* 2. Manifesto */}
      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">MANIFESTO</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
              Por que <em className="text-sage-700">alento</em>?
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid max-w-4xl gap-8 text-lg leading-relaxed text-ink md:grid-cols-2">
            <RevealItem>
              <p>
                Alento é uma palavra antiga. Quer dizer fôlego, alívio, ânimo —
                o que a gente sente quando alguém responde na hora em que
                precisa. Foi por isso que escolhemos o nome. Não prometemos
                milagre. Prometemos resposta.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                Para nós, o cuidado começa antes da consulta. Começa no primeiro
                contato: na mensagem respondida em segundos, no horário que cabe
                na sua semana, no lembrete que chega sem você pedir. A escuta, o
                exame e o tratamento acontecem melhor quando a chegada é leve.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 3. Linha do tempo — a linha do cuidado na vertical */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">NOSSA HISTÓRIA</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Doze anos, <em className="text-sage-700">uma linha</em> que não se interrompe.
          </h2>
        </Reveal>

        <div className="relative mt-12 max-w-2xl">
          <CareLineVertical className="absolute top-0 left-0 h-full" />
          <RevealGroup className="grid gap-10 pl-12">
            {marcos.map((marco) => (
              <RevealItem key={marco.ano} className="relative">
                <span
                  className={`absolute -left-12 w-6 justify-center ${marco.destaque ? "top-1" : "top-2"}`}
                >
                  <CareNode
                    size={marco.destaque ? "lg" : "sm"}
                    tone={marco.destaque ? "apricot" : "sage"}
                    className="flex"
                  />
                </span>
                <p
                  className={`font-mono text-sm tracking-[0.2em] ${
                    marco.destaque ? "text-apricot" : "text-sage-700"
                  }`}
                >
                  {marco.ano.toUpperCase()}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink">{marco.titulo}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-ink-muted">{marco.texto}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. Equipe */}
      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">EQUIPE</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
              Quem responde <em className="text-sage-700">do outro lado</em>.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6">
            {equipe.map((prof) => (
              <RevealItem key={prof.nome}>
                <figure
                  tabIndex={0}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(35,48,41,0.06)]"
                >
                  <Image
                    src={prof.foto}
                    alt={`Retrato de ${prof.nome}, ${prof.especialidade}`}
                    width={560}
                    height={700}
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  {/* mini-bio revelada no hover/foco — PRD §5.2 */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent p-4 pt-12 text-porcelain md:p-5">
                    <p className="font-display text-lg leading-snug">{prof.nome}</p>
                    <p className="mt-0.5 text-xs text-porcelain/80">{prof.especialidade}</p>
                    <p className="mt-0.5 font-mono text-[10px] tracking-wide text-porcelain/60">
                      {prof.crm}
                    </p>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-snug text-porcelain/90 opacity-0 transition-[max-height,opacity] duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100 group-focus:max-h-24 group-focus:opacity-100">
                      {prof.bio}
                    </p>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 5. Números + valores */}
      <TrustBar />
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">O QUE NOS GUIA</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Três valores, <em className="text-sage-700">zero enfeite</em>.
          </h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {valores.map((valor) => {
            const Icone = valor.icone;
            return (
              <RevealItem key={valor.titulo}>
                <article className="h-full rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(35,48,41,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(35,48,41,0.1)]">
                  <span className="flex size-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <Icone className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{valor.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{valor.texto}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      {/* 6. CTA final padrão */}
      <SectionCTA />
    </>
  );
}
