import { getApiUrl } from '../config/env';
import type { Meal } from '../types/Meal';
import type { IMealService } from './IMealService';

export class MealApiService implements IMealService {
  async fetchMeals(): Promise<Meal[]> {
    const response = await fetch(getApiUrl('/api/v1/current/meals'));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
} 