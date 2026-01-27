// src\stores\store.ts
import { Raycaster, Vector2 } from 'three';
import { create } from 'zustand';

import { buildingTypes } from '@/api/buildingTypes';

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
): Coordinate => [
  newX,
  newY + (height === 1 ? 0.5 : height === 2 ? 1 : height === 4 ? 1.5 : 0),
  newZ,
];

let buildingIds = 0;

const createBuilding = ({
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

  // TODO use object pooling
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

      const point = createBuilding({
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

      const { length } = buildings.ids;

      for (let i = length - 1; i >= 0; i--) {
        const id = buildings.ids[i];

        const building = buildings.entities[id];
        if (!building) continue;

        const existingX = building.coordinate[0];
        const existingZ = building.coordinate[2];

        /*
         why do we treat height (the second argument in three.js Coordinate type) as `Y`, and z as depth?
         because x is a point on the HORIZONTAL axis, aka width AND length, of a flat surface... PRESUMABLY???
         Y is the point on VERTICAL axis, aka `height`,
         and z is a point on z axis... which is used to compute `depth` of an object in 3D space...???
         so, actually, I need x and z. in order to operate on flat terrain, like Pharaoh game is.
         and y axis is useless in general :), unless we are placing a mastaba or a GREAT PYRAMID,,, which takes half/whole screen :D
         but my mind is still referring to `flat` as x and y. WHY??? :D
         it is a cognitive mistake :D
         `flat` is x and z...
         maybe because all calculus in school i was in, were done in 2D, only drawing SIMPLEST of functions like parabola or square root, by hand, ones or twice for the whole studying period... All done in X and Y space. Pythagorean or Euclidean space? Or how is it called? :)
         Was my Physics-Math Gymnasium shit??? It was `considered` the most powerful in my city with 300k people. ha :) maybe it is not the school. but me... who didn't studied 3D on my own? cause in school we certainly didn't covered anything of it.
         And then you want to have `perfect game devs and 3D bridge civil engineers`, who never saw a 3D model of a cube or ball in school...
         Pathetic world...
         How is this possible???
         If you want to be 3D engineer. GameDev etc...
         You should learn the hardest stuff from the ground up..
         YOURSELF...
         :D Lol.
         haha, but I remember in the uni (state uni of telecom), we did covered some part of at least simplest spherical calc, for calculating the simplest trajectory of how you should launch telecom satellite into space, or just simply point a ground base dish into space in the correct angle... idr... the most simplest of that, just like 1+1=2, a and b.
         not differential equations or even middle or heavy math...
         but i already forgot everything I learned there, cause I never used it of course :D
         cause the program is an outdated joke :)
         well, except modern cellular networks...
         modern in their opinion was 2G.
         when we with a friend were attending as junior observers the `swap 2g to 3G`, at work, for 1 week.
         And had 4G in big cities already :)
         Now is 2026 and 5G is already in biggest cities :)
         And my phone is still/already outdated, for like 6-7 years???
        */
        if (existingX === newX && existingZ === newZ) {
          console.log(`Place at ${coordinate.toString()} is already occupied`);
          return;
        }
        const buildingWidth = building.size[0];
        const buildingDepth = building.size[1];

        const isNewWidthLargerThanExistingX = newX + width <= existingX;
        const isNewXBiggerThanExistingWidth = newX >= existingX + buildingWidth;
        const isNewDepthLessThanExistingZ = newZ + depth <= existingZ;
        const isNewZBiggerThanExistingDepth = newZ >= existingZ + buildingDepth;

        const isOccupied = !(
          isNewWidthLargerThanExistingX ||
          isNewXBiggerThanExistingWidth ||
          isNewDepthLessThanExistingZ ||
          isNewZBiggerThanExistingDepth
        );

        if (isOccupied) {
          console.log(`Place at ${coordinate.toString()} is already occupied`);
          return;
        }
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
    },
    getBuilding: buildingId => get().buildings.entities[buildingId],
    removeBuilding: e => {
      const id = e?.currentTarget?.id;
      if (id === undefined || id === null) return;

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
