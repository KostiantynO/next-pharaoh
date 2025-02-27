'use client';
import { buildingTypes } from '@/api/init-store';
import { useSelectDataForSidebar } from '@/stores/selectors';

import { ConstructionButton } from './ConstructionButton';

import type { BuildingType } from '@/types/buildings/common';

const buildingTypesArray = Object.values<BuildingType>(buildingTypes);

const buttons = buildingTypesArray.map(({ typeId }) => (
  <ConstructionButton key={typeId} buildingTypeId={typeId} />
));

export const SidebarContent = () => {
  const { isSidebarOpen, toggleSidebar } = useSelectDataForSidebar();

  const arrow = isSidebarOpen ? '>' : '<';
  const twoColsIfSidebarOpen = isSidebarOpen ? 'grid-cols-2' : 'grid-cols-1';

  return (
    <>
      <button onClick={toggleSidebar}>{arrow}</button>

      <div>Map</div>

      <ul
        className={`grid grid-rows-[repeat(auto-fit,minmax(2rem,100%),1fr)] gap-2 ${twoColsIfSidebarOpen}`}
      >
        {buttons}
      </ul>

      <div></div>
    </>
  );
};
