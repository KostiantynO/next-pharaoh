'use client';
import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createGameStore, selectIncreaseTime, selectTime } from '../stores/store';

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

export const useSelectTime = () => useGameStore(selectTime);
export const useSelectIncreaseTime = () => useGameStore(selectIncreaseTime);
