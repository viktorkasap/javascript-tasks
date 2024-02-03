// [3, 4, 6, 6, 3] => [10, 10, 10, 10, 10] => How many steps are there?

const countMoves = (numbers: number[]): number => {
  let moves = 0;
  const minNum = Math.min(...numbers);

  for (const num of numbers) {
    moves += num - minNum;
  }

  return moves;
};

console.log(countMoves([3, 4, 6, 6, 3])); // [10, 10, 10, 10, 10]
