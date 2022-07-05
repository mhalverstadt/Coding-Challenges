// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!


// //Mine:
function oddOrEven(array) {
    return array.reduce((a,b) => a+b,0) % 2 === 0 ? 'even' : 'odd'
 }

// //Top Solution:
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }


// //Test:

console.log(oddOrEven([1023, 1, 2]))
console.log(oddOrEven([]))