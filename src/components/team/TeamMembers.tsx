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
  setMemberById: Dispatch<SetStateAction<TeamMembersTypes>>,
}

export function TeamMembersGroup({members, memberById, setMemberById}: TeamMembersGroupProps) {
  const { classes, cx } = useStyles();
  
  
  
  return (
    <Container className={classes.teamContainer}>
      {members.map((member) => {
        const isSelected = member.id === memberById.id;
        return(
          <Button key={member.id} className={`${isSelected ? cx(classes.button, classes.selected) : classes.button}`} style={{backgroundImage: `url(${member.images[0]})`}} onClick = {() => setMemberById(member)}>
          </Button>
        )
      })}

    </Container>
  );


}