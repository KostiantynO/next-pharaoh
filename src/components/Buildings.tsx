'use client';
import { useSelectBuildings } from '@/stores/selectors';

import { SimpleBuilding } from './SimpleBuilding';

export const Buildings = () => {
  const buildings = useSelectBuildings();

  return (
    <>
      {buildings.ids.map(buildingId => {
        const building = buildings.entities[buildingId];
        if (!building) return null;
        return <SimpleBuilding key={buildingId} buildingId={buildingId} />;
      })}
    </>
  );
};
