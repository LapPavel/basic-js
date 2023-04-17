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
  if (!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`);
  let res =[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      res.push(arr[i + 1]);
      continue;
    }
    if (arr[i] === '--discard-prev') {
      res.pop();
      continue;
    }
    if (arr[i] === '--discard-next') {
      res.push(undefined);
      i++;
      continue;
    }
    if (arr[i] === '--double-prev') {
      if (res[i - 1] !== undefined) {
        res.push(arr[i - 1]);
      };
      continue;
    }
    res.push(arr[i]);
  }
  return res.filter(el => el !== undefined);
}

module.exports = {
  transform
};
