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
  let dns = {};
  for(let domain of  domains) {
    domain = domain.split(".");
    let oldDom = "";
    for(let i = domain.length - 1; i >= 0; i--) {
      oldDom += "." + domain[i];
      if(!dns[oldDom])  {
        dns[oldDom] = 0;
      }
      dns[oldDom]++;
    }
  }
  return dns;
}

module.exports = {
  getDNSStats
};
