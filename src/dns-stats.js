const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let result = {};
for (let el of domains) {
  let arr = el.split('.').reverse();
  let key = '';
  for (let i in arr) {
    key += `.${arr[i]}`
    result[key] = Object.hasOwn(result, key) ? ++result[key] : 1
  }
}
return result;
}

module.exports = {
  getDNSStats
};
