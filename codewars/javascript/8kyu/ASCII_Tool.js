// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

//Mine:
function uniTotal (string) {
  return string.length === 0 ? 0 : string.split('').map((x,i)=>string.charCodeAt(i)).reduce((a,b)=>a+b)
}

//Top Solution:
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);



// Test:
console.log(uniTotal("Mary Had A Little Lamb"))
console.log(uniTotal("fa"))