const { NotImplementedError } = require("../extensions/index.js");

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
  let obj = {};
  let str = "";

  for (const item of domains) {
    const temp = item.split(".").reverse();
    for (const i of temp) {
      if (!obj.hasOwnProperty(i)) {
        obj[i] = 0;
      }

      obj[i] += 1;
    }
  }

  for (const key in obj) {
    str += "." + key;
    obj[str] = obj[key];
    delete obj[key];
  }

  return obj;
}

module.exports = {
  getDNSStats,
};
