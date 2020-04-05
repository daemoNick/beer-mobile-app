import { BeerItem } from '../models/BeerItem';

export const items: BeerItem[] = [
    {
      id: 4,
      beer_name: 'Origin',
      brewer: 'Nigerian Breweries',
      created_on: Date.parse('2018-03-30T12:43:39.547035Z'),
      price: 4,
      rating: 3,
      flavour: ['Hoppy', 'Alcohol', 'Malty'],
      serving_type: 'Draft',
      description: 'A test to see how it displays'
    },
    {
      id: 4,
      beer_name: 'Original',
      brewer: 'Nigerian Breweries',
      created_on: Date.parse('2018-03-30T12:43:39.547035Z'),
      price: 4,
      rating: 3,
      flavour: ['Hoppy', 'Sour'],
      serving_type: 'Draft',
      description: 'A test to see how it displays'
    },
    {
      id: 2,
      beer_name: 'Guinness',
      brewer: 'Irish Bottling',
      created_on: Date.parse('2019-03-30T12:43:39.547035Z'),
      price: 2,
      rating: 3,
      flavour: ['Burnt', 'Linger', 'Bitter'],
      serving_type: 'Bottle',
      description: 'A test to see how it displays'
    },
    {
      id: 6,
      beer_name: 'Heineken',
      brewer: 'Irish Bottling',
      created_on: Date.parse('2020-02-30T12:43:39.547035Z'),
      price: 6,
      rating: 5,
      flavour: ['Spicy', 'Alcohol', 'Floral', 'Linger'],
      serving_type: 'Draft',
      description: 'A test to see how it displays'
    },
    {
      id: 9,
      beer_name: 'Castle',
      brewer: 'Irish Bottling',
      created_on: Date.parse('2020-01-15T12:43:39.547035Z'),
      price: 3,
      rating: 5,
      flavour: ['Sweet', 'Malty', 'Sour', 'Dry'],
      serving_type: 'Draft',
      description: 'A test to see how it displays'
    }
  ];

