import type { MouseEvent } from 'react';

export interface ClickOnCanvas
  extends MouseEvent<HTMLDivElement, globalThis.MouseEvent> {}

export interface Ids extends Array<string> {}
export interface Entities<T> extends Record<string, T> {}

export interface Dynasty {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface Dynasties {
  readonly ids: Ids;
  readonly entities: Entities<Dynasty>;
}

export type IsometricAngles = 0 | 90 | 180 | 270;
export type TripleNumber = readonly [number, number, number];

type FiveNumbersArray = readonly [number, number, number, number, number];
type SixNumbersArray = readonly [number, number, number, number, number, number];
interface DifficultyArray extends FiveNumbersArray {}

export interface BuildingType {
  readonly typeId: number;
  readonly type: string;
  readonly w: number;
  readonly d: number;
  readonly h: number;
  readonly desirability: SixNumbersArray;
  readonly riskOfFire: DifficultyArray;
  readonly riskOfDamage: DifficultyArray;
  readonly img1: string;
  readonly img2?: string;
}

interface ProductionBuilding extends BuildingType {
  readonly employees: number;
  readonly cost: DifficultyArray;
}

interface Service {
  readonly serviceId: number;
  readonly serviceName: string;
}

export interface ServiceWell extends Service {
  readonly serviceId: 0;
  readonly serviceName: 'Well';
}
export interface ServiceWaterSupply extends Service {
  readonly serviceId: 1;
  readonly serviceName: 'WaterSupply';
}
export interface ServiceEntertainment extends Service {
  readonly serviceId: 2;
  readonly serviceName: 'Entertainment';
}
export interface ServicePottery extends Service {
  readonly serviceId: 3;
  readonly serviceName: 'Pottery';
}
export interface ServicePhysician extends Service {
  readonly serviceId: 4;
  readonly serviceName: 'Physician';
}
export interface ServiceBeer extends Service {
  readonly serviceId: 5;
  readonly serviceName: 'Beer';
}
export interface ServiceCourthouse extends Service {
  readonly serviceId: 6;
  readonly serviceName: 'Courthouse';
}
export interface ServiceScribeSchool extends Service {
  readonly serviceId: 7;
  readonly serviceName: 'ScribeSchool';
}
export interface ServiceDentist extends Service {
  readonly serviceId: 8;
  readonly serviceName: 'Dentist';
} //readonly AndTwoTypesOfFood
export interface ServiceLinen extends Service {
  readonly serviceId: 9;
  readonly serviceName: 'Linen';
}
export interface ServiceMortician extends Service {
  readonly serviceId: 10;
  readonly serviceName: 'Mortician';
}
export interface ServiceLibrary extends Service {
  readonly serviceId: 11;
  readonly serviceName: 'Library';
} //readonly AndAccessToThreeGods
export interface ServiceSenetHouse extends Service {
  readonly serviceId: 12;
  readonly serviceName: 'SenetHouse';
}
export interface ServiceTypesOfFood extends Service {
  readonly serviceId: 13;
  readonly serviceName: 'TypesOfFood';
  readonly typesOfFood: number;
}
export interface ServiceAccessToGods extends Service {
  readonly serviceId: 14;
  readonly serviceName: 'AccessToGods';
  readonly accessToGods: number;
}
export interface ServiceTypesOfLuxuryGoods extends Service {
  readonly serviceId: 15;
  readonly serviceName: 'TypesOfLuxuryGoods';
  readonly typesOfLuxuryGoods: number;
}
export interface ServiceEntertainmentLvl extends Service {
  readonly serviceId: 16;
  readonly serviceName: 'EntertainmentLvl';
  readonly EntertainmentLvl: DifficultyArray;
}
export interface ServiceMarket extends Service {
  readonly serviceId: 17;
  readonly serviceName: 'Market';
}

interface Services extends Readonly<Array<Service['serviceId']>> {}

interface Building1x1 extends BuildingType {
  readonly w: 1;
  readonly d: 1;
}

interface Building1x1x1 extends Building1x1 {
  readonly h: 1;
}

interface Building2x2 extends BuildingType {
  readonly w: 2;
  readonly d: 2;
}

interface Building2x2x1 extends Building2x2 {
  readonly h: 1;
}

interface Building3x3 extends BuildingType {
  readonly w: 3;
  readonly d: 3;
}

interface Building3x3x4 extends Building3x3 {
  readonly h: 4;
}

export interface Firehouse extends Building1x1x1 {
  readonly typeId: 1;
  readonly type: 'Firehouse';
  readonly employees: 6;
  readonly cost: readonly [45, 36, 30, 24, 6];
  readonly desirability: readonly [-2, -1, 0, 0, 0, 0];
  readonly riskOfFire: readonly [3, 2, 2, 1, 0];
  readonly riskOfDamage: readonly [0, 0, 0, 0, 0];
  readonly img1: '/infra/firehouse.webp';
}

export interface ArchitectsPost extends Building1x1x1 {
  readonly typeId: 2;
  readonly type: 'Architect’s Post';
  readonly employees: 5;
  readonly cost: readonly [45, 36, 30, 24, 6];
  readonly desirability: readonly [0, 0, 0, 0, 0, 0];
  readonly riskOfDamage: readonly [3, 2, 2, 1, 0];
  readonly img1: '/infra/architects-post.webp';
}

export interface WaterSupply extends Building2x2x1 {
  readonly typeId: 3;
  readonly type: 'Water Supply';
  readonly employees: 5;
  readonly cost: readonly [75, 60, 50, 40, 10];
  readonly desirability: readonly [4, 3, 2, 1, 0, 0];
  readonly riskOfFire: readonly [0, 0, 0, 0, 0];
  readonly riskOfDamage: readonly [0, 0, 0, 0, 0];

