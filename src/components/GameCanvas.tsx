'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { IsometricCamera } from './IsometricCamera';
import { SimpleBuilding } from './SimpleBuilding';

export const GameCanvas = () => {
  return (
    <div className="absolute bottom-0 h-[calc(100%-24px)] w-full">
      <Canvas
        orthographic
        camera={{ zoom: 50, near: 0.1, far: 1000, position: [10, 10, 10] }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="green" />
        </mesh>

        <SimpleBuilding />

        <IsometricCamera />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
