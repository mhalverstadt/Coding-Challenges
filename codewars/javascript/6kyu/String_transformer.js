// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

/////////////////
//input: string, with english alphabet letters and spaces
//output: string, reversed words, opposite casing. 

//Mine:
function stringTransformer(str) {
  reversedArr = str.split(' ').reverse().join(' ').split('')
  return reversedArr.map(letter => {
    return letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase()
  }).join('')
}

//Top Solution:
function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(v => v == v.toUpperCase() ?
      v.toLowerCase() :
      v.toUpperCase())
    .join('');
}


//Test:
console.log(stringTransformer('Example Input'), 'iNPUT eXAMPLE')
console.log(stringTransformer('  Another  Test   '), '   tEST  aNOTHER  ')
console.log(stringTransformer('wORLD hELLO'), 'Hello World')
