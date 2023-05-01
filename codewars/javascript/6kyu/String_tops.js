// Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
// The string's tops are from displaying the string in the below way:

//                                                       3
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w
//                                         v
// The next top is always 1 character higher than the previous one. For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

// When the msg string is empty, return an empty string.
// The input strings may be very long. Make sure your solution has good performance.
// Check the test cases for more samples.

//2, 7, 16, 29
//1, 5, 9, 13

function tops(msg) {
  let result = []
  let counter = 4
  if (msg.length < 1) return ''
  for(let i = 1; i<msg.length; i++){
    result.push(msg[i])
    i+=counter
    counter+=4
  }
  return result.reverse().join('')
}


//top solution:
function tops(msg) {
  let [res, i, j] = ['', 0, 0];
  
  while (msg[j += i++ * 4 + 1])
    res = msg[j] + res;
  
  return res;
}



//test:
console.log(tops('abcdefghijklmnopqrstuvwxyz12345'))