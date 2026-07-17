import type { Bloco } from "@/content/posts";

/** Renderiza o corpo do post (Bloco[]) em tipografia generosa, coluna ~68ch — PRD §5.4. */
export default function PostBody({ blocos }: { blocos: Bloco[] }) {
  return (
    <div className="max-w-[68ch]">
      {blocos.map((bloco, i) => {
        switch (bloco.tipo) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 font-display text-2xl leading-snug text-ink">
                {bloco.texto}
              </h2>
            );
          case "lista":
            return (
              <ul key={i} className="mt-6 list-disc space-y-2.5 pl-5 leading-relaxed text-ink/90 marker:text-sage-600 md:text-lg">
                {bloco.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return (
              <p key={i} className="mt-6 leading-relaxed text-ink/90 md:text-lg">
                {bloco.texto}
              </p>
            );
        }
      })}
    </div>
  );
}
