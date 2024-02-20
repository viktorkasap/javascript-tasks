const shuffle = (array: number[]): number[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const arr = [1, 2, 3];

console.log([1], shuffle(arr));
console.log([2], shuffle(arr));
console.log([3], shuffle(arr));
