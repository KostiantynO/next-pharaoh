import type { Entities, Ids } from './common';

export interface Dynasty {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface Dynasties {
  readonly ids: Ids;
  readonly entities: Entities<Dynasty>;
}
