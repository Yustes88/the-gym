import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.white,
    color: '#000000',
    textAlign: 'center',
    fontSize: theme.fontSizes.md,
    width: '80%',
    margin: theme.spacing.xl,
  },

  title: {
    fontWeight: 800,
    padding: '5px 15px',
    backgroundColor:'#222f3d',
    color: '#ffffff',
    display: 'inline-block',
    textTransform: 'uppercase',
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
