/**
 *
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let common_prefix = "";

  // prefix -> only consonants ---- get the first prefix of the word
  // compare with the 2nd value
  // if G, then continue comparing

  const prefix_set = new Set();

  for (let x = 0; x < strs.length; x++) {
    for (char of strs[x]) {
      if (
        char !== "a" &&
        char !== "e" &&
        char !== "i" &&
        char !== "o" &&
        char !== "u"
      )
        prefix_set.add(char);
      else {
        break;
      }
    }
    console.log(prefix_set);
  }
};

strs = ["dog", "racecar", "car"];

longestCommonPrefix(strs);
