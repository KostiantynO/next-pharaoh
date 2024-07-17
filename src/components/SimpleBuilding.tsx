import { useTexture } from '@react-three/drei';
import { MeshBasicMaterial } from 'three';

export const SimpleBuilding = () => {
  const texture = useTexture('/grass-4-800x450.jpg');

  const materials = [
    new MeshBasicMaterial({ map: texture }),
    new MeshBasicMaterial({ map: texture }),
    new MeshBasicMaterial({ map: texture }),
    new MeshBasicMaterial({ map: texture }),
    new MeshBasicMaterial({ map: texture }),
    new MeshBasicMaterial({ map: texture }),
  ];

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      {materials.map((material, index) => (
        <primitive object={material} attach={`material-${index}`} key={index} />
      ))}
    </mesh>
  );
};
