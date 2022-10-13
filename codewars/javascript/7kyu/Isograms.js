
// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//Mine:
function isIsogram(str){
  let arr = str.toLowerCase().split('')
  let newStr = [...new Set(arr)].join('').toLowerCase()
  return arr = str.toLowerCase() === newStr
}

//Top Solution:
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

//Test:
