import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';
import { useStyles } from './styles';
import { TeamMemberCard } from './TeamMemberCard';
import { TeamMembers } from './data';
import { TeamMembersGroup } from './TeamMembers';
import { useState } from 'react';



export function TeamLayout() {
  const [memberById, setMemberById] = useState(TeamMembers[0])

  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}

      <div className={classes.inner}>
        <Title className={classes.title} p='xl'>
          Meet our{' '}
          <Text component="span" className={classes.highlight} inherit>
            team
          </Text>{' '}
        </Title>

        <Container p='xl' size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>
      </div>
      <TeamMemberCard card={memberById}/>

      <TeamMembersGroup members={TeamMembers} memberById = {memberById} setMemberById = {setMemberById}/>

    </div>
  );
}