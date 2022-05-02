const { NotImplementedError } = require('../extensions/index.js');

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
  let newStr = "";
  if(!str) {
    return "";
  }
  let lastLetter = str[0];
  let countOfLetter = 0;
  str.split("").forEach(letter => {
    if(letter === lastLetter) {
      countOfLetter++;
    }
    else {
      if(countOfLetter !== 1) {
        newStr += countOfLetter;
      }
      newStr += lastLetter;
      countOfLetter = 1;
      lastLetter = letter;
    }
  })
  if(countOfLetter !== 1) {
    newStr += countOfLetter;
  }
  newStr += lastLetter;
  countOfLetter = 1;
  lastLetter = str[str.length - 1];

  return newStr;
}

module.exports = {
  encodeLine
};
