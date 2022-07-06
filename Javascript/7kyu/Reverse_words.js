// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// //Mine:
reverseWords = str => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')


// //Top Solution:
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

// //Test:
console.log (reverseWords('The quick brown fox jumps over the lazy dog.'))
