import type { Entity } from '@/types/common';

export interface Food extends Record<'foodId' | 'food' | 'icon', string> {}

export const foodArr = [
  ['Grain', '🌾'],
  ['Meat', '🍗'],
  ['Lettuce', '🥬'],
  ['Chickpeas', ' '],
  ['Pomegranates', ' '], // TODO: add pic
  ['Figs', ' '],
  ['Fish', '🐟'],
  ['Game meat', '🥩'],
] as const;

type FoodEntity = Entity<Food>;

export const foodEntity = foodArr.reduce<FoodEntity>(
  (acc, [food, icon], idx) => {
    const foodId = `${idx}`;
    acc.ids.push(foodId);
    acc.entities[foodId] = { foodId, food, icon };
    return acc;
  },
  { ids: [], entities: {} }
);
