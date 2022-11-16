// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

// If the average length is not an integer, use Math.round().
// The input array's length > 1

//input is an array with elements that are strings made up of one letter of varying lengths. will there be empty strings?

//output will be an array with the elements that are strings of the same letter with the length the average length of all the strings in the original array. 


//Mine:
function averageLength(arr) { 
  let average = Math.round((arr.reduce((acc,el) => acc += el.length, 0)) / arr.length)
  return arr.map(str => str[0].repeat(average))
}

//Top Solution:
function averageLength(arr){
  let num = Math.round(arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length )

  return arr.map(element => element[0].repeat(num))
}

console.log(averageLength(['aa', 'bb', 'ddd', 'eee']))