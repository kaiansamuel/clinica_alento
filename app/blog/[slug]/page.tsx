import type { Metadata } from "next";
import PagePlaceholder from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Post",
  description: "Artigo do blog da Clínica Alento.",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <PagePlaceholder
      eyebrow="BLOG · POST"
      title={<>Post: {slug}</>}
      subtitle="O conteúdo dos 6 posts será escrito na fase 5."
    />
  );
}
