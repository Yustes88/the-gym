import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.red[7],
    border: 0,
    height: rem(32),
    paddingLeft: rem(20),
    paddingRight: rem(20),
    '&:not([data-disabled])': theme.fn.hover({
      backgroundColor: theme.fn.darken(theme.colors.red[8], 0.05),
    }),
  },

  leftIcon: {
    marginRight: theme.spacing.md,
  },
}));