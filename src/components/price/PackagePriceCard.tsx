import { Card, Button, List, ThemeIcon } from '@mantine/core';
import { useStyles } from './styles';
import { CardProps } from './types';
import { IconCircleCheck } from '@tabler/icons-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'next-i18next';

type PackagePriceCardProps = {
  card: CardProps,
}


export function PackagePriceCard({card}: PackagePriceCardProps) {
  const { classes } = useStyles();
  const features = card.features.map((feature) => (
    <List.Item key={feature} className={classes.listItem}>{feature}</List.Item>
  ));
  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  const { t } = useTranslation('price')



  return (
    <Card withBorder radius="md" p='xl' className={classes.card} ref={ref} style={{
      transform: isInView ? "none" : "translateX(-100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 1s ease-out 0.2s"
    }}>
      <Card.Section  className={classes.title}> 
        <div>{card.title}</div>
      </Card.Section>

      {card.status === 'best' ?  <div className={classes.ribbon}><span className={classes.ribbonContent}>Best</span></div>: ''}
     

      <Card.Section className={classes.planCost}>
      <span className={classes.planPrice}>$19</span><span className={classes.planType}>/ {t('price_duration')}</span>
      </Card.Section>

      <Card.Section mt="md">
        <div style={{  textAlign: 'center'}}>
          <List
          size="sm"
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }>
            {features}
          </List>
        </div>
      </Card.Section>

      <Card.Section className={classes.button}>
        <Button radius="xl" mt='md' style={{ flex: 1 }}>
            {t('price_btn')}
          </Button>
      </Card.Section>
    </Card>
  );
}