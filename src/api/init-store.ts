import type { State } from '@/stores/store';
import type { BuildingTypes } from '@/types/buildings/buildings';
import type { CrudeHutSmall } from '@/types/buildings/housing';
import type { WaterSupply, Well } from '@/types/buildings/hygiene';
import type { ArchitectsPost, Firehouse } from '@/types/buildings/infrastructure';
import type { TempleOfBast } from '@/types/buildings/religion';
import type { FoodTypes } from '@/types/foods';

const initialGameState: State = {
  version: 0,
  dynasties: { entities: {}, ids: [] },
  buildings: { entities: {}, ids: [] },
  totalPopulation: 0,
  time: new Date().toLocaleString(),
  angle: 0,
  activeBuildingId: null,
  typeToBuildId: null,
  isSidebarOpen: false,
};

const temple = Object.freeze({
  employees: 8,
  size: [3, 4, 3],
  cost: [225, 180, 150, 120, 30],
  desirability: [6, 6, 4, 4, 2, 2],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [15, 12, 10, 8, 2],
} as const);

const templeOfBast: TempleOfBast = Object.freeze({
  typeId: '5',
  type: 'Temple of Bast',
  size: temple.size,
  employees: temple.employees,
  cost: temple.cost,

  desirability: temple.desirability,
  riskOfFire: temple.riskOfFire,
  riskOfDamage: temple.riskOfDamage,

  images: ['/religion/temple-of-bast.webp'],
} as const);

const SIZE_SMALL_HUT = Object.freeze([1, 1, 1] as const);

const crudeHut: CrudeHutSmall = Object.freeze({
  typeId: '0',
  type: 'Crude Hut',
  prosperity: [5, 5, 5, 10, 15],
  desirability: [-2, -1, 0, 0, 0, 0],
  images: [
    '/house/crude-hut-1x1a.webp', //
    '/house/crude-hut-1x1b.webp',
  ],

  pop: 5,
  size: SIZE_SMALL_HUT,
  needDesirability: [-98, -98, -98, -98, -98],
  needEntertainment: [0, 0, 0, 0, 0],
  needServices: { road: true },
  taxRateMultiplier: [1, 1, 1, 1, 2],

  devolveDesirability: [-99, -99, -99, -99, -99],
  riskOfFire: [22, 18, 15, 12, 3],
  riskOfDamage: [0, 0, 0, 0, 0],
  riskOfCrimeBase: [35, 35, 25, 22, 1],
  riskOfCrimeIncrement: [50, 40, 30, 20, 0],
  riskOfDisease: [70, 60, 40, 30, -130],
  riskOfMalaria: [70, 60, 50, 40, -130],
} as const);

const firehouse: Firehouse = Object.freeze({
  typeId: '1',
  type: 'Firehouse',
  size: SIZE_SMALL_HUT,
  employees: 6,
  cost: [45, 36, 30, 24, 6],
  desirability: [-2, -1, 0, 0, 0, 0],
  riskOfFire: [3, 2, 2, 1, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  images: ['/infra/firehouse.webp'],
} as const);

const architectsPost: ArchitectsPost = Object.freeze({
  typeId: '2',
  type: 'Architect’s Post',
  size: SIZE_SMALL_HUT,
  employees: 5,
  cost: [45, 36, 30, 24, 6],
  desirability: [0, 0, 0, 0, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [3, 2, 2, 1, 0],
  images: ['/infra/architects-post.webp'],
} as const);

const waterSupply: WaterSupply = Object.freeze({
  typeId: '3',
  type: 'Water Supply',
  size: [2, 1, 2],
  employees: 5,
  cost: [75, 60, 50, 40, 10],
  desirability: [4, 3, 2, 1, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  images: [
    '/hygiene/water-supply-2x2a.webp', //
    '/hygiene/water-supply-2x2b.webp',
  ],
} as const);

const well: Well = Object.freeze({
  typeId: '4',
  type: 'Well',
  size: SIZE_SMALL_HUT,
  employees: 0,
  cost: [7, 6, 5, 4, 1],
  desirability: [1, 0, 0, 0, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  images: ['/hygiene/well.webp'],
} as const);

export const buildingTypes: BuildingTypes = Object.freeze({
  '0': crudeHut,
  '1': firehouse,
  '2': architectsPost,
  '3': waterSupply,
  '4': well,
  '5': templeOfBast,
} as const);

export const foodTypeObject: FoodTypes = Object.freeze({
  0: { foodId: 0, foodType: 'Grain' },
  1: { foodId: 1, foodType: 'Meat' },
  2: { foodId: 2, foodType: 'Lettuce' },
  3: { foodId: 3, foodType: 'Chickpeas' },
  4: { foodId: 4, foodType: 'Pomegranates' },
  5: { foodId: 5, foodType: 'Figs' },
  6: { foodId: 6, foodType: 'Fish' },
  7: { foodId: 7, foodType: 'Game meat' },
} as const);

export const getStore = async (): Promise<State> => Promise.resolve(initialGameState);
