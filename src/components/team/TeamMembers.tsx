import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  rem,
  Avatar,
  Tooltip,
  Group,
  Button,
} from '@mantine/core';
import { TeamMembersTypes } from './types';
import { useStyles } from './styles';
import { Dispatch, SetStateAction } from 'react';


type TeamMembersGroupProps = {
  members: TeamMembersTypes[],
  memberById: TeamMembersTypes,
  scrollCallback: (member: TeamMembersTypes) => void;
}

export function TeamMembersGroup({members, memberById, scrollCallback}: TeamMembersGroupProps) {
  const { classes, cx } = useStyles();
  
  
  
  return (
    <Container className={classes.teamContainer}>
      {members.map((member) => {
        const isSelected = member.id === memberById.id;
        return(
          <Button key={member.id} className={`${isSelected ? cx(classes.button, classes.selected) : classes.button}`} style={{backgroundImage: `url(${member.images[0]})`}} onClick = {() => scrollCallback(member)}>
          </Button>
        )
      })}

    </Container>
  );


}