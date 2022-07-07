// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// //Mine:
String.prototype.digit = function() {
    return /^\d$/.test(this);
  };

// Top Solution:


// //Test:
console.log ()