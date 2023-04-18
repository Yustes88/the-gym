import { Section } from "@/components/framer-motion/ScrollAnimation";
import { HeaderResponsive } from "@/components/header/Header";
import { HeroImageBackground } from "@/components/hero/Hero";
import { IntervalImages } from "@/components/interval-images/IntervalImages";
import { MainLayout } from "@/components/layout/MainLayout";
import { PriceLayout } from "@/components/price/PriceLayout";
import { TeamLayout } from "@/components/team/TeamLayout";
import { HeaderItems } from "@/data/data";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations.js';




export default function Main() {
  const { t } = useTranslation('common')

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

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'main',
      ])),
    },
  }
}