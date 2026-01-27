// src\components\GameCanvas.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { memo, useCallback, useRef } from 'react';

import { useSelectDataForCanvas } from '@/stores/selectors';

import type { ClickOnCanvas } from '@/types/interactions';
import type { Dpr, RootState } from '@react-three/fiber';
import type { ReactNode } from 'react';
import type { Camera, Scene } from 'three';

const devicePixelRatio: Dpr = [1, 1.5];

interface CameraConfig {
  near: number;
  far: number;
  zoom: number;
  position: [number, number, number];
}

const cameraConfig: CameraConfig = {
  zoom: 50,
  near: 0.1,
  far: 1000,
  position: [10, 10, 10],
};

const GameCanvasMemo = ({ children }: { children: ReactNode }) => {
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

  const onCanvasCreated = useCallback(({ scene, camera }: RootState) => {
    cameraRef.current = camera;
    sceneRef.current = scene;
  }, []);

  const shrinkIfSideBarOpen = isSidebarOpen ? `w-[calc(100%-300px)]` : 'w-full';

  return (
    <div className="absolute bottom-0 h-[calc(100%-24px)] w-full">
      <Canvas
        orthographic
        dpr={devicePixelRatio}
        frameloop="demand"
        camera={cameraConfig}
        className={`isolate bg-slate-600 contain-strict ${shrinkIfSideBarOpen}`}
        onClick={onCanvasClick}
        onCreated={onCanvasCreated}
      >
        {children}
      </Canvas>
    </div>
  );
};

export const GameCanvas = memo(GameCanvasMemo);
