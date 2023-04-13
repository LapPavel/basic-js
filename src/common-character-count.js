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
  let num = 0;
  for (let el of s1) {
    if (s2.includes(el)) {
      num++;
      s2 = s2.replace(el, '');
    };
  };
  return num;
};

module.exports = {
  getCommonCharacterCount
};
