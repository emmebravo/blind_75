/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([{}])"
Output: true

Example 5:
Input: s = "{{}[][[[]]]}"
Output: true

Example 6:
Input: s = "((((}}}}"
Output: false

// P R E P //
P: Input will be a string containing only parenthesis
R: Boolean
E: see above
P:
  Write a function that takes in a string
obj = {")":"(", "]":"[", "}":"{"}
  Create an object - stack LIFO data structure
    - add only open parenthesis to the queue
    - remove the open parenthesis from the queue if a matching closing parenthesis is detected
  Loop through the string
    for .... of
      if(str in obj){
        if(stack[lastelement] === obj[str]) //obj["}"] === "{"
          LIFO.pop()
        else
          false
      }else{
        LIFO.push(str)
      }

return true

*/

const isValid = function(s) {
  const checkerObj = {")":"(", "]":"[", "}":"{"}
  const stack = []
  let run = 1
  for(let paranthesis of s){
    if(paranthesis in checkerObj){
      if(stack[stack.length - 1] === checkerObj[paranthesis]) stack.pop()
      else return false
    } else {
      stack.push(paranthesis)
    }
  }
  return !stack.length 
};

/*

Emme:
Runtime: 71 ms, faster than 84.10% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42.7 MB, less than 15.94% of JavaScript online submissions for Valid Parentheses.

Yash:
Runtime: 69 ms, faster than 85.12% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42.6 MB, less than 15.94% of JavaScript online submissions for Valid Parentheses.

*/

console.log(isValid("{{}[][[[]]]}"), true)
console.log(isValid("((((}}}}"), false)
