import { createStyles, Card, Image, Avatar, Text, Group, Overlay } from '@mantine/core';
import { TeamMembersTypes } from './types';

const useStyles = createStyles((theme) => ({
  card: {
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh',
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

type TeamMemberCardProps = {
  card: TeamMembersTypes;
}


export function TeamMemberCard({card}: TeamMemberCardProps) {
  const { classes } = useStyles();
  return (
    <Card className={classes.card}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />


    </Card>
  );
}