  readonly img1: '/infra/water-supply.webp';
}

export interface Well extends Building1x1x1 {
  readonly typeId: 4;
  readonly type: 'Well';
  readonly employees: 0;
  readonly cost: readonly [7, 6, 5, 4, 1];
  readonly desirability: readonly [1, 0, 0, 0, 0, 0];
  readonly img1: '/infra/well.webp';
}

export interface Temple extends Building3x3x4 {
  readonly employees: 8;
  readonly cost: readonly [225, 180, 150, 120, 30];
  readonly desirability: readonly [6, 6, 4, 4, 2, 2];
  readonly riskOfDamage: readonly [15, 12, 10, 8, 2];
}

export interface TempleOfBast extends Temple {
  readonly typeId: 5;
  readonly type: 'Temple of Bast';
  readonly img1: '/religion/temple-of-bast.webp';
}
export interface TempleOfRa extends Temple {
  readonly typeId: 6;
  readonly type: 'Temple of Ra';
  readonly img1: '/religion/temple-of-ra.webp';
}
export interface TempleOfOsiris extends Temple {
  readonly typeId: 7;
  readonly type: 'Temple of Osiris';
  readonly img1: '/religion/temple-of-osiris.webp';
}
export interface TempleOfSeth extends Temple {
  readonly typeId: 8;
  readonly type: 'Temple of Seth';
  readonly img1: '/religion/temple-of-seth.webp';
}
export interface TempleOfPtah extends Temple {
  readonly typeId: 9;
  readonly type: 'Temple of Ptah';
  readonly img1: '/religion/temple-of-ptah.webp';
}

interface House extends BuildingType {
  readonly maxPop: number;
  readonly currentPop: number;
  readonly services: Services;
  readonly prosperity: DifficultyArray;
  readonly taxes: DifficultyArray;
  readonly desirability: SixNumbersArray;
  readonly riskOfFire: DifficultyArray;
}

interface Hut extends House {
  readonly prosperity: readonly [5, 5, 5, 10, 15];
  readonly desirability: readonly [-2, -1, 0, 0, 0, 0];
  readonly riskOfFire: readonly [22, 18, 15, 12, 3];
}

interface Hut1x1x1 extends Hut {
  readonly w: 1;
  readonly d: 1;
  readonly h: 1;
}

interface Hut2x2x2 extends Hut {
  readonly w: 2;
  readonly d: 2;
  readonly h: 2;
}

export interface CrudeHut1x1 extends Hut1x1x1 {
  readonly typeId: 0;
  readonly type: 'Crude Hut';
  readonly maxPop: 5;
  readonly taxes: readonly [1, 1, 1, 1, 2];
  readonly img1: '/house/crude-hut-1x1a.webp';
  readonly img2: '/house/crude-hut-1x1b.webp';
}

export interface CrudeHut2x2 extends Hut2x2x2 {
  readonly typeId: 11;
  readonly type: 'Crude Hut';
  readonly maxPop: 20;
  readonly taxes: readonly [12, 12, 12, 12, 24];
}

export interface SturdyHut1x1 extends Hut1x1x1 {
  readonly typeId: 12;
  readonly type: 'Sturdy Hut';
  readonly maxPop: 7;
  readonly taxes: readonly [1, 1, 1, 1, 2];
}
export interface SturdyHut2x2 extends Hut2x2x2 {
  readonly typeId: 13;
  readonly type: 'Sturdy Hut';
  readonly maxPop: 28;
  readonly taxes: readonly [1, 1, 1, 1, 2];
}

interface BuildingTypeObject extends Record<number, BuildingType> {}

export interface BuildingTypes extends BuildingTypeObject {
  readonly 0: CrudeHut1x1;
  readonly 1: Firehouse;
  readonly 2: ArchitectsPost;
  readonly 3: WaterSupply;
  readonly 4: Well;
  readonly 5: TempleOfBast;
}

export interface Coordinate {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export interface Building extends BuildingType, Coordinate {
  readonly buildingId: string;
}

export interface Buildings {
  readonly ids: Ids;
  readonly entities: Entities<Building>;
}

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
