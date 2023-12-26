//NOTE: 내 풀이

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const map = new Map()
    for( let n of nums ){
        if( map.has(n) ){
            map.set(n,map.get(n)+1)
        } else {
            map.set(n,1)
        }
    }
    
    let a;
    map.forEach( (v,k) => {
        if( v > nums.length/2 ) a=k
    })
    return a
};


console.log(majorityElement([2,2,1,1,1,2,2]))

//NOTE: 다른 사람의 풀이 / Boyer-Moore Voting Algorithm

function majorityElement(nums) {
  let candidate;
  let count = 0;
  
  for (const num of nums) {
      if (count === 0) {
          candidate = num;
      }
      
      count += (num === candidate) ? 1 : -1
  }
  
  return candidate;
};