/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map()

    nums.forEach((num,i)=>{
      map.set(target-num, i)
    })

    for(let i=0; i<nums.length; i++){
      if(map.has(nums[i]) && map.get(nums[i]) !== i){
        return [i,map.get(nums[i])]
      }
    }
};


const nums = [2,7,11,15]
const target = 9;

console.log(twoSum(nums, target))