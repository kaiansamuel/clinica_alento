import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contato/ContactForm";
import MapCard from "@/components/contato/MapCard";
import BotWidget from "@/components/shared/BotWidget";
import FAQ from "@/components/shared/FAQ";
import Reveal from "@/components/shared/Reveal";
import SectionCTA from "@/components/shared/SectionCTA";
import { contato, faqContato } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Clínica Alento pelo WhatsApp, telefone ou e-mail. Bot 24h — respondemos em até 2h dentro do horário de atendimento.",
  openGraph: {
    title: "Contato · Clínica Alento",
    description:
      "Fale com a Clínica Alento pelo WhatsApp, telefone ou e-mail. Bot 24h — respondemos em até 2h dentro do horário de atendimento.",
    images: [{ url: "/images/sobre-fachada.jpg" }],
  },
};

export default function ContatoPage() {
  return (
    <>
      {/* 1. Hero curto — PRD §5.5 */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-12 md:px-8 md:pt-20 md:pb-16">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">CONTATO</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Fale com a gente <em className="text-sage-700">do jeito</em> que preferir.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            WhatsApp com assistente 24h, telefone, e-mail ou formulário — respondemos
            em até 2h dentro do horário de atendimento.
          </p>
        </Reveal>
      </section>

      {/* 2. Duas colunas: canais + formulário */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Formulário primeiro no mobile (conversão); canais à esquerda no desktop */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-mono text-xs tracking-[0.3em] text-ink-muted">CANAIS</h2>

              {/* WhatsApp em destaque, com o bot rodando */}
              <div className="mt-6 rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center justify-between gap-4">
                  <a
                    href={contato.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-ink"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                      <MessageCircle className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-medium group-hover:underline">
                        WhatsApp {contato.whatsapp}
                      </span>
                      <span className="block text-xs text-ink-muted">
                        assistente responde em ~40 segundos
                      </span>
                    </span>
                  </a>
                  <span className="rounded-full bg-sage-100 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-sage-700">
                    BOT · 24H
                  </span>
                </div>
                <div className="mt-6 flex justify-center">
                  <BotWidget />
                </div>
              </div>

              {/* Demais canais */}
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`tel:+55${contato.telefone.replace(/\D/g, "")}`}
                    className="inline-flex items-center gap-3 text-sm text-ink hover:underline"
                  >
                    <Phone className="size-4 text-sage-700" aria-hidden />
                    {contato.telefone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contato.email}`}
                    className="inline-flex items-center gap-3 text-sm text-ink hover:underline"
                  >
                    <Mail className="size-4 text-sage-700" aria-hidden />
                    {contato.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-3 text-sm text-ink">
                  <MapPin className="size-4 text-sage-700" aria-hidden />
                  {contato.endereco}
                </li>
              </ul>

              {/* Horários em Plex Mono */}
              <dl className="mt-6 space-y-1.5 border-t border-line pt-5 font-mono text-xs text-ink-muted">
                {contato.horarios.map((h) => (
                  <div key={h.dias} className="flex gap-4">
                    <dt className="w-16">{h.dias}</dt>
                    <dd>{h.horas}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.1}>
              <h2 className="font-mono text-xs tracking-[0.3em] text-ink-muted">
                OU ESCREVA PRA GENTE
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Mapa estilizado — sem Google Maps (PRD §5.5) */}
      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">COMO CHEGAR</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
              No coração do <em className="text-sage-700">St. Bueno</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <MapCard />
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-sm text-ink-muted">
              Estacionamento ao lado da clínica — 90 minutos gratuitos validando o
              ticket na recepção.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. FAQ compacto */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">ANTES DE ESCREVER</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            Três dúvidas <em className="text-sage-700">rápidas</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <FAQ items={faqContato} />
        </Reveal>
      </section>

      {/* 5. CTA final padrão */}
      <SectionCTA />
    </>
  );
}
