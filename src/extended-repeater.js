const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = "";
  let separator = "+";
  let addition = "";
  let additionSeparator = "|";
  let additionRepeatTimes = 1;

  if (!options.hasOwnProperty("repeatTimes")) {
    return str + options.addition;
  }

  if ("separator" in options) {
    separator = options.separator;
  }

  if ("additionSeparator" in options) {
    additionSeparator = options.additionSeparator;
  }

  if ("additionRepeatTimes" in options) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if ("addition" in options) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addition += options.addition;

      if (i !== additionRepeatTimes - 1) {
        addition += additionSeparator;
      }
    }
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    res += str + addition;
    if (i !== options.repeatTimes - 1) {
      res += separator;
    }
  }

  return res;
}

module.exports = {
  repeater,
};
