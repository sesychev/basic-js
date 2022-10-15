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
  let repeatTimes;
  let additionRepeatTimes;
  let separator; //by default
  let additionSeparator; //by default
  let addition = "";
  let main = str;
  let secondary = "";
  let result = "";

  if (options.hasOwnProperty("repeatTimes")) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }

  if (options.hasOwnProperty("additionRepeatTimes")) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  if (options.hasOwnProperty("separator")) {
    separator = options.separator;
  } else {
    separator = "+";
  }

  if (options.hasOwnProperty("addition")) {
    addition = options.addition;
    if (options.hasOwnProperty("additionSeparator")) {
      additionSeparator = options.additionSeparator;
    } else {
      additionSeparator = "|";
    }
  }

  let second = true;
  for (let index = 0; index < additionRepeatTimes; index++) {
    let sep = second ? "" : additionSeparator;
    secondary += sep + addition;
    second = false;
  }

  let first = true;
  for (let index = 0; index < repeatTimes; index++) {
    let sep = first ? "" : separator;
    result += sep + main + secondary;
    first = false;
  }

  return result;
}

module.exports = {
  repeater,
};
