import type { BuildingType, SizeBigHouse, SizeSmallHouse } from './common';
import type {
  Desirability,
  DesirabilityLow,
  DesirabilityNeutral,
  DifficultyArray,
  ZeroOnEveryDifficulty,
} from '../common';
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
  readonly pop: number; // +

  readonly needDesirability: DifficultyArray; // +
  readonly needEntertainment: DifficultyArray; // +
  readonly needServices: Services; // +

  readonly prosperity: DifficultyArray; // +
  readonly taxRateMultiplier: DifficultyArray; // +
  readonly desirability: BuildingType['desirability']; // +

  readonly devolveDesirability: DifficultyArray; // +
  // readonly riskOfFire: DifficultyArray; // +
  readonly riskOfDamage: ZeroOnEveryDifficulty; // +
  readonly riskOfCrimeBase: DifficultyArray; // +
  readonly riskOfCrimeIncrement: DifficultyArray; // +
  readonly riskOfDisease: DifficultyArray; // +
  readonly riskOfMalaria: DifficultyArray; // +
  // readonly images: readonly [string, string?]; // +
}

// shared
interface Hut {
  readonly type: House['type']; // +
  readonly needDesirability: House['needDesirability']; // +
  readonly needEntertainment: House['needEntertainment']; // +
  readonly needServices: House['needServices']; // +

  readonly prosperity: House['prosperity']; // +
  readonly taxRateMultiplier: House['taxRateMultiplier']; // +
  readonly desirability: House['desirability']; // +

  readonly devolveDesirability: House['devolveDesirability']; // +
  readonly riskOfFire: House['riskOfFire']; // +
  readonly riskOfDamage: House['riskOfDamage']; // +
  readonly riskOfCrimeBase: House['riskOfCrimeBase']; // +
  readonly riskOfCrimeIncrement: House['riskOfCrimeIncrement']; // +
  readonly riskOfDisease: House['riskOfDisease']; // +
  readonly riskOfMalaria: House['riskOfMalaria']; // +
}

interface HutVariant {
  readonly typeId: House['typeId']; // +
  readonly pop: House['pop']; // +
  readonly size: House['size']; // +
  readonly images: House['images']; // +
}

/* ============================================================= */
interface CrudeHut extends Hut {
  readonly type: 'Crude Hut'; // +
  readonly needDesirability: readonly [VH: -98, H: -98, N: -98, E: -98, VE: -98]; // +
  readonly needEntertainment: ZeroOnEveryDifficulty; // +
  readonly needServices: CrudeHutNeeds; // +

  readonly prosperity: readonly [VH: 5, H: 5, N: 5, E: 10, VE: 15]; // +
  readonly taxRateMultiplier: readonly [VH: 1, H: 1, N: 1, E: 1, VE: 2]; // +
  readonly desirability: DesirabilityLow; // +

  readonly devolveDesirability: readonly [VH: -99, H: -99, N: -99, E: -99, VE: -99]; // +
  readonly riskOfFire: readonly [VH: 22, H: 18, N: 15, E: 12, VE: 3]; // +
  readonly riskOfCrimeBase: readonly [VH: 35, H: 35, N: 25, E: 22, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 50, H: 40, N: 30, E: 20, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 70, H: 60, N: 40, E: 30, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 70, H: 60, N: 50, E: 40, VE: -130]; // +
}

export interface CrudeHutSmall extends CrudeHut, HutVariant {
  readonly typeId: '0'; // +
  readonly pop: 5; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/crude-hut-1x1a.webp', // +
    '/house/crude-hut-1x1b.webp', // +
  ];
}

export interface CrudeHutBig extends CrudeHut, HutVariant {
  readonly typeId: '1'; // +
  readonly pop: 20; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/crude-hut-2x2.webp']; // +
}
/* ============================================================= */

/* ============================================================= */
interface SturdyHut extends Hut {
  readonly type: 'Sturdy Hut'; // +
  readonly needDesirability: readonly [-10, -10, -10, -10, -10]; // +
  readonly needEntertainment: ZeroOnEveryDifficulty; // +
  readonly needServices: SturdyHutNeeds; // +

  readonly prosperity: readonly [VH: 10, H: 10, N: 10, E: 15, VE: 20]; // +
  readonly taxRateMultiplier: readonly [VH: 1, H: 1, N: 1, E: 1, VE: 2]; // +
  readonly desirability: DesirabilityLow; // +

