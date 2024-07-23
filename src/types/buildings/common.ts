import type { Desirability, DifficultyArray, Entities, Ids } from '../common';

export type Size = readonly [width: number, height: number, depth: number];
export type Coordinate = readonly [x: number, y: number, z: number];

/** House 1x1 */
export type SizeSmallHouse = readonly [width: 1, height: 1, depth: 1];

/** House 2x2 */
export type SizeBigHouse = readonly [width: 2, height: 2, depth: 2];

/** Water Supply */
export type SizeWaterSupply = readonly [width: 2, height: 1, depth: 2];

/** Manor */
export type SizeManor = readonly [width: 3, height: 3, depth: 3];

/** Temple */
export type SizeTemple = readonly [width: 3, height: 4, depth: 3];

/** Estate */
export type SizeEstate = readonly [width: 4, height: 3, depth: 4];

export interface BuildingType {
  readonly typeId: string;
  readonly type: string;

  readonly size: Size;
  readonly desirability: Desirability;
  readonly riskOfFire: DifficultyArray;
  readonly riskOfDamage: DifficultyArray;
  readonly images: readonly [string, string?];
}

export interface WorkPlace extends BuildingType {
  readonly employees: number;
  readonly cost: DifficultyArray;
}

export interface Building extends BuildingType {
  readonly buildingId: string;
  readonly coordinate: Coordinate;
}

export interface Buildings {
  readonly ids: Ids;
  readonly entities: Entities<Building>;
}
