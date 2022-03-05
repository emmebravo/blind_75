/*

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
//l -> 0; r->6; m->3
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-10^4 <= target <= 10^4


*/
// nums = [4,5,6,7,0,1,2], target = 0

const search = function(nums, target) {
  let left = 0, right = nums.length - 1

  while(left <= right){
    let midpoint = Math.floor(left + (right - left)/2)

    if(nums[midpoint] === target) return midpoint
    //checks if num in left side of array
    if(nums[left] <= nums[midpoint]){
      if(nums[left] <= target && target < nums[midpoint]) right = midpoint - 1
      else left = midpoint + 1
    } else {
      if(nums[midpoint] < target && target <= nums[right]) left = midpoint + 1
      else right = midpoint-1
    }
    
  }
  return -1
// return nums.indexOf(target)
};

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([5,6,7,0,1,2,4], 0))
console.log(search([5,6,7,0,1,2,4], 3))

/*

Emme:
Runtime: 65 ms, faster than 87.37% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 42.1 MB, less than 46.28% of JavaScript online submissions for Search in Rotated Sorted Array.

Runtime: 60 ms
Memory Usage: 39.9 MB

Yash:
Runtime: 60 ms, faster than 96.09% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 42 MB, less than 46.28% of JavaScript online submissions for Search in Rotated Sorted Array.

Runtime: 71 ms, faster than 79.62% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 41.4 MB, less than 61.62% of JavaScript online submissions for Search in Rotated Sorted Array.
*/
