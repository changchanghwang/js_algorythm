/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) {
      return 0;
  }

  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[k - 1]) {
          nums[k] = nums[i]; // Overwrite the next unique element
          k++;
      }
  }

  return k;
};
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums),nums)