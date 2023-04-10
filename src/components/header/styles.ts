import { rem, createStyles, keyframes } from "@mantine/core";

export const HEADER_HEIGHT = rem(80);



export const border = keyframes({
  "0%": {
    boxShadow: ' inset 0 1px #FFF',
  },
  '25%': {
    boxShadow: 'inset 1px 1px #FFF',
  },
  '50%': {
    boxShadow: 'inset 1px 1px #FFF, inset 0 -1px #FFF',
  },
  '100%': {
    boxShadow: 'inset 1px 1px #FFF, inset -1px -1px #FFF',
  }
});

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 2,
    backgroundColor: 'transparent',
    borderBottom: 'none',
    transition: 'all 0.8s linear',
  },

  background: {
    backgroundColor: '#000',
    opacity: '0.8',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    height: '100vh',
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(5px)',
    color: theme.colors.main[0],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  
  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(10)} ${rem(14)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
    transition: 'all 0.2s',

    '&:hover': {
      textShadow: '#FFF 1px 0 7px',
      animation: `${border} 0.5s both`,
    },
    
    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  
  linkActive: {
    '&, &:hover': {
      textShadow: '#FFF 1px 0 7px',
      color: theme.colors.white,
      boxShadow: 'inset 1px 1px #FFF, inset -1px -1px #FFF',
    },
  },
}));