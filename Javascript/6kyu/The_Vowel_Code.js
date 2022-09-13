// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//Mine:
const key = {
    a:1, 
    e:2,
    i:3,
    o:4,
    u:5
}

function encode(string) {
    return string.split('').map(letter => key[letter] || letter).join('')
}
  
  function decode(string) {
    return string.split('').map(letter => Object.values(key).includes(+letter) ? Object.keys(key).find(x=>key[x] == letter) : letter).join('')
}


//Top Solution:
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

//Test:
console.log(encode('How are you today?'))
console.log(decode('h2ll4'))