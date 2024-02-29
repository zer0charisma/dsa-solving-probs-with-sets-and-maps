/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    let lettersMap = new Map();

  words.forEach(word => {
    let letters = [...word].sort().join("");
    if(!lettersMap.has(letters)) {
      lettersMap.set(letters, [word]);
    } else {
      lettersMap.get(letters).push(word);
    }
  });

  return lettersMap;    
}

module.exports = sameLetters;
