const factorial2 = (): ((n: number) => number) => {
  const cache: Record<number, number> = {};

  const calculate = (n: number): number => {
    if (n === 0 || n === 1) {
      return n;
    }

    if (cache[n]) {
      return cache[n];
    }

    cache[n] = n * calculate(n - 1);

    return cache[n];
  };

  return calculate;
};

console.log(factorial2()(3)); // 6
console.log(factorial2()(6)); // 720
