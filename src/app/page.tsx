import Hero from "@/components/landingPage/Hero";
import PartnerLogos from "@/components/landingPage/PartnerLogos";

export default function Page() {
  return <section>
    <Hero />
    {1 < 0 ? <PartnerLogos /> : <></>}
  </section>
}