  readonly devolveDesirability: readonly [VH: -12, H: -12, N: -12, E: -12, VE: -12]; // +
  readonly riskOfFire: readonly [VH: 22, H: 18, N: 15, E: 12, VE: 3]; // +
  readonly riskOfCrimeBase: readonly [VH: 35, H: 35, N: 25, E: 22, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 45, H: 36, N: 27, E: 19, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 60, H: 50, N: 30, E: 20, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 70, H: 50, N: 40, E: 30, VE: -130]; // +
}

export interface SturdyHutSmall extends SturdyHut, HutVariant {
  readonly typeId: '2'; // +
  readonly pop: 7; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/sturdy-hut-1x1a.webp', // +
    '/house/sturdy-hut-1x1b.webp', // +
  ];
}

export interface SturdyHutBig extends SturdyHut, HutVariant {
  readonly typeId: '3'; // +
  readonly pop: 28; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/sturdy-hut-2x2.webp']; // +
}
/* ============================================================= */

// - [ ] Meager shanty
/* ============================================================= */
interface MeagerShanty extends Hut {
  readonly type: 'Meager Shanty'; // +
  readonly needDesirability: readonly [-5, -5, -5, -6, -7]; // +
  readonly needEntertainment: ZeroOnEveryDifficulty; // +
  readonly needServices: MeagerShantyNeeds; // +

  readonly prosperity: readonly [VH: 15, H: 15, N: 15, E: 20, VE: 25]; // +
  readonly taxRateMultiplier: readonly [VH: 1, H: 1, N: 1, E: 2, VE: 3]; // +
  readonly desirability: DesirabilityLow; // +

  readonly devolveDesirability: readonly [-7, -7, -7, -8, -9]; // +
  readonly riskOfFire: readonly [VH: 30, H: 24, N: 20, E: 17, VE: 4]; // +
  readonly riskOfCrimeBase: readonly [VH: 30, H: 30, N: 22, E: 20, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 40, H: 32, N: 24, E: 18, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 60, H: 40, N: 20, E: 10, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 60, H: 50, N: 40, E: 20, VE: -130]; // +
}

export interface MeagerShantySmall extends MeagerShanty, HutVariant {
  readonly typeId: '4'; // +
  readonly pop: 9; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/meager-shanty-1x1a.webp', // +
    '/house/meager-shanty-1x1b.webp', // +
  ];
}

export interface MeagerShantyBig extends MeagerShanty, HutVariant {
  readonly typeId: '5'; // +
  readonly pop: 36; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/meager-shanty-2x2.webp']; // +
}
/* ============================================================= */

/* ============================================================= */
interface CommonShanty extends Hut {
  readonly type: 'Common Shanty'; // +
  readonly needDesirability: readonly [VH: 0, H: 0, N: 0, E: -1, VE: -2]; // +
  readonly needEntertainment: ZeroOnEveryDifficulty; // +
  readonly needServices: CommonShantyNeeds; // +

  readonly prosperity: readonly [VH: 20, H: 20, N: 20, E: 25, VE: 30]; // +
  readonly taxRateMultiplier: readonly [VH: 1, H: 1, N: 1, E: 2, VE: 3]; // +
  readonly desirability: DesirabilityLow; // +

  readonly devolveDesirability: readonly [VH: -2, H: -2, N: -2, E: -3, VE: -4]; // +
  readonly riskOfFire: readonly [VH: 30, H: 24, N: 20, E: 17, VE: 4]; // +
  readonly riskOfCrimeBase: readonly [VH: 30, H: 30, N: 22, E: 20, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 35, H: 28, N: 21, E: 17, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 50, H: 30, N: 10, E: 8, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 60, H: 50, N: 30, E: 20, VE: -130]; // +
}

export interface CommonShantySmall extends CommonShanty, HutVariant {
  readonly typeId: '6'; // +
  readonly pop: 11; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/common-shanty-1x1a.webp', // +
    '/house/common-shanty-1x1b.webp', // +
  ];
}

export interface CommonShantyBig extends CommonShanty, HutVariant {
  readonly typeId: '7'; // +
  readonly pop: 44; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/common-shanty-2x2.webp']; // +
}
/* ============================================================= */

