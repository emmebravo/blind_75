/*
Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step-by-step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step-by-step sum is never less than 1.

Example 1:
Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
step by step sum
startValue = 4 | startValue = 5 | nums
  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2

Example 2:
Input: nums = [1,2]
Output: 1
Explanation: Minimum start value should be positive. 

Example 3:
Input: nums = [1,-2,-3]
Output: 5


[-3,2,-3,4,2]
start Value = x
-3 => x-3
2 => x-1
-3 => x-4 => 5
4 => x-0
2 => x+2

totalValue = 0 => -3 => -1 => -4 => 0 => 2
minValue = Infinity => -3 => -3 => -4 => -4 => -4

return Math.abs(minValue) + 1
*/


const minStartValue = function(nums) {
  let sum = 0, minValue = 0
  for(let num of nums){
    sum += num
    minValue = Math.min(minValue, sum) 
  }
  return Math.abs(minValue) + 1
};

console.log(minStartValue([-3,2,-3,4,2]), 5)
console.log(minStartValue([2,3,5,-5,-1]), 1)

/*

Emme:
Runtime: 64 ms, faster than 92.86% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
Memory Usage: 42.6 MB, less than 11.04% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.

Yash:
Runtime: 61 ms, faster than 94.16% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
Memory Usage: 41.7 MB, less than 54.55% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.

*/
