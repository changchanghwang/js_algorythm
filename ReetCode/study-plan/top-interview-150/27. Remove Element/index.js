/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let j = 0;
  for( let n of nums ){
    if( n !== val ) {
      nums[j++] = n
    }
  }
  return j
};
const a = [0,1,2,2,3,0,4,2]
console.log(removeElement(a,2),a)