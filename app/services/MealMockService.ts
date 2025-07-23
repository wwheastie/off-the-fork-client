import type { Meal } from '../types/Meal';
import type { IMealService } from './IMealService';

const MOCK_MEALS: Meal[] = [
  {
    id: '1',
    name: 'Mock Chicken',
    description: 'A delicious mock chicken meal.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1377/1377194.png',
    tags: ['mock', 'chicken'],
    price: 10.99,
    notes: '',
  },
  {
    id: '2',
    name: 'Mock Pasta',
    description: 'A tasty mock pasta dish.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1377/1377194.png',
    tags: ['mock', 'pasta'],
    price: 8.99,
    notes: '',
  },
];

export class MealMockService implements IMealService {
  async fetchMeals(): Promise<Meal[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_MEALS;
  }
} 