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
function getSeason( date ) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  let err = new Error("Invalid date!")

  if (!(date instanceof Date)){
    throw err;
  }

  let newDate = new Date(date.toDateString());
  if(newDate.toDateString() !== date.toDateString()) throw err;
  let month = date.getMonth();
  if ( month < 2 || month === 11) {
    return "winter";
  }
  if ( month < 5) {
    return "spring";
  }
  if( month < 8) {
    return "summer"
  }
  return "fall";
}

module.exports = {
  getSeason
};
