const uniqArray = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

console.log(uniqArray([1, 1, 2, 2, 3, 3, 4, 4])); // [ 1, 2, 3, 4 ]
console.log(uniqArray([1, '2', '1', 1, '1', '2', 2])); // [ 1, '2', '1', 2 ]
