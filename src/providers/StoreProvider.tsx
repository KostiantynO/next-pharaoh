'use client';
import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createGameStore } from '../stores/store';

import type { GameStore, State, Store } from '../stores/store';
import type { ReactNode } from 'react';

const storeContext = createContext<GameStore | undefined>(undefined);

storeContext.displayName = 'storeContextZustand';

export const StoreProvider = ({
  initialStore,
  children,
}: {
  initialStore: State;
  children: ReactNode;
}) => {
  const storeRef = useRef<GameStore>();

  if (!storeRef.current) {
    storeRef.current = createGameStore(initialStore);
  }

  return (
    <storeContext.Provider value={storeRef.current}>{children}</storeContext.Provider>
  );
};

export const useGameStore = <T,>(selector: (store: Store) => T): T => {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error('useGameStore must be used within a StoreProvider');
  }

  return useStore(store, selector);
};

const selectVersion = ({ version }: Store) => version;
const selectPopulation = ({ population }: Store) => population;
const selectTime = ({ time }: Store) => time;
const selectIncreaseTime = ({ increaseTime }: Store) => increaseTime;
const selectAngle = ({ angle }: Store) => angle;
const selectRotateCamera = ({ rotateCamera }: Store) => rotateCamera;

export const useSelectTime = () => useGameStore(selectTime);
export const useSelectVersion = () => useGameStore(selectVersion);
export const useSelectPopulation = () => useGameStore(selectPopulation);
export const useSelectIncreaseTime = () => useGameStore(selectIncreaseTime);
export const useSelectAngle = () => useGameStore(selectAngle);
export const useSelectRotateCamera = () => useGameStore(selectRotateCamera);
