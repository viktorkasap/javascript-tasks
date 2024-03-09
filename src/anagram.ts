const anagram = (str1: string, str2: string): boolean => {
  const normalizeString = (str: string): string => {
    return str.toLowerCase().split('').sort().join('');
  };

  return normalizeString(str1) === normalizeString(str2);
};

console.log(anagram('friend', 'rfiedn')); // true
console.log(anagram('friend', 'friends')); // false
