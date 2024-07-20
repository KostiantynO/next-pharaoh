'use client';
import { useSelectChooseTypeToBuild, useSelectTypeToBuildId } from '@/stores/selectors';

import type { BuildingType } from '@/api/types';

export const ConstructionButton = ({
  buildingTypeId,
  buildingType,
}: {
  buildingTypeId: BuildingType['typeId'];
  buildingType: BuildingType['type'];
}) => {
  const chooseTypeToBuild = useSelectChooseTypeToBuild(buildingTypeId);
  const typeToBuildId = useSelectTypeToBuildId();
  if (!chooseTypeToBuild) return null;

  const isActive = buildingTypeId === typeToBuildId;

  return (
    <button
      type="button"
      className={`border border-red-50 px-4 py-2 ${isActive ? 'bg-yellow-300' : ''}`}
      onClick={chooseTypeToBuild}
    >
      {buildingType}
    </button>
  );
};
