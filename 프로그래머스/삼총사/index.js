function solution(number) {
  let count =0;
  for(let i=0; i<number.length; i++){
    const first = number[i]
    for(let j=i+1; j<number.length; j++){
      const second = number[j]
      for(let k=j+1; k<number.length; k++){
        const third = number[k];
        if(i !== j && j !== k && i !== k){
          if(first+second+third === 0){
            count +=1
          }
        }
      }
    }
  }
  return count
}

const number = [-2, 3, 0, 2, -5]
console.log(solution(number))