interface FoodType<FoodId extends number = number, Type extends string = string> {
  readonly foodId: FoodId;
  readonly foodType: Type;
}

export interface Grain extends FoodType<0, 'Grain'> {}
export interface Meat extends FoodType<1, 'Meat'> {}
export interface Lettuce extends FoodType<2, 'Lettuce'> {}
export interface Chickpeas extends FoodType<3, 'Chickpeas'> {}
export interface Pomegranates extends FoodType<4, 'Pomegranates'> {}
export interface Figs extends FoodType<5, 'Figs'> {}
export interface Fish extends FoodType<6, 'Fish'> {}
export interface GameMeat extends FoodType<7, 'Game meat'> {}

export interface FoodTypeObject extends Record<number, FoodType> {}

export interface FoodTypes extends FoodTypeObject {
  readonly 0: Grain;
  readonly 1: Meat;
  readonly 2: Lettuce;
  readonly 3: Chickpeas;
  readonly 4: Pomegranates;
  readonly 5: Figs;
  readonly 6: Fish;
  readonly 7: GameMeat;
}
