var minSubArrayLen2 = function (target, nums) {
    debugger;
    var length = nums.length;
    var minLength = length + 1;
    var left = 0;
    var right = 0;
    var sum = 0;

    while (right < length) {
        sum += nums[right];
        right += 1;

        while (sum >= target) {
            minLength = Math.min(minLength, right - left);
            sum -= nums[left];
            left += 1;
        }
    }
    return minLength === length + 1 ? 0 : minLength;
};
// console.log('result:', minSubArrayLen2(5, [2, 3, 1, 1, 1, 1, 1])); // == 2 - [2, 3]
// console.log('result:', minSubArrayLen2(15, [1, 2, 3, 4, 5])); // == 5 - [1, 2, 3, 4, 5]
console.log('result:', minSubArrayLen2(7, [2, 3, 1, 2, 4, 3])); // == 2 - [4, 3]
// console.log('result:', minSubArrayLen2(4, [1, 4, 4])); // == 1 - [4]
// console.log('result:', minSubArrayLen2(11, [1, 1, 1, 1, 1, 1, 1, 1])); // == 0 - []
/**
 * TERMINAL ->
 * clear && npx ts-node src/minimum-size-subarray-sum2.ts
 */
