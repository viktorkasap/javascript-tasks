// Depth First Search (DFS)
const searchingLandDFS = (matrix: number[][], rowIndex: number, cellIndex: number, counter: number): number => {
  let total = counter;

  // To top
  const topRow = matrix[rowIndex - 1];
  if (topRow) {
    const topCell = topRow[cellIndex];

    if (topCell && topCell !== -1) {
      topRow[cellIndex] = -1;

      total = searchingLandDFS(matrix, rowIndex - 1, cellIndex, total + 1);
    }
  }

  // To right
  const nextCell = matrix[rowIndex][cellIndex + 1];
  if (nextCell && nextCell !== -1) {
    matrix[rowIndex][cellIndex + 1] = -1;

    total = searchingLandDFS(matrix, rowIndex, cellIndex + 1, total + 1);
  }

  // To bottom
  const bottomRow = matrix[rowIndex + 1];
  if (bottomRow) {
    const bottomCell = bottomRow[cellIndex];

    if (bottomCell && bottomCell !== -1) {
      bottomRow[cellIndex] = -1;

      total = searchingLandDFS(matrix, rowIndex + 1, cellIndex, total + 1);
    }
  }

  // To left
  const prevCell = matrix[rowIndex][cellIndex - 1];
  if (prevCell && prevCell !== -1) {
    matrix[rowIndex][cellIndex - 1] = -1;

    total = searchingLandDFS(matrix, rowIndex, cellIndex - 1, total + 1);
  }

  return total;
};

const findBiggestIslandDfs = (originalMatrix: number[][]): number => {
  const sizes: number[] = [];
  const matrix = originalMatrix.map((row) => [...row]);

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j += 1) {
      const cell = row[j];

      if (cell === 1) {
        sizes.push(searchingLandDFS(matrix, i, j, 0));
      }
    }
  }

  return Boolean(sizes.length) ? Math.max(...sizes) : 0;
};

const mtrx3 = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

const mtrx4 = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

const mtrx5 = [
  [0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

console.log('Output:', findBiggestIslandDfs(mtrx3)); // 5
console.log('Output:', findBiggestIslandDfs(mtrx4)); // 6
console.log('Output:', findBiggestIslandDfs(mtrx5)); // 7

/**
 * TERMINAL ->
 * clear && npx ts-node src/find-biggest-island-bfs.ts
 */
