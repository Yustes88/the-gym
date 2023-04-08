import { HeaderResponsive } from "@/components/header/Header";
import { HeroImageBackground } from "@/components/hero/Hero";
import { HeaderItems } from "@/data/data";

export default function Main() {
  return (
    <>
    <HeaderResponsive links = {HeaderItems}/>
    <HeroImageBackground/>
    </>
  )
}

