import type { Entity } from './common';

export interface Dynasty {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface Dynasties extends Entity<Dynasty> {}
