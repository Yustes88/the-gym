import {
  Container,
  Title,
  Text,
  Overlay,
  Button,
  ChevronIcon,
  ActionIcon,
} from '@mantine/core';
import { useStyles } from './styles';



export function About() {
  const { classes } = useStyles();
  
  return (
    <><div className={classes.container}>
      <div className={classes.left}>
        <Title order={1} className={classes.title}>
          The Gym {''}
          <Text component='span' className={classes.highlight}>
            Studio
          </Text>
        </Title>

      </div>
      <div className={classes.right}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />
      </div>
    </div>
    
      <div className={classes.controls}>
        <ActionIcon  variant="transparent" className={classes.actionButton}>
          <ChevronIcon className={classes.actionIcon}/>
        </ActionIcon>
      </div>
      </>
  );
}