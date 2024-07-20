// import { useTexture } from '@react-three/drei';
// import { MeshBasicMaterial } from 'three';

import { useSelectBuilding } from '@/stores/selectors';

import type { Building, TripleNumber } from '@/api/types';

export const SimpleBuilding = ({
  buildingId,
}: {
  buildingId: Building['buildingId'];
}) => {
  // const texture = useTexture('/grass-4-800x450.jpg');
  const building = useSelectBuilding(buildingId);
  if (!building) return null;
  const { x, z, y, w, h, d } = building;

  // const materials = [
  //   new MeshBasicMaterial({ map: texture }),
  //   new MeshBasicMaterial({ map: texture }),
  //   new MeshBasicMaterial({ map: texture }),
  //   new MeshBasicMaterial({ map: texture }),
  //   new MeshBasicMaterial({ map: texture }),
  //   new MeshBasicMaterial({ map: texture }),
  // ];

  // Calculate position based on isometric grid
  const position: TripleNumber = [x, y, z];

  return (
    // <mesh position={position}>
    //   <boxGeometry args={[w, 1, l]} />
    //   {materials.map((material, index) => (
    //     <primitive object={material} attach={`material-${index}`} key={index} />
    //   ))}
    // </mesh>

    <mesh position={position}>
      <boxGeometry args={[w, h, d]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};
