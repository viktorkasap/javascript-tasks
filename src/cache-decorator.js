const cache = (fn) => {
  const map = new Map();

  // it's not arrow function because there is usign `this`
  return function (...args) {
    const mapKey = JSON.stringify(args);

    if (map.has(mapKey)) {
      console.log('Cached!');

      return map.get(mapKey);
    } else {
      console.log('Uncached!');
      const result = fn.apply(this, args);
      map.set(mapKey, result);

      return result;
    }
  };
};

const work = (a, b) => {
  return a + b;
};

const workCached = cache(work);
console.log(workCached(1, 2)); // Uncached
console.log(workCached(4, 5)); // Cached
console.log(workCached(4, 5)); // Cahced

const foo = {
  a: 2,
  b: 3,
  calc(x, y) {
    return (this.a + x) * (this.b + y); // (2 + 1) * (3 + 2) -> 3 * 5 = 15
  },
};

foo.calc = cache(foo.calc);
console.log(foo.calc(1, 2)); // Uncached
console.log(foo.calc(1, 2)); // Cached

/**
 * TERMINAL ->
 * clear && npx ts-node src/chache-decorator.js
 */
