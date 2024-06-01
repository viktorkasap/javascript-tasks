// sliding window
const longestSubstring = (str: string): number => {
  const substr = new Set();
  let position = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (!substr.has(str[i])) {
      substr.add(str[i]);
    } else {
      while (substr.has(str[i])) {
        substr.delete(str[position]);
        position += 1;
      }
      substr.add(str[i]);
    }

    if (maxLength < [...substr].length) {
      maxLength = [...substr].length;
    }
  }

  return maxLength;
};

console.log('dvdf', { expect: 3, result: longestSubstring('dvdf') });
console.log('abcabcbb', { expect: 3, result: longestSubstring('abcabcbb') });
console.log('bbbbb', { expect: 1, result: longestSubstring('bbbbb') });
console.log('pwwkew', { expect: 3, result: longestSubstring('pwwkew') });

/**
 * TERMINAL ->
 * clear && npx ts-node src/longest-substring.ts
 * compile - tsc src/longest-substring.ts
 */
