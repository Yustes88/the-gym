import { createStyles } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useState, useEffect } from 'react';

const Images = [
  {
    id: randomId(),
    imgSrc: 'news/news-1.jpg',
    alt: '',
  },
  {
    id: randomId(),
    imgSrc: 'news/news-2.jpg',
    alt: '',
  },
  {
    id: randomId(),
    imgSrc: 'news/news-3.jpg',
    alt: '',
  },
]

export const useStyles = createStyles((theme) => ({
  container: {
    height: '80vh',
    width: '100%',
  }
}))


export default function IntervalImages() {
  const [imageIndex, setImageIndex] = useState(0);

  const { classes, cx } = useStyles();


 useEffect(() => {
    setInterval(() => {
      setImageIndex(prev => (
        prev === Images.length - 1 ? 0 : prev + 1
      ));
    }, 5000);
  },[])

  return (
    <div className={classes.container}>
      <h1>Image intervals</h1>
      <div style={{ backgroundImage: `url(${Images[imageIndex].imgSrc})`, height: '60vh' }}></div>
    </div>
  );
}