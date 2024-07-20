'use client';
import { buildingTypes } from '@/api/init-store';
import { useSelectDataForSidebar } from '@/stores/selectors';

import { ConstructionButton } from './ConstructionButton';

const buildingTypesArray = Object.values(buildingTypes);

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSelectDataForSidebar();

  const buttons = buildingTypesArray.map(({ typeId, type }) => {
    return (
      <ConstructionButton key={typeId} buildingTypeId={typeId} buildingType={type} />
    );
  });

  return (
    <aside
      className={`absolute bottom-0 right-0 top-6 isolate flex flex-col gap-4 overflow-hidden bg-yellow-600 px-2 py-1 contain-strict ${isSidebarOpen ? `w-72` : `w-20`}`}
    >
      <button onClick={toggleSidebar}>Toggle Sidebar</button>

      <div>Map</div>

      <ul className="flex flex-wrap gap-2">{buttons}</ul>

      <div></div>
    </aside>
  );
};
