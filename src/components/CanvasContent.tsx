'use client';
import { OrbitControls } from '@react-three/drei';

import { Background } from './Background';
import { Buildings } from './Buildings';
import { FixedAngleCamera } from './FixedAngleCamera';

import type { TripleNumber } from '@/types/common';

const pointLightPosition: TripleNumber = [10, 10, 10];

export const CanvasContent = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={pointLightPosition} />

      <Background />

      <Buildings />
      <FixedAngleCamera />
      <OrbitControls />
    </>
  );
};
