// sliding window

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

const maxSumSubArrays = (target, nums) => {
  // eslint-disable-next-line no-debugger
  debugger;

  let curSum = 0;
  let maxCountArrays = 0;

  const temp = []; /* for debugging */

  for (let left = 0, right = 0; right < nums.length; right += 1) {
    const value = nums[right];

    curSum += value;
    temp.push(value); /* for debugging */

    while (curSum > target) {
      curSum -= nums[left];
      left += 1;
      temp.shift(left); /* for debugging */
    }

    if (curSum === target) {
      maxCountArrays += 1;
    }

    console.log({ left, right, curSum, maxCountArrays }, temp);
  }

  return maxCountArrays;
};

console.log('result:', maxSumSubArrays(7, [2, 4, 1, 2, 7])); // == 3 [2, 4, 1], [4, 1, 2], [7]

/**
 * TERMINAL ->
 * clear && node src/slide-window/maxSumSubArrays.js
 */
