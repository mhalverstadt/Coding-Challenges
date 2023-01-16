// You are given an input string.

// For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

// Examples:
// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
// There might be some non-ascii characters in the string.



//mine:
function numericals(s){
  const charMap = {}
  let result = ''
  for(letter of s){
    charMap[letter] = charMap[letter] + 1 || 1
    result += charMap[letter]
  }
  return result
}

//OR:
function numericals(s){
  const count = {};
  return s.split('').map(char => count[char] = ++count[char] || 1).join('');
}


//test:
console.log(numericals("Hello"))
console.log(numericals("Hello Hello"))