// sliding window

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

const minSubArrayLen2 = (target, nums) => {
  const length = nums.length;
  let minLength = length + 1;

  let left = 0;
  let sum = 0;

  const temp = []; // for debugging

  for (let right = 0; right <= length; right += 1) {
    const value = nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left);
      sum -= value;
      left += 1;
    }

    if (value) {
      temp.push(value);
      sum += value;
    }

    console.log({ left, right }, temp);
  }

  return minLength === length + 1 ? 0 : minLength;
};

// console.log('result:', minSubArrayLen2(5, [2, 3, 1, 1, 1, 1, 1])); // == 2 - [2, 3]
console.log('result:', minSubArrayLen2(15, [1, 2, 3, 4, 5])); // == 5 - [1, 2, 3, 4, 5]
// console.log('result:', minSubArrayLen2(7, [2, 3, 1, 2, 4, 3])); // == 2 - [4, 3]
// console.log('result:', minSubArrayLen2(4, [1, 4, 4])); // == 1 - [4]
// console.log('result:', minSubArrayLen2(11, [1, 1, 1, 1, 1, 1, 1, 1])); // == 0 - []

/**
 * TERMINAL ->
 * clear && node src/slide-window/minimum-size-subarray-sum2.js
 */
