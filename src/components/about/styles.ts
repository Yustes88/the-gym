import { createStyles, keyframes, rem } from "@mantine/core";
import { opacity } from "../hero/styles";

export const bounce = keyframes({
  "0%": { 
    transform: "translateY(0)" },
   "50%": { 
    transform: "translateY(1rem)"
   },
   "100%": { 
    transform: "translateY(0)"
   }
});

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
  },

  left: {
    width: '50%',
    textAlign: 'center',
    padding: theme.spacing.lg,
    margin: 'auto',
  },


  right: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    height: '90vh',
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

  title: {
    fontWeight: 800,
    fontSize: rem(60),
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
      fontSize: rem(40),
    },
    
    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(30),
      textAlign: 'left',
    },
  },
  
  highlight: {
    color: theme.colors.main[4],
    fontSize: rem(30),
    textShadow: `#000 1px 0 7px, 0 0 1em ${theme.colors.main[4]}`,
    
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(20),
    },
    
    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(20),
    },
  },

  actionButton: {
    minWidth: 'auto',
    width: 'auto',
    minHeight: 'auto',
    height: 'auto',
  },

  actionIcon: {
    width: rem(50),
    height: rem(50),
  },

  controls: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    animation: `${bounce} 3s forwards infinite`,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },
  
}));