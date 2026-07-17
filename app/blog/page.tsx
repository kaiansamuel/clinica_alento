import type { Metadata } from "next";
import PagePlaceholder from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Saúde no dia a dia, prevenção e os bastidores de uma clínica que responde rápido. Conteúdo escrito pela equipe da Alento.",
};

export default function BlogPage() {
  return (
    <PagePlaceholder
      eyebrow="BLOG"
      title={
        <>
          Saúde explicada <em className="italic">sem pressa</em> — e sem jargão.
        </>
      }
      subtitle="Prevenção, dia a dia e os bastidores de como cuidamos de você."
    />
  );
}
