'use client';
import { memo } from 'react';

import { buildingTypes } from '@/api/buildingTypes';
import { useSelectDataForSidebar } from '@/stores/selectors';

import { ConstructionButton } from './ConstructionButton';

import type { BuildingType } from '@/types/buildings/common';

const buildingTypesArray = Object.values<BuildingType>(buildingTypes);

const Buttons = () =>
  buildingTypesArray.map(({ typeId }) => (
    <li key={typeId}>
      <ConstructionButton buildingTypeId={typeId} />
    </li>
  ));

export const SidebarContentMemo = () => {
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
        <Buttons />
      </ul>

      <div></div>
    </>
  );
};

export const SidebarContent = memo(SidebarContentMemo);
