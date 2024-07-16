export type Ids = string[];
export type Entities<T> = Record<string, T>;

export interface Dynasty {
  id: string;
  name: string;
  description: string;
}

export interface Dynasties {
  entities: Entities<Dynasty>;
  ids: Ids;
}
