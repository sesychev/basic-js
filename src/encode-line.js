const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let count = 1;

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    if (str[i] !== str[i + 1] && count == 1) res += str[i];
    else if (str[i] !== str[i + 1] && count > 1) {
      res += count + str[i];
      count = 1;
    }
  }

  return res;
}

module.exports = {
  encodeLine,
};
