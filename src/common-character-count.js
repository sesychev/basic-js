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
  let arr1 = s1
    .split("")
    .sort()
    .filter((item) => {
      return s2.split("").includes(item);
    });
  let arr2 = s2
    .split("")
    .sort()
    .filter((item) => {
      return s1.split("").includes(item);
    });

  let a1 = myCount(arr1);
  let a2 = myCount(arr2);

  function myCount(arr) {
    let count = 0;
    let res = [];

    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) count++;
      else {
        res.push(count + 1);
        count = 0;
      }
    }

    return res;
  }

  function myCompare(ar1, ar2) {
    let k = 0;
    for (let j = 0; j < ar1.length; j++) {
      if (ar1[j] < ar2[j]) k += ar1[j];
      else k += ar2[j];
    }

    return k;
  }

  return myCompare(a1, a2);
}

module.exports = {
  getCommonCharacterCount,
};
