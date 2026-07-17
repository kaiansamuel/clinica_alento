import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Timer } from "lucide-react";
import BotWidget from "@/components/shared/BotWidget";
import Reveal from "@/components/shared/Reveal";
import { contato } from "@/lib/content";

/** Hero da home — PRD §5.1 (seção 1). No mobile, o bot vira seção própria abaixo (PRD §6). */
export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Coluna de texto */}
          <div>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">
                CLÍNICA MULTIESPECIALIDADE · GOIÂNIA
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
                Cuidar bem começa em <em className="text-sage-700">responder rápido</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
                Você agenda pelo WhatsApp em menos de um minuto, a qualquer
                hora. Sem telefone ocupado, sem espera.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={contato.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sage-600 px-6 py-3.5 font-medium text-white transition-colors hover:bg-sage-700"
                >
                  <MessageCircle className="size-4.5" aria-hidden />
                  Agendar pelo WhatsApp
                </a>
                <Link
                  href="/sobre"
                  className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3.5 font-medium text-ink transition-colors hover:border-sage-600 hover:text-sage-700"
                >
                  Conhecer a clínica
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Foto + widget do bot sobreposto */}
          <Reveal delay={0.12} className="relative lg:pl-6">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(35,48,41,0.12)]">
              <Image
                src="/images/hero-recepcao.jpg"
                alt="Recepção da Clínica Alento: ambiente claro com madeira e plantas"
                width={880}
                height={660}
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              {/* Chips flutuantes discretos */}
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 font-mono text-xs text-ink shadow-sm">
                <Timer className="size-3.5 text-sage-600" aria-hidden />
                resposta média 40s
              </span>
              <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 font-mono text-xs text-ink shadow-sm">
                <span className="size-1.5 rounded-full bg-sage-600" aria-hidden />
                hoje: 12 horários livres
              </span>
            </div>

            {/* Widget sobreposto à foto — só a partir de md (PRD §6) */}
            <div className="absolute -bottom-10 -left-2 hidden md:block lg:-left-8">
              <BotWidget className="max-w-xs" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mobile: o bot vira seção própria abaixo do hero — PRD §6 */}
      <section aria-label="Demonstração do assistente no WhatsApp" className="px-5 pb-16 md:hidden">
        <Reveal>
          <p className="mb-4 text-center font-mono text-xs tracking-[0.3em] text-ink-muted">
            O ASSISTENTE NA PRÁTICA
          </p>
          <div className="flex justify-center">
            <BotWidget />
          </div>
        </Reveal>
      </section>
    </>
  );
}
