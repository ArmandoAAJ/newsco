import { faker } from '@faker-js/faker/.';

faker.seed(10);

const images = [
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/1237611/pexels-photo-1237611.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/2234685/pexels-photo-2234685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/3632869/pexels-photo-3632869.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/5380591/pexels-photo-5380591.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    type: 'image',
    source:
      'https://images.pexels.com/photos/2119560/pexels-photo-2119560.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
];

export const slides = [...Array(50).keys()].map((s, idx) => {
  return {
    key: faker.string.uuid(),
    data: faker.helpers.arrayElements(
      faker.helpers.shuffle(images),
      faker.number.int({ min: idx + 1, max: idx + 1 })
    ),
    title: faker.science.chemicalElement().name,
  };
});
