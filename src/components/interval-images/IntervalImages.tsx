import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { useState, useEffect } from 'react';
import { Images } from './data';
import { useStyles } from './styles';




export function IntervalImages() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
   const interval = setInterval(() => {
      setImageIndex(prev => (
        prev === Images.length - 1 ? 0 : prev + 1
      ));
    }, 8000);

    return () => clearInterval(interval);
  },[])
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${Images[imageIndex].imgSrc})` }}
      className={classes.card}
    >
    </Paper>
  );
}

