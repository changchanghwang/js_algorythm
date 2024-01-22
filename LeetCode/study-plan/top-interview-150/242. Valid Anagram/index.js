/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let word = t;
  for (const a of s) {
    word = word.replace(a, '');
  }

  if (!word) return true;
  return false;
};

const s = 'anagram';
const t = 'nagaram';

console.log(isAnagram(s, t));

const isAnagram2 = function (s, t) {
  let ssorted = s.split('').sort().join('');
  let tsorted = t.split('').sort().join('');
  return ssorted === tsorted;
};
