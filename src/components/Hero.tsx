import { Title, Text, Container, Button, Overlay, createStyles, rem, keyframes } from '@mantine/core';

export const opacity = keyframes({
  "0%": {
    textShadow: '#FFF 1px 0 0',
    opacity: '0',
  },
  '40%': {
    textShadow: '#FFF 1px 0 20px',
    opacity: '1',
  },
  '100%': {
    textShadow: '#FFF 1px 0 7px',
    opacity: '1',
  }
});



const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    height: '100vh',
    backgroundImage:
      'url(bg/bg-gym.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },
  
  title: {
    fontWeight: 800,
    fontSize: rem(100),
    textTransform: 'uppercase',
    textShadow: '#FFF 1px 0 7px',
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    animation: `${opacity} 3s linear`,

    [theme.fn.smallerThan('md')]: {
      fontSize: rem(80),
    },
    
    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(40),
      textAlign: 'left',
    },
  },
  
  highlight: {
    color: theme.colors.red[9],
    fontSize: rem(50),
    textShadow: `#000 1px 0 7px, 0 0 1em ${theme.colors.red[5]}`,

    [theme.fn.smallerThan('md')]: {
      fontSize: rem(40),
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(20),
    },
  },
  
  description: {
    color: theme.colors.gray[0],
    textShadow: '#FFF 1px 0 7px',
    textAlign: 'center',
    opacity: 0,
    animation: `${opacity} 3s 1s forwards`,


    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    opacity: 0,
    animation: `${opacity} 3s 2s forwards`,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,
    color: theme.colors.red,
    boxShadow: '0 0 7px #FFF',


    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          The Gym {''}
          <Text component='span' className={classes.highlight}>
            Studio
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
}