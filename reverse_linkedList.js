/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []

*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/*
// P R E P //
write the function that takes in a head
create a pointer for the head list
initiate a reversed linked list as null
using a while loop traversed through input linked list until it reaches null
  start building reverse linked list with value of the current node
  revLL = new ListNode(current.val, revLL)
  move current to current.next

return revLL

*/

const reverseList = function(head) {
  if(!head) return head
    let revLL = null
    let currPointer = head

    while(currPointer !== null){
      revLL = new ListNode(currPointer.val, revLL)
      currPointer = currPointer.next
    }

  return revLL
};

let input2 = new ListNode(1)
input2.next = new ListNode(2)
console.log(input2)
console.log(reverseList(input2))

/*
Emme:
Runtime: 88 ms, faster than 60.48% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44.9 MB, less than 6.32% of JavaScript online submissions for Reverse Linked List.

Yash:
Runtime: 64 ms, faster than 95.93% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44.4 MB, less than 19.63% of JavaScript online submissions for Reverse Linked List.
*/

/*
var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}
*/
