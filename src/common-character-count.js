const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a = s1
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .filter((item) => s2.includes(item));

  let b = s2
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .filter((item) => s1.includes(item));

  return a.length !== b.length
    ? Math.min(a.length, b.length)
    : a
        .map((item, i) => {
          let count = 0;
          if (item === b[i]) count++;

          return count;
        })
        .reduce((a, c) => a + c, 0);
}

module.exports = {
  getCommonCharacterCount,
};
