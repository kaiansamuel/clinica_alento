import { contato } from "@/lib/content";

/**
 * Mapa ilustrativo em SVG — PRD §5.5 (seção 4).
 * Sem Google Maps: quarteirões em linen, ruas em line, pin em sage.
 * O SVG é decorativo (aria-hidden); o endereço real fica no card.
 */

export default function MapCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_30px_rgba(35,48,41,0.06)]">
      <svg
        aria-hidden
        viewBox="0 0 800 420"
        preserveAspectRatio="xMidYMid slice"
        className="h-72 w-full md:h-96"
      >
        {/* fundo */}
        <rect width="800" height="420" fill="var(--color-porcelain)" />

        {/* quarteirões */}
        <g fill="var(--color-linen)">
          <rect x="24" y="24" width="180" height="120" rx="10" />
          <rect x="24" y="180" width="180" height="90" rx="10" />
          <rect x="24" y="306" width="180" height="90" rx="10" />
          <rect x="240" y="24" width="150" height="120" rx="10" />
          <rect x="240" y="180" width="150" height="216" rx="10" />
          <rect x="426" y="24" width="140" height="246" rx="10" />
          <rect x="426" y="306" width="140" height="90" rx="10" />
          <rect x="602" y="24" width="174" height="120" rx="10" />
          <rect x="602" y="180" width="174" height="90" rx="10" />
          <rect x="602" y="306" width="174" height="90" rx="10" />
        </g>

        {/* praça */}
        <circle cx="496" cy="147" r="34" fill="var(--color-sage-100)" />

        {/* ruas */}
        <g stroke="var(--color-line)" strokeWidth="4" strokeLinecap="round">
          <line x1="0" y1="162" x2="800" y2="162" />
          <line x1="0" y1="288" x2="800" y2="288" />
          <line x1="222" y1="0" x2="222" y2="420" />
          <line x1="408" y1="0" x2="408" y2="420" />
          <line x1="584" y1="0" x2="584" y2="420" />
        </g>

        {/* rua principal (T-30) destacada */}
        <line
          x1="0"
          y1="288"
          x2="800"
          y2="288"
          stroke="var(--color-sage-100)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <text
          x="56"
          y="278"
          fill="var(--color-ink-muted)"
          fontSize="13"
          fontFamily="var(--font-mono)"
          letterSpacing="3"
        >
          RUA T-30
        </text>

        {/* pin da clínica */}
        <g transform="translate(505 288)">
          <circle r="26" fill="var(--color-sage-600)" opacity="0.15" />
          <circle r="12" fill="var(--color-sage-600)" />
          <circle r="4.5" fill="var(--color-porcelain)" />
        </g>
      </svg>

      {/* card de endereço sobreposto */}
      <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl bg-ink p-6 text-porcelain shadow-lg md:bottom-8 md:left-8">
        <p className="font-mono text-[11px] tracking-[0.3em] text-porcelain/60">ONDE ESTAMOS</p>
        <p className="mt-3 font-display text-lg leading-snug">Clínica Alento</p>
        <p className="mt-1 text-sm leading-relaxed text-porcelain/80">{contato.endereco}</p>
        <dl className="mt-4 space-y-1 border-t border-porcelain/15 pt-4 font-mono text-xs text-porcelain/80">
          {contato.horarios.map((h) => (
            <div key={h.dias} className="flex justify-between gap-6">
              <dt>{h.dias}</dt>
              <dd>{h.horas}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
