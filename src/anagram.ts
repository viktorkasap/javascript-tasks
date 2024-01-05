const normalizeString = (str: string): string => {
  return str.toLowerCase().split('').sort().join('');
};
const anagram = (str1: string, str2: string): boolean => {
  return normalizeString(str1) === normalizeString(str2);
};

console.log(anagram('friend', 'rfiedn')); // true
console.log(anagram('friend', 'friends')); // false
