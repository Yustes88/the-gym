import { HeaderResponsive } from "@/components/Header";
import { HeroImageBackground } from "@/components/Hero";
import { HeaderItems } from "@/data/data";

export default function Main() {
  return (
    <>
    <HeaderResponsive links = {HeaderItems}/>
    <HeroImageBackground/>
    </>
  )
}

