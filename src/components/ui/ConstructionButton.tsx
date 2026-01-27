'use client';

import { buildingTypes } from '@/api/buildingTypes';
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
      className={`flex items-center justify-center border border-red-50 p-1 ${isActive ? 'bg-yellow-300' : ''}`}
      onClick={chooseTypeToBuild}
      title={type}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={type} />
    </button>
  );
};
