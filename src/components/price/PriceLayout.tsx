import {
  Title,
  Text,
  SimpleGrid,
} from '@mantine/core';
import { PackagePriceCard } from './PackagePriceCard';
import { mockdata } from './data';
import { useStylesLayout } from './styles';
import { useTranslation } from 'next-i18next';
import { CardProps } from './types';


export function PriceLayout() {
  const { classes, theme } = useStylesLayout();
  const { t } = useTranslation('price')

  const priceData: CardProps[] =  (t('price_data', {returnObjects: true}));

  const cards = priceData.map((card) => {
    return (<PackagePriceCard card={card} key={card.id}/>)
  })


  return (
    <div className={classes.container}>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        {t('price_title')}
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        {t('price_text')}
      </Text>

      <SimpleGrid className={classes.grid} cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </div>
  );
}