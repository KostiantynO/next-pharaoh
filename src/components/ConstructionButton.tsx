'use client';
import { buildingTypes } from '@/api/init-store';
import { useSelectChooseTypeToBuild, useSelectTypeToBuildId } from '@/stores/selectors';

import type { BuildingType } from '@/types/buildings/common';

export const ConstructionButton = ({
  buildingTypeId,
}: {
  buildingTypeId: BuildingType['typeId'];
}) => {
  const chooseTypeToBuild = useSelectChooseTypeToBuild(buildingTypeId);
  const typeToBuildId = useSelectTypeToBuildId();
  if (!chooseTypeToBuild) return null;

  const building = buildingTypes[buildingTypeId];
  if (!building) return null;
  const { type, images } = building;

  const img = images[0];
  const isActive = buildingTypeId === typeToBuildId;

  return (
    <button
      type="button"
      className={`border border-red-50 px-4 py-2 ${isActive ? 'bg-yellow-300' : ''}`}
      onClick={chooseTypeToBuild}
    >
      {type}
      <img src={img} />
    </button>
  );
};
