/*

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
          
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
           lr
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

//"abcbcbb"
l,r => 0
maxlen
obj = {}
while(r < str.len)
if(!(str[r] in obj))
  add str[r] -> obj
  maxLen = Math.max(r-l+1, maxLen )
  r++
else
  while(str[l] === str[r]) {obj[str[l]] -= 1; left++}
  obj[str[l]] -= 1
  l++

*/

const lengthOfLongestSubstring = function(str) {
    let left = 0, right = 0, maxLength = 0
    const obj = {}

    while(right < str.length && left < str.length)  {
      if(!obj[str[right]]){
        obj[str[right]] = true
        maxLength = Math.max(maxLength, right - left + 1)
        right++
      }else{
        obj[str[left]] = false
        left++
      }
    }
  return maxLength
};

console.log(lengthOfLongestSubstring("abcabcbb"), 3)
console.log(lengthOfLongestSubstring("bbbbb"), 1)
console.log(lengthOfLongestSubstring("pwwkew"), 3)
console.log(lengthOfLongestSubstring("aab"), 2)
