import { createStyles, getStylesRef, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

  container: {
    marginTop: rem(50),
  },

  title: {
    fontSize: rem(50),
    fontWeight: 900,
    textShadow: '#FFF 1px 0 4px',


    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(30),
    },
  },

  image: {
    objectFit: 'cover',
    objectPosition: 'center',
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}));