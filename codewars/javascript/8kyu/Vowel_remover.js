// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//Mine:
function shortcut(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let splitString = string.split('')
  return splitString.filter(letter => !vowels.includes(letter)).join('')
}

//Top Solution:
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

//OR
function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}


//Test: 
shortcut('hello')