/* ============================================================= */
interface RoughCottage extends Hut {
  readonly type: 'Rough Cottage'; // +
  readonly needDesirability: readonly [VH: 4, H: 4, N: 4, E: 3, VE: 2]; // +
  readonly needEntertainment: ZeroOnEveryDifficulty; // +
  readonly needServices: RoughCottageNeeds; // +

  readonly prosperity: readonly [VH: 25, H: 25, N: 25, E: 30, VE: 35]; // +
  readonly taxRateMultiplier: readonly [VH: 1, H: 2, N: 2, E: 2, VE: 3]; // +
  readonly desirability: DesirabilityLow; // +

  readonly devolveDesirability: readonly [VH: 2, H: 2, N: 2, E: 1, VE: 0]; // +
  readonly riskOfFire: readonly [VH: 37, H: 30, N: 25, E: 22, VE: 5]; // +
  readonly riskOfCrimeBase: readonly [VH: 30, H: 30, N: 20, E: 17, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 32, H: 26, N: 19, E: 16, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 40, H: 20, N: 5, E: 5, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 30, H: 20, N: 0, E: 10, VE: -130]; // +
}

export interface RoughCottageSmall extends RoughCottage, HutVariant {
  readonly typeId: '8'; // +
  readonly pop: 13; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/rough-cottage-1x1a.webp',
    '/house/rough-cottage-1x1b.webp',
  ]; // +
}

export interface RoughCottageBig extends RoughCottage, HutVariant {
  readonly typeId: '9'; // +
  readonly pop: 52; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/rough-cottage-2x2.webp']; // +
}
/* ============================================================= */

/* ============================================================= */
interface OrdinaryCottage extends Hut {
  readonly type: 'Ordinary Cottage'; // +
  readonly needDesirability: readonly [VH: 9, H: 8, N: 8, E: 7, VE: 6]; // +
  readonly needEntertainment: readonly [VH: 10, H: 10, N: 10, E: 10, VE: 10]; // +
  readonly needServices: OrdinaryCottageNeeds; // +

  readonly prosperity: readonly [VH: 30, H: 30, N: 30, E: 35, VE: 40]; // +
  readonly taxRateMultiplier: readonly [VH: 2, H: 2, N: 2, E: 2, VE: 3]; // +
  readonly desirability: DesirabilityLow; // +

  readonly devolveDesirability: readonly [VH: 7, H: 6, N: 6, E: 6, VE: 4]; // +
  readonly riskOfFire: readonly [VH: 37, H: 30, N: 25, E: 22, VE: 5]; // +
  readonly riskOfCrimeBase: readonly [VH: 30, H: 30, N: 20, E: 17, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 32, H: 26, N: 19, E: 15, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 30, H: 10, N: 0, E: 3, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 30, H: 20, N: 0, E: 5, VE: -130]; // +
}

export interface OrdinaryCottageSmall extends OrdinaryCottage, HutVariant {
  readonly typeId: '10'; // +
  readonly pop: 15; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/ordinary-cottage-1x1a.webp',
    '/house/ordinary-cottage-1x1b.webp',
  ]; // +
}

export interface OrdinaryCottageBig extends OrdinaryCottage, HutVariant {
  readonly typeId: '11'; // +
  readonly pop: 60; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/ordinary-cottage-2x2.webp']; // +
}
/* ============================================================= */

// - [ ] Modest homestead
/* ============================================================= */
interface ModestHomestead extends Hut {
  readonly type: 'Modest Homestead'; // +
  readonly needDesirability: readonly [VH: 13, H: 12, N: 12, E: 11, VE: 10]; // +
  readonly needEntertainment: readonly [VH: 20, H: 15, N: 13, E: 13, VE: 12]; // +
  readonly needServices: ModestHomesteadNeeds; // +

  readonly prosperity: readonly [VH: 35, H: 35, N: 35, E: 40, VE: 45]; // +
  readonly taxRateMultiplier: readonly [VH: 2, H: 2, N: 2, E: 3, VE: 4]; // +
  readonly desirability: readonly [-1, 0, 0, 0, 0, 0]; // +

