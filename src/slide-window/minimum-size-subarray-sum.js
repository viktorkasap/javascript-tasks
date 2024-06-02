// sliding window

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const minSubArrayLen = (target, nums) => {
  // eslint-disable-next-line no-debugger
  debugger;

  const length = nums.length;
  let minLength = length + 1;
  let left = 0;
  let right = 0;
  let sum = 0;
  let count = 0;

  while (right < length) {
    count += 1; // step

    sum += nums[right];
    right += 1;

    console.log([count], { left, right, sum, minLength, window: nums.slice(left, right) });

    while (sum >= target) {
      minLength = Math.min(minLength, right - left);
      sum -= nums[left];
      left += 1;
    }

    // console.log([count], { left, right, sum, minLength, window: nums.slice(left, right) });
  }

  return minLength === length + 1 ? 0 : minLength;
};

// console.log('result:', minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1])); // == 2 - [2, 3]
// console.log('result:', minSubArrayLen(15, [1, 2, 3, 4, 5])); // == 5 - [1, 2, 3, 4, 5]
console.log('result:', minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // == 2 - [4, 3]
// console.log('result:', minSubArrayLen(4, [1, 4, 4])); // == 1 - [4]
// console.log('result:', minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // == 0 - []

/**
 * TERMINAL ->
 * clear && node src/slide-window/minimum-size-subarray-sum.js
 * compile - tsc src/slide-window/minimum-size-subarray-sum.ts
 */
