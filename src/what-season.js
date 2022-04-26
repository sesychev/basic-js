const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  console.log(date);

  if(typeof date == "undefined")
    return 'Unable to determine the time of year!';

  if(typeof date !== 'object')
    throw new Error ('Invalid date!');


  let month = date.getMonth();
  
  switch(month) {
    case 11:
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'autumn';
    default:
      return "Invalid date!";
  }
}

try { // statements to try
  getSeason(date); // function could throw exception
}
catch (e) {
  e.message; // pass exception object to error handler -> your own
}

module.exports = {
  getSeason
};

/*console.log(getSeason());
*/
/*
console.log(getSeason('foo'));
*/