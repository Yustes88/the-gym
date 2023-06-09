import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.white,
    color: '#000000',
    textAlign: 'center',
    fontSize: theme.fontSizes.md,
    width: '100%',
    margin: theme.spacing.xl,
    transition: 'all 0.5s ease-out',

    '&:hover': {
      transform: 'scale(1.1)',
    },

    [theme.fn.smallerThan('md')]: {
      width: '60%',
    },

    [theme.fn.smallerThan('sm')]: {
      width: '80%',
    },
  },

  ribbon: {
    width: '150px',
    height: '150px',
    overflow: 'hidden',
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    zIndex: 0,

    [theme.fn.smallerThan('xs')]: {
      zIndex: 1,
    },
  },

  ribbonContent: {
      left:' 6px',
      top: '22px',
      transform: 'rotate(50deg)',
      position: 'absolute',
      display: 'block',
      width: '225px',
      padding: '10px 0',
      backgroundColor: theme.colors.main[4],
      boxShadow: `0 0px 10px ${theme.colors.main[4]}`,
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'center',
  },

  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 800,
    padding: '5px 15px',
    backgroundColor:'#222f3d',
    color: '#ffffff',
    display: 'inline-block',
    alignSelf: 'center',
    textTransform: 'uppercase',
    zIndex: 1,
  },

  planCost: {
    padding: theme.spacing.md,
  },

  planPrice: {
    fontWeight: 800,
    fontSize: theme.fontSizes.xl,
    color: '#34495e',
  },

  planType: {
    opacity: 0.6,
  },


  list: {
    fontSize: theme.fontSizes.md,
    textAlign: 'left',
  },

  listItem: {
    borderTop: '1px solid #d2d7e2',
    padding: '10px 5%',
    
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    }
  },

  button: {
    marginTop: 'auto',
  },

}))

export const useStylesLayout = createStyles((theme) => ({
  grid: {
    [theme.fn.smallerThan('md')]: {
      justifyItems: 'center',
    },
  },

  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: rem(100),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
  
  title: {
    fontSize: rem(50),
    fontWeight: 900,
    padding: '5px 15px',
    textShadow: '#FFF 1px 0 4px',



    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(30),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',
    padding: '5px 15px',


    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));
