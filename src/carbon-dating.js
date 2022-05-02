const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
    if (!sampleActivity || typeof sampleActivity !== "string"){
      return false;
    }
    if(isNaN(Number(sampleActivity))) return false;
    if((Number(sampleActivity) + "").length !== (sampleActivity + "").length || (Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) <= 0)) {
      return false;
    }
    let sampleActivityNumber = Number(sampleActivity);
    let age = Math.log(MODERN_ACTIVITY/sampleActivityNumber)/(Math.log(2)/HALF_LIFE_PERIOD);
    return Math.ceil(age);
}

module.exports = {
  dateSample
};
