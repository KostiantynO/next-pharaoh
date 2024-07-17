import type { State } from '@/stores/store';

const v0: State = {
  version: 0,
  dynasties: { entities: {}, ids: [] },
  population: 0,
  time: 0,
  angle: 0,
};

export const getStore = async (): Promise<State> => Promise.resolve(v0);
