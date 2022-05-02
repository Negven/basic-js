const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let rightArr = [];
  let commands = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for(let ind = 0; ind < arr.length; ind++){
    let el = arr[ind];
    if(!commands.includes(el)) {
      rightArr.push(el);
    }
    if(el === "--discard-next") {
      ind++;
    }
    if(el === "--discard-prev" && arr[ind - 2] !== "--discard-next") {
      if (rightArr.length !== 0 ) {
        rightArr.pop();
      }
    }
    if(el === "--double-next") {
      if (ind !== arr.length - 1) {
        rightArr.push(arr[ind + 1]);
      }
    }
    if(el === "--double-prev") {
      if(rightArr.length !== 0 && arr[ind - 2] !== "--discard-next") {
        rightArr.push(rightArr[rightArr.length - 1]);
      }
    }
  }
  return rightArr;
}

module.exports = {
  transform
};
