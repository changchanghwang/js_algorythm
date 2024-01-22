function solution(X, Y) {

  const map = new Map();
  for(const x of X){
    map.set(x,map.has(x) ? map.get(x)+1 : 1)
  }
  let result = ''
  for(const y of Y){
    if(map.has(y) && map.get(y) > 0){
      result += y 
      map.set(y, map.get(y)-1)
    }
  }

  while(result.length > 1 && result[0] === '0'){
    result = result.replace('0','')
  }

  return result ? result.split('').sort((a,b)=>b-a).join('') : '-1'
}

const X = "100"
const Y = "203045"

console.log(solution(X,Y))