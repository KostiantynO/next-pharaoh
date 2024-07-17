import { create } from 'zustand';

import type { Dynasties } from '@/api/types';
import type { StoreApi, UseBoundStore } from 'zustand';

type IsometricAngles = 0 | 90 | 180 | 270;

export interface State {
  version: 0;
  dynasties: Dynasties;
  population: number;
  time: number;
  angle: IsometricAngles;
}

interface Actions {
  increaseTime: () => void;
  rotateCamera: (angle: IsometricAngles) => void;
}

export interface Store extends State, Actions {}

export type GameStore = UseBoundStore<StoreApi<Store>>;

export const createGameStore = (initialState: State): GameStore =>
  create<Store>(set => ({
    ...initialState,
    increaseTime: () => set(({ time }) => ({ time: time + 1 })),
    rotateCamera: angle => set(() => ({ angle })),
  }));
