'use client';
import { Canvas } from '@react-three/fiber';
import { useCallback, useRef } from 'react';

import { useSelectDataForCanvas } from '@/stores/selectors';

import type { ClickOnCanvas } from '@/types/interactions';
import type { ReactNode } from 'react';
import type { Camera, Scene } from 'three';

export const GameCanvas = ({ children }: { children: ReactNode }) => {
  const { isSidebarOpen, addBuilding } = useSelectDataForCanvas();

  const cameraRef = useRef<Camera | null>(null);
  const sceneRef = useRef<Scene | null>(null);

  const onCanvasClick = useCallback(
    (e: ClickOnCanvas) => {
      if (!cameraRef.current || !sceneRef.current) return;

      addBuilding(e, cameraRef.current, sceneRef.current);
    },
    [addBuilding]
  );

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
        {children}
      </Canvas>
    </div>
  );
};
