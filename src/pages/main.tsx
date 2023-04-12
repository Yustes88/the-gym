import { HeaderResponsive } from "@/components/header/Header";
import { HeroImageBackground } from "@/components/hero/Hero";
import { IntervalImages } from "@/components/interval-images/IntervalImages";
import { MainLayout } from "@/components/layout/MainLayout";
import { PriceLayout } from "@/components/price/PriceLayout";
import { HeaderItems } from "@/data/data";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Section({ children }: any ) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s ease-out 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Main() {
  return (
    <>
    <MainLayout>
      <Section>
    <HeaderResponsive links={HeaderItems}/>
      </Section>

      <Section>
      <HeroImageBackground/>
      </Section>

      <Section>
      <IntervalImages/>
      </Section>

      <Section>
      <PriceLayout/>
      </Section>

    </MainLayout>
    </>
  )
}

