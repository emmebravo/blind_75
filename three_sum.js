/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []

// P R E P //
P: an array of nums
  will it ever be empty?
  will there be any non-integer characters, like Unicode?
R: return a 2D array with 3 numbers that add to zero, but whose indices are not the same; the solution must not include duplicate triplets
E: see below
P:
write a function that takes in an array
create a const array to hold the answer
iterate through the array with three for...loops, one per integer
  check if their addition equals zero, if it does, push it to result as an array
    if more than one answer, 2D array shouldn't contain duplicate triplets--for example, numbers rearranged
return result array

 */

const threeSum = function(nums) {
  const result = []

  nums.sort((a, b) => a - b)

  for(let i = 0; i < nums.length-2; i++){
    const a = nums[i]

    let left = i + 1, right = nums.length - 1
    if(a !== nums[i-1]){
      while(left < right){
        const b = nums[left] 
        const c = nums[right]
        let sum = a + b + c
        if(sum === 0){
          result.push([a, b, c]) 
          while (nums[left] === nums[left + 1]) {
            left++;
          }
          while (nums[right] === nums[right - 1]) {
            right--;
          }
        left++;
        right--;
        }
        else if(sum > 0) right -= 1
        else left += 1
      }
    }
  }


  //   if(!nums.length) return []
  
  //   for(let i = 0; i < nums.length; i++){
  //     for(let j = i + 1; j < nums.length; j++){
  //       for(let k = j + 1; k < nums.length; k++){
  //         if(nums[i] + nums[j] + nums[k] === 0) {
  //           const tempArray = [nums[i], nums[j], nums[k]]
  //           const sortedNumStr = tempArray.slice().sort((a,b) => a-b).join('')
  //           if(result.filter(subArr => subArr.sort((a,b) => a-b).join("") === sortedNumStr).length === 0){
  //             result.push(tempArray)
  //           }
  //         }
  //       }
  //     }
  //   }
  
  return result
};
