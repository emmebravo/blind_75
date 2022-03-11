/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


const reverseList = function(head){
  if(!head) return head

  let currPointer = head
  let reversedList = null

  while(currPointer !== null){
    reversedList = new ListNode(currPointer.val, reversedList)
    currPointer = currPointer.next
  }
  return reversedList
}
