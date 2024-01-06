const pascalsTriangle = (rows: number): number[][] => {
  const triangle = [[1], [1, 1]];

  for (let i = 2; i < rows; i += 1) {
    const row = [1];

    for (let j = 1; j < i; j += 1) {
      row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
    }

    row.push(1);
    triangle.push(row);
  }

  return triangle;
};

console.log(pascalsTriangle(3));
console.log(pascalsTriangle(5));
