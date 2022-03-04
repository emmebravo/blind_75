/*

// M A X I M U M P R O D U C T S U B A R R A Y //
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
 
Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// P R E P //
P: Array of integers, any other data structure, if the array is empth?
R: largest product of a contiguous sub-array, in case of other data stctures new error, [] => 0
E: see above
P:
write a function that takes in an array of integers
const maxProductSubArr = -Infinity
const maxProduct = 1
Loop through the array
  maxProductSubArr = Math.max(num, num*maxProductSubArr)
  maxProduct = (maxProd, maxProdSub)

return maxProd
*/

const maxProduct = function(nums) {
  let max = nums[0],
    maxProduct = max,
    minProduct = max

  for(let i = 1; i<nums.length; i++){
    if(nums[i] < 0){
      [maxProduct, minProduct] = [minProduct, maxProduct]
    }
    maxProduct = Math.max(nums[i], nums[i]*maxProduct)
    minProduct = Math.min(nums[i], nums[i]*minProduct)

    max = Math.max(max, maxProduct)
  }
  return max
};

console.log(maxProduct([2,3,-2,4]), 6)
console.log(maxProduct([-2,0,-1]), 0)
console.log(maxProduct([-2,3,-4]), 24)

/*

Emme:
Runtime: 79 ms, faster than 74.89% of JavaScript online submissions for Maximum Product Subarray.
Memory Usage: 44.2 MB, less than 20.02% of JavaScript online submissions for Maximum Product Subarray.

Yash:
Runtime: 72 ms, faster than 86.33% of JavaScript online submissions for Maximum Product Subarray.
Memory Usage: 43.7 MB, less than 23.31% of JavaScript online submissions for Maximum Product Subarray.
*/
