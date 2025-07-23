import type { Meal } from '../types/Meal';

export interface IMealService {
  fetchMeals(): Promise<Meal[]>;
} 