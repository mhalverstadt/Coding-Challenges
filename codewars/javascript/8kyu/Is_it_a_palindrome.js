// Write a function that checks if a given string (case insensitive) is a palindrome.

// Mine: 
function isPalindrome(x) {
  let forward = x.toUpperCase().split('').join('')
  return forward === x.toUpperCase()
}


//Top Solution:
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();


//Test: 
isPalindrome('bob')