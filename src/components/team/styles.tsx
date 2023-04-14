import { createStyles, getStylesRef, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),

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
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(50),
    textShadow: '#FFF 1px 0 4px',
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(30),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    textShadow: `#000 1px 0 7px, 0 0 1em ${theme.colors.main[4]}`,
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  
  container: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: rem(20),
    margin: rem(20),
    overflowY: 'hidden',

    [theme.fn.smallerThan('md')]: {
     flexDirection: 'column',
     alignItems: 'center',
    },
  },

  card: {
    position: 'relative',
    height: rem(400),
    width: '40%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    overflowY: 'hidden',

    [theme.fn.smallerThan('md')]: {
      width: '60%',
     },


    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.main[5], theme.black),
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    backgroundPosition: 'center 25%',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  cardTitle: {
    color: theme.white,
    marginBottom: rem(5),
  },

  author: {
    color: theme.colors.dark[2],
  },

  info: {
    backgroundColor: theme.white,
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: rem(20),
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    width: '40%',

    [theme.fn.smallerThan('md')]: {
      width: '60%',
     },


    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.black, theme.colors.main[5]),
    },
  },

}));
