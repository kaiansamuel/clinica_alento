import { ArrowUpRight, CalendarDays, FlaskConical, MessageCircle, Users } from "lucide-react";
import { CareLineHorizontal, CareNode } from "@/components/shared/CareLine";
import Reveal, { RevealGroup, RevealItem } from "@/components/shared/Reveal";

/**
 * Bastidores — case Evolux (PRD §5.1, seção 5). Única seção escura da home.
 * Aqui (e só aqui) o vocabulário técnico de automação é permitido.
 */

const fluxo = [
  { rotulo: "WHATSAPP", icone: MessageCircle },
  { rotulo: "AGENDA", icone: CalendarDays },
  { rotulo: "LABORATÓRIO", icone: FlaskConical },
  { rotulo: "CRM", icone: Users },
];

const automatizado = [
  {
    titulo: "Agendamento sem fila",
    texto:
      "Bot no WhatsApp consulta a agenda em tempo real e marca, remarca ou cancela — 92% dos agendamentos sem intervenção humana.",
  },
  {
    titulo: "Lembretes e confirmações",
    texto:
      "Fluxos de RPA disparam lembretes um dia antes e reagendam faltas na hora. Resultado: 38% menos consultas perdidas.",
  },
  {
    titulo: "Resultados sem ligação",
    texto:
      "Integração via n8n entre laboratório e WhatsApp: exame liberado é exame entregue no celular do paciente, no mesmo dia.",
  },
];

export default function Backstage() {
  return (
    <section className="bg-ink text-porcelain">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-apricot">
            BASTIDORES · CASE EVOLUX
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Por trás do atendimento, um fluxo que <em>não dorme</em>.
          </h2>
        </Reveal>

        {/* Diagrama estilizado de workflow — a linha virando grafo */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative" aria-label="Fluxo automatizado: WhatsApp, agenda, laboratório e CRM">
            <CareLineHorizontal className="absolute inset-x-0 top-1/2 hidden h-6 w-full -translate-y-1/2 md:block" />
            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {fluxo.map((no) => {
                const Icone = no.icone;
                return (
                  <div
                    key={no.rotulo}
                    className="flex items-center justify-center gap-2.5 rounded-2xl border border-porcelain/15 bg-ink px-4 py-4"
                  >
                    <CareNode size="sm" />
                    <Icone className="size-4.5 text-sage-100" aria-hidden />
                    <span className="font-mono text-xs tracking-[0.15em] text-porcelain/80">
                      {no.rotulo}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* O que foi automatizado */}
        <RevealGroup className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {automatizado.map((item) => (
            <RevealItem key={item.titulo}>
              <h3 className="font-display text-lg text-porcelain">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-porcelain/70">{item.texto}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-14 border-t border-porcelain/15 pt-6 text-sm text-porcelain/70">
            Automação desenvolvida por{" "}
            <a
              href="https://evolux.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-semibold text-porcelain underline-offset-4 transition-colors hover:text-sage-100 hover:underline"
            >
              Evolux
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
