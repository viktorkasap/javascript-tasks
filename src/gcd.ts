const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

console.log('node', gcd(5, 13)); // 1
console.log('node', gcd(4, 28)); // 4
