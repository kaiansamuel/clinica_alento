import type { Metadata } from "next";
import PagePlaceholder from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Clínica Alento pelo WhatsApp, telefone ou e-mail. Bot 24h — respondemos em até 2h dentro do horário de atendimento.",
};

export default function ContatoPage() {
  return (
    <PagePlaceholder
      eyebrow="CONTATO"
      title={
        <>
          Fale com a gente <em className="italic">do jeito que preferir</em>.
        </>
      }
      subtitle="WhatsApp com bot 24h, telefone, e-mail ou formulário — respondemos em até 2h dentro do horário de atendimento."
    />
  );
}
