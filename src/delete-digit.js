const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let temp = n.toString();

  for (let i = temp.length - 1; i > 0; i--) {
    if (temp[i] > temp[i - 1]) {
      return +temp.replace(temp[i - 1], "");
    }
  }

  return Math.max(n.toString()[0], n.toString()[1]);
}

module.exports = {
  deleteDigit,
};
