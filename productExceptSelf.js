/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

/*
P: an array of nums, pos & non-pos integers
  any other data structure in the array?
  any other characters, like letters or Unicode?
  will the array ever be empty?
R: return an array that includes the product of elements except self
E: see below
P:
write a function that takes in an array
declare a variable for the product
declare an empty array for the result
iterate through the array



*/


const productExceptSelf = function(nums) {
    if (nums === null || nums.length <= 1) {
        return [];
    }

    let productFromLeft = 1, productFromRight = 1; //neutral number for multiplication/division
    let res = new Array(nums.length); //Array.from(nums.length)
    for (let i = 0; i < nums.length; i++) {
        res[i] = productFromLeft;
        productFromLeft *= nums[i];
      console.log(res, productFromLeft)
    }
    for (let i = nums.length-1; i >= 0; i--) {
        res[i] *= productFromRight;
        productFromRight *= nums[i];
      console.log(res, productFromRight)
    }
    return res;
    // T.C: O(N)
    // S.C: O(1), assuming that we do not count the output array as extra space
}

console.log(productExceptSelf([1,2,3,4]))

// Input array => [1, 2, 3, 4]
// Prefix Array => [1, 1, 2, 6]
// PopstFix Array => [24, 12, 4, 1]
// Final Array => [24, 12, 8, 6]

// Input array => [1, 2, 3, 4]
// Final Array Loop1 => [1, 1, 2, 6]
// Final Array Loop2 => [ +, 1*12, 2*4, 1*6] = [24, 12, 8, 6]
