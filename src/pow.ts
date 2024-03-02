export const pow = (x: number, n: number): number => {
  if (n < 0 || Math.round(n) !== n) {
    return NaN;
  }

  let result = 1;

  for (let i = 0; i < n; i += 1) {
    result *= x;
  }

  return result;
};

console.log(pow(3, 5));
