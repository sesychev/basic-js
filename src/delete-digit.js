const { NotImplementedError } = require('../extensions/index.js');

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
  let str = n.toString();
  let max = null;
  let temp = '';
  let count = 0;

while(count < str.length){
  for(let j = 0; j < str.length; j++){
    if(j !== count)
      temp += str.charAt(j);
    if(+temp > max)
      max = +temp; 
  }
  temp = '';
  count++;
}

  return max;
}

module.exports = {
  deleteDigit
};
