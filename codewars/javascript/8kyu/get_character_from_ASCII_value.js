// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'

//Mine:
function getChar(c) {
  return String.fromCharCode(c)
}


//Top Solution:
const getChar = String.fromCharCode;


//Test: 
