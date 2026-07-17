import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import SpecialtiesMarquee from "@/components/home/SpecialtiesMarquee";
import Journey from "@/components/home/Journey";
import Backstage from "@/components/home/Backstage";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import SectionCTA from "@/components/shared/SectionCTA";
import { CareLineVertical } from "@/components/shared/CareLine";

export default function Home() {
  return (
    <>
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
