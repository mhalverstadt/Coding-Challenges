// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

//Mine: DIDN'T SOLVE DUE TO SOME EDGE CASE
function isDigit(s) {
  if(isNaN(s) === false && typeof Number(s) === 'number'){
    return true
  }else {
    return false
  }
}

//Top Solution:
function isDigit(s) {
 return s==parseFloat(s);
}

//Test:
isDigit('f3453')
// isDigit('3')
isDigit('-334.333333333333')