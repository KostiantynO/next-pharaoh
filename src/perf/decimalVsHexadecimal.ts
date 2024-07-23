const repeat = (reps: number, callback: () => unknown) => {
  let total = 0;
  for (let i = reps; i > 0; --i) {
    const start = performance.now();

    callback();
    const end = performance.now() - start;
    total += end;
  }

  return total / reps;
};

const bitwiseHex = () => {
  let result = 0;
  for (let i = 1000000; i > 0; --i) {
    result += 12 & 0x0f;
  }
  return result;
};

const bitwiseDecimal = () => {
  let result = 0;
  for (let i = 1000000; i > 0; --i) {
    result += 12 & 15;
  }
  return result;
};

const hexTime = repeat(10000, bitwiseHex);
const decimalTime = repeat(10000, bitwiseDecimal);

console.log(`Hexadecimal literal: ${hexTime} ms`);
console.log(`Decimal literal: ${decimalTime} ms`);
// VM162:33 Hexadecimal literal: 0.5345699999809265 ms
// VM162:34 Decimal literal: 0.5146699999928475 ms

// decimal is faster.
