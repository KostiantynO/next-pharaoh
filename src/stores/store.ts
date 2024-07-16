import { create } from 'zustand';

import type { Dynasties } from '@/api/types';
import type { StoreApi, UseBoundStore } from 'zustand';

export interface State {
  version: 0;
  dynasties: Dynasties;
  population: number;
  time: number;
}

interface Actions {
  increaseTime: () => void;
}

export interface Store extends State, Actions {}

export type GameStore = UseBoundStore<StoreApi<Store>>;

export const createGameStore = (initialState: State): GameStore =>
  create<Store>(set => ({
    ...initialState,
    increaseTime: () => set(state => ({ ...state })),
  }));

export const selectVersion = ({ version }: Store) => version;
export const selectPopulation = ({ population }: Store) => population;
export const selectTime = ({ time }: Store) => time;
export const selectIncreaseTime = ({ increaseTime }: Store) => increaseTime;
