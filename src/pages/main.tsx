import { Section } from "@/components/framer-motion/ScrollAnimation";
import { HeaderResponsive } from "@/components/header/Header";
import { HeroImageBackground } from "@/components/hero/Hero";
import { IntervalImages } from "@/components/interval-images/IntervalImages";
import { MainLayout } from "@/components/layout/MainLayout";
import { PriceLayout } from "@/components/price/PriceLayout";
import { TeamLayout } from "@/components/team/TeamLayout";
import { HeaderItems } from "@/data/data";




export default function Main() {
  return (
    <>
    <MainLayout>
    <HeaderResponsive links={HeaderItems}/>

      <Section>
      <HeroImageBackground/>
      </Section>

      <Section>
      <IntervalImages/>
      </Section>

      <Section>
      <PriceLayout/>
      </Section>

      <Section>
        <TeamLayout/>
      </Section>

    </MainLayout>
    </>
  )
}

