import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import PostsGrid from "@/components/blog/PostsGrid";
import { postsRecentes } from "@/lib/content";
import { formatarData } from "@/lib/format";

const descricao =
  "Saúde no dia a dia, prevenção e os bastidores de uma clínica que responde rápido. Conteúdo escrito pela equipe da Alento.";

export const metadata: Metadata = {
  title: "Blog",
  description: descricao,
  openGraph: {
    title: "Blog · Clínica Alento",
    description: descricao,
    images: [{ url: postsRecentes[0].imagem }],
  },
};

export default function BlogPage() {
  const [destaque, ...restantes] = postsRecentes;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">BLOG</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
          Saúde explicada <em className="text-sage-700">sem pressa</em> — e sem jargão.
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">
          Prevenção, dia a dia e os bastidores de como cuidamos de você.
        </p>
      </Reveal>

      {/* Post em destaque — o mais recente, sempre visível (PRD §5.4) */}
      <Reveal delay={0.1} className="mt-12">
        <Link
          href={`/blog/${destaque.slug}`}
          className="group grid overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(35,48,41,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(35,48,41,0.1)] md:grid-cols-2"
        >
          <Image
            src={destaque.imagem}
            alt=""
            width={960}
            height={720}
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="h-full min-h-56 w-full object-cover"
          />
          <div className="flex flex-col p-7 md:p-10">
            <div className="flex items-center gap-3">
              <span className="inline-block rounded-full bg-apricot/20 px-3 py-1 font-mono text-[11px] tracking-wide text-ink">
                {destaque.categoria}
              </span>
              <span className="font-mono text-[11px] tracking-wide text-ink-muted">
                MAIS RECENTE
              </span>
            </div>
            <h2 className="mt-5 font-display text-2xl leading-snug text-ink transition-colors group-hover:text-sage-700 md:text-3xl">
              {destaque.titulo}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">{destaque.resumo}</p>
            <p className="mt-auto pt-6 font-mono text-xs text-ink-muted">
              {formatarData(destaque.data)} · {destaque.leitura} min de leitura
            </p>
          </div>
        </Link>
      </Reveal>

      {/* Demais posts com filtro por categoria */}
      <Reveal delay={0.16} className="mt-14 md:mt-20">
        <PostsGrid posts={restantes} />
      </Reveal>
    </div>
  );
}
