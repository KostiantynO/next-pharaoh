// src\components\CanvasContent.tsx
'use client';
import { OrbitControls } from '@react-three/drei';
import { memo } from 'react';

import { Background } from './Background';
import { Buildings } from './Buildings';
import { FixedAngleCamera } from './FixedAngleCamera';
import { GridCoordinatesOnMap } from './GridCoordinates';

import type { Vector3 } from '@react-three/fiber';

const pointLightPosition: Vector3 = [10, 10, 10];

export const CanvasContentMemo = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={pointLightPosition} />

      <Background />
      <GridCoordinatesOnMap size={50} />

      <Buildings />
      <FixedAngleCamera />
      <OrbitControls />
    </>
  );
};

export const CanvasContent = memo(CanvasContentMemo);
