'use client';
import { useSelectBuildings } from '@/stores/selectors';

import { SimpleBuilding } from './SimpleBuilding';

export const Buildings = () => {
  const buildings = useSelectBuildings();

  return (
    <>
      {
        // TODO: bad. bad dog! You need to become a good kitty and change it to InstancedMesh :D !
        buildings.ids.map(buildingId => {
          const building = buildings.entities[buildingId];
          if (!building) return null;
          return <SimpleBuilding key={buildingId} buildingId={buildingId} />;
        })
      }
    </>
  );
};
