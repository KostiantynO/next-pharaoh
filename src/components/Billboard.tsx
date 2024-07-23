import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import type { Coordinate } from '@/types/buildings/common';
import type { ReactNode } from 'react';
import type { Group } from 'three';

export const Billboard = ({
  children,
  position,
}: {
  position: Coordinate;
  children: ReactNode;
}) => {
  const ref = useRef<Group | null>(null);

  useFrame(({ camera }) => {
    if (!ref.current) return;
    ref.current.quaternion.copy(camera.quaternion);
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
};
