import type { SizeSmallHouse, WorkPlace } from './common';

// - [ ] Firehouse
export interface Firehouse extends WorkPlace {
  readonly typeId: '30';
  readonly type: 'Firehouse';
  readonly size: SizeSmallHouse;
  readonly employees: 6;
  readonly cost: readonly [45, 36, 30, 24, 6];
  readonly desirability: readonly [-2, -1, 0, 0, 0, 0];
  readonly riskOfFire: readonly [3, 2, 2, 1, 0];
  readonly riskOfDamage: readonly [0, 0, 0, 0, 0];
  readonly images: readonly ['/infra/firehouse.webp'];
}

// - [ ] Architect’s Post
export interface ArchitectsPost extends WorkPlace {
  readonly typeId: '31';
  readonly type: 'Architect’s Post';
  readonly size: SizeSmallHouse;
  readonly employees: 5;
  readonly cost: readonly [45, 36, 30, 24, 6];
  readonly desirability: readonly [0, 0, 0, 0, 0, 0];
  readonly riskOfDamage: readonly [3, 2, 2, 1, 0];
  readonly images: readonly ['/infra/architects-post.webp'];
}

// - [ ] Police station
