import Link from "next/link";
import Logo from "./Logo";
import { navLinks, especialidades, contato } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-porcelain">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + manifesto curto */}
          <div>
            <Logo tone="light" signature />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-porcelain/70">
              Alento é fôlego, alívio, ânimo. Cuidar bem começa em responder
              rápido — a qualquer hora, pelo canal que você preferir.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="font-mono text-xs tracking-[0.25em] text-porcelain/50">
              NAVEGAÇÃO
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-porcelain/80 transition-colors hover:text-porcelain"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Especialidades top 6 */}
          <div>
            <h2 className="font-mono text-xs tracking-[0.25em] text-porcelain/50">
              ESPECIALIDADES
            </h2>
            <ul className="mt-4 space-y-2.5">
              {especialidades.slice(0, 6).map((esp) => (
                <li key={esp.slug}>
                  <Link
                    href={`/atendimentos#${esp.slug}`}
                    className="text-sm text-porcelain/80 transition-colors hover:text-porcelain"
                  >
                    {esp.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato / horários */}
          <div>
            <h2 className="font-mono text-xs tracking-[0.25em] text-porcelain/50">
              CONTATO
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-porcelain/80">
              <li>
                <a
                  href={contato.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-porcelain"
                >
                  WhatsApp {contato.whatsapp}
                </a>
              </li>
              <li>{contato.telefone}</li>
              <li>
                <a
                  href={`mailto:${contato.email}`}
                  className="transition-colors hover:text-porcelain"
                >
                  {contato.email}
                </a>
              </li>
              <li>{contato.endereco}</li>
            </ul>
            <dl className="mt-4 space-y-1 font-mono text-xs text-porcelain/60">
              {contato.horarios.map((h) => (
                <div key={h.dias} className="flex gap-3">
                  <dt className="w-16">{h.dias}</dt>
                  <dd>{h.horas}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Fecho: crédito + disclaimer */}
        <div className="mt-14 border-t border-porcelain/15 pt-6 text-xs text-porcelain/50">
          <p>
            Site e automação:{" "}
            <span className="font-semibold text-porcelain/80">Evolux</span>
          </p>
          <p className="mt-2 italic">
            Clínica fictícia — projeto de demonstração do portfólio Evolux.
            CRMs e convênios ilustrativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
