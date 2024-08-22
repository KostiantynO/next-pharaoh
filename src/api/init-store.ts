import type { State } from '@/stores/store';
import type { BuildingTypes } from '@/types/buildings/buildings';
import type {
  SizeBigHouse,
  // SizeEstate,
  // SizeManor,
  SizeSmallHouse,
  SizeTemple,
} from '@/types/buildings/common';
import type { CrudeHutSmall } from '@/types/buildings/housing';
import type { WaterSupply, Well } from '@/types/buildings/hygiene';
import type { ArchitectsPost, Firehouse } from '@/types/buildings/infrastructure';
import type {
  TempleOfBast,
  TempleOfOsiris,
  TempleOfPtah,
  TempleOfRa,
  TempleOfSeth,
} from '@/types/buildings/religion';
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

const SIZE_SMALL_HOUSE: SizeSmallHouse = Object.freeze([1, 1, 1] as const);
const SIZE_BIG_HOUSE: SizeBigHouse = Object.freeze([2, 2, 2] as const);
// const SIZE_MANOR: SizeManor = Object.freeze([3, 3, 3] as const);
const SIZE_TEMPLE: SizeTemple = Object.freeze([3, 4, 3] as const);
// const SIZE_ESTATE: SizeEstate = Object.freeze([4, 3, 4] as const);

const temple = Object.freeze({
  employees: 8,
  size: SIZE_TEMPLE,
  cost: [225, 180, 150, 120, 30],
  desirability: [6, 6, 4, 4, 2, 2],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [15, 12, 10, 8, 2],
} as const);

const templeOfBast: TempleOfBast = Object.freeze({
  typeId: '34',
  type: 'Temple of Bast',
  size: temple.size,
  employees: temple.employees,
  cost: temple.cost,

  desirability: temple.desirability,
  riskOfFire: temple.riskOfFire,
  riskOfDamage: temple.riskOfDamage,

  images: ['/religion/temple-of-bast.webp'],
} as const);

const templeOfRa: TempleOfRa = Object.freeze({
  typeId: '35',
  type: 'Temple of Ra',
  size: temple.size,
  employees: temple.employees,
  cost: temple.cost,

  desirability: temple.desirability,
  riskOfFire: temple.riskOfFire,
  riskOfDamage: temple.riskOfDamage,

  images: ['/religion/temple-of-ra.webp'],
} as const);

const templeOfOsiris: TempleOfOsiris = Object.freeze({
  typeId: '36',
  type: 'Temple of Osiris',
  size: temple.size,
  employees: temple.employees,
  cost: temple.cost,

  desirability: temple.desirability,
  riskOfFire: temple.riskOfFire,
  riskOfDamage: temple.riskOfDamage,

  images: ['/religion/temple-of-osiris.webp'],
} as const);

const templeOfSeth: TempleOfSeth = Object.freeze({
  typeId: '37',
  type: 'Temple of Seth',
  size: temple.size,
  employees: temple.employees,
  cost: temple.cost,

  desirability: temple.desirability,
  riskOfFire: temple.riskOfFire,
  riskOfDamage: temple.riskOfDamage,

  images: ['/religion/temple-of-seth.webp'],
} as const);

const templeOfPtah: TempleOfPtah = Object.freeze({
  typeId: '38',
  type: 'Temple of Ptah',
  size: temple.size,
  employees: temple.employees,
  cost: temple.cost,

  desirability: temple.desirability,
  riskOfFire: temple.riskOfFire,
  riskOfDamage: temple.riskOfDamage,

  images: ['/religion/temple-of-ptah.webp'],
} as const);

export const templeTypes = [
  templeOfBast.type,
  templeOfRa.type,
  templeOfOsiris.type,
  templeOfSeth.type,
  templeOfPtah.type,
];

const crudeHutSmall: CrudeHutSmall = Object.freeze({
  typeId: '0',
  type: 'Crude Hut',
  prosperity: [5, 5, 5, 10, 15],
  desirability: [-2, -1, 0, 0, 0, 0],
  images: [
    '/house/crude-hut-1x1a.webp', //
    '/house/crude-hut-1x1b.webp',
  ],

  pop: 5,
  size: SIZE_SMALL_HOUSE,
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
  typeId: '30',
  type: 'Firehouse',
  size: SIZE_SMALL_HOUSE,
  employees: 6,
  cost: [45, 36, 30, 24, 6],
  desirability: [-2, -1, 0, 0, 0, 0],
  riskOfFire: [3, 2, 2, 1, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  images: ['/infra/firehouse.webp'],
} as const);

const architectsPost: ArchitectsPost = Object.freeze({
  typeId: '31',
  type: 'Architect’s Post',
  size: SIZE_SMALL_HOUSE,
  employees: 5,
  cost: [45, 36, 30, 24, 6],
  desirability: [0, 0, 0, 0, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [3, 2, 2, 1, 0],
  images: ['/infra/architects-post.webp'],
} as const);

const waterSupply: WaterSupply = Object.freeze({
  typeId: '33',
  type: 'Water Supply',
  size: SIZE_BIG_HOUSE,
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
  typeId: '32',
  type: 'Well',
  size: SIZE_SMALL_HOUSE,
  employees: 0,
  cost: [7, 6, 5, 4, 1],
  desirability: [1, 0, 0, 0, 0, 0],
  riskOfFire: [0, 0, 0, 0, 0],
  riskOfDamage: [0, 0, 0, 0, 0],
  images: ['/hygiene/well.webp'],
} as const);

export const buildingTypes: BuildingTypes = Object.freeze({
  '0': crudeHutSmall,
  // '1': crudeHutBig,
  // '2': sturdyHutSmall,
  // '3': sturdyHutBig,
  // '4': meagerShantySmall,
  // '5': meagerShantyBig,
  // '6': commonShantySmall,
  // '7': commonShantyBig,
  // '8': roughCottageSmall,
  // '9': roughCottageBig,
  // '10': ordinaryCottageSmall,
  // '11': ordinaryCottageBig,
  // '12': modestHomesteadSmall,
  // '13': modestHomesteadBig,
  // '14': spaciousHomesteadSmall,
  // '15': spaciousHomesteadBig,
  // '16': modestApartmentSmall,
  // '17': modestApartmentBig,
  // '18': spaciousApartmentSmall,
  // '19': spaciousApartmentBig,
  // '20': commonResidence,
  // '21': spaciousResidence,
  // '22': elegantResidence,

  // TODO: update
  // '23': ElegantResidence,
  // '24': ElegantResidence,
  // '25': ElegantResidence,
  // '26': ElegantResidence,
  // '27': ElegantResidence,
  // '28': ElegantResidence,
  // '29': ElegantResidence,

  '30': firehouse,
  '31': architectsPost,
  '32': well,
  '33': waterSupply,
  '34': templeOfBast,
  '35': templeOfRa,
  '36': templeOfOsiris,
  '37': templeOfSeth,
  '38': templeOfPtah,
} as const);

export const foodTypeObject: FoodTypes = Object.freeze({
  '0': { foodId: '0', foodType: 'Grain' },
  '1': { foodId: '1', foodType: 'Meat' },
  '2': { foodId: '2', foodType: 'Lettuce' },
  '3': { foodId: '3', foodType: 'Chickpeas' },
  '4': { foodId: '4', foodType: 'Pomegranates' },
  '5': { foodId: '5', foodType: 'Figs' },
  '6': { foodId: '6', foodType: 'Fish' },
  '7': { foodId: '7', foodType: 'Game meat' },
} as const);

export const getStore = async (): Promise<State> => Promise.resolve(initialGameState);
