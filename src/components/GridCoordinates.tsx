// src\components\GridCoordinates.tsx
import { Text } from '@react-three/drei';
import { memo, useMemo } from 'react';

import type { Tripla } from '@/types/common';
import type { ReactNode } from 'react';

interface GridCoordinatesProps {
  size: number;
}

// Helper functions to encode and decode coordinates
// const encodeCoords = (x: number, y: number, z: number) =>
// ((x & 0xff) << 16) | ((y & 0xff) << 8) | (z & 0xff);

// const decodeX = (encoded: number) => (encoded >> 16) & 0xff;
// const decodeY = (encoded: number) => (encoded >> 8) & 0xff;
// const decodeZ = (encoded: number) => encoded & 0xff;

const boxArgs: Tripla = [1, 0.1, 1];
const Box = memo(() => <boxGeometry args={boxArgs} />);
Box.displayName = 'Box';
const Mat = memo(() => <meshStandardMaterial color="yellow" />);
Mat.displayName = 'Mat';

const labelPosition: Tripla = [0, 0.5, 0];

const Cell = memo(({ children }: { children: ReactNode }) => (
  <Text position={labelPosition} fontSize={0.3} color="black">
    {children}
  </Text>
));
Cell.displayName = 'Cell';

const GridCoordinates = ({ size }: GridCoordinatesProps) => {
  const encodedCoordinates = useMemo(() => {
    const coords = [];
    for (let x = -size; x <= size; ++x) {
      for (let z = -size; z <= size; ++z) {
        // what is ++z ? Means: Add 1 to z. Use the new value
        coords.push(((x & 0xff) << 16) | ((0 & 0xff) << 8) | (z & 0xff)); // what is | ?
        /*
        This is not logical OR (a | b).
        It combines bits:
          a:  10101010
          b:  00001111
          =   10101111
        You’re using it to pack numbers into a single integer.
        */
      }
    }
    return coords;
  }, [size]);

  return (
    <>
      {
        // TODO: bad. bad dog! You need to become a good kitty and change it to InstancedMesh :D !
        encodedCoordinates.map(encoded => {
          const x = (encoded >> 16) & 0xff; // what is this? what is >> ? what is & ? what is 0xff ???
          /*
& (bitwise AND)
encoded & 0xff = Masking. “Give me only the lowest 8 bits.” 0xff = 255 = 11111111

>> (right shift)
encoded >> 16 = Move bits right. This is division by 2^16. Used to extract packed values.
*/

          const y = (encoded >> 8) & 0xff;
          const z = encoded & 0xff;
          const label = `${x},${z}`;

          return (
            <mesh key={label} position={[x - size / 2, y, z - size / 2]}>
              <Box />
              <Mat />
              <Cell>{label}</Cell>
            </mesh>
          );
        })
      }
    </>
  );
};

export const GridCoordinatesOnMap = memo(GridCoordinates);
GridCoordinatesOnMap.displayName = 'GridCoordinatesOnMap';
