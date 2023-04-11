import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem, List, ThemeIcon } from '@mantine/core';
import { useStyles } from './styles';
import { PackagePriceCardProps } from './types';
import { IconCircleCheck } from '@tabler/icons-react';



export function PackagePriceCard(card: PackagePriceCardProps) {
  const { classes } = useStyles();
  const features = card.card.features.map((feature) => (
    <List.Item key={feature} className={classes.listItem}>{feature}</List.Item>
  ));


  return (
    <Card withBorder radius="md" p='xl' className={classes.card}>
      <Card.Section  className={classes.title}> 
        <div>{card.card.title}</div>
      </Card.Section>

      {card.card.status === 'best' ?  <div className={classes.ribbon}><span className={classes.ribbonContent}>Best</span></div>: ''}
     

      <Card.Section className={classes.planCost}>
      <span className={classes.planPrice}>$19</span><span className={classes.planType}>/ Monthly</span>
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
            Buy now
          </Button>
      </Card.Section>
    </Card>
  );
}