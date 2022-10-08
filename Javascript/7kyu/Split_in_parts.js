// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

//Mine:
var splitInParts = function(s, partLength){
  let arr = s.split('')
  for(let i = 0; i < arr.length; i += partLength){
    arr.splice(i, 0, ' ')
  }
  return arr.join('')
}


//Top Solution:
var splitInParts = function(s, partLength){
  var parts = [];
  var array = s.split('');
  while(array.length) {
    parts.push(array.splice(0,partLength).join(''));
  }
  return parts.join(' ');
}


//Test:
console.log(splitInParts("supercalifragilisticexpialidocious", 3))