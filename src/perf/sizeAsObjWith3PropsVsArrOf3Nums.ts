type SizeArr = [3, 3, 4];
interface SizeObj {
  width: 3;
  depth: 3;
  height: 4;
}
const sizeArr: SizeArr = [3, 3, 4];
console.log(sizeArr);

const sizeObj: SizeObj = { width: 3, depth: 3, height: 4 };
console.log(sizeObj);

// sizeArr is faster then obj
