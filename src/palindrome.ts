const palindrome = (str: string): boolean => {
  return str === [...str].reverse().join('');
};

console.log('hello', palindrome('hello')); // false
console.log('madam', palindrome('madam')); // true
