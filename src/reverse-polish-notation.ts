const getPrecedence = (operator: string): number => {
  if (operator === '+' || operator === '-') {
    return 1;
  }

  if (operator === '*' || operator === '/') {
    return 2;
  }

  return 0;
};

const convertToRPN = (infix: string): string[] => {
  let expectingOperand = true;
  const outputQueue: string[] = [];
  const operatorStack: string[] = [];
  const operators = new Set(['+', '-', '*', '/']);
  const tokens = infix.match(/(\d+\.\d+|\d+|\+|-|\*|\/|\(|\))/g);

  if (tokens === null) {
    return [];
  }

  tokens.forEach((token) => {
    if (!isNaN(parseFloat(token))) {
      outputQueue.push(token);
    } else if (operators.has(token)) {
      if (token === '-' && expectingOperand) {
        outputQueue.push('0');
      }

      while (operatorStack.length > 0 && getPrecedence(operatorStack[operatorStack.length - 1]) >= getPrecedence(token)) {
        const op = operatorStack.pop();
        if (op !== undefined) {
          outputQueue.push(op);
        }
      }
      operatorStack.push(token);
      expectingOperand = true;
    } else if (token === '(') {
      operatorStack.push(token);
      expectingOperand = true;
    } else if (token === ')') {
      let op = operatorStack.pop();
      while (op !== undefined && op !== '(') {
        outputQueue.push(op);
        op = operatorStack.pop();
      }
      if (op !== '(') {
        throw new Error('Unbalanced parentheses');
      }
    }
  });

  while (operatorStack.length > 0) {
    const op = operatorStack.pop();
    if (op !== undefined) {
      outputQueue.push(op);
    }
  }

  return outputQueue;
};

const reversePolishNotation = (expression: string[]): number | undefined => {
  const stack: number[] = [];

  expression.forEach((token) => {
    if (!isNaN(parseFloat(token))) {
      stack.push(parseFloat(token));
    } else {
      const a = stack.pop();
      const b = stack.pop();
      if (typeof a === 'number' && typeof b === 'number') {
        switch (token) {
          case '+':
            stack.push(b + a);
            break;
          case '-':
            stack.push(b - a);
            break;
          case '*':
            stack.push(b * a);
            break;
          case '/':
            stack.push(b / a);
            break;
          default:
            throw new Error(`Unsupported operator ${token}`);
        }
      } else {
        throw new Error('Insufficient operands');
      }
    }
  });

  if (stack.length !== 1) {
    throw new Error('The user input has too many values.');
  }

  return stack[0];
};

const calculateExpression = (expression: string): number => {
  const rpn = convertToRPN(expression.replace(/\s+/g, ''));

  return reversePolishNotation(rpn) ?? 0;
};

console.log(calculateExpression('1+1+3')); // 5
console.log(calculateExpression('1 + 1 + 3')); // 5
console.log(calculateExpression('(1+1)+3')); // 5
console.log(calculateExpression('(1 + -2) + 3')); // 2
