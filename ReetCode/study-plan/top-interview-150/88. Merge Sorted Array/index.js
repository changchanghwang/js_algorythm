/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    nums1.splice(m,m === 0 ? nums1.length : nums1.length - m)
    nums1.push(...nums2)
    nums1.sort((a,b)=>a-b)
};

const a = [4,0,0,0,0,0]
const m = 1
const b = [1,2,3,5,6]
const n = 5
merge(a,m,b,n)

console.log(a)