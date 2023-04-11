import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import { useStyles } from './styles';
import { PackagePriceCardProps } from './types';



export function PackagePriceCard(card: PackagePriceCardProps) {
  const { classes } = useStyles();
  // const features = mockdata.map((feature) => (

  // ));

  return (
    <Card withBorder radius="md" p='xl' className={classes.card}>
      <Card.Section  className={classes.title}> 
        <div>{card.card.title}</div>
      </Card.Section>


      <Card.Section className={classes.planCost}>
      <span className={classes.planPrice}>$19</span><span className={classes.planType}>/ Monthly</span>
      </Card.Section>

      <Card.Section  mt="md">
        <Text fz="sm" c="dimmed" >
          Card list
        </Text>
      </Card.Section>

      <Card.Section>
        <Button radius="xl" style={{ flex: 1 }}>
            Buy now
          </Button>
      </Card.Section>
    </Card>
  );
}