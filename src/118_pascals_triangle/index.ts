// TC:  O(n²)
// SC: O(n²) since for a given input N we have (N * rows) * (N elements - constant)

function generate(numRows: number): number[][] {
  const matrix: number[][] = [];
  let rowIndex = 0;
  let count = 0

  while (rowIndex < numRows) {
    let colIndex = 0;
    const row = [];
    while (colIndex <= rowIndex) {
      if (colIndex === 0 || colIndex === rowIndex) {
        row.push(1);
      } else {
        row.push(
          matrix[rowIndex - 1][colIndex - 1] + matrix[rowIndex - 1][colIndex] ||
            0
        );
      }
      colIndex++;
      count++
    }
    rowIndex++;
    matrix.push(row);
  }

  console.log(count);

  return matrix;
}

/* Faster solution from the internet */
/* 
var generate = function(numRows) {
    let pascalsTriangle = new Array(numRows);

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1)
        row[0] = 1
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            const rowAbove = pascalsTriangle[i - 1]
            row[j] = rowAbove[j] + rowAbove[j - 1];
        }
        pascalsTriangle[i] = row;
    }
    return pascalsTriangle;
};
*/


export { generate };
