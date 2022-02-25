/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false


// P R E P //
P: two strings, s and t. compare the strings to make sure they have the same original letters
    would spaces matter, or can they be ignored?
    will punctuation matter? capitalization matter?
    will there be anything other than letters, like emojis or special characters?
    if both strings are empty, will it be a truthy answer?
R: return a boolean
E: see console logs below
P:
write a function that takes in two strings
if lengths don't match, return false
create a map, it could be an object literal
iterate through the first string to populate the map with letter count
  for...of works well
iterate through the second string to subtract the letter count in the map
  for...of works well again
  if(value exists && is greater than 0) delete 1
  else return false
return true

*/

const isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  
  const letterMap = {}
  for(let letter of s){
    letterMap[letter] = letterMap[letter] + 1 || 1
  }
  
  for(let letter of t){
    if(letterMap[letter] > 0) letterMap[letter] -= 1
    else return false
  }
  return true
};

/*
Emme:
Runtime: 76 ms, faster than 96.76% of JavaScript online submissions for Valid Anagram.
Memory Usage: 44.3 MB, less than 40.60% of JavaScript online submissions for Valid Anagram.

Yash:
Runtime: 79 ms, faster than 94.23% of JavaScript online submissions for Valid Anagram.
Memory Usage: 44.5 MB, less than 33.74% of JavaScript online submissions for Valid Anagram.
*/

console.log(isAnagram("anagram", "nagaram"), true)
console.log(isAnagram("rat", "car"), false)
console.log(isAnagram("😀😁😋a", "a😀😁😋"), true)
