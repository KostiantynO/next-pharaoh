interface SizeObj {
  width: 3;
  depth: 3;
  height: 4;
}

const house: SizeObj = {
  width: 3,
  depth: 3,
  height: 4,
};

interface HouseWithSizeArray {
  size: [3, 3, 4];
}

const houseWithArray: HouseWithSizeArray = {
  size: [3, 3, 4],
};

const objAccess = () => {
  let width = 0;
  let depth = 0;
  let height = 0;

  for (let i = 1000000; i > 0; --i) {
    width += house.width;
    depth += house.depth;
    height += house.height;
  }

  return { width, depth, height };
};

const arrAccess = () => {
  let width = 0;
  let depth = 0;
  let height = 0;

  for (let i = 1000000; i > 0; --i) {
    width += houseWithArray.size[0];
    depth += houseWithArray.size[1];
    height += houseWithArray.size[2];
  }

  return [width, depth, height];
};

const arrAcDest = () => {
  let width = 0;
  let depth = 0;
  let height = 0;

  for (let i = 1000000; i > 0; --i) {
    const [w, d, h] = houseWithArray.size;
    width += w;
    depth += d;
    height += h;
  }

  return [width, depth, height];
};

const repeat = (reps: number, callback: () => unknown) => {
  const start = performance.now();
  for (let i = reps; i > 0; --i) {
    callback();
  }
  const end = performance.now() - start;
  return end;
};

const tests = {
  [objAccess.name]: {
    1: repeat(1, objAccess),
    10: repeat(10, objAccess),
    100: repeat(100, objAccess),
    1000: repeat(1000, objAccess),
    10000: repeat(10000, objAccess),
  },

  [arrAccess.name]: {
    1: repeat(1, arrAccess),
    10: repeat(10, arrAccess),
    100: repeat(100, arrAccess),
    1000: repeat(1000, arrAccess),
    10000: repeat(10000, arrAccess),
  },

  [arrAcDest.name]: {
    1: repeat(1, arrAcDest),
    10: repeat(10, arrAcDest),
    100: repeat(100, arrAcDest),
    1000: repeat(1000, arrAcDest),
    10000: repeat(10000, arrAcDest),
  },
};

console.table(tests);

const result = {
  objAccess: { '1': 5.7, '10': 12.6, '100': 96.6, '1000': 898.8, '10000': 10703.8 },
  arrAccess: { '1': 2.9, '10': 14.9, '100': 88.8, '1000': 888.3, '10000': 8908.2 },
  arrAcDest: { '1': 3.2, '10': 33.5, '100': 338.6, '1000': 3428.1, '10000': 33372.2 },
};

console.log(result);

// arr index based access without destructuring is fastest.
