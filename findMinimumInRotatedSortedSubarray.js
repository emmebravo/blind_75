/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[7,0,1,2,4,5,6] if it was rotated 1 time.
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/

//[3,4,5,1,2]

// function findMin(nums){
//   let left = 0, right = nums.length-1, mid
//   let min = nums[0]
  
//   while(left <= right){
//     mid = left + Math.floor((right-left)/2)
//     min = Math.min(nums[mid], min)
//     if(nums[mid] >= nums[left]){
//       if(nums[left] < nums[right]){
//         min = Math.min(nums[left], min)
//       }
//       left = mid + 1
//     }else{
//       if(nums[left] < nums[right]){
//         min = Math.min(nums[left], min)
//       }
//       right = mid - 1
//     }   
//   }
//   return min
// }

const findMin = function(nums){
  let left = 0, right = nums.length - 1, min = nums[0], mid

  while(left <= right){
    if(nums[left] < nums[right]){
      min = Math.min(nums[left], min)
      break
    }
    
    mid = Math.floor(left + (right - left)/2)
    min = Math.min(min, nums[mid])
    if(nums[mid] >= nums[left]) left = mid + 1
    else right = mid - 1
  }
  return min
}

console.log(findMin([11,13,15,17]), 11)
console.log(findMin([3,4,5,1,2]), 1)
console.log(findMin([4,5,6,0,1,2]),0)

/*
Emme:

Yash:
Runtime: 56 ms, faster than 98.37% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
Memory Usage: 42 MB, less than 56.35% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
*/
