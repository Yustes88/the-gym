import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import { useStyles } from './styles';


export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title order={1} className={classes.title}>
          The Gym {''}
          <Text component='span' className={classes.highlight}>
            Studio
          </Text>
        </Title>

        <Container size={640}>
          <Text className={classes.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio autem dolorum, voluptas porro commodi.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={cx(classes.control, classes.pulse)} variant="white" size="lg">
            Join now
          </Button>
          {/* <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button> */}
        </div>
      </div>
    </div>
  );
}