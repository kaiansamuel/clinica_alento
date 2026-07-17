import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import PostBody from "@/components/blog/PostBody";
import PostCard from "@/components/blog/PostCard";
import { contato, posts, postsRecentes } from "@/lib/content";
import { corpos } from "@/content/posts";
import { formatarData } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.resumo,
    openGraph: {
      title: post.titulo,
      description: post.resumo,
      type: "article",
      images: [{ url: post.imagem }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const blocos = corpos[slug];
  if (!post || !blocos) notFound();

  // 2 relacionados: mesma categoria primeiro, completa com os mais recentes
  const relacionados = [
    ...postsRecentes.filter((p) => p.slug !== slug && p.categoria === post.categoria),
    ...postsRecentes.filter((p) => p.slug !== slug && p.categoria !== post.categoria),
  ].slice(0, 2);

  return (
    <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      {/* Cabeçalho */}
      <Reveal className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-700 transition-colors hover:text-sage-600"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Voltar ao blog
        </Link>
        <div className="mt-7">
          <span className="inline-block rounded-full bg-apricot/20 px-3 py-1 font-mono text-[11px] tracking-wide text-ink">
            {post.categoria}
          </span>
        </div>
        <h1 className="mt-5 font-display text-3xl leading-tight text-ink md:text-5xl">
          {post.titulo}
        </h1>
        <p className="mt-5 font-mono text-xs text-ink-muted">
          {post.autor} · {formatarData(post.data)} · {post.leitura} min de leitura
        </p>
      </Reveal>

      {/* Capa */}
      <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
        <Image
          src={post.imagem}
          alt=""
          width={1200}
          height={675}
          sizes="(min-width: 1024px) 56rem, 100vw"
          priority
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-[0_24px_60px_rgba(35,48,41,0.12)]"
        />
      </Reveal>

      {/* Corpo */}
      <Reveal delay={0.16} className="mx-auto mt-12 flex max-w-3xl justify-center">
        <PostBody blocos={blocos} />
      </Reveal>

      {/* CTA final — PRD §5.4 */}
      <Reveal className="mx-auto mt-16 max-w-3xl">
        <div className="rounded-3xl bg-sage-100 p-8 text-center md:p-12">
          <h2 className="mx-auto max-w-md font-display text-2xl leading-snug text-ink md:text-3xl">
            Quer conversar com um <em className="text-sage-700">especialista</em>?
          </h2>
          <a
            href={contato.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 font-medium text-white transition-colors hover:bg-sage-700"
          >
            <MessageCircle className="size-4.5" aria-hidden />
            Chama no WhatsApp
          </a>
        </div>
      </Reveal>

      {/* Relacionados */}
      <Reveal className="mx-auto mt-20 max-w-4xl">
        <p className="font-mono text-xs tracking-[0.3em] text-ink-muted">CONTINUE LENDO</p>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {relacionados.map((rel) => (
            <li key={rel.slug}>
              <PostCard post={rel} />
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}
