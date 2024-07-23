// Function to encode three numbers into a single 32-bit integer
function encode(x: number, y: number, z: number) {
  return ((x & 255) << 16) | ((y & 255) << 8) | (z & 255);
}

// Function to decode a 32-bit integer into three numbers
function decode(encoded: number): [number, number, number] {
  const x = (encoded >> 16) & 255;
  const y = (encoded >> 8) & 255;
  const z = encoded & 255;

  return [x >= 128 ? x - 256 : x, y >= 128 ? y - 256 : y, z >= 128 ? z - 256 : z];
}

// Example usage:
const encoded = encode(-128, 127, 0);

const decoded = decode(encoded);
const x = decoded[0];
const y = decoded[1];
const z = decoded[2];

console.log(x, y, z);
