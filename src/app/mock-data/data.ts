import { BeerItem } from '../models/BeerItem';

export const items: BeerItem[] = [
    {
      id: 4,
      beer_name: 'Origin',
      brewer: 'Nigerian Breweries',
      created_on: Date.parse('2020-03-30T12:43:39.547035Z'),
      price: 4,
      rating: 3,
      flavour: 'Hoppy',
      serving_type: 'Draft',
      description: 'A test to see how it displays'
    },
    {
      id: 2,
      beer_name: 'Guinness',
      brewer: 'Irish Bottling',
      created_on: Date.parse('2020-03-30T12:43:39.547035Z'),
      price: 4,
      rating: 3,
      flavour: 'Burnt',
      serving_type: 'Bottle',
      description: 'A test to see how it displays'
    },
    {
      id: 6,
      beer_name: 'Heineken',
      brewer: 'Irish Bottling',
      created_on: Date.parse('2020-03-30T12:43:39.547035Z'),
      price: 4,
      rating: 5,
      flavour: 'Spicy',
      serving_type: 'Draft',
      description: 'A test to see how it displays'
    }
  ];

