type PagePlaceholderProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

/** Hero curto provisório — substituído nas fases 3–6 pelo conteúdo final. */
export default function PagePlaceholder({ eyebrow, title, subtitle }: PagePlaceholderProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">{eyebrow}</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{subtitle}</p>
      )}
      <p className="mt-12 inline-block rounded-full bg-sage-100 px-4 py-2 font-mono text-xs text-sage-700">
        EM CONSTRUÇÃO · CONTEÚDO COMPLETO NAS PRÓXIMAS FASES
      </p>
    </section>
  );
}
