const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) {
    return arr;
  }

  let temp = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    if (temp[i] === "--discard-prev") {
      temp[i] = undefined;
      temp[i - 1] = undefined;
    }

    if (temp[i] === "--discard-next") {
      temp[i] = undefined;
      temp[i + 1] = undefined;
    }

    if (temp[i] === "--double-next") {
      temp[i] = temp[i + 1];
    }

    if (temp[i] === "--double-prev") {
      temp[i] = temp[i - 1];
    }
  }

  return temp.filter((item) => item);
}

module.exports = {
  transform,
};
