import type {
  ArchitectsPost,
  BuildingTypes,
  CrudeHut1x1,
  Firehouse,
  FoodTypes,
  TempleOfBast,
  WaterSupply,
  Well,
} from './types';
import type { State } from '@/stores/store';

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
  cost: [225, 180, 150, 120, 30],
  desirability: [6, 6, 4, 4, 2, 2],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [15, 12, 10, 8, 2],
} as const);

const templeOfBast: TempleOfBast = Object.freeze({
  typeId: 5,
  type: 'Temple of Bast',
  w: 3,
  d: 3,
  h: 4,
  employees: temple.employees,
  cost: temple.cost,
  desirability: temple.desirability,
  riskOfFire: temple.riskOfFire,
  riskOfDamage: temple.riskOfDamage,
  img1: '/religion/temple-of-bast.webp',
} as const);

const crudeHut: CrudeHut1x1 = Object.freeze({
  typeId: 0,
  type: 'Crude Hut',
  w: 1,
  d: 1,
  h: 1,
  prosperity: [5, 5, 5, 10, 15],
  desirability: [-2, -1, 0, 0, 0, 0],
  riskOfFire: [22, 18, 15, 12, 3],
  maxPop: 5,
  currentPop: 0,
  taxes: [1, 1, 1, 1, 2],
  img1: '/house/crude-hut-1x1a.webp',
  img2: '/house/crude-hut-1x1b.webp',
  services: [],
  riskOfDamage: [0, 0, 0, 0, 0],
} as const);

const firehouse: Firehouse = Object.freeze({
  typeId: 1,
  type: 'Firehouse',
  w: 1,
  d: 1,
  h: 1,
  employees: 6,
  cost: [45, 36, 30, 24, 6],
  desirability: [-2, -1, 0, 0, 0, 0],
  riskOfFire: [3, 2, 2, 1, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  img1: '/infra/firehouse.webp',
} as const);

const architectsPost: ArchitectsPost = Object.freeze({
  typeId: 2,
  type: 'Architect’s Post',
  w: 1,
  d: 1,
  h: 1,
  employees: 5,
  cost: [45, 36, 30, 24, 6],
  desirability: [0, 0, 0, 0, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [3, 2, 2, 1, 0],
  img1: '/infra/architects-post.webp',
} as const);

const waterSupply: WaterSupply = Object.freeze({
  typeId: 3,
  type: 'Water Supply',
  w: 2,
  d: 2,
  h: 1,
  employees: 5,
  cost: [75, 60, 50, 40, 10],
  desirability: [4, 3, 2, 1, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  img1: '/infra/water-supply.webp',
} as const);

const well: Well = Object.freeze({
  typeId: 4,
  type: 'Well',
  w: 1,
  d: 1,
  h: 1,
  employees: 0,
  cost: [7, 6, 5, 4, 1],
  desirability: [1, 0, 0, 0, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  img1: '/infra/well.webp',
} as const);

export const buildingTypes: BuildingTypes = Object.freeze({
  0: crudeHut,
  1: firehouse,
  2: architectsPost,
  3: waterSupply,
  4: well,
  5: templeOfBast,
} as const) satisfies BuildingTypes;

export const foodTypeObject: FoodTypes = Object.freeze({
  0: { foodId: 0, foodType: 'Grain' },
  1: { foodId: 1, foodType: 'Meat' },
  2: { foodId: 2, foodType: 'Lettuce' },
  3: { foodId: 3, foodType: 'Chickpeas' },
  4: { foodId: 4, foodType: 'Pomegranates' },
  5: { foodId: 5, foodType: 'Figs' },
  6: { foodId: 6, foodType: 'Fish' },
  7: { foodId: 7, foodType: 'Game meat' },
} as const) satisfies FoodTypes;

export const getStore = async (): Promise<State> => Promise.resolve(initialGameState);
