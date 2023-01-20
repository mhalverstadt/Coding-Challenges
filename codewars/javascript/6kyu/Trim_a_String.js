// Define a function trim (JavaScript: method String.prototype.trim) which removes all forms of leading and trailing whitespace from a given string. Please refer to the Sample Tests for more examples.

// Note: The built-in trim, trimLeft && trimRight methods has been disabled.


//input: 'string', always a string, will it be empty? if it is empty return ''
//return string with no trailing or leading spaces or spaces inbetween. 

///////////////////////////////////////////////////
//mine with help from bot:

String.prototype.trim = function() {
  let start = 0;
  let end = this.length - 1;
  while (start < this.length && (this[start] === ' ' || this[start] === '\n' || this[start] === '\t' ||this[start] === '\r')) {
      start++;
  }
  while (end >= 0 && (this[end] === ' ' || this[end] === '\n' || this[end] === '\t' || this[end] === '\r')) {
      end--;
  }
  if(start>end) return '';
  return this.slice(start, end + 1);
}


// console.log(("      foo    ".trim1()))
console.log(("   foo     bar   ".trim1()))
console.log(("    ".trim1()))