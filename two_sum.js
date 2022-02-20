// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/*
P: an array of nums, and an integer target
R: an array of two indices, which represent the numbers that add up to the target
E: (below as console logs)
P:
function that is going to take an array of nums, an integer target
outer for...loop will iterate starting from the 0th index, while inner for...loop iterates starting from i + 1
add arr[outer loop] + arr[inner loop] = target
if they do, return the indeces
else continue with the loop
*/

/*
HOMEWORK:
What is Space Complexity?

Where does Space live?
 */

function twoSumBruteForce(array, target){
  for(let i = 0; i < array.length; i++ ){ //O(n)
    for(let j = i+1; j < array.length; j++){ //O(n^2)
      if(array[i] + array[j] === target){ //O(N^2)
        return [i,j] //O(N^2)
      }
    }
  }
}
//Space Complexity (O(n) + 3*O(n^2)) === O(n*2)
// Time Complexity O(n^2)

/*
Emme:
Runtime: 145 ms, faster than 38.29% of JavaScript online submissions for Two Sum.
Memory Usage: 41.9 MB, less than 42.99% of JavaScript online submissions for Two Sum.

Yash:
Runtime: 170 ms, faster than 28.65% of JavaScript online submissions for Two Sum.
Memory Usage: 42 MB, less than 41.47% of JavaScript online submissions for Two Sum.
 */

// Optimized Solution

/*
Pseudo Code:
function that takes in an array of integers and another integer as target
create a hashMap to store an integer with its index as the value (inverted array)
One for loop that loops through the numbers
Conditional that checks if target - array[index] exists inside the hashmap - returns the index of the current number from the for loop and the index of the previous number from the hashMap
else adds the number to the hashMap
*/

function twoSumOptimized(nums, target){
  const hashMap = {}

  for(let i = 0; i < nums.length; i++){
    let newNum = target - nums[i]
    if(newNum in hashMap){
      return [hashMap[newNum], i]
    }
    hashMap[nums[i]] = i
  }
  return null
}

/*
Emme
Runtime: 68 ms, faster than 96.80% of JavaScript online submissions for Two Sum.
Memory Usage: 42.8 MB, less than 19.95% of JavaScript online submissions for Two Sum.

Yash
Runtime: 64 ms, faster than 98.54% of JavaScript online submissions for Two Sum.
Memory Usage: 42.9 MB, less than 17.80% of JavaScript online submissions for Two Sum.
 */

console.log(twoSumBruteForce([2,7,11,15], 9))
console.log(twoSumBruteForce([3,2,4], 6))
console.log(twoSumBruteForce([3,3], 6))

console.log(twoSumOptimized([2,7,11,15], 9))
console.log(twoSumOptimized([3,2,4], 6))
console.log(twoSumOptimized([3,3], 6))
