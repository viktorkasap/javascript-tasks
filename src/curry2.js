// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const curry = (func) => {
  let args = [];

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function curried(nextArg) {
    if (nextArg === undefined) {
      const result = func(...args);
      args = [];

      return result;
    }
    args.push(nextArg);

    return curried;
  }

  return curried;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const sum = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)()); // 6
console.log(curriedSum(1)(2)(3)(4)()); // 10
console.log(curriedSum(1)(2)(3)(4)(5)()); // 15
