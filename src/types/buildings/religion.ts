import type { BuildingType, SizeTemple } from './common';

export interface Temple extends BuildingType {
  size: SizeTemple;
  readonly employees: 8;
  readonly cost: readonly [225, 180, 150, 120, 30];
  readonly desirability: readonly [6, 6, 4, 4, 2, 2];
  readonly riskOfDamage: readonly [15, 12, 10, 8, 2];
}
// - [ ] Temple to Bast (Home)
export interface TempleOfBast extends Temple {
  readonly typeId: '5';
  readonly type: 'Temple of Bast';
  readonly images: readonly ['/religion/temple-of-bast.webp'];
}
// - [ ] Temple to Ra (Kingdom)
export interface TempleOfRa extends Temple {
  readonly typeId: '6';
  readonly type: 'Temple of Ra';
  readonly images: readonly ['/religion/temple-of-ra.webp'];
}
// - [ ] Temple to Osiris (Nile)
export interface TempleOfOsiris extends Temple {
  readonly typeId: '7';
  readonly type: 'Temple of Osiris';
  readonly images: readonly ['/religion/temple-of-osiris.webp'];
}
// - [ ] Temple to Seth (War)
export interface TempleOfSeth extends Temple {
  readonly typeId: '8';
  readonly type: 'Temple of Seth';
  readonly images: readonly ['/religion/temple-of-seth.webp'];
}
// - [ ] Temple to Ptah (Production)
export interface TempleOfPtah extends Temple {
  readonly typeId: '9';
  readonly type: 'Temple of Ptah';
  readonly images: readonly ['/religion/temple-of-ptah.webp'];
}
