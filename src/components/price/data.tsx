import { randomId } from "@mantine/hooks";

export const mockdata = [
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