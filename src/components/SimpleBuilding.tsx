import { useTexture } from '@react-three/drei';
import { memo, useMemo } from 'react';

import { useSelectBuilding } from '@/stores/selectors';

import type { Building } from '@/types/buildings/common';

const SimpleBuildingMeshMemo = ({
  building: { images, coordinate, size },
}: {
  building: Building;
}) => {
  const texture = useTexture(images[0]);

  const building = useMemo(() => {
    return (
      <mesh position={coordinate} rotation={[0, Math.PI / 4, 0]}>
        <planeGeometry args={[size[0], size[2]]} />
        <meshBasicMaterial attach="material" map={texture} transparent />
      </mesh>
    );
  }, [coordinate, size, texture]);

  return building;
};

const SimpleBuildingMesh = memo(SimpleBuildingMeshMemo);

SimpleBuildingMesh.displayName = 'SimpleBuildingMesh';

const SimpleBuildingMemo = ({ buildingId }: { buildingId: Building['buildingId'] }) => {
  const building = useSelectBuilding(buildingId);
  if (!building) return null;

  return <SimpleBuildingMesh building={building} />;
};

export const SimpleBuilding = memo(SimpleBuildingMemo);
SimpleBuilding.displayName = 'SimpleBuilding';
