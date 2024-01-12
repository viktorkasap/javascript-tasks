// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function _curried(depth, args) {
    return function (newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }

      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const add = (a, b) => {
  return a + b;
};

const curriedAdd = curry(add);
const addFive = curriedAdd(5);

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
console.log([0, 1, 2, 3, 4, 5].map(addFive)); // [5, 6, 7, 8, 9, 10]
