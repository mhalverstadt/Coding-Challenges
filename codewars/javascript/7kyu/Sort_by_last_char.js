// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
//////////////////////////////////

//input: string of words, always words with english characters, no other types of input. spaces normal. 

//output: an array of the words sorted by the last letter in each word 
// a.charAt(a.length - 1) - b.charAt(b.length-1)


//Mine:
function last (x){
  return arr = x.split(' ').sort((a,b) => a.charAt(a.length - 1) < b.charAt(b.length-1) ? -1 : 1 )
}

//Top Solution:
// function last(x){
//   return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
// }

//Test:
console.log(last('what time are we climbing up the volcano'))
console.log(last('hello world'))