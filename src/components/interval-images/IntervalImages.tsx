import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Card, Container, Image, Title, rem } from '@mantine/core';
import { Images } from './data';
import { useStyles } from './styles';
import { useTranslation } from 'next-i18next';
;



export function IntervalImages() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));
  const { t: newsT } = useTranslation('news')


  const slides = Images.map((image) => (
    <Carousel.Slide key={image.id}>
      <Image src={image.imgSrc} alt = {image.alt} className={classes.image} height={650} />
    </Carousel.Slide>
  ));

  return (
    <Container className={classes.container}>
      <Title order={2} p='xl' align="center" className={classes.title}>
        {newsT('news')}
      </Title>
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
      onMouseLeave={autoplay.current.reset}
      onTouchMove={autoplay.current.reset}
        >
          {slides}
        </Carousel>
      </Card.Section>
    </Card>
          </Container>
  );
}