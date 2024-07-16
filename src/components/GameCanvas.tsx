'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const SimpleBuilding = () => {
  return (
    <mesh position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const GroundPlane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export const GameCanvas = () => {
  return (
    <div className="relative left-0 top-0 h-full w-full">
      <Canvas className="absolute bg-slate-700">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <GroundPlane />
        <SimpleBuilding />

        <OrbitControls />
      </Canvas>
    </div>
  );
};
