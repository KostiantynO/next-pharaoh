import type { SizeBigHouse, SizeSmallHouse, WorkPlace } from './common';

// - [ ] Well
export interface Well extends WorkPlace {
  readonly typeId: '32';
  readonly type: 'Well';
  readonly size: SizeSmallHouse;
  readonly employees: 0;
  readonly cost: readonly [7, 6, 5, 4, 1];
  readonly desirability: readonly [1, 0, 0, 0, 0, 0];
  readonly images: readonly ['/hygiene/well.webp'];
}

// - [ ] Water Supply
export interface WaterSupply extends WorkPlace {
  readonly typeId: '33';
  readonly type: 'Water Supply';
  readonly size: SizeBigHouse;
  readonly employees: 5;
  readonly cost: readonly [75, 60, 50, 40, 10];
  readonly desirability: readonly [4, 3, 2, 1, 0, 0];
  readonly riskOfFire: readonly [0, 0, 0, 0, 0];
  readonly riskOfDamage: readonly [0, 0, 0, 0, 0];

  readonly images: readonly [
    '/hygiene/water-supply-2x2a.webp',
    '/hygiene/water-supply-2x2b.webp',
  ];
}

// - [ ] Physician

// - [ ] Apothecary

// - [ ] Dentist

// - [ ] Mortuary
