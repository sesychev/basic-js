const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  throw new NotImplementedError("Not implemented");
  let res = [];
  let count = 0;
  for (let row = 0; row <= matrix.length - 1; row++) {
    res.push([]);
    for (let column = 0; column <= matrix[row].length - 1; column++) {
      if (matrix[row][column + 1] === true || matrix[row][column] === true) {
        count++;
        res[row][column] = count;
      } else {
        res[row][column] = 0;
      }
      count = 0;
    }
  }

  return res;
}

module.exports = {
  minesweeper,
};
/*
console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]));
*/
/*
console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]));*/
