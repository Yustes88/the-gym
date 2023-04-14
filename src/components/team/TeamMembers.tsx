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

const useStyles = createStyles((theme) => ({
  button: {
    width: rem(200),
    height: rem(200),
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
  },
}));

type TeamMembersGroupProps = {
  members: TeamMembersTypes[],
  memberById: TeamMembersTypes,
  setMemberById: any,
}

export function TeamMembersGroup({members, memberById, setMemberById}: TeamMembersGroupProps) {
  const { classes } = useStyles();



  return (
    <Group position="center">
      {members.map((member) => {
        return(
          <Button key={member.id} className={classes.button} style={{backgroundImage: `url(${member.images[0]})`}} onClick = {() => setMemberById(member)}>
          </Button>
        )
      })}

    </Group>
  );


}