import { MealApiService } from './MealApiService';
import { MealMockService } from './MealMockService';
import type { IMealService } from './IMealService';

const serviceType = import.meta.env.VITE_MEAL_SERVICE;

let mealService: IMealService;

if (serviceType === 'mock') {
  mealService = new MealMockService();
} else {
  mealService = new MealApiService();
}

export default mealService; 