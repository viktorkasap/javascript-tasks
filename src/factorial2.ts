const factorial = (n: number): number => {
  if (n === 0 || n === 1) {
    return n;
  }

  return n * factorial(n - 1);
};

console.log(factorial(3)); // 6
console.log(factorial(6)); // 720
