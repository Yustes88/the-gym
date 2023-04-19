import { randomId } from "@mantine/hooks";
import { CardProps } from "./types";

export const mockdata: CardProps[] = [
  { title: 'Basic',
    description: 'Lorem ipsum',
    id: randomId(),
    features: ['Cardio', 'Weights', 'Treadmill', 'Low fat', 'Carbs', 'Lorem', 'Ipsum'],
    status: 'regular',
},
  { title: 'Professional',
    description: 'Lorem ipsum',
    id: randomId(),
    features: ['Cardio', 'Weights', 'Treadmill', 'Low fat', 'Carbs'],
    status: 'best',

},
  { title: 'Ultra',
    description: 'Lorem ipsum',
    id: randomId(),
    features: ['Cardio', 'Weights', 'Treadmill', 'Low fat', 'Carbs', 'Lorem',],
    status: 'regular',
},
];