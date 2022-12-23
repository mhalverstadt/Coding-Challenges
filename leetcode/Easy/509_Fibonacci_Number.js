// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Constraints:

// 0 <= n <= 30

///

//mine:
function fib(n){
  let prev = 1
  let result = 0
  if(n === 1){
    return 1
  }
  for (let i = 0; i < n; i++){
    let resultHolder = result
    result += prev
    prev = resultHolder
  }
  return result
}

//a top solution:
var fib = function(n) {
  if(n == 0){
      return 0;
  }
  if(n == 1) {
      return 1
  }
  let f = [0, 1];

  for(let i=2; i<=n; i++) {
      f.push(f[i-1] + f[i-2]);
  }
  return f[n]; 
};


// console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
