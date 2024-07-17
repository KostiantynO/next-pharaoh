import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

import { useSelectAngle } from '@/providers/StoreProvider';

export const IsometricCamera = () => {
  const { camera } = useThree();

  const angle = useSelectAngle();

  useEffect(() => {
    const distance = 10; // Distance from the center
    const newAngle = (angle * Math.PI) / 180;

    // Calculate the new camera position based on the angle
    camera.position.x = distance * Math.sin(newAngle);
    camera.position.z = distance * Math.cos(newAngle);
    camera.position.y = 10; // Keep the Y position constant for isometric view

    // Always look at the center of the scene
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [angle, camera]);

  return null;
};
