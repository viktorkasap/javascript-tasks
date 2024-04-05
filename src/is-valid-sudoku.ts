const isValidSudoku = (matrix: string[][], size: number, sectorSize: number): boolean => {
  const isValid = (cellValue: string, row: number, col: number) => {
    if (cellValue === '.') {
      return true;
    }

    for (let i = 0; i < size; i += 1) {
      if (matrix[row][i] === cellValue && i !== col) {
        return false;
      }
    }

    for (let i = 0; i < size; i += 1) {
      if (matrix[i][col] === cellValue && i !== row) {
        return false;
      }
    }

    const startRow = Math.floor(row / sectorSize) * sectorSize;
    const startCol = Math.floor(col / sectorSize) * sectorSize;

    for (let i = startRow; i < startRow + sectorSize; i += 1) {
      for (let j = startCol; j < startCol + sectorSize; j += 1) {
        if (matrix[i][j] === cellValue && (i !== row || j !== col)) {
          return false;
        }
      }
    }

    return true;
  };

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      console.log({ row, col, value: matrix[row][col] });
      if (!isValid(matrix[row][col], row, col)) {
        return false;
      }
    }
  }

  return true;
};

const matrix1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const matrix2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const SIZE = 9;
const SECTOR_SIZE = 3;
console.log('is valid sudoku:', { expect: 'true', result: isValidSudoku(matrix1, SIZE, SECTOR_SIZE) });
console.log('is valid sudoku:', { expect: 'false', result: isValidSudoku(matrix2, SIZE, SECTOR_SIZE) });

/**
 * TERMINAL ->
 * clear && npx ts-node src/is-valid-sudoku.ts
 */
