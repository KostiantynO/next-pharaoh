import type { BuildingType, SizeBigHouse, SizeSmallHouse } from './common';
import type { Desirability, DifficultyArray, ZeroOnEveryDifficulty } from '../common';
import type {
  CommonManorNeeds,
  CommonResidenceNeeds,
  CommonShantyNeeds,
  CrudeHutNeeds,
  ElegantManorNeeds,
  ElegantResidenceNeeds,
  FancyResidenceNeeds,
  MeagerShantyNeeds,
  ModestApartmentNeeds,
  ModestEstateNeeds,
  ModestHomesteadNeeds,
  OrdinaryCottageNeeds,
  PalatialEstateNeeds,
  RoughCottageNeeds,
  Services,
  SpaciousApartmentNeeds,
  SpaciousHomesteadNeeds,
  SpaciousManorNeeds,
  SpaciousResidenceNeeds,
  StatelyManorNeeds,
  SturdyHutNeeds,
} from '../services';

/** @example
Siz
Pop
needDesirability
needEntertainment
Services
Prosperity
taxRateMultiplier
Desirability
*/
interface House extends BuildingType {
  // readonly typeId: string;
  // readonly type: string;

  // readonly size: Size;
  readonly pop: number;

  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: Services;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: BuildingType['desirability'];

  readonly devolveDesirability: DifficultyArray;
  // readonly riskOfFire: DifficultyArray;
  readonly riskOfDamage: ZeroOnEveryDifficulty;
  readonly riskOfCrimeBase: DifficultyArray;
  readonly riskOfCrimeIncrement: DifficultyArray;
  readonly riskOfDisease: DifficultyArray;
  readonly riskOfMalaria: DifficultyArray;
  // readonly images: readonly [string, string?];
}

// shared
interface Hut {
  readonly type: House['type'];
  readonly needDesirability: House['needDesirability'];
  readonly needEntertainment: House['needEntertainment'];
  readonly needServices: House['needServices'];

  readonly prosperity: House['prosperity'];
  readonly taxRateMultiplier: House['taxRateMultiplier'];
  readonly desirability: House['desirability'];

  readonly devolveDesirability: House['devolveDesirability'];
  readonly riskOfFire: House['riskOfFire'];
  readonly riskOfDamage: House['riskOfDamage'];
  readonly riskOfCrimeBase: House['riskOfCrimeBase'];
  readonly riskOfCrimeIncrement: House['riskOfCrimeIncrement'];
  readonly riskOfDisease: House['riskOfDisease'];
  readonly riskOfMalaria: House['riskOfMalaria'];
}

interface HutVariant {
  readonly typeId: House['typeId'];
  readonly pop: House['pop'];
  readonly size: House['size'];
  readonly images: House['images'];
}

interface CrudeHut extends Hut {
  readonly type: 'Crude Hut';
  readonly needDesirability: readonly [VH: -98, H: -98, N: -98, E: -98, VE: -98];
  readonly needEntertainment: ZeroOnEveryDifficulty;
  readonly needServices: CrudeHutNeeds;

  readonly prosperity: readonly [VH: 5, H: 5, N: 5, E: 10, VE: 15];
  readonly taxRateMultiplier: readonly [VH: 1, H: 1, N: 1, E: 1, VE: 2];
  readonly desirability: readonly [D1: -2, D2: -1, D3: 0, D4: 0, D5: 0, D6: 0];

  readonly devolveDesirability: readonly [VH: -99, H: -99, N: -99, E: -99, VE: -99];
  readonly riskOfFire: readonly [VH: 22, H: 18, N: 15, E: 12, VE: 3];
  readonly riskOfCrimeBase: readonly [VH: 35, H: 35, N: 25, E: 22, VE: 1];
  readonly riskOfCrimeIncrement: readonly [VH: 50, H: 40, N: 30, E: 20, VE: 0];
  readonly riskOfDisease: readonly [VH: 70, H: 60, N: 40, E: 30, VE: -130];
  readonly riskOfMalaria: readonly [VH: 70, H: 60, N: 50, E: 40, VE: -130];
}

