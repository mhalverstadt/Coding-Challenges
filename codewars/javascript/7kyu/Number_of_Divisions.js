// Calculate how many times a number can be divided by a given number.

// Example
// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100 can be divided by 2 six times:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

//Mine:
const divisions = (n, divisor,) => {
  if(n===divisor){
    return 1
  }else{
  for(let i = 0; n > 1; i++){
    n = n/divisor
    if(n <= 1) return i
    }
  }
};

//Top Solution:
const divisions = (n, divisor) => {
  return Math.floor(Math.log(n)/Math.log(divisor))
// };



//Test: 
console.log(divisions(100, 2))
console.log(divisions(2, 2))

  