// sliding window

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

const maxSumSubarray = (target, nums) => {
  // eslint-disable-next-line no-debugger
  debugger;
  let left = 0;
  let curSum = 0;
  let maxSum = 0;

  const temp = []; // for debugging

  for (let right = 0; right < nums.length; right += 1) {
    const value = nums[right];

    curSum += value;
    temp.push(value);

    while (curSum > target) {
      curSum -= nums[left];
      left += 1;
      temp.shift(left);
    }

    maxSum = Math.max(maxSum, curSum);

    console.log({ left, right, curSum, maxSum }, temp);
  }

  return maxSum;
};

// console.log('result:', maxSumSubarray(12, [2, 1, 3, 4, 5])); // == 12 ([3, 4, 5])
console.log('result:', maxSumSubarray(9, [7, 3, 5, 6])); // == 8 ([3, 5])

/**
 * TERMINAL ->
 * clear && node src/slide-window/maxSumSubarray.js
 */
