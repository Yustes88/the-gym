import { keyframes } from "@emotion/react";
import { createStyles, rem } from "@mantine/core";

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

export const textShadow = keyframes({
  '0%': {
    boxShadow: '0 0 1px #FFF',
    transform: 'scale(1)',
  },
  '50%': {
    boxShadow: '0 0 15px #FFF',
    transform: 'scale(1.1)',
  },
  '100%': {
    boxShadow: '0 0 1px #FFF',
    transform: 'scale(1)',
  },
})



export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    height: '100vh',
    backgroundImage:
      'url(bg/bg-gym.jpg)',
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

  inner: {
    position: 'relative',
    zIndex: 1,
    maxHeight: 'fit-content',
    minHeight: 'fit-content',
    height: '100vh',
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
    fontFamily: `${theme.fontFamily}, Greycliff CF`,
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
    color: theme.colors.main[4],
    fontSize: rem(50),
    textShadow: `#000 1px 0 7px, 0 0 1em ${theme.colors.main[4]}`,

    [theme.fn.smallerThan('md')]: {
      fontSize: rem(40),
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(20),
    },
  },
  
  description: {
    fontSize: rem(20),
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
    margin: theme.spacing.sm,
    boxShadow: '0 0 7px #FFF',
    
    [theme.fn.smallerThan('md')] : {
      margin: theme.spacing.md,
    },
    
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

  pulse: {
    animation: `${textShadow} 3s 1s ease-out infinite`,
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));
