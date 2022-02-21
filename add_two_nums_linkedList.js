/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*

P: we are receiving two reversed, linked lists of non-negative integers
  they can vary in lengths
R: addition of each node, convert as single digit, as a linked list
E: see below
P:
write a function that takes in two reversed linked lists
declare two pointers, one for list 1 and the other for list 2
  making copies of the lists, and not directly modifying them
iterate through the lists with a while loop
  while there are nodes in either list, continue iterating and adding accordingly
    if the sum of the two digits is greater than 9, carry the one over to the next node
  reassing current value to the next node on both lists
return the sum as a linked list aka in an array 

*/

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

let list1 = new ListNode(9)
list1.next = new ListNode(1)
list1.next.next = new ListNode(5)

let list2 = new ListNode(9)
list2.next = new ListNode(1)
list2.next.next = new ListNode(5)


var addTwoNumbers = function(l1, l2) {
  let currentL1 = l1
  let currentL2 = l2
  let carryOver = 0
  let sumLinkedList = new ListNode(0)
  let currentSum = sumLinkedList

  while(currentL1 !== null || currentL2 !== null){
    let value1 = (currentL1 !== null) ? currentL1.val : 0;
    let value2 = (currentL2 !== null) ? currentL2.val : 0;
    let sum = carryOver + value1 + value2;

    carryOver = parseInt(sum / 10);
    
    currentSum.next = new ListNode(sum % 10)

    if(currentL1 !== null) currentL1 = currentL1.next
    if(currentL2 !== null) currentL2 = currentL2.next
    currentSum = currentSum.next
  }
  if(carryOver > 0) currentSum.next = new ListNode(carryOver)
  
  return sumLinkedList.next
};


/*

Emme:
Runtime: 108 ms, faster than 93.25% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 47.2 MB, less than 35.55% of JavaScript online submissions for Add Two Numbers.

Yash:
Runtime: 92 ms, faster than 99.00% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 47.2 MB, less than 35.55% of JavaScript online submissions for Add Two Numbers.

 */



console.log(addTwoNumbers(list1, list2), [8,3,0,1])
