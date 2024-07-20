import { Text } from '@react-three/drei';
import { useMemo } from 'react';


interface GridCoordinatesProps {
  size: number;
}

// Helper functions to encode and decode coordinates
// const encodeCoords = (x: number, y: number, z: number) =>
// ((x & 0xff) << 16) | ((y & 0xff) << 8) | (z & 0xff);

// const decodeX = (encoded: number) => (encoded >> 16) & 0xff;
// const decodeY = (encoded: number) => (encoded >> 8) & 0xff;
// const decodeZ = (encoded: number) => encoded & 0xff;

export const GridCoordinates = ({ size }: GridCoordinatesProps) => {
  const encodedCoordinates = useMemo(() => {
    const coords = [];
    for (let x = -size; x <= size; ++x) {
      for (let z = -size; z <= size; ++z) {
        coords.push(((x & 0xff) << 16) | ((0 & 0xff) << 8) | (z & 0xff));
      }
    }
    return coords;
  }, [size]);

  return (
    <>
      {encodedCoordinates.map(encoded => {
        const x = (encoded >> 16) & 0xff;
        const y = (encoded >> 8) & 0xff;
        const z = encoded & 0xff;
        const key = `${x},${z}`;

        return (
          <mesh key={key} position={[x - size / 2, y, z - size / 2]}>
            <boxGeometry args={[1, 0.1, 1]} />
            <meshStandardMaterial color="yellow" />
            <Text position={[0, 0.5, 0]} fontSize={0.3} color="black">
              {`(${key})`}
            </Text>
          </mesh>
        );
      })}
    </>
  );
};
