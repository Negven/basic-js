const { NotImplementedError } = require('../extensions/index.js');

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
  if(s1.length < s2.length) {
    let s3 = s1;
    s1 = s2;
    s1 = s3;
  }
  let counts = 0;
  s1.split("").forEach(letter => {
    if(s2.includes(letter)) {
      let arr = s2.split("")
      arr.splice(s2.indexOf(letter), 1);
      s2 = arr.join("");
      counts++;
    }
  })
  return counts;
}

module.exports = {
  getCommonCharacterCount
};
