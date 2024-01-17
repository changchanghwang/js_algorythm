/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const map = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    }

    let number = map[s[0]];
    for (let i=1; i<s.length; i++){
      let num = map[s[i]]
      if(s[i] === 'V' && s[i-1] === 'I'){
        num = 3
      }
      if(s[i] === 'X' && s[i-1] === 'I'){
        num = 8
      }
      if(s[i] === 'L' && s[i-1] === 'X'){
        num = 30
      }
      if(s[i] === 'C' && s[i-1] === 'X'){
        num = 80
      }
      if(s[i] === 'D' && s[i-1] === 'C'){
        num = 300
      }
      if(s[i] === 'M' && s[i-1] === 'C'){
        num = 800
      }
      number += num
    }
    return number
};

const s = "MCMXCIV"
console.log(romanToInt(s))

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt2 (s) {
  const map = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  }

  let number = 0;
  
  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]];
    const next = map[s[i + 1]];

    if (cur < next) {
        number += next - cur;
        i++;
    } else {
        number += cur;
    }
}

  return number
};

const ss = "MCMXCIV"
console.log(romanToInt2(ss))

