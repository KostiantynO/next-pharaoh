'use client';
import { GRID_SIZE } from '@/config/config';

import type { TripleNumber } from '@/types/common';
import type { Euler } from '@react-three/fiber';

const bgRotation: Euler = [-Math.PI / 2, 0, 0];
const bgPosition: TripleNumber = [0, 0, 0];
const planeGeometry: [number, number] = [GRID_SIZE, GRID_SIZE];

export const Background = () => {
  return (
    <mesh rotation={bgRotation} position={bgPosition}>
      <planeGeometry args={planeGeometry} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
