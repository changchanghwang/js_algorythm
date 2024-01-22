/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    for(const char of s){
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      }else{
        if((char === ')' && stack[stack.length -1] !== '(') || (char === ']' && stack[stack.length -1] !== '[') || (char === '}' && stack[stack.length -1] !== '{')){
          return false
        }
        stack.pop();
      }
    }
    return !stack.length
};

const s = "()"

console.log(isValid(s))