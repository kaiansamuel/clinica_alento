type LogoProps = {
  /** Cor do wordmark — clara no footer, ink no header */
  tone?: "ink" | "light";
  /** Exibe a assinatura "CLÍNICA · DESDE 2012" abaixo do wordmark */
  signature?: boolean;
  className?: string;
};

export default function Logo({ tone = "ink", signature = false, className }: LogoProps) {
  const wordmark = tone === "ink" ? "var(--color-ink)" : "var(--color-porcelain)";

  return (
    <span className={`inline-flex flex-col ${className ?? ""}`}>
      <svg
        viewBox="0 0 190 48"
        className="h-9 w-auto"
        role="img"
        aria-label="Clínica Alento"
      >
        <text
          x="0"
          y="37"
          fontSize="36"
          fontWeight="500"
          letterSpacing="-0.5"
          fill={wordmark}
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          alento
        </text>
        {/* a barra do "t" se estende, vira batimento e termina em check */}
        <path
          d="M78 17 H120 L127 17 L132 5 L138 31 L143 17 H152 L159 26 L172 9"
          fill="none"
          stroke="var(--color-sage-600)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {signature && (
        <span className="mt-1 font-mono text-[10px] tracking-[0.3em] text-ink-muted">
          CLÍNICA · DESDE 2012
        </span>
      )}
    </span>
  );
}
