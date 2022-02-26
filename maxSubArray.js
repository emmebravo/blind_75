/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

*/

/*
P: An array of numbers both +ve & -ve,
  Empty array === at least one number will be in the array
  Any other data structure to take care of?
  Anything other than numbers inside the array?
R: Max sum of a continuous sub-array as an integer
E: See above
P:
// Brute Force
Write a function that takes in an array of integers
  let max = -Infinity
  for loop iterates through the whole array
    for loop that adds one more number to each loop until the end of the array
      Update max if less than the sum of subarray

  return max
// Single for loop
  let maxSum = -Infinity
  for loop that loops through the array
    maxSum = Math.max(num[i], maxSum + num[i])
  return maxSum
*/

const maxSubArray = function(nums) {

  let maxSum = nums[0], tempSum = 0

  for(let num of nums){
    tempSum = Math.max(num, num + tempSum)
    maxSum = Math.max(maxSum, tempSum)
  }
  
  return maxSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6)
console.log(maxSubArray([5,4,-1,7,8]), 23)
console.log(maxSubArray([1]), 1)

/*
Emme:
Runtime: 113 ms, faster than 59.92% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 50.8 MB, less than 17.71% of JavaScript online submissions for Maximum Subarray.

Yash:
Runtime: 84 ms, faster than 92.14% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 51.2 MB, less than 10.76% of JavaScript online submissions for Maximum Subarray.
*/
