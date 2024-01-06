const binarySearch = (arr: number[], element: number): number => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === element) {
      return middle;
    }

    if (arr[middle] < element) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5)); // 4
