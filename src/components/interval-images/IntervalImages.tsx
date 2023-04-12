import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Card, Container, Image, Title, rem } from '@mantine/core';
import { Images } from './data';
import { useStyles } from './styles';
;



export function IntervalImages() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));


  const slides = Images.map((image) => (
    <Carousel.Slide key={image.id}>
      <Image src={image.imgSrc} alt = {image.alt} className={classes.image} height={650} />
    </Carousel.Slide>
  ));

  return (
    <Container className={classes.container}>
      <Title order={2} p='xl' align="center" className={classes.title}>Our news</Title>
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
          </Container>
  );
}