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
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let num = 1;
    while (str[i + 1] === str[i]) {
      num++;
      i++;
    };
    arr.push(`${num === 1 ? '' : num}${str[i]}`)
  };
  return arr.join('');
};

module.exports = {
  encodeLine
};
