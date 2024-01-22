/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    const sorted = strs.sort();
    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    let value = '';
    const sliced = first.slice(0,last.length);
    for(let i =0; i<sliced.length; i++){
      if(sliced[i] === last[i]){
        value += sliced[i]
      }
      if(sliced[i] !== last[i]){
        return value
      }
    }
    return value

};

const strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))