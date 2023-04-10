import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';
import { Images } from './data';
import { useStyles } from './styles';
;



export function IntervalImages() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));


  const slides = Images.map((image) => (
    <Carousel.Slide key={image.id}>
      <Image src={image.imgSrc} alt = 'efwfewe' height={520} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
          plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
        >
          {slides}
        </Carousel>
      </Card.Section>
    </Card>
  );
}