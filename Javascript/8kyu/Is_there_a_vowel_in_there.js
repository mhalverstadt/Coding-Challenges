// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


//Mine:
function isVow(a){
  let vowels = {97:'a', 101:'e', 105:'i', 111:'o', 117:'u'}
  return a.map(x=>x in vowels ? vowels[x] : x)
}

//Top Solution:
function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}


// Test:
console.log(isVow(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])))