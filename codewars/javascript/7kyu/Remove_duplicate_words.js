// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta


/////
function removeDuplicateWords (s) {
  let result = ' '
  let singleWords = new Set(s.split(' '))
  for(word of singleWords){
    result += ` ${word}`
  }
  return result.trim()
}

//top solution:
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')





//test:
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))