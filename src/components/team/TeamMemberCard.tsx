import { TeamMembersTypes } from './types';

import { IconBarbell} from '@tabler/icons-react';
import { Text, Group, rem, Container, Paper, ThemeIcon, Button } from '@mantine/core';
import { BgImage } from './BgImage';
import { Socials } from '../socials/Socials';
import { useStyles } from './styles';

type TeamMemberCardProps = {
  card: TeamMembersTypes;
}

export function TeamMemberCard({card}: TeamMemberCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Container className={classes.container}>
    <div className={classes.card}>
      <BgImage images={card.images}/>
      <div className={classes.overlay} />
    </div>

    <Paper radius="md" className={classes.paper}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'black', to: 'red' }}
      >

        <IconBarbell size={rem(28)} stroke={1.5} />

      </ThemeIcon>

      <Text size="lg" className={classes.cardTitle} weight={500} mt="md">
            {card.title}
      </Text>

      <Group position="apart" spacing="xs">
          <Text size="sm" className={classes.author}>
              {card.name}
          </Text>
      </Group>

      <Text size="sm" mt="sm" color="dimmed">
        {card.quote}
      </Text>

      <Button.Group >
        {card.socials.map((social) => {
          return(<Socials key={social.id} social={social}/>)
        })}
      </Button.Group>

      
    </Paper>
      </Container>
  );
}