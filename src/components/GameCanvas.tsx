'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

import { GRID_SIZE } from '@/config/config';
import { useSelectBuildings, useSelectDataForCanvas } from '@/stores/selectors';

import { SimpleBuilding } from './SimpleBuilding';

import type { ClickOnCanvas } from '@/api/types';
import type { Camera, Scene } from 'three';

export const Buildings = () => {
  const buildings = useSelectBuildings();

  return (
    <>
      {buildings.ids.map(buildingId => {
        const building = buildings.entities[buildingId];
        if (!building) return null;
        return <SimpleBuilding key={buildingId} buildingId={buildingId} />;
      })}
    </>
  );
};

export const GameCanvas = () => {
  const { isSidebarOpen, addBuilding } = useSelectDataForCanvas();

  const cameraRef = useRef<Camera | null>(null);
  const sceneRef = useRef<Scene | null>(null);

  const onCanvasClick = (e: ClickOnCanvas) => {
    if (!cameraRef.current || !sceneRef.current)return


      addBuilding(e, cameraRef.current, sceneRef.current);

  };

  return (
    <div className="absolute bottom-0 h-[calc(100%-24px)] w-full">
      <Canvas
        orthographic
        camera={{ zoom: 50, near: 0.1, far: 1000, position: [10, 10, 10] }}
        className={`isolate bg-slate-600 contain-strict ${isSidebarOpen ? `w-[calc(100%-300px)]` : 'w-full'}`}
        onClick={onCanvasClick}
        onCreated={({ scene, camera }) => {
          cameraRef.current = camera;
          sceneRef.current = scene;
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[GRID_SIZE, GRID_SIZE]} />
          <meshStandardMaterial color="green" />
        </mesh>

        <Buildings />

        <OrbitControls />
      </Canvas>
    </div>
  );
};
