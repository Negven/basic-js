const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr, oldDepth = 0, lvl = 1) {
    oldDepth++;
    arr.forEach( element => {
      if(Array.isArray(element)) {
        if(lvl === 1) {
          let newDepth = this.calculateDepth(element, 1, lvl + 1)
          if (newDepth > oldDepth) {
            oldDepth = newDepth;
          }
        }
        else {
          oldDepth = this.calculateDepth(element, oldDepth, lvl + 1);
        }
      }
    });
    return oldDepth;
  }
}

module.exports = {
  DepthCalculator
};
