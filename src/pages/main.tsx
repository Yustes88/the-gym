import { HeroImageBackground } from "@/components/hero/Hero";
import { IntervalImages } from "@/components/interval-images/IntervalImages";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Main() {
  return (
    <>
    <MainLayout>
      <HeroImageBackground/>
      <IntervalImages/>
    </MainLayout>
    </>
  )
}