  readonly devolveDesirability: readonly [VH: 13, H: 12, N: 12, E: 11, VE: 10]; // +
  readonly riskOfFire: readonly [VH: 30, H: 24, N: 20, E: 17, VE: 4]; // +
  readonly riskOfCrimeBase: readonly [VH: 25, H: 25, N: 17, E: 15, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 29, H: 23, N: 17, E: 14, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 20, H: 10, N: 0, E: 0, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 20, H: 20, N: 0, E: 0, VE: -130]; // +
}

export interface ModestHomesteadSmall extends ModestHomestead, HutVariant {
  readonly typeId: '12'; // +
  readonly pop: 16; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/modest-homestead-1x1a.webp',
    '/house/modest-homestead-1x1b.webp',
  ]; // +
}

export interface ModestHomesteadBig extends ModestHomestead, HutVariant {
  readonly typeId: '13'; // +
  readonly pop: 64; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/modest-homestead-2x2.webp']; // +
}
/* ============================================================= */

/* ============================================================= */
interface SpaciousHomestead extends Hut {
  readonly type: 'Spacious Homestead'; // +
  readonly needDesirability: readonly [VH: 17, H: 16, N: 16, E: 15, VE: 14]; // +
  readonly needEntertainment: readonly [VH: 25, H: 20, N: 16, E: 15, VE: 14]; // +
  readonly needServices: SpaciousHomesteadNeeds; // +

  readonly prosperity: readonly [VH: 45, H: 45, N: 45, E: 50, VE: 55]; // +
  readonly taxRateMultiplier: readonly [VH: 2, H: 2, N: 2, E: 3, VE: 4]; // +
  readonly desirability: readonly [-1, 0, 0, 0, 0, 0]; // +

  readonly devolveDesirability: readonly [VH: 15, H: 14, N: 14, E: 13, VE: 12]; // +
  readonly riskOfFire: readonly [VH: 30, H: 24, N: 20, E: 17, VE: 4]; // +
  readonly riskOfCrimeBase: readonly [VH: 25, H: 25, N: 17, E: 15, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 29, H: 23, N: 17, E: 13, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 10, H: 0, N: 0, E: -10, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 20, H: 0, N: 0, E: -10, VE: -130]; // +
}

export interface SpaciousHomesteadSmall extends SpaciousHomestead, HutVariant {
  readonly typeId: '14'; // +
  readonly pop: 17; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/spacious-homestead-1x1a.webp',
    '/house/spacious-homestead-1x1b.webp',
  ]; // +
}

export interface SpaciousHomesteadBig extends SpaciousHomestead, HutVariant {
  readonly typeId: '15'; // +
  readonly pop: 68; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/spacious-homestead-2x2.webp']; // +
}
/* ============================================================= */

/* ============================================================= */
interface ModestApartment extends Hut {
  readonly type: 'Modest Apartment'; // +
  readonly needDesirability: readonly [VH: 21, H: 20, N: 20, E: 19, VE: 18]; // +
  readonly needEntertainment: readonly [VH: 30, H: 25, N: 20, E: 18, VE: 16]; // +
  readonly needServices: ModestApartmentNeeds;

  readonly prosperity: readonly [VH: 50, H: 50, N: 50, E: 55, VE: 60]; // +
  readonly taxRateMultiplier: readonly [VH: 2, H: 3, N: 3, E: 3, VE: 4]; // +
  readonly desirability: DesirabilityNeutral; // +

  readonly devolveDesirability: readonly [VH: 19, H: 18, N: 18, E: 17, VE: 16]; // +
  readonly riskOfFire: readonly [VH: 30, H: 24, N: 20, E: 17, VE: 4]; // +
  readonly riskOfCrimeBase: readonly [VH: 20, H: 20, N: 15, E: 12, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 27, H: 21, N: 15, E: 12, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 10, H: 0, N: -10, E: -20, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 10, H: 0, N: -10, E: -20, VE: -130]; // +
}

export interface ModestApartmentSmall extends ModestApartment, HutVariant {
  readonly typeId: '16'; // +
  readonly pop: 18; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/modest-apartment-1x1a.webp',
    '/house/modest-apartment-1x1b.webp',
  ]; // +
}

export interface ModestApartmentBig extends ModestApartment, HutVariant {
  readonly typeId: '17'; // +
  readonly pop: 72; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/modest-apartment-2x2.webp']; // +
}
/* ============================================================= */

/* ============================================================= */
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
