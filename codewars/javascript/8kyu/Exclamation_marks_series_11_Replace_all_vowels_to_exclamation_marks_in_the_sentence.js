// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//Mine:
function replace(s){
  return s.replace(/[aeiouAEIOU]/g, '!')
}

//Top Solution:
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

//OR
function replace(s){
  var newS = ''
  var vowels = "aAeEiIoOuU"
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      newS += s[i]
    }  else {
      newS += '!'
    }
  }
  return newS
}

//OR
const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');


//Test:
replace("ABCDE")
