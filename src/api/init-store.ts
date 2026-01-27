import type { State } from '@/stores/store';

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

export const getStore = async (): Promise<State> => Promise.resolve(initialGameState);
