/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

*/

const twoSum = function(numbers, target) {
//     //const obj = {}
//   //   const obj = new Map()
  
//   //   for(let i = 0; i < numbers.length; i++){
//   //     let num = numbers[i]
//   //     let newNum = target - num //-1+1 = 0
//   //                               //-1-0 = -1
//   //     if(obj.has(newNum)) return [obj.get(newNum), i + 1]
//   //     else obj.set(num, i + 1)
//   //     console.log(obj)
//   //   }
//   // return null

  let left = 0
  let right = numbers.length - 1

  while(left < right){
    let sum = numbers[left] + numbers[right]
    if(sum === target) return [left + 1, right + 1]
    else if(sum < target) left++
    else right--
  }
};

/*

Emme:
Map:
Runtime: 79 ms, faster than 73.29% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 42.9 MB, less than 28.21% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.

BS:
Runtime: 92 ms, faster than 58.82% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 42.8 MB, less than 31.79% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.

Yash:
Runtime: 57 ms, faster than 98.52% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 42.3 MB, less than 46.43% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.



*/

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))
