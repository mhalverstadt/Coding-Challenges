// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:
// Input: s = "Hello"
// Output: "hello"

// Example 2:
// Input: s = "here"
// Output: "here"

// Example 3:
// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:
// 1 <= s.length <= 100
// s consists of printable ASCII characters.

//mine:
function toLowerCase(s){
  let arr = s.split('')
  return arr.map(letter => {
    if(letter.toUpperCase() === letter){
      return letter.toLowerCase()
    }else{
      return letter
    }
  }).join('')
}

//top (i am stupid)
var toLowerCase = function(s) {
  return s.toLowerCase()
};

//test:
console.log(toLowerCase('Hello there Im ')) 
