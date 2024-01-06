function memorize<T extends number[], R>(fn: (...args: T) => R): (...args: T) => R {
  const cache: Record<string, R> = {};

  return function (...args: T): R {
    const key = JSON.stringify(args);

    if (!Boolean(cache[key])) {
      // # 1
      // cache[key] = fn.apply(null, args);

      // # 2
      cache[key] = fn(...args);
    }

    return cache[key];
  };
}

const complexCalculation = (num: number): number => {
  return num * num;
};

const memoizedComplexCalculation = memorize(complexCalculation);
console.log(memoizedComplexCalculation(5)); // 25
console.log(memoizedComplexCalculation(5)); // 25
