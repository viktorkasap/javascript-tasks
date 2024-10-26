const fibonacci2 = (n: number, memo: Record<number, number> = {}): number => {
  if (memo[n]) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  return (memo[n] = fibonacci2(n - 1, memo) + fibonacci2(n - 2, memo));
};

console.log(fibonacci2(5));
console.log(fibonacci2(50));
