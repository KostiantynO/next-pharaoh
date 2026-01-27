import { useFrame } from '@react-three/fiber';
import React from 'react';
import { InstancedMesh } from 'three';

export const InstancedHouses = () => {
  // const houses = useHouses();

  /*
shader

  uniform float time;
p.y += sin(time + position.x) * 0.1;

  */

  useFrame((_, delta) => {
    // material.time += delta
  });

  return <InstancedMesh />;
};
