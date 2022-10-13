// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//Mine:
const isAnagram = function(test, original) {
    let testArr = test.toLowerCase().split('')
    let originalArr = original.toLowerCase().split('')
    return testArr.sort().join('') === originalArr.sort().join('')
}

//Top Solution:
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };


// Test:
console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("tofeee", "toffee"))
