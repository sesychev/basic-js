const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let temp = [];
  let j = 0;

  for (const element of arr) {
    if (element !== -1) {
      temp.push(element);
    }
  }

  temp.sort((a, b) => a - b);

  for (let item of temp) {
    for (let i = j; i < arr.length; i++) {
      if (arr[i] !== -1) {
        arr[i] = item;
        j = i + 1;
        break;
      }
    }
  }

  return arr;
}

module.exports = {
  sortByHeight,
};
