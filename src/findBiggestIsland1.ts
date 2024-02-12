const searchingLand = (matrix: number[][], rowIndex: number, cellIndex: number, counter: number): number => {
  let total = counter;

  // To top
  const topRow = matrix[rowIndex - 1];

  if (topRow) {
    const topCell = topRow[cellIndex];

    if (topCell && topCell !== -1) {
      topRow[cellIndex] = -1;

      total = searchingLand(matrix, rowIndex - 1, cellIndex, total + 1);
    }
  }

  // To right
  const nextCell = matrix[rowIndex][cellIndex + 1];

  if (nextCell && nextCell !== -1) {
    matrix[rowIndex][cellIndex + 1] = -1;

    total = searchingLand(matrix, rowIndex, cellIndex + 1, total + 1);
  }

  // To bottom
  const bottomRow = matrix[rowIndex + 1];

  if (bottomRow) {
    const bottomCell = bottomRow[cellIndex];

    if (bottomCell && bottomCell !== -1) {
      bottomRow[cellIndex] = -1;

      total = searchingLand(matrix, rowIndex + 1, cellIndex, total + 1);
    }
  }

  // To left
  const prevCell = matrix[rowIndex][cellIndex - 1];

  if (prevCell && prevCell !== -1) {
    matrix[rowIndex][cellIndex - 1] = -1;

    total = searchingLand(matrix, rowIndex, cellIndex - 1, total + 1);
  }

  return total;
};

const findBiggestIsland1 = (originalMatrix: number[][]): number => {
  let result: number = 0;
  const matrix = originalMatrix.map((row) => [...row]);

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j += 1) {
      const cell = row[j];

      if (cell === 1) {
        const size = searchingLand(matrix, i, j, 0);

        if (size > result) {
          result = size;
        }
      }
    }
  }

  return result;
};

const matrix1: number[][] = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

const matrix2 = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

console.log('Output:', findBiggestIsland1(matrix1)); // 5
console.log('Output:', findBiggestIsland1(matrix2)); // 6

/**
 * TERMINAL
 * -> clear && npx ts-node src/findBiggestIsland1.ts
 */
