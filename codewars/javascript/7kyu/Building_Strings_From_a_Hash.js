// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"


//Mine:
function solution(pairs){
  let result = ''
  for(key in pairs){
    result += `${key} = ${pairs[key]},`
  }
  return result.slice(0, -1)
}

//Top Solution:
// function solution(pairs){
//   return Object.keys(pairs)
//     .map(function(k) { return k + ' = ' + pairs[k] })
//     .join(',');
// }


let hash =  {'c': 1, 'z': 10, 'x': 4, 2: 4, 'b': -1, 'a': -6, 'y': -8, 0: 2}
console.log(solution(hash))