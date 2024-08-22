import { Raycaster, Vector2 } from 'three';
import { create } from 'zustand';

import { buildingTypes } from '@/api/init-store';

import type {
  Building,
  Buildings,
  BuildingType,
  Coordinate,
} from '@/types/buildings/common';
import type { Dynasties } from '@/types/dynasties';
import type { ClickOnCanvas } from '@/types/interactions';
import type { Camera, Scene } from 'three';
import type { StoreApi, UseBoundStore } from 'zustand';

export interface State {
  version: 0;
  dynasties: Dynasties;
  totalPopulation: number;
  time: string;
  angle: number;
  buildings: Buildings;
  activeBuildingId: Building['buildingId'] | null;
  typeToBuildId: BuildingType['typeId'] | null;
  isSidebarOpen: boolean;
}

interface Actions {
  increaseTime: () => void;
  rotateCamera: (angle: number) => void;
  chooseTypeToBuild: (typeToBuildId: BuildingType['typeId']) => () => void;
  addBuilding: (e: ClickOnCanvas, camera: Camera, scene: Scene) => void;
  getBuilding: (buildingId: Building['buildingId']) => undefined | Building;
  removeBuilding: (event: ClickOnCanvas) => void;
  toggleSidebar: () => void;
}

export interface Store extends State, Actions {}

export interface GameStore extends UseBoundStore<StoreApi<Store>> {}

const increaseYCoordinate = (
  height: number,
  newX: number,
  newY: number,
  newZ: number
) => {
  let newCoordinate: Coordinate = [0, 0, 0];

  if (height === 1) {
    newCoordinate = [newX, newY + 0.5, newZ];
  } else if (height === 2) {
    newCoordinate = [newX, newY + 1, newZ];
  } else if (height === 4) {
    newCoordinate = [newX, newY + 1.5, newZ];
  }

  return newCoordinate;
};

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
}): undefined | { buildingId: string; coordinate: Coordinate } => {
  const raycaster = new Raycaster();
  const mouse = new Vector2();

  mouse.x = (offsetX / clientWidth) * 2 - 1;
  mouse.y = -(offsetY / clientHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (!intersects.length) return;
  const { point } = intersects[0];

  const x = Math.floor(point.x) + 0.5;
  const y = 0;
  const z = Math.floor(point.z) + 0.5;

  const newId = `${buildingIds++}`;

  return { buildingId: newId, coordinate: [x, y, z] };
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

      const buildingType = buildingTypes[typeId];
      if (!buildingType) return;
      const { type, size, desirability, images, riskOfFire, riskOfDamage } = buildingType;

      const point = getRay({
        offsetX,
        offsetY,
        clientWidth,
        clientHeight,
        camera,
        scene,
      });

      if (!point) return;

      const { buildingId, coordinate } = point;

      const newX = coordinate[0];
      const newY = coordinate[1];
      const newZ = coordinate[2];

      const width = size[0];
      const depth = size[2];

      const { buildings } = get();

      const isOccupied: boolean = buildings.ids
        .map(id => {
          const building = buildings.entities[id];
          if (!building) return;

          const existingX = building.coordinate[0];
          const existingZ = building.coordinate[2];
          if (existingX === newX && existingZ === newZ) return true;

          const buildingWidth = building.size[0];
          const buildingDepth = building.size[1];

          const isNewWidthLargerThanExistingX = newX + width <= existingX;
          const isNewXBiggerThanExistingWidth = newX >= existingX + buildingWidth;
          const isNewDepthLessThanExistingZ = newZ + depth <= existingZ;
          const isNewZBiggerThanExistingDepth = newZ >= existingZ + buildingDepth;

          return !(
            isNewWidthLargerThanExistingX ||
            isNewXBiggerThanExistingWidth ||
            isNewDepthLessThanExistingZ ||
            isNewZBiggerThanExistingDepth
          );
        })
        .some(Boolean);

      if (isOccupied) {
        console.log(`Place at ${coordinate.toString()} is already occupied`);
        return;
      }

      const newCoordinate = increaseYCoordinate(size[1], newX, newY, newZ);

      const newBuilding: Building = {
        buildingId,
        typeId,
        type,
        coordinate: newCoordinate,
        size,
        desirability,
        riskOfFire,
        riskOfDamage,
        images,
      };

      console.log(newBuilding);

      set(({ buildings: { ids, entities } }) => ({
        buildings: {
          ids: [...ids, buildingId],
          entities: { ...entities, [buildingId]: newBuilding },
        },
      }));
      return;
    },
    getBuilding: buildingId => get().buildings.entities[buildingId],
    removeBuilding: () => {
      const id = '0';
      if (id === '0') return;

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
