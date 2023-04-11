import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

  card: {
    backgroundColor: theme.white,
    color: '#000000',
    textAlign: 'center',
    fontSize: theme.fontSizes.md,
    width: '100%',
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

}))
