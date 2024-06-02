// sliding window

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const longestSubstring = (str) => {
  // eslint-disable-next-line no-debugger
  debugger;

  const substr = new Set();
  let maxLength = 0;

  // for (let left = 0, right = 0; right < nums.length; right += 1) {
  for (let left = 0, right = 0; right < str.length; right += 1) {
    if (!substr.has(str[right])) {
      substr.add(str[right]);
    } else {
      while (substr.has(str[right])) {
        substr.delete(str[left]);
        left += 1;
      }
      substr.add(str[right]);
    }

    if (maxLength < substr.size) {
      maxLength = substr.size;
    }
  }

  return maxLength;
};

console.log('dvdf', { expect: 3, result: longestSubstring('dvdf') });
// console.log('abcabcbb', { expect: 3, result: longestSubstring('abcabcbb') });
// console.log('bbbbb', { expect: 1, result: longestSubstring('bbbbb') });
// console.log('pwwkew', { expect: 3, result: longestSubstring('pwwkew') });

/**
 * TERMINAL ->
 * clear && npx ts-node src/slide-window/longest-substring.ts
 * compile - tsc src/slide-window/longest-substring.ts
 */