export interface CrudeHutSmall extends CrudeHut, HutVariant {
  readonly typeId: '0';
  readonly pop: 5;
  readonly size: SizeSmallHouse;
  readonly images: readonly [
    '/house/crude-hut-1x1a.webp', //
    '/house/crude-hut-1x1b.webp',
  ];
}

export interface CrudeHutBig extends CrudeHut, HutVariant {
  readonly typeId: '1';
  readonly pop: 20;
  readonly size: SizeBigHouse;
  readonly images: readonly ['/house/crude-hut-2x2.webp'];
}

interface SturdyHut extends Hut {
  readonly type: 'Sturdy Hut';
  readonly needDesirability: [-10, -10, -10, -10, -10];
  readonly needEntertainment: ZeroOnEveryDifficulty;
  readonly needServices: SturdyHutNeeds;

  readonly prosperity: readonly [VH: 10, H: 10, N: 10, E: 15, VE: 20];
  readonly taxRateMultiplier: readonly [VH: 1, H: 1, N: 1, E: 1, VE: 2];
  readonly desirability: readonly [D1: -2, D2: -1, D3: 0, D4: 0, D5: 0, D6: 0];

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface SturdyHutSmall extends SturdyHut, HutVariant {
  readonly typeId: '2';
  readonly pop: 7;
  readonly size: SizeSmallHouse;
  readonly images: readonly [
    '/house/sturdy-hut-1x1a.webp', //
    '/house/sturdy-hut-1x1b.webp',
  ];
}

export interface SturdyHutBig extends SturdyHut, HutVariant {
  readonly typeId: '3';
  readonly pop: 28;
  readonly size: SizeBigHouse;
  readonly images: readonly ['/house/sturdy-hut-2x2b.webp'];
}

// - [ ] Meager shanty
export interface MeagerShanty extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: ZeroOnEveryDifficulty;
  readonly needServices: MeagerShantyNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface MeagerShantySmall extends MeagerShanty, HutVariant {
  readonly typeId: '4';
  readonly pop: 9; // todo
  readonly size: SizeSmallHouse;
  readonly images: readonly [
    '/house/meager-shanty-1x1a.webp', //
    '/house/meager-shanty-1x1b.webp',
  ];
}

export interface MeagerShantyBig extends MeagerShanty, HutVariant {
  readonly typeId: '5';
  readonly pop: 36;
  readonly size: SizeBigHouse;
  readonly images: readonly ['/house/meager-shanty-2x2.webp'];
}

export interface CommonShanty extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: ZeroOnEveryDifficulty;
  readonly needServices: CommonShantyNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface RoughCottage extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: ZeroOnEveryDifficulty;
  readonly needServices: RoughCottageNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface OrdinaryCottage extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: OrdinaryCottageNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

// - [ ] Modest homestead
export interface ModestHomestead extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: ModestHomesteadNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface SpaciousHomestead extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: SpaciousHomesteadNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface ModestApartment extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: ModestApartmentNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface SpaciousApartment extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: SpaciousApartmentNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

// interface Residence extends House {
//   '2x2': House;
// }

export interface CommonResidence extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: CommonResidenceNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface SpaciousResidence extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: SpaciousResidenceNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface ElegantResidence extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: ElegantResidenceNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface FancyResidence extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: FancyResidenceNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

// interface Manor extends House {
//   '3x3': House;
// }

export interface CommonManor extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: CommonManorNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface SpaciousManor extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: SpaciousManorNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface ElegantManor extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: ElegantManorNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

export interface StatelyManor extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: StatelyManorNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

// interface Estate extends House {
//   '4x4': House;
// }

export interface ModestEstate extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: ModestEstateNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}

// - [ ] Palatial estate
export interface PalatialEstate extends House {
  readonly type: string;
  readonly needDesirability: DifficultyArray;
  readonly needEntertainment: DifficultyArray;
  readonly needServices: PalatialEstateNeeds;

  readonly prosperity: DifficultyArray;
  readonly taxRateMultiplier: DifficultyArray;
  readonly desirability: Desirability;

  readonly devolveDesirability: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfFire: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeBase: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfCrimeIncrement: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfDisease: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
  readonly riskOfMalaria: readonly [VH: 0, H: 0, N: 0, E: 0, VE: 0];
}
