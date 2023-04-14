import { TeamMembersTypes } from './types';

import { IconBarbell, IconColorSwatch, IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, createStyles, getStylesRef, rem, Container, Paper, ThemeIcon } from '@mantine/core';

const useStyles = createStyles((theme) => ({

  container: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: rem(20),
    margin: rem(20),
  },

  card: {
    position: 'relative',
    height: rem(400),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.main[5], theme.black),
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  author: {
    color: theme.colors.dark[2],
  },

  info: {
    backgroundColor: theme.white,
  },

  paper: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.black, theme.colors.main[5]),
    },
  },

}));

type TeamMemberCardProps = {
  card: TeamMembersTypes;
}

export function TeamMemberCard({card}: TeamMemberCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Container className={classes.container}>
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank"
    >
      <div className={classes.image} style={{ backgroundImage: `url(${card.image})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {card.title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {card.author.name}
            </Text>
          </Group>
        </div>
      </div>
    </Card>

    <Paper radius="md" className={classes.paper}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'black', to: 'red' }}
      >
        <IconBarbell size={rem(28)} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        {card.title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {card.category}
      </Text>
    </Paper>
      </Container>
  );
}