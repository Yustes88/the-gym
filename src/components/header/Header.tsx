import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  keyframes,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '../logo/Logo';

const HEADER_HEIGHT = rem(70);

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

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 2,
    backgroundColor: 'transparent',
    borderBottom: 'none',
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
    color: theme.white,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',

    [theme.fn.largerThan('sm')]: {
      justifyContent: 'space-between',
    },
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
    color: theme.colors.wite,
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

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
          <Logo/>
        <Group spacing={8} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} color='white' className={classes.burger} size="md" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}