/* eslint-disable @typescript-eslint/explicit-function-return-type */

const array = new Array(100).fill(0).map((_, i) => i);

const myFor = (arr) => {
  let res = 0;
  const length = arr.length;

  for (let i = 0; i < 1000000; i += 1) {
    for (let j = 0; j < length; j += 1) {
      res += arr[j];
    }
  }

  return res;
};

const start = performance.now();
console.log(myFor(array));
const end = performance.now();

console.log(end - start);
