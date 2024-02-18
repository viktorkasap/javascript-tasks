// Breadth First Search (BFS)

const searchingLandBFS = (matrix: number[][], rowIndex: number, cellIndex: number): number => {
  let size = 0;
  const queue: Array<[number, number]> = [[rowIndex, cellIndex]];

  matrix[rowIndex][cellIndex] = -1;

  while (queue.length > 0) {
    const queueItem = queue.shift();

    if (queueItem) {
      const [currentRowIndex, currentCellIndex] = queueItem;

      // top
      const topCell = matrix[currentRowIndex - 1]?.[currentCellIndex];
      if (topCell && topCell !== -1) {
        queue.push([currentRowIndex - 1, currentCellIndex]);
        matrix[currentRowIndex - 1][currentCellIndex] = -1;
      }

      // bottom
      const bottomCell = matrix[currentRowIndex + 1]?.[currentCellIndex];
      if (bottomCell && bottomCell !== -1) {
        queue.push([currentRowIndex + 1, currentCellIndex]);
        matrix[currentRowIndex + 1][currentCellIndex] = -1;
      }

      // left
      const leftCell = matrix[currentRowIndex]?.[currentCellIndex - 1];
      if (leftCell && leftCell !== -1) {
        queue.push([currentRowIndex, currentCellIndex - 1]);
        matrix[currentRowIndex][currentCellIndex - 1] = -1;
      }

      // right
      const rightCell = matrix[currentRowIndex]?.[currentCellIndex + 1];
      if (rightCell && rightCell !== -1) {
        queue.push([currentRowIndex, currentCellIndex + 1]);
        matrix[currentRowIndex][currentCellIndex + 1] = -1;
      }

      size += 1;
    }
  }

  return size;
};

const findBiggestIslandBfs = (originalMatrix: number[][]): number => {
  const sizes: number[] = [];
  const matrix = originalMatrix.map((row) => [...row]);

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === 1) {
        sizes.push(searchingLandBFS(matrix, i, j));
      }
    }
  }

  return Boolean(sizes.length) ? Math.max(...sizes) : 0;
};

const mtrx1: number[][] = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

const mtrx2 = [
  [0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
];

console.log('Output:', findBiggestIslandBfs(mtrx1)); // 5
console.log('Output:', findBiggestIslandBfs(mtrx2)); // 7

/**
 * TERMINAL ->
 * clear && npx ts-node src/find-biggest-island-dfs.ts
 */
