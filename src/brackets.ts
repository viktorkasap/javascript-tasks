const brackets = (str: string): boolean => {
  const stack: string[] = [];

  for (const bracket of str) {
    if (bracket === '(' || bracket === '[' || bracket === '{') {
      stack.push(bracket);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const lastBracket = stack.pop();

      if (
        (bracket === ')' && lastBracket !== '(') ||
        (bracket === ']' && lastBracket !== '[') ||
        (bracket === '}' && lastBracket !== '{')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(brackets('({}({({})}))')); // true
console.log(brackets('({}({({(}))}))')); // false
