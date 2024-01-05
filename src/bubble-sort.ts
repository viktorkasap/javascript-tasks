const bubbleSort = (arr: number[]): number[] => {
  const array: number[] = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

console.log(bubbleSort([9, 5, 7, 3, 1, 8, 4, 6, 2]));
