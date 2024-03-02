const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let j = 0;
  let i = 1;

  for (; i < names.length; i++) {
    j = 0;
    for (; j < i; j++) {
      let count = 1;
      if (names[j] === names[i]) {
        while (names.slice(0, i).includes(names[j] + `(${count.toString()})`))
          count++;
        names[i] = names[i] + `(${count})`;
        break;
      }
    }
  }

  return names;
}

module.exports = {
  renameFiles,
};
