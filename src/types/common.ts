export type IsometricAngles = 0 | 90 | 180 | 270;
export type TripleNumber = readonly [number, number, number];

export type Desirability = readonly [
  D1: number,
  D2: number,
  D3: number,
  D4: number,
  D5: number,
  D6: number,
];

export type DesirabilityLow = readonly [D1: -2, D2: -1, D3: 0, D4: 0, D5: 0, D6: 0]; // +
export type DesirabilityNeutral = readonly [D1: 0, D2: 0, D3: 0, D4: 0, D5: 0, D6: 0]; // +

export type DifficultyArray = readonly [
  VH: number,
  H: number,
  N: number,
  E: number,
  VE: number,
];

export type ZeroOnEveryDifficulty = readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];

export interface Ids extends Array<string> {}
export interface Entities<T> extends Record<string, T | undefined> {}
