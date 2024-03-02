const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i - 1][j] !== 0) {
        count += isNaN(matrix[i][j]) ? 0 : matrix[i][j];
      }
    }
  }

  return matrix[0].reduce((a, c) => a + c, 0) + count;
}

module.exports = {
  getMatrixElementsSum,
};
