import { useGameStore } from '@/providers/StoreProvider';

import type { Building, BuildingType } from '@/api/types';
import type { Store } from '@/stores/store';

const selectVersion = ({ version }: Store) => version;
const selectTotalPopulation = ({ totalPopulation }: Store) => totalPopulation;
const selectTime = ({ time }: Store) => time;
const selectAngle = ({ angle }: Store) => angle;
const selectBuildings = ({ buildings }: Store) => buildings;
const selectActiveBuildingId = ({ activeBuildingId }: Store) => activeBuildingId;
const selectTypeToBuildId = ({ typeToBuildId }: Store) => typeToBuildId;
const selectIsSidebarOpen = ({ isSidebarOpen }: Store) => isSidebarOpen;
const selectIncreaseTime = ({ increaseTime }: Store) => increaseTime;
const selectRotateCamera = ({ rotateCamera }: Store) => rotateCamera;
const selectAddBuilding = ({ addBuilding }: Store) => addBuilding;
const selectDataForCanvas = ({ isSidebarOpen, addBuilding }: Store) => ({
  isSidebarOpen,
  addBuilding,
});

const selectDataForSidebar = ({ isSidebarOpen, toggleSidebar }: Store) => ({
  isSidebarOpen,
  toggleSidebar,
});

export const useSelectTime = () => useGameStore(selectTime);
export const useSelectVersion = () => useGameStore(selectVersion);
export const useSelectTotalPopulation = () => useGameStore(selectTotalPopulation);
export const useSelectIncreaseTime = () => useGameStore(selectIncreaseTime);
export const useSelectAngle = () => useGameStore(selectAngle);
export const useSelectRotateCamera = () => useGameStore(selectRotateCamera);
export const useSelectBuildings = () => useGameStore(selectBuildings);
export const useSelectActiveBuildingId = () => useGameStore(selectActiveBuildingId);
export const useSelectTypeToBuildId = () => useGameStore(selectTypeToBuildId);
export const useSelectAddBuilding = () => useGameStore(selectAddBuilding);
export const useSelectIsSidebarOpen = () => useGameStore(selectIsSidebarOpen);
export const useSelectDataForSidebar = () => useGameStore(selectDataForSidebar);

export const useSelectChooseTypeToBuild = (typeToBuildId: BuildingType['typeId']) =>
  useGameStore(({ chooseTypeToBuild }) => chooseTypeToBuild(typeToBuildId));

export const useSelectBuilding = (buildingId: Building['buildingId']) =>
  useGameStore(({ getBuilding }) => getBuilding(buildingId));

export const useSelectDataForCanvas = () => useGameStore(selectDataForCanvas);
