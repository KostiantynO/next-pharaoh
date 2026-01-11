// src\components\Background.tsx
'use client';
import { GRID_SIZE } from '@/config/config';

import type { Euler, Vector3 } from '@react-three/fiber';

const bgRotation: Euler = [-Math.PI / 2, 0, 0];
const bgPosition: Vector3 = [0, 0, 0];
const planeGeometry: [number, number] = [GRID_SIZE, GRID_SIZE];

export const Background = () => {
  return (
    <mesh rotation={bgRotation} position={bgPosition}>
      <planeGeometry args={planeGeometry} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
