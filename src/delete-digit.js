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
  let allVariants = [];
  (n + "").split("").forEach( letter => {
    let newN = (n + "").split("");
    newN.splice((n + "").indexOf(letter), 1);
    allVariants.push(parseInt(newN.join("")))
  })
  return Math.max(...allVariants);
}

module.exports = {
  deleteDigit
};
