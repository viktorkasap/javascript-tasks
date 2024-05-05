/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/unbound-method */

type Func<A extends unknown[], R, T> = (this: T, ...args: A) => R;

function cache<A extends unknown[], R, T>(fn: Func<A, R, T>): Func<A, R, T> {
  const map = new Map<string, R>();

  return function (this: T, ...args: A): R {
    const mapKey = JSON.stringify(args);

    if (map.has(mapKey)) {
      console.log('Cached!');

      return map.get(mapKey)!;
    } else {
      console.log('Uncached!');
      const result = fn.apply(this, args);
      map.set(mapKey, result);

      return result;
    }
  };
}

const work = (a: number, b: number): number => {
  return a + b;
};

const workCached = cache(work);
console.log(workCached(1, 2)); // Uncached
console.log(workCached(4, 5)); // Cached
console.log(workCached(4, 5)); // Cahced

const foo = {
  a: 2,
  b: 3,
  calc(x: number, y: number) {
    return (this.a + x) * (this.b + y); // (2 + 1) * (3 + 2) -> 3 * 5 = 15
  },
};

foo.calc = cache(foo.calc);
console.log(foo.calc(1, 2)); // Uncached
console.log(foo.calc(1, 2)); // Cached

/**
 * TERMINAL ->
 * clear && npx ts-node src/chache-decorator.ts
 */
