import { Carousel } from "@mantine/carousel";
import { createStyles, getStylesRef, rem, Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const useStyles = createStyles((theme) => ({


  image: {
    objectFit: 'cover',
    objectPosition: 'center',
    zIndex: -1,
  },
}));

type BgImageProps = {
  images: string[], 
}

export function BgImage({images}: BgImageProps) {
  const { classes, theme } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));


  const image = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} alt = 'Picture of Boat' className={classes.image} height={650} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
    withControls={false}
    loop
    plugins={[autoplay.current]}
onMouseLeave={autoplay.current.reset}
onTouchMove={autoplay.current.reset}
  >
    {image}
  </Carousel>
  );
}