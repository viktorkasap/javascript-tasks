const isValidSudoku2 = (matrix: string[][]): boolean => {
  const SIZE = 9;
  const SECTOR_SIZE = 3;

  const rowMap = new Map<number, Set<string>>([
    [0, new Set()],
    [1, new Set()],
    [2, new Set()],
    [3, new Set()],
    [4, new Set()],
    [5, new Set()],
    [6, new Set()],
    [7, new Set()],
    [8, new Set()],
  ]);
  const colMap = new Map<number, Set<string>>([
    [0, new Set()],
    [1, new Set()],
    [2, new Set()],
    [3, new Set()],
    [4, new Set()],
    [5, new Set()],
    [6, new Set()],
    [7, new Set()],
    [8, new Set()],
  ]);
  const sectorMap = new Map<number, Set<string>>([
    [0, new Set()],
    [1, new Set()],
    [2, new Set()],
    [3, new Set()],
    [4, new Set()],
    [5, new Set()],
    [6, new Set()],
    [7, new Set()],
    [8, new Set()],
  ]);

  for (let rowIndex = 0; rowIndex < SIZE; rowIndex += 1) {
    for (let colIndex = 0; colIndex < SIZE; colIndex += 1) {
      const value = matrix[rowIndex][colIndex];

      if (value === '.') {
        continue;
      }

      const sectorIndex = Math.floor(rowIndex / SECTOR_SIZE) * SECTOR_SIZE + Math.floor(colIndex / SECTOR_SIZE);
      const rowSet = rowMap.get(rowIndex);
      const colSet = colMap.get(colIndex);
      const sectorSet = sectorMap.get(sectorIndex);

      if (rowSet?.has(value) || colSet?.has(value) || sectorSet?.has(value)) {
        return false;
      }

      // @ts-expect-error
      rowMap.set(rowIndex, rowSet.add(value));
      // @ts-expect-error
      colMap.set(colIndex, colSet.add(value));
      // @ts-expect-error
      sectorMap.set(sectorIndex, sectorSet.add(value));
    }
  }

  return true;
};

const matrix21 = [
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
const matrix22 = [
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
const matrix23 = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

console.log('is valid sudoku:', { expect: 'true', result: isValidSudoku2(matrix21) });
console.log('is valid sudoku:', { expect: 'false', result: isValidSudoku2(matrix22) });
console.log('is valid sudoku:', { expect: 'false', result: isValidSudoku2(matrix23) });

/**
 * TERMINAL ->
 * clear && npx ts-node src/is-valid-sudoku2.ts
 */

/*
function isValidSudoku(board: string[][]): boolean {
    //check rows
    let rows: string[] = ["","","","","","","","",""]
    let cols: string[] = ["","","","","","","","",""]
    let sq: string[] = ["","","","","","","","",""]

    for(let y = 0; y < board.length; y++) {
        for(let x = 0; x < board.length; x++) {
            const val = board[x][y]

            if(val == ".") {
                continue
            }

            if(rows[x].indexOf(val) != -1) {
                return false
            }

            if(cols[y].indexOf(val) != -1) {
                return false
            }

            const s: number = getSquare(x,y)

            if(sq[s].indexOf(val) != -1) {

                return false
            }
            rows[x] += val
            cols[y] += val
            sq[s] += val

        }
    }
    return true
}

function getSquare(x:number, y: number) {

    if(x < 3 && y < 3) return 0
    if(x < 6 && y < 3) return 1
    if(y < 3) return 2

    if(x < 3 && y < 6) return 3
    if(x < 6 && y < 6) return 4
    if(y < 6) return 5

    if(x < 3) return 6
    if(x < 6) return 7
    return 8

}
 */
