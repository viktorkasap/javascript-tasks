interface Coords {
  rowIndex: number | undefined;
  cellIndex: number | undefined;
  top: number | undefined;
  right: number | undefined;
  bottom: number | undefined;
  left: number | undefined;
}

const findIsland = (matrix: number[][]): number => {
  const result: Coords[][] = [];
  let temp: Coords[] = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    const rowIndex = i;
    const rowPrev = matrix[i - 1];
    const rowNext = matrix[i + 1];

    for (let j = 0; j < row.length; j += 1) {
      const cell = row[j];
      const cellIndex = j;
      const cellLeft = row[j - 1]; // 0 | 1 | undefined,
      const cellRight = row[j + 1]; // 0 | 1 | undefined
      const cellTop = rowPrev ? rowPrev[j] : undefined;
      const cellBottom = rowNext ? rowNext[j] : undefined;

      if (cell) {
        temp.push({ rowIndex, cellIndex, top: cellTop, right: cellRight, bottom: cellBottom, left: cellLeft });
      }

      if (cell && !cellRight && !cellBottom) {
        result.push(temp);
        temp = [];
      }
    }
  }

  console.log('result', result);

  return result.reduce((acc, prev) => {
    if (acc < prev.length) {
      return prev.length;
    }

    return acc;
  }, 0);
};

const matrix = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

console.log(findIsland(matrix));

/*
// 1
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
]
// 2
[
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0]
]
*/
