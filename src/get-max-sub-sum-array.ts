/* Method Kadana */

const getMaxSubSum = (arr: number[]): number => {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    currentSum += arr[i];

    if (currentSum < 0) {
      currentSum = 0;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  console.log('currentSum:', currentSum);
  console.log('maxSum:', maxSum);

  return maxSum;
};

// getMaxSubSum([-1, 2, 3, -9]); // == 5
// getMaxSubSum([2, -1, 2, 3, -9]); // == 6
getMaxSubSum([-1, 2, 3, -9, 11]); // == 11
// getMaxSubSum([-2, -1, 1, 2]); // == 3
// getMaxSubSum([100, -9, 2, -3, 5]); // == 100
// getMaxSubSum([1, 2, 3]); // == 6

// clear && npx ts-node src/get-max-sub-sum-array.ts

/**
 * TERMINAL ->
 * clear && npx ts-node src/get-max-sub-sum-array.ts
 */
