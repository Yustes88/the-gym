import {
  Title,
  Text,
  SimpleGrid,
} from '@mantine/core';
import { PackagePriceCard } from './PackagePriceCard';
import { mockdata } from './data';
import { useStylesLayout } from './styles';


export function PriceLayout() {
  const { classes, theme } = useStylesLayout();
  const cards = mockdata.map((card) => {
    return (<PackagePriceCard card={card} key={card.id}/>)
  })


  return (
    <div className={classes.container}>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Start your fitness journey today with us
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid className={classes.grid} cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </div>
  );
}