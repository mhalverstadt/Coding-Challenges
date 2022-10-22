// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
 
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:
// -231 <= x <= 231 - 1

// //Mine:
function isNumPalindrome(num){
  if (num < 0){
    return false
  }
  let arr = String(num).split('')
  for(let i = 0; i < arr.length/2 ; i++){
    if(arr[i] != arr[arr.length - 1 - i]){
      return false
    }
  }
  return true
}


// Top Solution:
var isPalindrome = function(x) {
  const arr = String(x).split('');
      
  while (arr.length > 1) {
      if (arr.shift() !== arr.pop()) {
          return false;
      }
  }
  
  return true;
};

  
// //Test:
console.log(isNumPalindrome(121), true)
console.log(isNumPalindrome(100), false)
console.log(isNumPalindrome(1001), true)