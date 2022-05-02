const { NotImplementedError } = require('../extensions/index.js');

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
function repeater( str, options) {
  if(typeof str !== "string") {
    str = String(str);
  }
  let arr = [false, null, 0]
  if (!options.addition && !arr.includes(options.addition)) {
    options.addition = "";
  }
  if(typeof options.addition !== "string") {
    options.addition = options.addition + "";
  }

  if(!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if(!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if(!options.separator) {
    options.separator = "+";
  }
  if(!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  let result = "";
  for(let indRepeatTimes = 0; indRepeatTimes < options.repeatTimes; indRepeatTimes++){
    result += str;
    for(let indAdditionRepeatTimes = 0; indAdditionRepeatTimes < options.additionRepeatTimes; indAdditionRepeatTimes++){
      result += options.addition;
      if(indAdditionRepeatTimes !== options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }
    if(indRepeatTimes !== options.repeatTimes - 1) {
      result += options.separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
