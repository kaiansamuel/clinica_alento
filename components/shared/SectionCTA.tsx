import { MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { contato } from "@/lib/content";

/** CTA final padrão — PRD §5.1 (seção 8); reutilizado em Sobre e Atendimentos. */
export default function SectionCTA() {
  return (
    <section className="bg-sage-100">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl">
            Sua próxima consulta está a <em className="text-sage-700">uma mensagem</em> de
            distância.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={contato.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 font-medium text-white transition-colors hover:bg-sage-700"
            >
              <MessageCircle className="size-4.5" aria-hidden />
              Agendar pelo WhatsApp
            </a>
            <a
              href={`tel:+55${contato.telefone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-sage-600/40 bg-white px-7 py-3.5 font-medium text-sage-700 transition-colors hover:border-sage-600"
            >
              <Phone className="size-4.5" aria-hidden />
              {contato.telefone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
