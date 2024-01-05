const primesNumbers = (n: number): number[] => {
  const primesArr: number[] = [];

  for (let i = 2; i <= n; i += 1) {
    if (primesArr.every((prime) => i % prime !== 0)) {
      primesArr.push(i);
    }
  }

  return primesArr;
};

console.log(primesNumbers(21)); // [ 2,  3,  5,  7, 11, 13, 17, 19 ];
