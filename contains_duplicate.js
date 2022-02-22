// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/*

P: array of integer nums 
    are they all non-negative integers?
    will it always be an array?
    will it be empty? (no)
    will it contain any non-integer, like a letter, character, or emoji?
R: would return a boolean, true if there's even one repeating integer; false if there are none
E: see below
P:
write a function that takes in an array
iterate through array to create the map, in this instance, we can use an object literal
  as you build the map, you check if the prop's value is > 1
  as soon as the first prop fits this requirement, you can return true
    this allows us to not have to iterate through the whole array and saves time and space
  if finish the loop, and you don't have a repeat, just return false

 */

const containsDuplicate = function(nums) {
  const numberTracker = {}
  for(let i = 0; i < nums.length; i++){
    if(numberTracker[nums[i]]){
      return true
    }else{
      numberTracker[nums[i]] = true
    }
  }
  return false
};

/*

Emme:
Runtime: 139 ms, faster than 52.94% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 51.4 MB, less than 18.13% of JavaScript online submissions for Contains Duplicate.

Yash:
Runtime: 68 ms, faster than 99.87% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 52 MB, less than 8.29% of JavaScript online submissions for Contains Duplicate.
*/

console.log(containsDuplicate([1,2,3,1]), true)
console.log(containsDuplicate([1,2,3,4]), false)
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
