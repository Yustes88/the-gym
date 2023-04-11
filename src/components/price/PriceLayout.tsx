import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { PackagePriceCard } from './PackagePriceCard';
import { mockdata } from './data';



const useStyles = createStyles((theme) => ({

  grid: {
    [theme.fn.smallerThan('md')]: {
      justifyItems: 'center',
    },
  },

  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

export function PriceLayout() {
  const { classes, theme } = useStyles();
  const cards = mockdata.map((card) => {
    return (<PackagePriceCard card={card} key={card.id}/>)
  })


  return (
    <Container mt='xl'>

      <Title order={1} className={classes.title} ta="center" mt="sm">
        Start your fitness journey today with us
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid className={classes.grid} cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}