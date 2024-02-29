/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    let map = new Map();
    let pairs = [];

  for(let num of A) {
    let target = N - num;
    if(map.has(target)) {
      pairs.push([target, num]);
    } else {
      map.set(num, true);
    }
  }

  return pairs;
}

module.exports = sumPairs;
