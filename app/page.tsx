import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import SpecialtiesMarquee from "@/components/home/SpecialtiesMarquee";
import Journey from "@/components/home/Journey";
import Backstage from "@/components/home/Backstage";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import SectionCTA from "@/components/shared/SectionCTA";
import { CareLineVertical } from "@/components/shared/CareLine";
import { contato } from "@/lib/content";

/** JSON-LD MedicalClinic — PRD §6 (dados fictícios) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Clínica Alento",
  description:
    "Clínica multiespecialidade em Goiânia. 14 especialidades, agendamento pelo WhatsApp com resposta em até 40 segundos.",
  url: "https://clinica-alento.vercel.app",
  image: "https://clinica-alento.vercel.app/images/hero-recepcao.jpg",
  telephone: "+556230000001",
  email: contato.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua T-30, 1240",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "13:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      {/* A linha do cuidado desce pela lateral conectando as seções — PRD §2.6 */}
      <div className="relative">
        <CareLineVertical
          nodes={[0.06, 0.32, 0.56, 0.8]}
          className="absolute inset-y-0 left-6 z-10 hidden xl:block"
        />

        <TrustBar />
        <SpecialtiesMarquee />
        <Journey />
        <Backstage />
        <Testimonials />
        <BlogPreview />
      </div>

      <SectionCTA />
    </>
  );
}
