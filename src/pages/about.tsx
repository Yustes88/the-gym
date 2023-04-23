import { About } from "@/components/about/Abous";
import { Section } from "@/components/framer-motion/ScrollAnimation";
import { HeaderResponsive } from "@/components/header/Header";
import { MainLayout } from "@/components/layout/MainLayout";
import { HeaderItems } from "@/data/data";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "about"
      ])),
      // Will be passed to the page component as props
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <MainLayout>
        <HeaderResponsive links={HeaderItems} />
        <Section>
          <About/>
        </Section>
      </MainLayout>
    </>
  );
}
