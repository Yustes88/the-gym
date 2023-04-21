import {
  Container,
  Grid,
  Title,
  createStyles,
  Image,
  Overlay,
  rem
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
  },

  right: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    height: '100vh',
    width: '50%',
    backgroundImage:
      'url(/bg/bg-gym.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',

    [theme.fn.smallerThan('md')]: {
      height: 'fit-content',
    },

    [theme.fn.smallerThan('xs')]: {
      paddingBottom: rem(50),
    },
  },
}));

export function About() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
    <div>
      <Title>Page title</Title>
    </div>
    <div className={classes.right}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
    </div>
    </div>
  );
}