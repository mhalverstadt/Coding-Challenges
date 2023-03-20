// Linked Lists - Length & Count

// Implement Length() to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
// I've decided to bundle these two functions within the same Kata since they are both very similar.

// The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.


function Node(data) {
	this.data = data;
	this.next = null;
  }
  
  function length(head) {
	let count = 0;
	let curr = head;
	while (curr) {
	  count++;
	  curr = curr.next;
	}
	return count;
  }
  
  function count(head, data) {
	let count = 0;
	let curr = head;
	while (curr) {
	  if (curr.data === data) {
		count++;
	  }
	  curr = curr.next;
	}
	return count;
  }

//top:
function Node(data) {
	this.data = data
	this.next = null
  }
  
  function length(head) {
	return head ? 1 + length(head.next) : 0
  }
  
  function count(head, data) {
	if (!head) return 0
	return (head.data === data ? 1 : 0) + count(head.next, data)
  }