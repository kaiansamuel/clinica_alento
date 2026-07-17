import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content";
import { formatarData } from "@/lib/format";

/** Card de post do blog — usado no grid da listagem e nos relacionados (PRD §5.4). */
export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(35,48,41,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(35,48,41,0.1)]"
    >
      <Image
        src={post.imagem}
        alt=""
        width={640}
        height={480}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <div>
          <span className="inline-block rounded-full bg-apricot/20 px-3 py-1 font-mono text-[11px] tracking-wide text-ink">
            {post.categoria}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl leading-snug text-ink transition-colors group-hover:text-sage-700">
          {post.titulo}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{post.resumo}</p>
        <p className="mt-auto pt-5 font-mono text-xs text-ink-muted">
          {formatarData(post.data)} · {post.leitura} min de leitura
        </p>
      </div>
    </Link>
  );
}
