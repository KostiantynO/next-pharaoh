import { Raycaster, Vector2 } from 'three';
import { create } from 'zustand';

import { buildingTypes } from '@/api/init-store';

import type {
  Building,
  Buildings,
  BuildingType,
  ClickOnCanvas,
  Dynasties,
  IsometricAngles,
} from '@/api/types';
import type { Camera, Scene } from 'three';
import type { StoreApi, UseBoundStore } from 'zustand';

export interface State {
  version: 0;
  dynasties: Dynasties;
  totalPopulation: number;
  time: string;
  angle: IsometricAngles;
  buildings: Buildings;
  activeBuildingId: Building['buildingId'] | null;
  typeToBuildId: BuildingType['typeId'] | null;
  isSidebarOpen: boolean;
}

interface Actions {
  increaseTime: () => void;
  rotateCamera: (angle: IsometricAngles) => void;
  chooseTypeToBuild: (typeToBuildId: BuildingType['typeId']) => () => void;
  addBuilding: (e: ClickOnCanvas, camera: Camera, scene: Scene) => void;
  getBuilding: (buildingId: Building['buildingId']) => Building;
  removeBuilding: (event: ClickOnCanvas) => void;
  toggleSidebar: () => void;
}

export interface Store extends State, Actions {}

export interface GameStore extends UseBoundStore<StoreApi<Store>> {}

let buildingIds = 0;

const getRay = ({
  offsetX,
  offsetY,
  clientWidth,
  clientHeight,
  camera,
  scene,
}: {
  offsetX: number;
  offsetY: number;
  clientWidth: number;
  clientHeight: number;
  camera: Camera;
  scene: Scene;
}) => {
  const raycaster = new Raycaster();
  const mouse = new Vector2();

  mouse.x = (offsetX / clientWidth) * 2 - 1;
  mouse.y = -(offsetY / clientHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);
  console.log(intersects);
  if (!intersects.length) return;
  const [{ point }] = intersects;

  const x = Math.floor(point.x);
  const y = 0;
  const z = Math.floor(point.z);

  const newId = `${buildingIds++}`;

  return { x, y, z, buildingId: newId };
};

export const createGameStore = (initialState: State): GameStore =>
  create<Store>((set, get) => ({
    ...initialState,
    increaseTime: () => set(({ time }) => ({ time: time + 1 })),
    rotateCamera: angle => set(() => ({ angle })),
    chooseTypeToBuild: typeToBuildId => () => {
      const prevTypeToBuild = get().typeToBuildId;

      set(() => ({
        typeToBuildId:
          prevTypeToBuild && prevTypeToBuild === typeToBuildId ? null : typeToBuildId,
      }));
    },
    addBuilding: (
      { nativeEvent: { offsetX, offsetY }, currentTarget: { clientWidth, clientHeight } },
      camera,
      scene
    ) => {
      const typeId = get().typeToBuildId;
      if (typeId == null) return;

      if (typeId === 0) {
        const buildingType = buildingTypes[typeId];
        if (!buildingType) return;
        const { type, w, d, h, desirability, img1, riskOfFire, riskOfDamage } =
          buildingType;

        const point = getRay({
          offsetX,
          offsetY,
          clientWidth,
          clientHeight,
          camera,
          scene,
        });
        if (!point) return;

        const { buildingId, x, y, z } = point;
        const newBuilding: Building = {
          buildingId,
          typeId,
          type,
          x,
          y,
          z,
          w,
          d,
          h,
          desirability,
          riskOfFire,
          riskOfDamage,
          img1,
        };
        console.log(newBuilding);

        set(({ buildings: { ids, entities } }) => ({
          buildings: {
            ids: [...ids, buildingId],
            entities: { ...entities, [buildingId]: newBuilding },
          },
        }));
        return;
      }
    },
    getBuilding: buildingId => get().buildings.entities[buildingId],
    removeBuilding: ({
      nativeEvent: { offsetX, offsetY },
      currentTarget: { clientWidth, clientHeight },
    }) => {
      const x = Math.round((offsetX / clientWidth) * 100 - 50) + 0;
      const z = Math.round((offsetY / clientHeight) * 100 - 50) + 0;

      const buildingSize = 3;

      const TODO_UPDATE_THIS_CONDITION =
        Math.abs(x) + buildingSize && Math.abs(x) + buildingSize;

      const id = '0'; // TODO: update to find out if there is a building under clicked location. Building expands +1.5 tiles from its center in all directions if building occupies 3x3 tiles space

      // assume buildings are placed in the center of a mouse click

      if (!id) return;

      set(({ buildings: { ids, entities } }) => {
        const newIds = ids.filter(buildingId => buildingId !== id);
        const newEntities = { ...entities };
        delete newEntities[id];
        return {
          buildings: { ids: newIds, entities: newEntities },
        };
      });
    },
    toggleSidebar: () => set(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen })),
  }));
