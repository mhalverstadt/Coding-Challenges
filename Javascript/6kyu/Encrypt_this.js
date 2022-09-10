// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo" || word.charCodeAt(0)+word.slice(-1)+word.slice(2,-1)+word.slice(1,2)


//Mine:
var encryptThis = function(text) {
    let arr = text.split(' ')
    console.log(arr)
    return arr.map(word=> word.length < 2 ? word.charCodeAt(0) : word.length < 3 ? word.charCodeAt(0)+word.slice(-1) : word.charCodeAt(0)+word.slice(-1)+word.slice(2,-1)+word.slice(1,2)).join(' ')
}


//Top Solution:
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

//Test:
console.log(encryptThis("Hello"))
console.log(encryptThis("in"))
console.log(encryptThis("A wise old owl lived in an oak"))