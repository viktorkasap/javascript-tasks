/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The position in the Fibonacci sequence.
 * @return {number} - The nth Fibonacci number.
 */
let fib1 = 0;
let fib2 = 0;

const calculateFibonacci = (n, f1 = false, f2 = false) => {
  if (f1) fib1 += 1;
  if (f2) fib2 += 1;

  console.log({ n, fib1, fib2 });

  const BASE_CASE = n < 2;

  if (BASE_CASE) {
    return n;
  }

  const fibRes1 = calculateFibonacci(n - 1, true, false);
  const fibRes2 = calculateFibonacci(n - 2, false, true);
  const fibRes = fibRes1 + fibRes2;

  return fibRes;
};

console.log(calculateFibonacci(5));
// console.log(fibonacci_(50));
