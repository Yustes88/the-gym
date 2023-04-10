import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  logo: {
    borderRadius: '50%',
    width: '60px',
    height: '60px',

    [theme.fn.smallerThan('sm')]: {
      width: '50px',
      height: '50px',
    },
  },
}));