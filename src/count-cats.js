const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  matrix.forEach(item => {
    item.forEach(i => {
      if (i === "^^" ) 
        count++;
    })
  });
   
  return count;
}

module.exports = {
  countCats
};

/** 
return matrix.forEach(item => item.reduce((a,b) => {
let c = (b === "^^" ) ? 1 : 0; 
console.log(c);
return a + c;}, 0));
*/
