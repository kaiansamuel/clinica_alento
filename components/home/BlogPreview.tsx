import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { postsRecentes } from "@/lib/content";

const formatarData = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/** Do blog — os 3 posts mais recentes em cards horizontais (PRD §5.1, seção 7). */
export default function BlogPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">DO BLOG</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Saúde explicada <em className="text-sage-700">sem pressa</em>.
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-medium text-sage-700 transition-colors hover:text-sage-600"
        >
          Ver todos os artigos
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Reveal>

      <RevealGroup className="mt-10 divide-y divide-line border-y border-line">
        {postsRecentes.slice(0, 3).map((post) => (
          <RevealItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-3 py-7 transition-colors md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-8"
            >
              <div>
                <span className="inline-block rounded-full bg-apricot/20 px-3 py-1 font-mono text-[11px] tracking-wide text-ink">
                  {post.categoria}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-sage-700">
                  {post.titulo}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {post.resumo}
                </p>
                <p className="mt-3 font-mono text-xs text-ink-muted">
                  {formatarData(post.data)} · {post.leitura} min de leitura
                </p>
              </div>
              <ArrowRight
                aria-hidden
                className="hidden size-5 text-ink-muted transition-[color,transform] group-hover:translate-x-1 group-hover:text-sage-700 md:block"
              />
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
