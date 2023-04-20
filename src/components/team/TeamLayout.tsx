import { Title, Text, Container } from '@mantine/core';
import { useStyles } from './styles';
import { TeamMemberCard } from './TeamMemberCard';
import { TeamMembersGroup } from './TeamMembers';
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { TeamMembersTypes } from './types';



export function TeamLayout() {
  const { t } = useTranslation('team')
  const teamData: TeamMembersTypes[] = (t('team_data', {returnObjects: true}));
  const [memberById, setMemberById] = useState(teamData[0])
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCallback = (member: TeamMembersTypes) => {
    setMemberById(member)
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
 }


  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}

      <div className={classes.inner}>
        <Title className={classes.title} p='xl'>
          {t('team_title')}{' '}
          <Text component="span" className={classes.highlight} inherit>
          {t('team_subtitle')}
          </Text>{' '}
        </Title>

        <Container p='xl' size={600} ref={scrollRef}>
          <Text size="lg" color="dimmed" className={classes.description}>
            {t('team_text')}
          </Text>
        </Container>
      </div>
      <TeamMemberCard card={memberById}/>

      <TeamMembersGroup members={teamData} memberById = {memberById} scrollCallback={scrollCallback}/>

    </div>
  );
}