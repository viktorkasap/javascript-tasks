/* eslint-disable @typescript-eslint/explicit-function-return-type */

const array = new Array(100).fill(0).map((_, i) => i);

const myReduce = (arr) => {
  let res = 0;

  for (let i = 0; i < 1000000; i += 1) {
    res += arr.reduce((acc, prev) => acc + prev, 0);
  }

  return res;
};

const start = performance.now();
console.log(myReduce(array));
const end = performance.now();

console.log(end - start);
